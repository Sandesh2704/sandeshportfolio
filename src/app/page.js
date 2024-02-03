"use client"
import AboutFrontSection from '@/components/AboutFrontSection';
import Contact from '@/components/Contact';
import FrontSections from '@/components/FrontSections';
import Skills from '@/components/Skills';
import ReactProject from '@/components/project/ReactProject';
import { FaCircleChevronRight } from "react-icons/fa6";

import { useTheme } from 'next-themes'
import Link from 'next/link';
import Education from '@/components/Education';

export default function Home() {
  const { resolvedTheme } = useTheme()
  const linestyle = {
    backgroundColor: resolvedTheme === 'dark' ? 'black' : '#D1E1FF '
  }
  return (

    <div style={{ color: resolvedTheme === 'dark' ? 'black' : '#D1E1FF ' }}  >
      <section className='mb-28 lg:mb-28'>
        <FrontSections />
      </section>
      <section>
        <AboutFrontSection />
      </section>
      <section className='my-10'>
        <Skills />
      </section>

      <section className='my-10'>
        <h1 className='font-bold text-center text-4xl sm:text-5xl lg:text-6xl  mb-3 lg:mb-8 tracking-wide'>Strategic Creativity</h1>
        <ReactProject />
        <div className='flex justify-center my-14 lg:my-20 items-center'>
          <span className='hidden lg:block w-3/12 h-px ' style={linestyle} ></span>
          <Link href='/project' className=' border-2 px-5 py-1 rounded-2xl flex gap-4 items-center'>More Project <FaCircleChevronRight /> </Link>
          <span className='hidden lg:block w-3/12 h-px ' style={linestyle}></span>
        </div>
      </section>


      <section>
        <Education />
      </section>

      <section className='mt-10  mb-16'>
        <Contact />
      </section>
    </div>
  );
}
