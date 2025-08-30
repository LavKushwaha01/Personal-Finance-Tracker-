"use client";


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";

import { useState } from "react";


export default  function Income(){
  
  const [amount , setamount] = useState<number | null >(null)
  const [source, settype] = useState<string>("")

const startOfMonth = new Date();
startOfMonth.setDate(1);      
startOfMonth.setHours(0, 0, 0, 0);

const endOfMonth = new Date(startOfMonth);
endOfMonth.setMonth(endOfMonth.getMonth() + 1); 
endOfMonth.setDate(0);    
endOfMonth.setHours(23, 59, 59, 999);


async function handleIncome() {
    console.log(amount, source)
    if(Number.isNaN(amount)){
      alert("please insert valid input")
    }

    if (!amount || !source) {
      alert("Please Enter Amount and Source");
      return;
    }
    

    try{
   const res =await axios.post("/api/income", {
    amount,
    source
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

async function SourceHandler(e: React.ChangeEvent<HTMLInputElement>)  {
  const input = String(e.target.value);
  settype(input);
}
 
    return (
        
         <div className=" flex">
                  <Input
                      className="w-44 mr-10 focus-visible:border-green-500 focus-visible:ring-green-500/50"
                      placeholder="Amount { ₹ } you Earn..."
                      value={amount ?? ""}
                      onChange={InputHandler}
                    ></Input>
                    <Input placeholder="Source" className="w-44 focus-visible:border-green-500 focus-visible:ring-green-500/50" onChange={SourceHandler}></Input>
                    <Button className=" h-10  pb-2 ml-10 w-30 hover:bg-green-400 dark:hover:bg-green-600  active:scale-70 transition-all duration-150" onClick={handleIncome}>Income</Button>
       </div>
    )
}