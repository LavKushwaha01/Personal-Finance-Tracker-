import { getServerSession } from "next-auth";
import { Component } from "@/React/charts";
import { Button } from "@/components/ui/button";
import CircularProgressBar from "@/React/circularbar";

import { handler } from "@/app/api/auth/[...nextauth]/route";

import { Session } from "next-auth";
import { redirect } from "next/navigation";
import { Input } from "@/components/ui/input";

export default async function Home() {
  const session: Session | null = await getServerSession(handler);

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <div>
      <div className="flex">
        <div className="h-80 w-200">
          <h1 className="text-6xl mt-20 ml-10 font-bold">
            Track. Save. Thrive <br />
            Your money, your control.
          </h1>
          <h3 className="text-1xl font-sans text-blue-600 mt-10 ml-10 font-light">
            MoneyWise helps you log every expense, set smart budgets,
            <br />
            and reach your savings goals —all with beautiful charts, real-time
            insights, <br />
            and an easy-to-use dashboard that puts you in charge of your
            finances.
          </h3>
        </div>
        <div className="mt-25 pt-20 pb-20 pl-5 flex bg-neutral-900 rounded-4xl ml-10">
          <div className="mr-5 text-2xl font-bold">
          <CircularProgressBar percentage={10}></CircularProgressBar>
          <h1 className="ml-4">Food</h1>
          </div>
           <div className="mr-5 text-2xl font-bold">
          <CircularProgressBar percentage={40}></CircularProgressBar>
          <h1>Education</h1>
          </div>
           <div className="mr-5 text-2xl font-bold">
          <CircularProgressBar percentage={20}></CircularProgressBar>
          <h1 className="ml-7">EMI</h1>
          </div>
           <div className="mr-5 text-2xl font-bold">
          <CircularProgressBar percentage={12}></CircularProgressBar>
          <h1 className="ml-6">Rent</h1>
          </div>
           <div className="mr-5 text-2xl font-bold">
          <CircularProgressBar percentage={59}></CircularProgressBar>
          <h1 className="ml-5">Other</h1>
          </div>
        </div>
      </div>

      <div className="flex ml-30">
        <div>
          <Input
            className="w-50"
            placeholder="Amount { ₹ } you Earn..."
          ></Input>
          <Button className="mt-2 ml-10 w-30">Income+</Button>
        </div>
        <div className="ml-20">
          <Input
            className="w-50 "
            placeholder="Amount { ₹ } you Spend..."
          ></Input>
          <Button className="mt-2 ml-10 w-30">Spend </Button>
        </div>
      </div>

      <div className=" mt-25 ml-40 w-280 mr-10 p-10 bg-neutral-900">
        <Component></Component>
      </div>
    </div>
  );
}
