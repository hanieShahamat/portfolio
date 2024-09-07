"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';

//components
import Nav from './Nav';
import MobileNav from './MobileNav';

export default function Header() {
  return (
    <header className='py-8 xl:py-12'>
        <div className='container mx-auto flex justify-between items-center'>
            {/* log */}
            <Link href="/">
                <h1 className='text-4xl font-semibold'>Hanie<span className='text-rose-200 text-3xl'>.</span></h1>
            </Link>

            {/* Desktop nav bar*/}
            <div className='hidden xl:flex items-center gap-8'>
                <Nav/>
                <Link href="/contact">
                    <Button className='rounded-full bg-rose-300 hover:bg-zinc-700'>Hire me</Button>
                </Link>
            </div>

            {/* Mobile nav */}
            <div className='xl:hidden'>
                <MobileNav/>
            </div>
        </div>
    </header>
  )
}
