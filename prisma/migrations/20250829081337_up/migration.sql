/*
  Warnings:

  - Changed the type of `startTime` on the `Income` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropIndex
DROP INDEX "public"."Expenses_userId_key";

-- AlterTable
ALTER TABLE "public"."Expenses" ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Expenses_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."Income" DROP COLUMN "startTime",
ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL;
