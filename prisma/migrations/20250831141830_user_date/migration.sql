/*
  Warnings:

  - A unique constraint covering the columns `[userId,date]` on the table `dailystats` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "dailystats_userId_date_key" ON "public"."dailystats"("userId", "date");
