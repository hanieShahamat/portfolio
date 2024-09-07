"use client";
import { animate, motion } from 'framer-motion';
import React from 'react';

const stairAnimationVariant = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
}

const reverseIndex = (index:number) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
}

export default function Stairs() {
  return (
    <>
        {[...Array(6).fill(null).map((_, index)=>{
            return(
                <motion.div
                    key={index}
                    variants={stairAnimationVariant}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                        delay: reverseIndex(index) * 0.1,
                    }}
                    className='h-full w-full bg-rose-50 relative'
                />
            );
        })]}
    </>
  )
}
