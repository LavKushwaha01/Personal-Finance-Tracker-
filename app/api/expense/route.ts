
import { getServerSession } from "next-auth";
import { Session } from "next-auth";

import {PrismaClient } from '@prisma/client';

const client = new PrismaClient();

import { handler } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";


const startOfMonth = new Date();
startOfMonth.setDate(1);      
startOfMonth.setHours(0, 0, 0, 0);

const endOfMonth = new Date(startOfMonth);
endOfMonth.setMonth(endOfMonth.getMonth() + 1); 
endOfMonth.setDate(0);    
endOfMonth.setHours(23, 59, 59, 999);


 export async function POST(req: Request) {  

     const session: Session | null = await getServerSession(handler);

      const body = await req.json();
      const { amount, type } = body;

        if (!session?.user?.email) {
         console.log("error here")
  throw new Error("User not authenticated");

}

 const expense = await client.$transaction(async (tx) => {

    const user = await tx.user.findUnique({
      where:{
         email: session.user!.email!
      },
      select: { id: true}
    });

    if(!user) throw new Error("user not found") 

      const Expanse = await tx.expenses.create({
    data: {
      types: type,
      amount: amount,
      startTime: new Date(),
      userId: user.id
    }
  })


   const now = new Date();
    const month = now.getMonth() + 1; 
    const year = now.getFullYear();

       const summary = await tx.monthlySummary.upsert({
       where: {
           userId_month_year: {
         userId:  user.id,
         month,
         year,
       }
    },
    update: {
    totalExpenses: { increment: amount },
  },
  create: {
    userId: user.id,
    month,
    year,
    totalExpenses: amount,
    totalIncome: 0,
  },
  }
  )

   return { summary, Expanse };
      },
      { timeout: 15000 }
    );




    return NextResponse.json({
    ...expense,
    newExpense: {
      ...expense.Expanse,
      startTime: expense.Expanse.startTime.toISOString(),
    },
  });
 }