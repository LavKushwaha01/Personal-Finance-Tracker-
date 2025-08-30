/*
  Warnings:

  - You are about to drop the column `total` on the `Expenses` table. All the data in the column will be lost.
  - You are about to drop the column `total` on the `Income` table. All the data in the column will be lost.
  - You are about to drop the column `total` on the `MonthlySummary` table. All the data in the column will be lost.
  - Added the required column `totalExpenses` to the `MonthlySummary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalIncome` to the `MonthlySummary` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Expenses" DROP COLUMN "total";

-- AlterTable
ALTER TABLE "public"."Income" DROP COLUMN "total";

-- AlterTable
ALTER TABLE "public"."MonthlySummary" DROP COLUMN "total",
ADD COLUMN     "totalExpenses" INTEGER NOT NULL,
ADD COLUMN     "totalIncome" INTEGER NOT NULL;
