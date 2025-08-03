import { Divide } from 'lucide-react'
import React from 'react'

export default function page() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4'>
        <div className='bg-primary-foreground p-4 rounded-lg lg:col-span-2'>Test-1</div>
         <div className='bg-primary-foreground p-4 rounded-lg '>Test-2</div>
          <div className='bg-primary-foreground p-4 rounded-lg '>Test-3</div>
           <div className='bg-primary-foreground p-4 rounded-lg '>Test-4</div>
           <div className='bg-primary-foreground p-4 rounded-lg lg:col-span-2'>Test-5</div>
         <div className='bg-primary-foreground p-4 rounded-lg '>Test-6</div>


    </div>
  
  )
}
