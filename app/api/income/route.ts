import { getServerSession } from "next-auth";
import { Session } from "next-auth";

import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

import { handler } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session: Session | null = await getServerSession(handler);

  const body = await req.json();
  const { amount, source } = body;

  if (!session?.user?.email) {
    console.log("error here");
    throw new Error("User not authenticated");
  }

  const Income = await client.$transaction(
    async (tx) => {
      const user = await tx.user.findUnique({
        where: {
          email: session.user!.email!,
        },
        select: { id: true },
      });

      if (!user) throw new Error("user not found");

      const newIncome = await tx.income.create({
        data: {
          source: source,
          amount: amount,
          startTime: new Date(),
          userId: user.id,
        },
      });

      const now = new Date();
      const month = now.getMonth() + 1;
      const year = now.getFullYear();

      const summary = await tx.monthlySummary.upsert({
        where: {
          userId_month_year: {
            userId: user.id,
            month,
            year,
          },
        },
        update: {
          totalIncome: { increment: amount },
        },
        create: {
          userId: user.id,
          month,
          year,
          totalExpenses: 0,
          totalIncome: amount,
        },
      });

      const dailyincome = await tx.dailystats.upsert({
        where: {
          userId_date: {
            userId: user.id,
            date: now
          }
        },
        update: {
         income: {increment: amount}
        },
        create: {
               userId: user.id,
               expense: 0,
               income: amount,
        }
      });

      return { summary, newIncome };
    },
    { timeout: 15000 }
  );

  return NextResponse.json({
    ...Income,
    newIncome: {
      ...Income.newIncome,
      startTime: Income.newIncome.startTime.toISOString(),
    },
  });
}
