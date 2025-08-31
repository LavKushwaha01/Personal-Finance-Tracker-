import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client";
  const client = new PrismaClient();

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const userId = Number(searchParams.get("userId"))
  const month = Number(searchParams.get("month"))
  const year = Number(searchParams.get("year"))

  // Query all categories directly from DB
  const [food, education, emi, rent, others] = await Promise.all([
    client.food.findFirst({ where: { userId, month, year }, select: { amount: true } }),
    client.education.findFirst({ where: { userId, month, year }, select: { amount: true } }),
    client.eMI.findFirst({ where: { userId, month, year }, select: { amount: true } }),
    client.rent.findFirst({ where: { userId, month, year }, select: { amount: true } }),
    client.others.findFirst({ where: { userId, month, year }, select: { amount: true } }),
  ])

  return NextResponse.json({
    food: food?.amount ?? 0,
    education: education?.amount ?? 0,
    emi: emi?.amount ?? 0,
    rent: rent?.amount ?? 0,
    others: others?.amount ?? 0,
  })
}
