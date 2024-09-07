"use client";
import React from 'react'
import { useSwiper } from 'swiper/react';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "@remixicon/react";


export default function WorkSliderBtns(props:{containerStyles:string, btnStyles:string}) {
    const {containerStyles,btnStyles} = props;
    const swiper = useSwiper();
  return (
    <div className={containerStyles}>
        <button className={btnStyles} onClick={()=> swiper.slidePrev()}>
            <RiArrowDropLeftLine />
        </button>
        <button className={btnStyles} onClick={()=> swiper.slideNext()}>
            <RiArrowDropRightLine/>
        </button>
    </div>
  )
}
