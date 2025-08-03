'use client'
import React, { useState, useEffect, useRef } from 'react'
import CpuChart from '../components/CpuChart'
import GpuChart from '../components/GpuChart'
import RamChart from '../components/RamChart'

export default function Page() {
  const [data, setData] = useState([])
  const intervalRef = useRef(null)

  const fetchData = async () => {
    try {
      await fetch('http://127.0.0.1:8000/dashboard/livevalues', {
      method: 'POST',
      })
      const res = await fetch('http://127.0.0.1:8000/dashboard/live')
      const json = await res.json()
      setData(json)
    } catch (err) {
      console.error('Failed to fetch:', err)
    }
  }

  const startFetching = () => {
    if (intervalRef.current) return
    intervalRef.current = setInterval(fetchData, 2000)
  }

  const stopFetching = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = null
  }
  
  useEffect(() => {
    return () => clearInterval(intervalRef.current)
  }, [])

  return (
    <div>
      <button onClick={startFetching} className="bg-green-500 text-white px-4 py-2 rounded">Start</button>
      <button onClick={stopFetching} className="bg-red-500 text-white px-4 py-2 rounded">Stop</button>

        <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4'>
       
       
        <div className='bg-primary-foreground p-4 rounded-lg col-span-2  '><CpuChart Data={data}/></div>
         <div className='bg-primary-foreground p-4 rounded-lg col-span-2 '><GpuChart Data={data}/></div>
          <div className='bg-primary-foreground p-4 rounded-lg '></div>
           <div className='bg-primary-foreground p-4 rounded-lg col-span-2'><RamChart Data={data}/></div>
           <div className='bg-primary-foreground p-4 rounded-lg '></div>
         

        </div>

    </div>
    
  
  )
}
