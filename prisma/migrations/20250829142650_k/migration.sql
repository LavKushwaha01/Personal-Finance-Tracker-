/*
  Warnings:

  - Changed the type of `startTime` on the `Expenses` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `amount` to the `Income` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."Income_userId_key";

-- AlterTable
ALTER TABLE "public"."Expenses" DROP COLUMN "startTime",
ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "public"."Income" ADD COLUMN     "amount" INTEGER NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Income_pkey" PRIMARY KEY ("id");
