/*
  Warnings:

  - You are about to drop the `StudendClass` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_studentClassId_fkey";

-- DropForeignKey
ALTER TABLE "Test" DROP CONSTRAINT "Test_studentClassId_fkey";

-- DropTable
DROP TABLE "StudendClass";

-- CreateTable
CREATE TABLE "StudentClass" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT ''
);

-- CreateIndex
CREATE UNIQUE INDEX "StudentClass_id_key" ON "StudentClass"("id");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_studentClassId_fkey" FOREIGN KEY ("studentClassId") REFERENCES "StudentClass"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Test" ADD CONSTRAINT "Test_studentClassId_fkey" FOREIGN KEY ("studentClassId") REFERENCES "StudentClass"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
