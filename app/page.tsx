import Image from "next/image";
import myImage from "@/images/6196251.jpg"

import { getServerSession } from "next-auth";

import { handler } from "@/app/api/auth/[...nextauth]/route";

import { Session } from "next-auth";
import { redirect } from "next/navigation";

export  default async function Home() {
    const session: Session | null = await getServerSession(handler);
    
     if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <div >
       <h1>Welcome</h1>
      <div className="flex">
      <div className=" m-20 w-2/6 rounded-3xl ">
       <Image
        src={myImage}
        alt="My Image"
        className="rounded-lg shadow-lg"
      />
     </div>
      <div className="m-20 w-3/6 bg-amber-500 rounded-3xl ">
        <div className="m-10">
         <h1>Welcome BAck</h1>
          <h2>To keep connected with us please Login with <br />
             your prosnal information by email and password</h2>

             <button className="px-6 py-2 bg-white text-amber-600 font-semibold rounded hover:bg-gray-200">Sign-In</button>
             <button className="px-6 py-2 bg-white text-amber-600 font-semibold rounded hover:bg-gray-200">Sign-Up</button>
        </div>
      </div>

    </div>
    </div>
    
  );
}
