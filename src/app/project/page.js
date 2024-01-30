"use client"
import JsProject from '@/components/project/JsProject';
import ReactProject from '@/components/project/ReactProject';
import { useTheme } from 'next-themes'



export default function page() {
  const { resolvedTheme } = useTheme()


  return (
    <>

      <section className='' style={{ color: resolvedTheme === 'dark' ? 'black' : '#D1E1FF ' }}>
        <h1 className='text-center font-bold text-5xl sm:text-7xl lg:text-8xl my-10 sm:my-14 lg:my-20' >Envision, Empower, Conquer! </h1>

        <section>
          <ReactProject />
        </section>


        <section className='mt-16'>
          <JsProject />
        </section>
      </section >


    </>
  )
}


