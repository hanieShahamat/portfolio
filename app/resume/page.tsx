"use client";
import React from 'react'
import { RiNextjsLine, RiHtml5Line, RiCss3Line, RiBootstrapLine, RiTailwindCssFill, RiJavascriptFill, RiReactjsFill } from "@remixicon/react";

//components
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';


// about data
const about ={
  title: "About me",
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur quisquam fugiat laboriosam aut placeat.",
  info: [
    {
    fieldName: "Name",
    fieldValue: "hanie shahamatjoo"
    },
    {
      fieldName: "Telegram-ID",
      fieldValue: "hanieshahamat"
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ Years"
    },
    {
      fieldName: "Skype",
      fieldValue: "hanie shahamatjoo"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Iranian"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Language",
      fieldValue: "English, persion"
    },
  ]
}

// experience data
const experience ={
  icon: "",
  title: "My experience",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cupiditate maxime ad velit molestias sapiente.",
  items:[
    {
      company: "we agency",
      position: "SEO, Wordpress Intern",
      duration: "Winter 2022",
    },
    {
      company: "MPJ",
      position: "Front-End Developer Intern",
      duration: "Summer 2024",
    }
  ]
}

// education data
const education ={
  icon:"",
  title:"My education",
  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cupiditate maxime ad velit molestias sapiente.",
  items:[
    {
      institution: "Metaco company",
      degree:"Python language",
      duration:"2021"
    },
    {
      institution: "Online youtube course",
      degree:"Front-end Track",
      duration:"2023"
    },
    {
      institution: "Khuisf",
      degree:"C#",
      duration:"2023"
    },
    {
      institution: "Islamic Azad University of Isfahan",
      degree:"Bachelor of Computer Science",
      duration:"2020 - 2024"
    },

  ]
}

//skills data
const skills ={
  title:"My skills",
  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cupiditate maxime ad velit molestias sapiente.",
  skillList: [
    {
      icon:<RiHtml5Line/>,
      name: "html"
    },
    {
      icon:<RiCss3Line/>,
      name: "Css"
    },
    {
      icon:<RiBootstrapLine/> ,
      name: "Bootstrap"
    },
    {
      icon:<RiTailwindCssFill/>,
      name: "Tailwind"
    },
    {
      icon:<RiJavascriptFill/>,
      name: "JavaScript"
    },
    {
      icon:<RiReactjsFill/>,
      name: "React"
    },
    {
      icon:<RiNextjsLine/>,
      name: "Next.js"
    },

  ]
}

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity:0 }}
      animate={{
        opacity:1,
        transition: { delay: 2.4, duration: 0.4, ease:"easeIn"}
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className='container mx-auto'>
        <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='about'>About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className='min-h-[70vh] w-full'>

            {/* experience */}
            <TabsContent value='experience' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-3xl font-bold text-zinc-700'>{experience.title}</h3>
                <p className='max-w-[600px] text-zinc-500 mx-auto xl:mx-0'>{experience.description}</p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index)=>{
                      return (
                        <li key={index} className='bg-cyan-100 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-lg max-w-[260px] min-h-[60px] text-zinc-600 text-center lg:text-left'>{item.position}</h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-zinc-500'>{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value='education' className='w-full'>
            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-3xl font-bold text-zinc-700'>{education.title}</h3>
                <p className='max-w-[600px] text-zinc-500 mx-auto xl:mx-0'>{education.description}</p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index)=>{
                      return (
                        <li key={index} className='bg-cyan-100 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-lg max-w-[260px] min-h-[60px] text-zinc-600 text-center lg:text-left'>{item.degree}</h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-zinc-500'>{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value='skills' className='w-full h-full'>
              <div className='flex flex-col gap-[30px] '>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-zinc-500 mx-auto xl:mx-0'>{skills.description}</p>
                </div>
              </div>
              <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                {skills.skillList.map((skill, index)=>{
                  return (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-full h-[150px] bg-cyan-100 rounded-xl flex justify-center items-center group'>
                            <div className='text-8xl group-hover:text-accent transition-all duration-300'>
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className='capitalize'>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  )
                })}
              </ul>
            </TabsContent>

            {/* about */}
            <TabsContent value='about' className='w-full text-center xl:text-left'>
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-zinc-500 mx-auto xl:mx-0'>{about.description}</p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((item, index)=>{
                    return(
                      <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                        <span className='text-zinc-600'>{item.fieldName}</span>
                        <span className='text-zinc-700'>{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}
