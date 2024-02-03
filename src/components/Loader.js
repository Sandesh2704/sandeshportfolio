"use client"
import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import '../styleComponent/Loader.css'


export default function Loader({ isLoading, setIsLoading }) {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading()
    }, 1900);
  }, [setIsLoading])

  const text = "💡 Welcome to My code canvas! 🎨".split(" ");

  return (

    <>
      <div className='loader bg-[#0C012A] h-screen w-full  items-center'>
        <div className=' flex justify-center'>
          <div className=' p-5 rounded-full border-sky-500 border-4 bg-black mb-5'>
            <motion.img
              src="/navimg/sandeshlogo.png"
              alt="Logo"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              className='loader-logo '
              transition={{
                duration: 1,
                ease: 'easeInOut',
                repeat: Infinity,
              }}
            />
          </div>
        </div>

        <div className="text-center">
          <p className=' font-medium text-5xl  lg:text-6xl mt-10 leading-10 text-[#E74C3C]'>
          {text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 10
          }}
          key={i}
          className='leading-none tracking-wide'
        >
          {el}{" "}
        </motion.span>
      ))}
          </p>
        </div>
      </div>
    </>
  )
}
