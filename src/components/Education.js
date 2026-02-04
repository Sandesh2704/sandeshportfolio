"use client"
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import '../../public/hero-img/hero1.png'

export default function Education() {
    const { resolvedTheme } = useTheme()
    const [ref, inView] = useInView({
        triggerOnce: true,
    });
    const style = {
        backgroundColor: resolvedTheme === 'dark' ?  '#F4F6F6' : '#0C012A'
    }
    const EDstyle = {
        color: resolvedTheme === 'dark' ? '#5d6d7e' : "#00C9FF  ",
    }

    return (
        <div>
            <section className="py-2 lg:py-14">
                <div className="container mx-auto ">
                    <h2 className="text-5xl font-semibold mb-14 text-center">Education</h2>

                    <div className='w-full mx-auto flex flex-wrap items-center'>
                        <div className='lg:w-3/4 w-[100%] lg:pr-2  '>
                            <div className='w-full lg:w-[100%] ' >
                                <div className='mb-14 tracking-wider'>
                                    <motion.div
                                        className='flex pl-2 text-xl border-l-4 mb-5 items-center gap-3 border-[#ff0000]'
                                        initial="hidden"
                                        animate={inView ? 'visible' : 'hidden'}
                                        transition={{ duration: 0.7 }}
                                        variants={{
                                            hidden: { opacity: 0, x: 100 },
                                            visible: { opacity: 1, x: 0 },
                                        }}>
                                        <p className='font-semibold'>Master in BlockChain Development</p>
                                        <span className='hidden lg:block w-1/2 h-px bg-[#ff0000] ' ></span>
                                    </motion.div>

                                    <div className='pl-3 flex flex-wrap gap-3 items-center'>
                                        <motion.div
                                            className=' gap-3 px-3 py-2 mb-1'
                                            style={style}
                                            ref={ref}
                                            initial="hidden"
                                            animate={inView ? 'visible' : 'hidden'}
                                            transition={{
                                                duration: 1,
                                                ease: 'easeInOut',
                                                delay: 0.1
                                            }}
                                            variants={{
                                                hidden: { opacity: 0, y: -25 },
                                                visible: { opacity: 1, y: 0 },
                                            }}>
                                            <h3 className='font-normal font-semibold mb-3 ' style={EDstyle}>| Dec 2022 - present | Jetking Networking Institute</h3>
                                            <p className='text-sm'>{`Actively pursuing a Master's in Blockchain Development at Jetking Networking Institute since December 2022. Simultaneously, I am honing my skills as a MERN (MongoDB, Express.js, React.js, Node.js) Stack Developer. This portfolio is a showcase of my journey, highlighting hands-on experience, projects, and a commitment to mastering both blockchain and MERN stack technologies. Ready to contribute dynamic solutions at the intersection of blockchain innovation and robust web development.`}</p>
                                        </motion.div>
                                    </div>
                                </div>

                                <div className='mb-10 tracking-wider'>
                                    <motion.div
                                        className='flex pl-2 text-xl border-l-4 mb-5 items-center gap-3 border-[#ff0000]'
                                        initial="hidden"
                                        animate={inView ? 'visible' : 'hidden'}
                                        transition={{ duration: 0.7 }}
                                        variants={{
                                            hidden: { opacity: 0, x: 100 },
                                            visible: { opacity: 1, x: 0 },
                                        }}>
                                        <p className='font-semibold'> Bachelor of Engineering ( Mechanical )</p>
                                        <span className='hidden lg:block w-1/2 h-px bg-[#ff0000] ' ></span>
                                    </motion.div>


                                    <div className='pl-3 flex flex-wrap gap-3 items-center'>
                                        <motion.div
                                            className=' gap-3 px-3 py-2  mb-1'
                                            style={style}
                                            initial="hidden"
                                            animate={inView ? 'visible' : 'hidden'}
                                            transition={{
                                                duration: 1,
                                                ease: 'easeInOut',
                                                delay: 0.1
                                            }}
                                            variants={{
                                                hidden: { opacity: 0, y: -25 },
                                                visible: { opacity: 1, y: 0 },
                                            }}>
                                            <h3 className='font-normal font-semibold mb-3 ' style={EDstyle}>| 2018 - 2022 | Rashtrasant Tukadoji Maharaj Nagpur University</h3>
                                            <p className='text-sm'>I bring a solutions-oriented mindset and practical expertise. Eager to contribute to dynamic projects and excel in the field.</p>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='lg:w-1/4 w-[100%] h-96 lg:block hidden '>
                            <div className='  w-full lg:w-[100%]  ' >
                                <Image src='/hero-img/hero1.png' width={600} height={900} className='h-96' alt='education'/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
