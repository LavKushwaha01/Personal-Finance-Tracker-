import { getServerSession } from "next-auth";
import { Session } from "next-auth";
import { redirect } from "next/navigation";

import { ChartPieInteractive } from '@/React/piechart'

import  ChartOnScroll  from "@/React/lazyscrolling"


import * as React from "react"

import Expanse from "@/components/expanses";
import Income from "@/components/income";


import { handler } from "@/app/api/auth/[...nextauth]/route";

export default async function Home() {
  const session: Session | null = await getServerSession(handler);

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <div>
      <div className="flex mb-25">
        <div>
        <div className=" w-200">
          <h1 className="text-6xl mt-20 ml-10 font-bold">
            Track. Save. Thrive <br />
            Your money, your control.
          </h1>
          <h2 className="text-2xl mt-5 ml-10 font-bold text-blue-200">
            “MoneyWise helps you log expenses, set budgets, and achieve savings goals 
            with clear insights and real-time dashboards — making financial management simple and stress-free&quot;.
          </h2>
          <h3 className=" ml-10 mt-3 font-medium"> | Made with ❤️ By Lav... </h3>
        </div>
        <div className=" ml-20 w-158 p-10 mt-20  bg-blue-200 dark:bg-neutral-900 rounded-4xl">
        <div className=" mb-2 flex">
         <Income></Income>
        </div>

        <div className=" flex">
          <Expanse></Expanse>
        </div>
      </div>
      </div>


        <div className="w-150 mt-35 ml-10 bg-blue-300 dark:bg-transparent">
 <ChartPieInteractive></ChartPieInteractive>
     </div>
      </div>

      
 <ChartOnScroll></ChartOnScroll>

        
    </div>
  );
}
