/*
  Warnings:

  - You are about to drop the column `education` on the `Expenses` table. All the data in the column will be lost.
  - You are about to drop the column `emi` on the `Expenses` table. All the data in the column will be lost.
  - You are about to drop the column `food` on the `Expenses` table. All the data in the column will be lost.
  - You are about to drop the column `other` on the `Expenses` table. All the data in the column will be lost.
  - You are about to drop the column `rent` on the `Expenses` table. All the data in the column will be lost.
  - Added the required column `amount` to the `Expenses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `types` to the `Expenses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Expenses" DROP COLUMN "education",
DROP COLUMN "emi",
DROP COLUMN "food",
DROP COLUMN "other",
DROP COLUMN "rent",
ADD COLUMN     "amount" INTEGER NOT NULL,
ADD COLUMN     "types" TEXT NOT NULL;
