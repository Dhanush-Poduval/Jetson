'use client'
import React from 'react'

import { UseliveStata } from '../../../hooks/UseliveStata'
import GpuChart from '../../../components/GpuChart'

export default function GpuPage() {
  const { data, startFetching, stopFetching } = UseliveStata()

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">CPU Usage</h1>
      <button onClick={startFetching} className="bg-green-500 text-white px-4 py-2 rounded">Start</button>
      <button onClick={stopFetching} className="bg-red-500 text-white px-4 py-2 rounded">Stop</button>
      <GpuChart Data={data} />
    </div>
  )
}
