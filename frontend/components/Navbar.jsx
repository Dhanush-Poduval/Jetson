'use client'
import Link from 'next/link'
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Button } from './ui/button'
import { Sun ,Moon} from 'lucide-react'
import { useTheme } from 'next-themes'
import { SidebarTrigger } from './ui/sidebar'

export default function Navbar() {
    const {setTheme}=useTheme()
  return (
    <div className='w-full px-4 py-2 border-b ml-0'>
        <div className='flex  items-center justify-between w-full gap-10 mx-auto  px-0 py-0 '>
           
            <SidebarTrigger className="ml-0"/>
            
            <div className='mr-5 flex flex-row gap-5 items-baseline justify-end'>
                <Link href="/home">Home</Link>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                                <span className="sr-only">Toggle theme</span>
                                </Button>

                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                        <DropdownMenuItem onClick={()=>setTheme('light')}>
                            Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={()=>setTheme('dark')}>
                            Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={()=>setTheme('system')}>
                            System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                  
                </DropdownMenu>

                
            </div>
        </div>

    </div>
  
  )
}
