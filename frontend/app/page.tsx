'use client'
import React, { useState, useEffect, useRef } from 'react'
import CpuChart from '../components/CpuChart'
import GpuChart from '../components/GpuChart'
import RamChart from '../components/RamChart'
import {UseliveStata} from'../hooks/UseliveStata';

export default function Page() {
  const {data,startFetching,stopFetching}=UseliveStata()

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
         <div className='bg-primary-foreground p-4 rounded-lg '>Test-6</div> 


        </div>

    </div>
    
  
  )
}
