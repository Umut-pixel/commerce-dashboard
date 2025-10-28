"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
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
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

export const description = "An interactive sales area chart"

const chartData = [
  { date: "2024-04-01", sales: 22152 },
  { date: "2024-04-02", sales: 18050 },
  { date: "2024-04-03", sales: 21450 },
  { date: "2024-04-04", sales: 23250 },
  { date: "2024-04-05", sales: 28900 },
  { date: "2024-04-06", sales: 31200 },
  { date: "2024-04-07", sales: 26750 },
  { date: "2024-04-08", sales: 34900 },
  { date: "2024-04-09", sales: 18700 },
  { date: "2024-04-10", sales: 24200 },
  { date: "2024-04-11", sales: 30100 },
  { date: "2024-04-12", sales: 27950 },
  { date: "2024-04-13", sales: 32400 },
  { date: "2024-04-14", sales: 21800 },
  { date: "2024-04-15", sales: 19500 },
  { date: "2024-04-16", sales: 20450 },
  { date: "2024-04-17", sales: 33600 },
  { date: "2024-04-18", sales: 28950 },
  { date: "2024-04-19", sales: 25400 },
  { date: "2024-04-20", sales: 17200 },
  { date: "2024-04-21", sales: 19800 },
  { date: "2024-04-22", sales: 23150 },
  { date: "2024-04-23", sales: 20900 },
  { date: "2024-04-24", sales: 30800 },
  { date: "2024-04-25", sales: 24800 },
  { date: "2024-04-26", sales: 16450 },
  { date: "2024-04-27", sales: 35500 },
  { date: "2024-04-28", sales: 19850 },
  { date: "2024-04-29", sales: 29600 },
  { date: "2024-04-30", sales: 37900 },
  { date: "2024-05-01", sales: 21200 },
  { date: "2024-05-02", sales: 28700 },
  { date: "2024-05-03", sales: 26350 },
  { date: "2024-05-04", sales: 34100 },
  { date: "2024-05-05", sales: 39500 },
  { date: "2024-05-06", sales: 41800 },
  { date: "2024-05-07", sales: 35200 },
  { date: "2024-05-08", sales: 21900 },
  { date: "2024-05-09", sales: 25450 },
  { date: "2024-05-10", sales: 29400 },
  { date: "2024-05-11", sales: 31800 },
  { date: "2024-05-12", sales: 24250 },
  { date: "2024-05-13", sales: 21200 },
  { date: "2024-05-14", sales: 42600 },
  { date: "2024-05-15", sales: 38100 },
  { date: "2024-05-16", sales: 33800 },
  { date: "2024-05-17", sales: 41200 },
  { date: "2024-05-18", sales: 31500 },
  { date: "2024-05-19", sales: 26700 },
  { date: "2024-05-20", sales: 22400 },
  { date: "2024-05-21", sales: 18500 },
  { date: "2024-05-22", sales: 17300 },
  { date: "2024-05-23", sales: 28950 },
  { date: "2024-05-24", sales: 28900 },
  { date: "2024-05-25", sales: 25100 },
  { date: "2024-05-26", sales: 23600 },
  { date: "2024-05-27", sales: 39800 },
  { date: "2024-05-28", sales: 25800 },
  { date: "2024-05-29", sales: 18600 },
  { date: "2024-05-30", sales: 32800 },
  { date: "2024-05-31", sales: 22600 },
  { date: "2024-06-01", sales: 22400 },
  { date: "2024-06-02", sales: 43600 },
  { date: "2024-06-03", sales: 20100 },
  { date: "2024-06-04", sales: 40100 },
  { date: "2024-06-05", sales: 19100 },
  { date: "2024-06-06", sales: 29200 },
  { date: "2024-06-07", sales: 32700 },
  { date: "2024-06-08", sales: 36900 },
  { date: "2024-06-09", sales: 42100 },
  { date: "2024-06-10", sales: 22700 },
  { date: "2024-06-11", sales: 19400 },
  { date: "2024-06-12", sales: 46200 },
  { date: "2024-06-13", sales: 18700 },
  { date: "2024-06-14", sales: 40600 },
  { date: "2024-06-15", sales: 31200 },
  { date: "2024-06-16", sales: 37100 },
  { date: "2024-06-17", sales: 44800 },
  { date: "2024-06-18", sales: 21000 },
  { date: "2024-06-19", sales: 34200 },
  { date: "2024-06-20", sales: 38900 },
  { date: "2024-06-21", sales: 22800 },
  { date: "2024-06-22", sales: 31900 },
  { date: "2024-06-23", sales: 45600 },
  { date: "2024-06-24", sales: 21950 },
  { date: "2024-06-25", sales: 22300 },
  { date: "2024-06-26", sales: 40700 },
  { date: "2024-06-27", sales: 42400 },
  { date: "2024-06-28", sales: 23100 },
  { date: "2024-06-29", sales: 20000 },
  { date: "2024-06-30", sales: 42800 },
]

const chartConfig = {
  sales: {
    label: "Satış (₺)",
    color: "var(--primary)",
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const isMobile = useIsMobile()
  const [timeRange, setTimeRange] = React.useState("90d")

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d")
    }
  }, [isMobile])

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Toplam Satışlar</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            Son 3 ayın satış performansı
          </span>
          <span className="@[540px]/card:hidden">Son 3 ay</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
          >
            <ToggleGroupItem value="90d">Son 3 ay</ToggleGroupItem>
            <ToggleGroupItem value="30d">Son 30 gün</ToggleGroupItem>
            <ToggleGroupItem value="7d">Son 7 gün</ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Son 3 ay" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Son 3 ay
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Son 30 gün
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Son 7 gün
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillSales" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-sales)"
                  stopOpacity={1.0}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-sales)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("tr-TR", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("tr-TR", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  formatter={(value) => `₺${Number(value).toLocaleString()}`}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="sales"
              type="natural"
              fill="url(#fillSales)"
              stroke="var(--color-sales)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
