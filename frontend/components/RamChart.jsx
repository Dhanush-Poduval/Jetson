'use client'
import React from 'react'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from './ui/chart'
import {
  Area,
  AreaChart as ReAreaChart,  // <-- Renamed here
  CartesianGrid,
  XAxis
} from 'recharts'



const chartConfig = {
  RAM: {
    label: "RAM Usage",
    color: "var(--chart-1)",
  },
}

export default function RamChart({Data}) {
  return (
    <div>
      <h1>RAM Data</h1>
      <ChartContainer config={chartConfig}>
        <ReAreaChart data={Data}>
          <CartesianGrid />
          <XAxis
            dataKey="timestamp"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Area dataKey="RAM" strokeWidth={2} />
        </ReAreaChart>
      </ChartContainer>
    </div>
  )
}
