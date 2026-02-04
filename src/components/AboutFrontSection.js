"use client"
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer';


export default function AboutFrontSection() {
    const { resolvedTheme } = useTheme()
    const [ref, inView] = useInView({
        triggerOnce: true,
    });
    return (
        <>
            <section
                className="flex flex-wrap mx-auto my-10">
                <motion.div
                    className="w-full lg:w-2/5 place-self-center flex justify-center mb-12 sm:mb-8 lg:mb-0"
                    ref={ref}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    transition={{ duration: 0.7 }}
                    variants={{
                        hidden: { opacity: 0, x: 100 },
                        visible: { opacity: 1, x: 0 },
                    }}>
                    <div className='w-3/4 p-7 border-2  rounded-2xl w-[70%] ' style={{ borderColor: resolvedTheme === 'dark' ? '#0C012A' : '#FAF9F6', boxShadow: `10px 10px ${resolvedTheme === 'dark' ? '#0C012A' : '#FAF9F6'}`, backgroundColor: resolvedTheme === 'dark' ?  '#F4F6F6' : '#0C012A' }}>
                        <Image src='/hero-img/portfoliohero.png' height={200} width={300} alt='Sandesh Img' className='rounded-2xl' />
                    </div>
                </motion.div>
                <motion.div
                    className='w-full lg:w-3/5 flex  items-center '
                    ref={ref}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    transition={{ duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, x: -100 },
                        visible: { opacity: 1, x: 0 },
                    }}>
                    <div>
                        <h2 className='mb-3 text-lg font-bold tracking-wider'>BIOGRAPHY</h2>
                        <p className='mb-3 font-medium text-base tracking-wide'>Hey there,{` I'm `}<span className='font-bold tracking-wider text-2xl' style={{ color: resolvedTheme === 'dark' ? '#FF5900' : 'rgb(7, 234, 255)' }}>Sandesh</span>, a budding MERN (MongoDB, Express.js, React, Node.js) stack developer with an insatiable curiosity for building innovative and user-centric digital solutions. As a recent entrant into the world of web development, I bring a fresh perspective and an eagerness to learn. </p>
                        <p className='mb-3 font-medium text-base tracking-wide'> {`hough I might not boast years of industry experience, my passion for crafting functional and aesthetically pleasing web applications is unwavering. I'm driven by the belief that design should go beyond mere visual appeal; it should solve real problems and deliver delightful experiences to users.`}</p>
                        <p className='mb-3 font-medium text-base tracking-wide'>{`In my journey to kickstart a career in web development, I'm excited about exploring new avenues and embracing challenges. Whether it's shaping a website, diving into mobile app development, or any other digital venture, I am committed to infusing each project with a dedication to design excellence and user-focused thinking.`}</p>
                        <p className='font-medium text-base tracking-wide'>I am eagerly looking forward to the opportunity to contribute my skills and enthusiasm to make a meaningful impact on your upcoming projects.</p>
                    </div>
                </motion.div>
            </section>
        </>
    )
}
