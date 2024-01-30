"use client"
import { useTheme } from 'next-themes'
import img from '../../public/hero-img/portfoliohero.png'
import Image from 'next/image'

export default function AboutFrontSection() {
    const { resolvedTheme } = useTheme()
    return (
        <>
            {/* <div className=' grid grid-cols-1 grid-flow-col-reverse  lg:grid-cols-12   my-10 '>

                <div className=' flex col-span-7  items-center  mb-10 sm:mb-8 lg:mb-0'>
                    <div>
                        <h2 className='mb-3 text-lg font-bold tracking-wider'>BIOGRAPHY</h2>
                        <p className='mb-3 font-medium text-base tracking-wide'>Hey there, I'm <span className='font-bold tracking-wider text-2xl' style={{ color: resolvedTheme === 'dark' ? '#FF5900' : 'rgb(7, 234, 255)' }}>Sandesh</span>, a budding MERN (MongoDB, Express.js, React, Node.js) stack developer with an insatiable curiosity for building innovative and user-centric digital solutions. As a recent entrant into the world of web development, I bring a fresh perspective and an eagerness to learn. </p>
                        <p className='mb-3 font-medium text-base tracking-wide'> hough I might not boast years of industry experience, my passion for crafting functional and aesthetically pleasing web applications is unwavering. I'm driven by the belief that design should go beyond mere visual appeal; it should solve real problems and deliver delightful experiences to users.</p>
                        <p className='mb-3 font-medium text-base tracking-wide'>In my journey to kickstart a career in web development, I'm excited about exploring new avenues and embracing challenges. Whether it's shaping a website, diving into mobile app development, or any other digital venture, I am committed to infusing each project with a dedication to design excellence and user-focused thinking.</p>
                        <p className='font-medium text-base tracking-wide'>I am eagerly looking forward to the opportunity to contribute my skills and enthusiasm to make a meaningful impact on your upcoming projects.</p>
                    </div>
                </div>


                <div className='col-span-5 place-self-center flex justify-center'>
                    <div className='w-3/4 p-7 border-2  rounded-2xl w-[80%] h-[80%]' style={{ borderColor: resolvedTheme === 'dark' ? '#0C012A' : '#FAF9F6', boxShadow: `10px 10px ${resolvedTheme === 'dark' ? '#0C012A' : '#FAF9F6'}`, }}>
                        <Image src='/me.jpg' height={400} width={400} alt='Sandesh Img' className='rounded-2xl' />
                    </div>




                </div>
            </div> */}

            <section className="flex flex-wrap-reverse mx-auto my-10">
                <div className='w-full lg:w-3/5 flex  items-center '>
                    <div>
                        <h2 className='mb-3 text-lg font-bold tracking-wider'>BIOGRAPHY</h2>
                        <p className='mb-3 font-medium text-base tracking-wide'>Hey there, I'm <span className='font-bold tracking-wider text-2xl' style={{ color: resolvedTheme === 'dark' ? '#FF5900' : 'rgb(7, 234, 255)' }}>Sandesh</span>, a budding MERN (MongoDB, Express.js, React, Node.js) stack developer with an insatiable curiosity for building innovative and user-centric digital solutions. As a recent entrant into the world of web development, I bring a fresh perspective and an eagerness to learn. </p>
                        <p className='mb-3 font-medium text-base tracking-wide'> hough I might not boast years of industry experience, my passion for crafting functional and aesthetically pleasing web applications is unwavering. I'm driven by the belief that design should go beyond mere visual appeal; it should solve real problems and deliver delightful experiences to users.</p>
                        <p className='mb-3 font-medium text-base tracking-wide'>In my journey to kickstart a career in web development, I'm excited about exploring new avenues and embracing challenges. Whether it's shaping a website, diving into mobile app development, or any other digital venture, I am committed to infusing each project with a dedication to design excellence and user-focused thinking.</p>
                        <p className='font-medium text-base tracking-wide'>I am eagerly looking forward to the opportunity to contribute my skills and enthusiasm to make a meaningful impact on your upcoming projects.</p>
                    </div>
                </div>

                <div className="w-full lg:w-2/5 place-self-center flex justify-center mb-12 sm:mb-8 lg:mb-0">
                    <div className='w-3/4 p-7 border-2  rounded-2xl w-[70%] ' style={{ borderColor: resolvedTheme === 'dark' ? '#0C012A' : '#FAF9F6', boxShadow: `10px 10px ${resolvedTheme === 'dark' ? '#0C012A' : '#FAF9F6'}`, }}>
                        <Image src='/hero-img/portfoliohero.png' height={200} width={300} alt='Sandesh Img' className='rounded-2xl' />
                    </div>
                </div>
            </section>
        </>
    )
}
