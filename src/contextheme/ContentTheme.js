"use client"
import React from 'react'
import { createContext } from "react";
import { ThemeProvider } from "next-themes";

export default function ContentTheme({ children }) {
  const Theme = createContext(null)

  return (
    <ThemeProvider attribute='class'>
      <Theme.Provider value=''>
      
        {children}
        
        
      </Theme.Provider>
    </ThemeProvider>
  )
}
