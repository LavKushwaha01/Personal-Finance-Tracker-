"use client"

import * as React from "react"
import { Label, Pie, PieChart, Sector } from "recharts"
import { PieSectorDataItem } from "recharts/types/polar/Pie"

import { useState, useEffect, useMemo } from "react"
import axios from "axios";


import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


export const description = "An interactive pie chart"

const chartConfig = {
  Food: { label: "Food", color: "var(--chart-1)" },
  Education: { label: "Education", color: "var(--chart-2)" },
  EMI: { label: "EMI", color: "var(--chart-3)" },
  Rent: { label: "Rent", color: "var(--chart-4)" },
  Others: { label: "Others", color: "var(--chart-5)" },
}
interface ExpenseData {
 expenses: string
  value: number
  fill: string
}


export function ChartPieInteractive() {
  const id = "pie-interactive"
  const [expenseData, setExpenseData] = useState<ExpenseData[]>([])
  const [activeCategory, setActiveCatogery] = useState<string>("Food")

    useEffect(() => {

    const fetchData = async () => {

      const resuser = await axios.get("/api/user")
     const user = await resuser.data
      
      const now = new Date()
      const month = now.getMonth() + 1
      const year = now.getFullYear()

      const res = await axios.get(
        `/api/categorydata?userId=${user.id}&month=${month}&year=${year}`
      )
      const data = res.data

       setExpenseData([
        { expenses: "Food", value: data.food, fill: "var(--color-Food)" },
        { expenses: "Education", value: data.education, fill: "var(--color-Education)" },
        { expenses: "EMI", value: data.emi, fill: "var(--color-EMI)" },
        { expenses: "Rent", value: data.rent, fill: "var(--color-Rent)" },
        { expenses: "Others", value: data.others, fill: "var(--color-Others)" },
      ])
      setActiveCatogery("Food")
}
 fetchData()
//  const intervalId: NodeJS.Timeout = setInterval(fetchData, 5000) 

    // return () => clearInterval(intervalId) 
  }, [])

   const activeIndex = useMemo(
    () => expenseData.findIndex((item) => item.expenses === activeCategory),
    [activeCategory, expenseData]
  )

  const expenses = useMemo(
    () => expenseData.map((item) => item.expenses),
    [expenseData]
  )
  return (
    <Card data-chart={id} className="flex flex-col bg-blue-200 dark:bg-neutral-900">
      <ChartStyle id={id} config={chartConfig} />
      <CardHeader className="flex-row items-start space-y-0 pb-0">
        <div className="grid gap-1">
          <CardTitle>Your Expanses</CardTitle>
          <CardDescription>In this expenses</CardDescription>
        </div>
        <Select value={activeCategory} onValueChange={setActiveCatogery}>
          <SelectTrigger
            className="ml-auto h-7 w-[130px] rounded-lg pl-2.5"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Select expenses" />
          </SelectTrigger>
          <SelectContent align="end" className="rounded-xl">
            {expenses.map((key) => {
              const config = chartConfig[key as keyof typeof chartConfig]

              if (!config) {
                return null
              }

              return (
                <SelectItem
                  key={key}
                  value={key}
                  className="rounded-lg [&_span]:flex"
                >
                  <div className="flex items-center gap-2 text-xs">
                    <span
                      className="flex h-3 w-3 shrink-0 rounded-xs"
                      style={{
                        backgroundColor: `var(--color-${key})`,
                      }}
                    />
                    {config?.label}
                  </div>
                </SelectItem>
              )
            })}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="flex flex-1 justify-center pb-0">
        <ChartContainer
          id={id}
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={expenseData}
              dataKey="value"
              nameKey="expenses"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={activeIndex}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <g>
                  <Sector {...props} outerRadius={outerRadius + 10} />
                  <Sector
                    {...props}
                    outerRadius={outerRadius + 25}
                    innerRadius={outerRadius + 12}
                  />
                </g>
              )}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {expenseData[activeIndex]?.value.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Rupees
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
