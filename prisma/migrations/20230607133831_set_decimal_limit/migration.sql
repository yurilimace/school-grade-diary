/*
  Warnings:

  - You are about to alter the column `score` on the `StudentScore` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(1,1)`.

*/
-- AlterTable
ALTER TABLE "StudentScore" ALTER COLUMN "score" SET DATA TYPE DECIMAL(1,1);
