'use client'
import { useTheme } from 'next-themes'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaRegShareFromSquare } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
'../../public/resume/sandesh-deshmukh-resume.pdf'

export default function FrontSections() {

  const { resolvedTheme } = useTheme()

  const borderRadiusValues = [
    '30% 70% 70% 30% / 30% 30% 70% 70%',
    '58% 42% 75% 25% / 76% 46% 54% 24%',
    '50% 50% 33% 67% / 55% 27% 73% 45%',
    '33% 67% 58% 42% / 63% 68% 32% 37%',
  ];
  const style = {
    backgroundColor: resolvedTheme === 'dark' ? '#0C012A' : '#FAF9F6', color: resolvedTheme === 'dark' ? 'white' : 'black'
  };

  const downloadResume = () => {
    const resumeFilePath = '/resume/sandesh-deshmukh-resume.pdf';
    const link = document.createElement('a');
    link.href = resumeFilePath;
    link.download = 'Sandesh_Deshmukh_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <section>
        <div className=' grid  grid-cols-1 lg:grid-cols-12 my-14'>
          <div className=' flex col-span-6  items-center text-center lg:text-left mb-12 sm:mb-8 lg:mb-0'>
            <div className=''>
              <motion.div
                style={{ color: resolvedTheme === 'dark' ? '#FF5900' : 'rgb(7, 234, 255)' }}
                className='mb-1 font-bold'
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut',
                  delay: 0.4,
                }}>

                <TypeAnimation
                  sequence={[
                    'Web Developer',
                    1000,
                    'MERN Stack Developer',
                    1000,
                    'Full Stack Developer',
                    1000,
                    'UI/UX Developer',
                    1000
                  ]}
                  wrapper="span"
                  speed={30}
                  repeat={Infinity}
                  className='intero text-base sm:text-lg lg:text-lg  '
                />
              </motion.div>
              <motion.h1
                className='text-6xl sm:text-7xl lg:text-8xl mb-3 lg:mb-4 '
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  ease: 'easeInOut',
                  delay: 0.75,
                }}>Sandesh <br /> Deshmukh</motion.h1>
              <motion.h6
                className='text-2xl sm:text-3xl lg:text-4xl mb-3 lg:mb-4 tracking-wide font-medium'
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut',
                  delay: 1,
                }}>Ingenious coder,<br /> crafting digital symphony.</motion.h6>
              <motion.p
                className='text-xs sm:text-sm lg:text-sm tracking-wider mb-6'
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut',
                  delay: 1.9,
                }}>As a seasoned full-stack developer, I specialize in transforming concepts into cutting-edge web applications. Explore my recent projects and insightful articles, showcasing a mastery of React.js and a passion for innovative web development.</motion.p>
              <div className='flex gap-4 justify-center lg:justify-start'>
                <motion.div
                  className=' py-2 px-4   border-2 rounded-md'
                  style={style}
                  onClick={downloadResume}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    delay: 2.4,
                  }}>
                  <Link href='/resume' className='flex justify-center items-center gap-2'> Resume<FaRegShareFromSquare /></Link>  </motion.div>
                <motion.div
                  className='flex justify-center items-center py-2 px-4  gap-2 border-2 rounded-md'
                  style={style}

                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    delay: 3,
                  }}>  <Link href='/contact'>Contact</Link> </motion.div>
              </div>
            </div>
          </div>


          <div className='col-span-6 place-self-center'>
            <motion.div
              style={{
                margin: 'auto',
                backgroundColor: '#21D4FD',
                backgroundImage: resolvedTheme === 'dark' ? 'linear-gradient(to bottom, #22054f, #361666, #4a287d, #5e3a96, #734caf, #725fc4, #6f72d9, #6b85ec, #499af8, #21adfe, #00bfff, #28cffd)' : ' linear-gradient(to right bottom, #ff8844, #ff7746, #fd644a, #fa514f, #f53b56, #e9295e, #db1665, #cc006b, #b10070, #940072, #740072, #52076f)',
                borderRadius: borderRadiusValues,
                overflow: 'hidden'
              }}
              animate={{
                borderRadius: borderRadiusValues,
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              whileHover={{ animationPlayState: 'paused' }}
            >
              <Image
                src="/hero-img/hero3.png"
                alt="Morphing Animation"
                width={500}
                height={500}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

