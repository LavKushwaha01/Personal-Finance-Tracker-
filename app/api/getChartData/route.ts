
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from "@prisma/client"
const client = new PrismaClient();


export async function POST(req: Request) {
  const { searchParams } = new URL(req.url)
  const userId = Number(searchParams.get("userId"));

const { from, to } = await req.json();

  const fromDate = new Date(from);
  const toDate = new Date(to);

  const incomesData = await client.dailystats.findMany({
    where: {
      userId: userId,
       date: {
        gte: fromDate,
        lte: toDate,
      },
    },
     orderBy: { date: 'asc' },
    select: { date: true, income: true, expense: true },

  })
 
 return new Response(JSON.stringify(incomesData), { status: 200 });
}