"use client"
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from "react-icons/fa6";

export default function JsProject() {


    const { resolvedTheme } = useTheme()
    const style = { color: resolvedTheme === 'dark' ? '#FF5900' : 'rgb(7, 234, 255)' }
  
    const buttonstyle = {
      backgroundColor: resolvedTheme === 'dark' ? '#0C012A' : '#FAF9F6',
      color: resolvedTheme === 'dark' ? 'white' : 'black'
    }
    const gitstyle = {
      color: resolvedTheme === 'dark' ? 'black' : 'white'
    }
    const boxstyle = {
      backgroundColor: resolvedTheme === 'dark' ? '#FAF9F6' : '#0C012A',
      borderColor: resolvedTheme === 'dark' ? '#0C012A' : '#FAF9F6',
    }

  return (
    <>



<div className='text-center font-bold text-xl sm:text-2xl lg:text-3xl   '>JavaScript, HTML5, CSS3 Project</div>

<div className="container px-3 lg:px-5 mx-auto  mt-5 lg:mt-10">
  <div className="w-full mx-auto flex flex-wrap p-4 sm:p-5 lg:p-10 border-2  rounded-2xl  shadow-[7px_7px_0_0] lg:shadow-[10px_10px_0_0] " style={boxstyle}>
    <Link rel="stylesheet" href="https:  go-rent-a-car-now.vercel.app/home" target="_blank" className="lg:w-1/2 w-[100%] lg:h-auto  object-cover object-center   rounded-2xl">
      <Image src='/ProjectImg/Car-rent-website.png' height={900} width={900} alt="Car Rent Website Img " className='  h-48 lg:h-72 rounded-2xl' />
    </Link>

    <div className="lg:w-1/2 w-full lg:pl-10  mt-6 lg:mt-0">
      <div style={style} className='text-base lg:text-xl font-medium  xs:text-base mb-1 lg:mb-2'>Featured Project</div>
      <Link href='https:  go-rent-a-car-now.vercel.app/home' target="_blank" className=' w-full text-left text-3xl font-bold lg:text-5xl sm:text-4xl  hover:underline underline-offset-3 '>Car Rent Website</Link>
      <p className='text-xs lg:text-sm mb-3 tracking-wider mt-2 lg:mt-3'>Revolutionize car rentals with our React-powered platform, featuring Tailwind CSS, Context API, React Router, and Recharts. Explore an extensive vehicle selection with detailed specs and real-time pricing. Effortlessly navigate and book with our user-friendly interface, including dynamic price conversion for easy local currency viewing. Immerse yourself in a feature-rich, responsive car rental experience.</p>
      <div className='flex gap-3 items-center'>
        <Link href='https:  github.com/Sandesh2704/Go-Rent-a-Car-Now.git' target="_blank" className='rounded-full' style={gitstyle} > <FaGithub className='text-3xl sm:text-3xl lg:text-4xl' /> </Link>
        <Link href='https:  go-rent-a-car-now.vercel.app/home' target="_blank" className='px-5 py-2 lg:px-7 py-0 rounded-lg font-medium lg:font-semibold  lg:text-base flex items-center' style={buttonstyle}>Vist Project</Link>
      </div>
    </div>
  </div>

  <div className='w-full mx-auto flex flex-wrap mt-14 lg:mt-20'>
    <div className='lg:w-1/2 w-[100%] lg:pr-10  '>
      <div className=' p-4 sm:p-5 lg:p-5 border-2  rounded-2xl w-full lg:w-[100%] gap-5 lg:gap-10 shadow-[7px_7px_0_0] lg:shadow-[10px_10px_0_0] ' style={boxstyle}>
        <Link rel="stylesheet" href="https:  go-rent-a-car-now.vercel.app/home" target="_blank" className="lg:w-1/2 w-[100%] lg:h-auto  object-cover object-center   rounded-2xl">
          <Image src='/ProjectImg/Car-rent-website.png' height={900} width={900} alt="Car Rent Website Img " className='  h-48 lg:h-72 rounded-2xl' />
        </Link>
        <div style={style} className='text-base lg:text-xl font-medium  xs:text-base mb-1 lg:mb-2 mt-5'>Featured Project</div>
        <Link href='https:  go-rent-a-car-now.vercel.app/home' target="_blank" className=' w-full text-left text-3xl font-bold lg:text-5xl sm:text-4xl  hover:underline underline-offset-3 '>Car Rent Website</Link>

        <div className='flex justify-between gap-3 items-center mt-5'>
          <Link href='https:  github.com/Sandesh2704/Go-Rent-a-Car-Now.git' target="_blank" className='rounded-full' style={gitstyle} > <FaGithub className='text-3xl sm:text-3xl lg:text-4xl' /> </Link>
          <Link href='https:  go-rent-a-car-now.vercel.app/home' target="_blank" className='px-5 py-2 lg:px-7 py-0 rounded-lg font-medium lg:font-semibold  lg:text-base flex items-center' style={buttonstyle}>Vist Project</Link>
        </div>
      </div>
    </div>


    <div className='lg:w-1/2 w-[100%] lg:pl-10 mt-14 lg:mt-0 '>
      <div className=' p-4 sm:p-5 lg:p-5 border-2  rounded-2xl w-full lg:w-[100%] gap-5 lg:gap-10 shadow-[7px_7px_0_0] lg:shadow-[10px_10px_0_0] ' style={boxstyle}>
        <Link rel="stylesheet" href="https:  go-rent-a-car-now.vercel.app/home" target="_blank" className="lg:w-1/2 w-[100%] lg:h-auto  object-cover object-center   rounded-2xl">
          <Image src='/ProjectImg/Car-rent-website.png' height={900} width={900} alt="Car Rent Website Img " className='  h-48 lg:h-72 rounded-2xl' />
        </Link>
        <div style={style} className='text-base lg:text-xl font-medium  xs:text-base mb-1 lg:mb-2 mt-5'>Featured Project</div>
        <Link href='https:  go-rent-a-car-now.vercel.app/home' target="_blank" className=' w-full text-left text-3xl font-bold lg:text-5xl sm:text-4xl  hover:underline underline-offset-3 '>Car Rent Website</Link>

        <div className='flex justify-between gap-3 items-center mt-5'>
          <Link href='https:  github.com/Sandesh2704/Go-Rent-a-Car-Now.git' target="_blank" className='rounded-full' style={gitstyle} > <FaGithub className='text-3xl sm:text-3xl lg:text-4xl' /> </Link>
          <Link href='https:  go-rent-a-car-now.vercel.app/home' target="_blank" className='px-5 py-2 lg:px-7 py-0 rounded-lg font-medium lg:font-semibold  lg:text-base flex items-center' style={buttonstyle}>Vist Project</Link>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}
