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
import {ScrollArea} from '../components/ui/scroll-area'



const chartConfig = {
  GPU: {
    label: "GPU Usage",
    color: "var(--chart-1)",
  },
}

export default function GpuChart({Data}) {
    const chartWidth = 600
  return (
    
    <div>
      <h1>GPU Data</h1>
      <ScrollArea className="w-full max-w-full overflow-x-auto">
        <div >
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
                    <Area dataKey="GPU" stroke="#f97316" fill="#f97316" strokeWidth={2} />
                    </ReAreaChart>
                </ChartContainer>


        </div>
       
      </ScrollArea>
      
    </div>
  )
}
