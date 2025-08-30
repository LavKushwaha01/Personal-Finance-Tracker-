/*
  Warnings:

  - You are about to drop the column `createdAt` on the `MonthlySummary` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `MonthlySummary` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,month,year]` on the table `MonthlySummary` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `year` to the `MonthlySummary` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."MonthlySummary" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "year" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "MonthlySummary_userId_month_year_key" ON "public"."MonthlySummary"("userId", "month", "year");
