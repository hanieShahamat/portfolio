"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import {faTelegram} from '@fortawesome/free-brands-svg-icons'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { motion } from 'framer-motion';



const info =[
  {
    icon:<FontAwesomeIcon icon={faTelegram} />,
    title: "Telegram_ID",
    description: "hanie"
  },
  {
    icon:<FontAwesomeIcon icon={faEnvelope} />,
    title: "Email",
    description: "hanieshahamat@gmail.com"
  },
  {
    icon:<FontAwesomeIcon icon={faLocationDot} />,
    title: "Location",
    description: "Isfahan, Iran"
  }
]

export default function Contact() {
  return <motion.section 
  initial={{opacity:0}}
  animate={{
    opacity: 1,
    transition: {delay: 2.4, duration:0.4, ease: "easeIn"},
  }}
  className='py-6'
  >
    <div className="container mx-auto">
      <div className='flex flex-col xl:flex-row gap-[30px] '>
        {/* form */}
        <div className='xl:h-[54%] order-2 xl:order-none'>
          <form className='flex flex-col gap-6 p-10 bg-cyan-100 rounded-xl' action="">
            <h3 className='text-4xl text-rose-200'>Let's work together</h3>
            <p className='text-zinc-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde repellendus inventore aut et assumenda eos nobis qui reiciendis vero tempore.</p>
            {/* input */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <Input type='firstname' placeholder='Firstname'/>
              <Input type='lastname' placeholder='Lastname'/>
              <Input type='email' placeholder='Email address'/>
              <Input type='phone' placeholder='Phone number'/>
            </div>
            {/* select */}
            <Select>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder="select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>select a service</SelectLabel>
                    <SelectItem value='wD'>Web Development</SelectItem>
                    <SelectItem value='lD'>Logo Design</SelectItem>
                    <SelectItem value='uIX'>UI/UX Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
            </Select>
            {/* Textarea */}
            <Textarea 
              className='h-[200px]'
              placeholder='Type your message here.'
            />
            <Button size="sm" className='max-w-40 rounded-full bg-rose-300 text-white'>
              send message
            </Button>
          </form>
        </div>
        {/* info */}
        <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
          <ul className='flex flex-col gap-10'>
            {info.map((item, index)=>
              <li key={index} className='flex items-center gap-6'>
                <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-cyan-100 text-accent rounded-md flex items-center justify-center'>
                  <div className='text-[28px]'>{item.icon}</div>
                </div>
                <div className='flex-1'>
                  <p className='text-zinc-600'>{item.title}</p>
                  <h3 className='text-xl text-zinc-500'>{item.description}</h3>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  </motion.section>
}
