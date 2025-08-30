-- CreateTable
CREATE TABLE "public"."Expenses" (
    "total" INTEGER NOT NULL,
    "food" INTEGER NOT NULL,
    "education" INTEGER NOT NULL,
    "emi" INTEGER NOT NULL,
    "rent" INTEGER NOT NULL,
    "startTime" TIME NOT NULL,
    "other" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "public"."Income" (
    "source" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "total" INTEGER NOT NULL,
    "startTime" TIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Expenses_userId_key" ON "public"."Expenses"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Income_userId_key" ON "public"."Income"("userId");

-- AddForeignKey
ALTER TABLE "public"."Expenses" ADD CONSTRAINT "Expenses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Income" ADD CONSTRAINT "Income_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
