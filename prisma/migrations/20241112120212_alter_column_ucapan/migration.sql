/*
  Warnings:

  - Added the required column `ucapan` to the `Korban` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Korban" ADD COLUMN     "ucapan" TEXT NOT NULL;
