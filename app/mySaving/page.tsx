import { getServerSession } from "next-auth";
import { Session } from "next-auth";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

import { handler } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";

;
import { ChartLineLabel } from "@/React/barchart"


export default async  function budget(){

const session: Session | null = await getServerSession(handler);


  if (!session?.user?.email) {
    console.log("error here");
    throw new Error("User not authenticated");
  }

  const now = new Date();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

const  user = await client.user.findUnique({
    where: {
      email: session.user!.email!,
    },
    select: { id: true },
  });

  if (!user) throw new Error("user not found");

    const income = await client.monthlySummary.findFirst({
    where: {
        userId: user.id,
        month,
        year,
    },
    select: {totalIncome: true,
        totalExpenses: true,
    }
})

const saving =(income?.totalIncome ?? 0) - (income?.totalExpenses ?? 0);

    return(
        <div>
            <div className="font-medium text-5xl mt-10 mx-20 flex  bg-blue-200 rounded-4xl dark:bg-neutral-900 p-5 pl-75 ">
                <div  className="mr-7">
                Total Savings Balance =
                </div>

                {saving<0 ? ( 
                     <div className="text-red-400"> <span></span>{saving}</div>
                ) : (
                    <div className="text-green-400"> {saving}</div>
                )} 
               
            </div>
            <div className="flex">

            <div className="text-4xl font-medium w-150 mt-50 ml-10 meow-script-regular ">“Do not save what is left after spending, spend what is left after saving.” <br /> <span className="text-2xl ml-30">   — Warren Buffett</span> <br /></div>
            <div className=" mt-15 ml-10 w-200  h-auto mr-10 p-10 bg-blue-200 rounded-4xl dark:bg-neutral-900">
                
             <ChartLineLabel></ChartLineLabel>
            </div>
    </div>
            


        </div>
    )
}