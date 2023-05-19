/*
  Warnings:

  - You are about to drop the `StudendClasss` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "StudendClasss";

-- CreateTable
CREATE TABLE "StudendClass" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT ''
);

-- CreateIndex
CREATE UNIQUE INDEX "StudendClass_id_key" ON "StudendClass"("id");
