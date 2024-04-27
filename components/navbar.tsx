'use client'
import { FaApple } from 'react-icons/fa'
import { IoBatteryHalfOutline } from 'react-icons/io5'
import { IoIosWifi } from 'react-icons/io'
import { BsPersonCircle, BsToggles } from 'react-icons/bs'
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from './ui/menubar'
import { cn } from '@/lib/utils'
import React from 'react'

interface MenuItems {
  name: string | JSX.Element
  className?: string
  children?: MenuItems[]
}

export function Navbar({ className }: { className?: string }) {
  const menuitems: MenuItems[][] = [
    [
      {
        name: <FaApple className='text-lg' />,
        className: 'px-2',
        children: []
      },
      { name: 'Code', children: [] },
      { name: 'File', children: [] },
      { name: 'Edit', children: [] },
      { name: 'Selection', children: [] },
      { name: 'View', children: [] },
      { name: 'Go', children: [] },
      { name: 'Run', children: [] },
      { name: 'Terminal', children: [] },
      { name: 'Window', children: [] },
      { name: 'Help', children: [] }
    ],
    [
      { name: <IoBatteryHalfOutline aria-labelledby='battery status icon' className='text-2xl' />, children: [] },
      { name: <BsPersonCircle aria-labelledby='user profile icon' />, children: [] },
      { name: <IoIosWifi aria-labelledby='wifi icon' className='text-xl' />, children: [] },
      // { name: <BsToggles />, children: [] },
      { name: 'Mon 26 Feb 13:33', children: [] }
    ]
  ]
  return (
    <header className='bg-background'>
      <nav aria-hidden='true' className={cn(className)}>
        <Menubar className='h-7 flex justify-between items-center py-0 border-0 border-b border-border bg-white/5'>
          {menuitems.map((item, index) => (
            <MenubarMenu key={`menu=${index}`}>
              <div className='flex items-center text-sm'>
                {item.map((item, index) => (
                  <React.Fragment key={`menu-item=${index}`}>
                    <MenubarTrigger className={cn('p-2 py-1', item.className)}>{item.name}</MenubarTrigger>
                    <MenubarContent>
                      {item.children?.map((child, index) => (
                        <MenubarItem key={`menu-list-item=${index}`} className={child.className}>
                          {child.name}
                        </MenubarItem>
                      ))}
                    </MenubarContent>
                  </React.Fragment>
                ))}
              </div>
            </MenubarMenu>
          ))}
        </Menubar>
      </nav>
    </header>
  )
}
