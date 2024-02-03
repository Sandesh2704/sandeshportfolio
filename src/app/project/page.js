"use client"
import ReactProject from '@/components/project/ReactProject';
import { useTheme } from 'next-themes'



export default function page() {
  const { resolvedTheme } = useTheme()

  return (
    <>
      <section className='' style={{ color: resolvedTheme === 'dark' ? 'black' : '#D1E1FF ' }}>
        <h1 className='text-center font-bold text-5xl sm:text-7xl lg:text-8xl my-10 sm:my-14 lg:my-16' >Envision, Empower, Conquer! </h1>
        <section className='mb-16'>
          <ReactProject />
        </section>
      </section >
    </>
  )
}


