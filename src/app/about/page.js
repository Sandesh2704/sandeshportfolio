"use client"
import { useTheme } from 'next-themes'
import AboutFrontSection from '@/components/AboutFrontSection'
import React from 'react'
import Skills from '@/components/Skills'
import Education from '@/components/Education'

export default function Page() {
  const { resolvedTheme } = useTheme()

  return (
    <div style={{ color: resolvedTheme === 'dark' ? 'black' : '#D1E1FF ' }}>
      <section className='my-10 sm:my-14 lg:my-16'>
        <header className='text-center  text-5xl sm:text-7xl lg:text-8xl my-5 mb-5'>Passion Drives Progress! </header>
        <AboutFrontSection />
      </section>
      <section className='my-10 sm:my-14 lg:my-16'>
        <Skills/>
      </section>
      <section className='my-10 sm:my-14 lg:my-16'>
        <Education/>
      </section>

    </div>
  )
}
