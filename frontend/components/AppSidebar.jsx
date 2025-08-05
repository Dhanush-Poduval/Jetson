'use client'
import { Computer, Cpu, Gpu, Home, ScanFace, User2 } from 'lucide-react'
import React from 'react'
import { Sidebar ,SidebarContent,SidebarGroup,SidebarGroupContent,SidebarGroupLabel,SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarSeparator ,SidebarFooter} from './ui/sidebar'

import Link from 'next/link'
import { Button } from './ui/button'

const items=[
    {
        titles:'Home',
        url:'/',
        icon:Home
    },
    {
        titles:'CPU',
        url:'/dashboard/cpu', 
        icon:Cpu
    },{
        titles:'GPU',
        url:'/dashboard/gpu',
        icon:Gpu
    },
    {
        titles:'RAM',
        url:'/dashboard/ram',
        icon:Computer
    }
]

export default function AppSidebar() {
  return (
   <Sidebar className="mr-0">
      <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton asChild>
                    <Link href='/'>
                    
                     <span>Dashboard</span>
                    </Link>

                </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator className="mt-1"/>
      <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Applications</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    {items.map(item=>(
                        <SidebarMenuItem key={item.titles}>
                           <SidebarMenuButton asChild>
                             <Link href={item.url}>
                               <item.icon />
                               <span>{item.titles}</span>
                             </Link>
                           </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button variant="ghost" size="icon">
            <User2 className="h-5 w-5" />
        </Button>
       </SidebarFooter>

   </Sidebar>
  )
}
