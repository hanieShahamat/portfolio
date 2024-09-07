"use client";
import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { RiArrowRightUpLine, RiGithubFill } from "@remixicon/react";

//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip';
import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects =[
  {
    num: "01",
    category: "frontend",
    title: "Project 1",
    description: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque ut provident vel, id molestiae doloribus.",
    stack: [{name:"Html"}, {name:"Tailwind"}, {name:"TypeScript"}],
    image:"/images/project1.png",
    live:"",
    github:"https://github.com/hanieShahamat/todolistApp.git",
  },
  {
    num: "02",
    category: "frontend",
    title: "Project 2",
    description: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque ut provident vel, id molestiae doloribus.",
    stack: [{name:"Html"}, {name:"Bootstrap"}, {name:"JavaScript"}],
    image:"/images/project2.png",
    live:"",
    github:"",
  },
  {
    num: "03",
    category: "frontend",
    title: "Project 3",
    description: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque ut provident vel, id molestiae doloribus.",
    stack: [{name:"Html"}, {name:"Bootstrap"}, {name:"JavaScript"}],
    image:"/images/project3.png",
    live:"",
    github:"",
  },
];

export default function Work() {
  const [project, setProject] = useState(projects[0])
  const handleSlideChange = (swiper:any) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex])
  }
  return (
    <motion.section
    initial={{ opacity:0 }}
    animate={{ opacity:1, transition: {delay:2.4, duration: 0.4, ease:"easeIn"},}}
    className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              {/* num */}
              <div className='text-8xl leading-none font-extrabold'>
                {project.num}
              </div>
              {/* category */}
              <h2 className='text-[42px] font-bold leading-none text-zinc-700 group-hover:text-accent transition-all duration-500 capitalize'>
                {project.category} project
              </h2>
              {/* description */}
              <p className='text-zinc-500'>{project.description}</p>
              {/* stack */}
              <ul className='flex gap-4'>
                {project.stack.map((item, index)=>{
                  return(
                    <li key={index} className='text-xl text-accent'>
                      {item.name}
                    </li>
                  )
                })}
              </ul>
              {/* border */}
              <div className='border border-zinc-400'></div>
              {/* buttons */}
              <div className='flex items-center gap-4'>
                {/* live project btn */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className=' rounded-full bg-cyan-100 flex justify-center group'>
                        <RiArrowRightUpLine className='text-rose-100  group-hover:text-rose-300' size={60}/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project btn */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className=' rounded-full bg-cyan-100 flex justify-center group'>
                        <RiGithubFill className='text-rose-100  group-hover:text-rose-300' size={60}/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper
            spaceBetween={30}
            slidesPerView={1}
            className='xl:h-[520px] mb-12'
            onSlideChange={handleSlideChange}
            >
              {projects.map((project, index)=>{
                return <SwiperSlide key={index} className='w-full'>
                  <div className='h-[460px] relative group flex justify-center items-center bg-zinc-400 '>
                    <div className='relative w-full h-full'>
                      <Image
                      src={project.image}
                      fill
                      className='object.cover'
                      alt=''
                      />
                    </div>
                  </div>
                </SwiperSlide>
              })}
              {/* slider buttons */}
              <WorkSliderBtns
               containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
               btnStyles="bg-accent hover:bg-rose-300 text-zinc-600 text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-full" 
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
