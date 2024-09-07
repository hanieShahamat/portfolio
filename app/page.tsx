"use client";
import { motion } from 'framer-motion'
//components
import Social from "@/components/Social";
import States from "@/components/States";
import AnimatedText from "@/components/AnimatedText"


export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full ">
        <div className="flex flex-col xl:flex-row items-center justify-between  xl:pt-8 pb-12">
          {/* text */}
          <div className=" xl:text-left">
            <span className="text-xl">Front-End Developer</span>
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              className="h1 mb-6">Hello, I'm <br /><span className="text-accent">Hanie Shahamatjoo</span>
            </motion.h1>
            <p className="xl:max-w-[800px]  max-w-[500px] mb-9 text-zinc-600"><AnimatedText text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, accusamus?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae deleniti placeat, modi quaerat accusantium temporibus recusandae. Dolorum necessitatibus deleniti dolores!"/></p>
            {/* btn */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <div className="mb-2 xl:mb-0">
                <Social containerStyle="flex gap-6" 
                iconStyle="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-zinc-700 hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <States/>
    </section>
  );
}
