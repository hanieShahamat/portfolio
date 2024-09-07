"use client"
import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from 'next/navigation';

export default function PageTransition(props:{children:ReactNode}) {
    const {children} = props
    const pathname = usePathname()
  return (
    <AnimatePresence>
        <div key={pathname}>
            <motion.div
                initial={{ opacity: 1}}
                animate={{
                    opacity: 0,
                    transition: {delay:1, duration: 0.4, ease: "easeInOut"}
                }}
                className='h-screen w-screen fixed bg-cyan-50 top-0 pointer-events-none'
            />
            {children}
        </div>
    </AnimatePresence>
  )
}
