"use client"
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaDownload } from "react-icons/fa6";

export default function page() {
  const { resolvedTheme } = useTheme()

  const style = {
    borderColor: resolvedTheme === 'dark' ? '#0C012A' : '#000CC1  ',
  }
  const linestyle = {
    backgroundColor: resolvedTheme === 'dark' ? 'black' : '#D1E1FF '
  }

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
      <div className='my-20' style={{ color: resolvedTheme === 'dark' ? 'black' : '#D1E1FF ', }} >
        <h1 className='font-bold text-center text-4xl sm:text-5xl lg:text-6xl  mb-3 lg:mb-8 tracking-wide'>Resume</h1>
        <div className="flex justify-center">

          <Image src='/resume/Sandesh_Deshmukh_resume.jpg' className=' w-full lg:w-[80%] h-full    border-2   ' width={900} height={900} alt='sandesh deshmukh resume ' style={style} />
        </div>

        <div className='flex justify-center my-12 lg:my-16 items-center'>
          <span className='hidden lg:block w-3/12 h-px ' style={linestyle} ></span>
          <button  className=' border-2 px-5 py-1 rounded-2xl flex gap-4 items-center'  onClick={downloadResume}>Resume <FaDownload /></button>
          <span className='hidden lg:block w-3/12 h-px ' style={linestyle}></span>
        </div>
      </div>

    </>
  ) 
}
