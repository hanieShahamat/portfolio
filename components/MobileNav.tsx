"use client";
import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { RiMenu3Line } from '@remixicon/react';

const links=[
    {
        name: "home",
        path: '/'
    },
    {
        name: "resume",
        path: '/resume'
    },
    {
        name: "work",
        path: '/work'
    },
    {
        name: "contact",
        path: '/contact'
    },
]

export default function MobileNav() {
    const pathname = usePathname();
  return (
    <Sheet>
        <SheetTrigger className='flex justify-center items-center'>
            <RiMenu3Line color='#fecaca' size={32}/>
        </SheetTrigger>
        <SheetContent className='flex flex-col'>
            {/* logo */}
            <div className='mt-32 mb-40 text-center text-2xl'>
            <Link href="/">
                <h1 className='text-4xl font-semibold'>Hanie<span className='text-rose-200 text-3xl'>.</span></h1>
            </Link>
            </div>
            {/* nav */}
            <nav className='flex flex-col justify-center items-center gap-8'>
                {links.map((link, index)=>{
                    return(
                        <Link
                        href={link.path}
                        key={index}
                        className={`${link.path === pathname && "text-accent border-b-2 border-accent "} text-xl capitalize hover:text-accent transition-all`}
                        >
                            {link.name}
                        </Link>
                    )
                })}
            </nav>
        </SheetContent>
    </Sheet>
  )
}
