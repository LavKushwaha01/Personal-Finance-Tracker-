import { styleText } from "util";



import { ChartLineLabel } from "@/React/barchart"

export default function budget(){
    return(
        <div>
            <div className="font-medium text-5xl mt-10 mx-20 flex  bg-blue-200 rounded-4xl dark:bg-neutral-900 p-5 pl-75 ">
                <div>
                Total Savings Balance =  <span>    </span>
                </div>
                <div className="text-green-400"> 25000$</div>
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