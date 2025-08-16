import { getServerSession } from "next-auth";
import { Session } from "next-auth";
import { redirect } from "next/navigation";

import { Component } from "@/React/charts";
import { ChartAreaInteractive } from "@/React/areachart"
import { ChartPieInteractive } from '@/React/piechart'
import CircularProgressBar from "@/React/circularbar";

import * as React from "react"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select" 



import { handler } from "@/app/api/auth/[...nextauth]/route";




export default async function Home() {
  const session: Session | null = await getServerSession(handler);

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <div>
      <div className="flex">
        <div>
        <div className=" w-200">
          <h1 className="text-6xl mt-20 ml-10 font-bold">
            Track. Save. Thrive <br />
            Your money, your control.
          </h1>
          <h2 className="text-2xl mt-5 ml-10 font-bold text-blue-200">
            “MoneyWise helps you log expenses, set budgets, and achieve savings goals 
            with clear insights and real-time dashboards — making financial management simple and stress-free".
          </h2>
          <h3 className=" ml-10 mt-3 font-medium"> | Made with ❤️ By Lav... </h3>
        </div>
        <div className=" ml-20 w-158 p-10 mt-20  bg-blue-200 dark:bg-neutral-900 rounded-4xl">
        <div className=" mb-2 flex">
          <Input
            className="w-50 mr-10 focus-visible:border-green-500 focus-visible:ring-green-500/50"
            placeholder="Amount { ₹ } you Earn..."
          ></Input>
          <Input placeholder="Source" className="w-50 focus-visible:border-green-500 focus-visible:ring-green-500/50"></Input>
          <Button className=" h-10  pb-2 ml-10 w-30 hover:bg-green-400 dark:hover:bg-green-600">Income</Button>
        </div>

        <div className=" flex">
          <Input
            className="w-50 focus-visible:border-red-500 focus-visible:ring-red-500/50" placeholder="Amount { ₹ } you Spend..." ></Input>
           <Select>
      <SelectTrigger className="w-[200px] ml-10 ">
        <SelectValue placeholder="Select a Expenses" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="bg-blue-200 dark:bg-transparent">
          <SelectLabel className="bg-blue-300 dark:bg-transparent font-bold text-black dark:text-white">Expenses</SelectLabel>
          <SelectItem value="food">Food</SelectItem>
          <SelectItem value="education">Education</SelectItem>
          <SelectItem value="emi">EMI</SelectItem>
          <SelectItem value="rent">Rent</SelectItem>
          <SelectItem value="other">Others</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
          <Button className=" ml-10 w-30 hover:bg-red-400 dark:hover:bg-red-600">Expanse </Button>
        </div>
      </div>
      </div>


        <div className="w-150 mt-25 ml-10 bg-blue-300 dark:bg-transparent">
 <ChartPieInteractive></ChartPieInteractive>
     </div>
      </div>

      


      <div className=" mt-25 ml-30 w-320 mr-10 p-10 bg-blue-200 rounded-4xl dark:bg-neutral-900">
        <ChartAreaInteractive></ChartAreaInteractive>
      </div>
     
        
    </div>
  );
}
