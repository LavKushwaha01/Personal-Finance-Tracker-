"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", Income: 186, Spend: 80 },
  { month: "February", Income: 305, Spend: 200 },
  { month: "March", Income: 237, Spend: 120 },
  { month: "April", Income: 73, Spend: 190 },
  { month: "May", Income: 209, Spend: 130 },
  { month: "June", Income: 214, Spend: 140 },
    { month: "July", Income: 186, Spend: 80 },
  { month: "August", Income: 305, Spend: 200 },
  { month: "September", Income: 237, Spend: 120 },
  { month: "October", Income: 73, Spend: 190 },
  { month: "November", Income: 209, Spend: 130 },
  { month: "December", Income: 214, Spend: 140 },
]

const chartConfig = {
  Income: {
    label: "Income",
    color: "#2563eb",
  },
  Spend: {
    label: "spend",
    color: "#60a5fa",
  },
} satisfies ChartConfig

export function Component() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="Income" fill="var(--color-Income)" radius={4} />
        <Bar dataKey="Spend" fill="var(--color-Spend)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}

