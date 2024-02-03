"use client"
import { useTheme } from 'next-themes'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  const { resolvedTheme } = useTheme()
  const style = {
    borderColor: resolvedTheme === 'dark' ? 'black' : '#D1E1FF ',
    backgroundColor: resolvedTheme === 'dark' ? '#F4F6F6' : '#0C012A',
    color: resolvedTheme === 'dark' ? 'black' : '#D1E1FF '
  }
  return (
    <footer className='w-full lg:flex text-center  lg:justify-between px-4 sm:px-7 lg:px-14 border-t-2 py-5 items-center' style={style}>
      <Link href='mailto:sandeshdeshmukh2704@gmail.com' className='font-semibold text-xl ' style={{ color: resolvedTheme === 'dark' ? ' #1ABC9C ' : '#F1C40F  ' }} > Say, Hello👋</Link>
      <p className=' mt-5 lg:mb-0 '>Crafted with passion by Sandesh Deshmukh</p>
      <p className=' mt-5 lg:mb-0 '>2024 © All Rights Reserved.</p>
    </footer>
  )
}
