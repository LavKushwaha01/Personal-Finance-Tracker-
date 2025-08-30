"use client";


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select" 
import { useState } from "react";


export default  function Expanse(){
  
  const [amount , setamount] = useState<number | null >(null)
  const [type, settype] = useState<string>("")

const startOfMonth = new Date();
startOfMonth.setDate(1);      
startOfMonth.setHours(0, 0, 0, 0);

const endOfMonth = new Date(startOfMonth);
endOfMonth.setMonth(endOfMonth.getMonth() + 1); 
endOfMonth.setDate(0);    
endOfMonth.setHours(23, 59, 59, 999);


async function handleExpense() {
    if (!amount || !type) {
      alert("Please enter amount and select a type");
      return;
    }
    if(Number.isNaN(amount)){
      alert("please insert valid input")
    }

    try{
   const res =await axios.post("/api/expense", {
    amount,
    type
   })
     console.log("Saved expense:", res.data);
    }
   catch (err: unknown) {
  if (axios.isAxiosError(err)) {
    alert(err.response?.data?.error || "Something went wrong");
  } else if (err instanceof Error) {
    alert(err.message);
  } else {
    alert("Something went wrong");
  }
}
}
async function InputHandler(e: React.ChangeEvent<HTMLInputElement>)  {
  const input = Number(e.target.value);
   if(Number.isNaN(input)){
       setamount(null); 
    return;
    }
  setamount(input);
  
}
 
    return (
        
         <div className=" flex">
          <Input
           value={amount ?? ""}
           onChange={InputHandler}
            className="w-44 focus-visible:border-red-500 focus-visible:ring-red-500/50" placeholder="Amount { ₹ } you Spend..." ></Input>
           <Select
            value={type}
            onValueChange={(value: string) => settype(value)}
          >
      <SelectTrigger className="w-[176px] ml-10 ">
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
          <Button className=" ml-10 w-30  hover:bg-red-400 dark:hover:bg-red-600  active:scale-70 transition-all duration-150" onClick={handleExpense}>Expenses</Button>
        </div>
    )
}