"use client"
import Link from 'next/link'
import { useRef } from 'react'
import { useTheme } from 'next-themes'
import { MdSunny } from "react-icons/md";
import { BsMoonStarsFill } from "react-icons/bs";
import '../styleComponent/NavBar.css'
import { AiOutlineMenu } from "react-icons/ai";
import Image from 'next/image';
import { motion } from "framer-motion";



export default function Navbar() {

  
  const { resolvedTheme } = useTheme()
  const { theme, setTheme } = useTheme()
  const Menu = [
    { id: 1, href: "/", name: "Home" },
    { id: 2, href: "/about", name: "About" },
    { id: 3, href: "/project", name: "Project" },
    { id: 4, href: "/contact", name: "Contact" },

  ];

  const handletheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    }
    else {
      setTheme('light')
    }
  }

  const menuRef = useRef(null)
  const togglesMenu = () => menuRef.current.classList.toggle('menu_active')

  return (
    <>

      <div className="nav t-0  py-2 flex justify-between items-center flex-wrap z-[0] " style={{ color: resolvedTheme === 'dark' ? 'black' : '#D1E1FF '   }}>
        <span className="moblie_menu " onClick={togglesMenu} style={{ color: resolvedTheme === 'dark' ? 'black' : '#D1E1FF '}} >
          <AiOutlineMenu size={25} />
        </span>
        <div className="navigation " ref={menuRef} onClick={togglesMenu}>
          <motion.nav className= 'menu' >

            {Menu.map(({ href, name, id }, index) => (
              <motion.h1 key={id}
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut',
                  delay: 0.3 + index * 0.1
                }}
                className="">
                <Link href={href} >
                  {name}
                </Link>
              </motion.h1>
            ))}
           
          </motion.nav>
        </div>
        <span className='flex justify-center absolute left-1/2 top-8 -translate-x-[50%] -translate-y-[50%] p-3  text-2xl bg-black text-white rounded-full border-sky-500 font-bold' style={{ borderWidth: resolvedTheme === 'dark' ? '0' : '3px' }}><Image src='/navimg/sandeshlogo.png' width={30} height={30} alt='Hero' /> </span>

        <motion.button
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.2,
            ease: 'easeInOut',
            delay: 0.4
          }}
          onClick={handletheme}
          className='border-2 border-slate-400 p-2  rounded-full ' >
          {theme === 'dark' ? <MdSunny size={20} /> : <BsMoonStarsFill size={20} />}
        </motion.button>
      </div>

    </>
  )
}
