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
  CPU: {
    label: "CPU Usage",
    color: "var(--chart-1)",
  },
}

export default function CpuChart({Data}) {
  return (
    <div>
      <h1>CPU Data</h1>
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
          <Area dataKey="CPU" strokeWidth={2} />
        </ReAreaChart>
      </ChartContainer>
    </div>
  )
}
