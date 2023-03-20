-- CreateTable
CREATE TABLE "Employee" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,
    "linkedin" STRING NOT NULL,
    "github" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Employee_linkedin_key" ON "Employee"("linkedin");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_github_key" ON "Employee"("github");
