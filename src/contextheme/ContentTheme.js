"use client"
import React, { useState } from 'react'
import { createContext } from "react";
import { ThemeProvider } from "next-themes";
import Loader from '@/components/Loader';

export default function ContentTheme({ children }) {
  const Theme = createContext(null)

  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setshowcontent] = useState(false)
  
  const handleLoader =()=>{
    setIsLoading(false);
    // setTimeout(() =>  setshowcontent(true), 450);
    setshowcontent(true);
  }
  return (
    <ThemeProvider attribute='class'>
      <Theme.Provider value=''>
        {isLoading ? (
          <div className='top-30'>
<Loader setIsLoading={handleLoader}  isLoading={isLoading}/>
          </div>
          
        ) : (
          <>{showContent && <>{children}</>}</>
        )}
        
      </Theme.Provider>
    </ThemeProvider>
  )
}
