/*
  Warnings:

  - You are about to drop the `Employee` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Employee";

-- CreateTable
CREATE TABLE "employee" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,
    "linkedin" STRING NOT NULL,
    "github" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "employee_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "employee_linkedin_key" ON "employee"("linkedin");

-- CreateIndex
CREATE UNIQUE INDEX "employee_github_key" ON "employee"("github");
