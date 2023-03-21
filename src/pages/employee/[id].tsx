import React, { useEffect, useState } from "react";
import type { GetStaticPaths, GetStaticPropsContext } from "next";
import { createInnerTRPCContext } from "~/server/api/trpc";
import { createProxySSGHelpers } from "@trpc/react-query/ssg";
import { appRouter } from "~/server/api/root";
import type { employee } from "@prisma/client";
import QRCode from "react-qr-code";

type EmployeePageProps = {
  employee: employee & {
    createdAt: string;
    updatedAt: string;
  };
};

const EmployeePage = (data: EmployeePageProps) => {
  const { id, name, github, linkedin } = data.employee;

  const [profileLink, setProfileLink] = useState<string | null>(null);

  useEffect(() => {
    setProfileLink(`${window.location.origin}/employee/${id}`);
  }, [id]);

  return (
    <div className="flex flex-col items-center gap-10 p-8">
      <div>
        <div className="mb-4 flex flex-col gap-4">
          <h3 className="mb-4">Hello, my name is {name}</h3>
          <h1>My history</h1>
          <p className="text-lg font-medium">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint
          </p>
        </div>
        <div className="flex gap-4">
          <a
            className="buttonLink rounded-lg text-xl"
            href={github}
            target="_blank"
          >
            Github
          </a>
          <a
            className="buttonLink h-12 rounded-lg text-xl"
            href={linkedin}
            target="_blank"
          >
            Linkedin
          </a>
        </div>
      </div>
      {profileLink && <QRCode value={profileLink} />}
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps = async (
  context: GetStaticPropsContext<{ id: string }>
) => {
  const ssgHelper = createProxySSGHelpers({
    router: appRouter,
    ctx: createInnerTRPCContext({}),
  });
  const employeeId = context.params?.id as string;
  const employee = await ssgHelper.employee.getById.fetch(employeeId);
  if (employee) {
    const { createdAt, updatedAt } = employee;

    return {
      props: {
        employee: {
          ...employee,
          createdAt: createdAt.toISOString(),
          updatedAt: updatedAt.toISOString(),
        },
      },
    };
  }
  return {
    redirect: {
      destination: "/",
    },
  };
};

export default EmployeePage;
