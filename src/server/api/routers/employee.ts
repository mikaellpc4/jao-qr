import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const employeeRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        linkedin: z.string().url().includes("linkedin.com"),
        github: z.string().url().includes("github.com"),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { name, linkedin, github } = input;
      const newEmployee = await ctx.prisma.employee.create({
        data: {
          name,
          linkedin,
          github,
        },
      });
      return newEmployee;
    }),
  getById: publicProcedure.input(z.string()).query(async ({ ctx, input }) => {
    const employee = await ctx.prisma.employee.findFirst({
      where: {
        id: input,
      },
    });
    return employee;
  }),
  // getAll: publicProcedure.query(({ ctx }) => {
  //   return ctx.prisma.example.findMany();
  // }),
});
