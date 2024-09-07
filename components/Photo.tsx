"use client";

import Image from 'next/image';
import React from 'react'

export default function Photo() {
  return (
    <div>
            <div className='w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]'>
                <Image
                    src="/homephoto.png"
                    alt=''
                    priority
                    quality={100}
                    fill
                    className='object-contain'
                />
            </div>
    </div>
  )
}
