-- CreateTable
CREATE TABLE "public"."dailystats" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "income" INTEGER NOT NULL,
    "expense" INTEGER NOT NULL,
    "date" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "dailystats_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."dailystats" ADD CONSTRAINT "dailystats_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
