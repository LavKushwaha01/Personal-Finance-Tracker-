/*
  Warnings:

  - A unique constraint covering the columns `[userId,month,year]` on the table `EMI` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,month,year]` on the table `Others` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,month,year]` on the table `Rent` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,month,year]` on the table `education` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,month,year]` on the table `food` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "EMI_userId_month_year_key" ON "public"."EMI"("userId", "month", "year");

-- CreateIndex
CREATE UNIQUE INDEX "Others_userId_month_year_key" ON "public"."Others"("userId", "month", "year");

-- CreateIndex
CREATE UNIQUE INDEX "Rent_userId_month_year_key" ON "public"."Rent"("userId", "month", "year");

-- CreateIndex
CREATE UNIQUE INDEX "education_userId_month_year_key" ON "public"."education"("userId", "month", "year");

-- CreateIndex
CREATE UNIQUE INDEX "food_userId_month_year_key" ON "public"."food"("userId", "month", "year");
