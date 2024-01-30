"use client"
import Link from 'next/link'
import { useRef } from 'react'
import { useTheme } from 'next-themes'
import { MdSunny } from "react-icons/md";
import { BsMoonStarsFill } from "react-icons/bs";
import '../styleComponent/NavBar.css'
import { AiOutlineMenu } from "react-icons/ai";
import Image from 'next/image';


export default function Navbar() {

  const { resolvedTheme } = useTheme()
  const { theme, setTheme } = useTheme()

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

      <div className="nav t-0  py-2 flex justify-between items-center flex-wrap z-[0] " style={{ color: resolvedTheme === 'dark' ?  'black' : 'white'}}  >
        <span className="moblie_menu " onClick={togglesMenu} style={{ color: resolvedTheme === 'dark' ?  'black' : 'white'}}  >
          <AiOutlineMenu size={25} />
        </span>
        <div className="navigation " ref={menuRef} onClick={togglesMenu}>
          <nav className="menu ">
            <Link href="/" > Home </Link>
            <Link href='/about'>About</Link>
            <Link href='/project'>Project</Link>
            <Link href='/'>Contact</Link>
          </nav>
        </div>
        <span className='flex justify-center absolute left-1/2 top-8 -translate-x-[50%] -translate-y-[50%] p-3  text-2xl bg-black text-white rounded-full border-sky-500 font-bold'  style={{ borderWidth: resolvedTheme === 'dark' ? '0' : '3px' }}><Image src='/sandeshlogo.png' width={30} height={30} alt='Hero'/> </span>
        
        <button onClick={handletheme} className='border-2 border-slate-400 p-2  rounded-full '>{theme === 'dark' ? <MdSunny size={20} /> : <BsMoonStarsFill size={20} />}
        </button>
      </div>
      
    </>
  )
}
