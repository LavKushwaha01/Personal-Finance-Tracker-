import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function budget(){
    return(
        <div>
            <div className="mt-20  bg-blue-200 rounded-4xl dark:bg-neutral-900 p-8">
            <div className="text-3xl font-medium text-center mb-10">Add Goal</div>
   <div className="flex"> 
    
     <Input placeholder="Goal Name" className="mr-5"></Input>  
     <Input placeholder="Target Amount" className="mr-5"></Input>
     <Input placeholder="Expected Completion Date" className="mr-5"></Input>
     
     <Button>ADD</Button>
      </div>
   </div>

            {/* Savings Goals

List of all savings goals with progress bars

Example:

Emergency Fund → Target ₹1,00,000 | Saved ₹65,000 (65%)

Vacation Fund → Target ₹50,000 | Saved ₹15,000 (30%)

Laptop Upgrade → Target ₹80,000 | Saved ₹45,000 (56%)

Option to add/edit/delete goals */}
        </div>
    )
}