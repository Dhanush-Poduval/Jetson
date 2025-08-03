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
import dayjs from 'dayjs'



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
            dataKey="timestamps"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(timestamp) => dayjs(timestamp).format('HH:mm:ss')}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Area dataKey="RAM" strokeWidth={2} stroke="#8b5cf6" 
          fill="#8b5cf6" />
        </ReAreaChart>
      </ChartContainer>
    </div>
  )
}
