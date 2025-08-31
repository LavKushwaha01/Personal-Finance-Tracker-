import { getServerSession } from "next-auth";
import { Session } from "next-auth";

import { PrismaClient } from "@prisma/client";


const client = new PrismaClient();
import { handler } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
      const session: Session | null = await getServerSession(handler);

      
  if (!session?.user?.email) {
    console.log("error here");
    throw new Error("User not authenticated");
  }

  const  user = await client.user.findUnique({
    where: {
      email: session.user!.email!,
    },
    select: { id: true },
  });
    
return NextResponse.json(user)
    
}