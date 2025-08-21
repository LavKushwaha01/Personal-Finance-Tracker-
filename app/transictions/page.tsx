import { columns, Payment } from "./columns"
import { DataTable } from "./data-table"

import {  CalendarForm } from "./date_pick"



import TransactionsPDF from "@/React/Transictions";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      Types: "Income",
      Source: "food",
      Date: "21/4/2025"
     
    },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="ml-20 mr-20 py-10  mt-15 px-10  bg-blue-200 rounded-4xl dark:bg-neutral-900 ">
      <div  className= "w-fit flex">
        <CalendarForm></CalendarForm>
        <h1 className="mt-5 ml-50 font-extrabold text-4xl font-mono">Your Transictions</h1>
      </div>
       <DataTable columns={columns} data={data} />
      <TransactionsPDF></TransactionsPDF>
    </div>
  )
}