"use client"
import { useTheme } from 'next-themes'
import React from 'react'
import '../styleComponent/Backround.css'
import Image from 'next/image';
import img from '../../public/BackgroundSkills/Next.png'
import Link from 'next/link';

const skillsData = [
    { "name": "html-5", "left": 25, "w": 14, "h": 14, "alt": "HTML5" },
    { "name": "css3", "left": 7, "w": 16, "h": 16, "alt": "CSS3" },
    { "name": "python", "left": 75, "w": 11, "h": 11, "alt": "PYTHON" },
    { "name": "js", "left": 40, "w": 20, "h": 20, "alt": "JS" },
    { "name": "react", "left": 65, "w": 14, "h": 14, "alt": "React" },
    { "name": "Etherum", "left": 90, "w": 16, "h": 16, "alt": "Etherum" },
    { "name": "sql", "left": 35, "w": 11, "h": 11, "alt": "SQL" },
    { "name": "bitcoin", "left": 18, "w": 14, "h": 14, "alt": "Bitcoin" },
    { "name": "node", "left": 55, "w": 20, "h": 20, "alt": "Node" },
    { "name": "github", "left": 80, "w": 16, "h": 16, "alt": "GitHub" },
    { "name": "Next", "left": 15, "w": 20, "h": 20, "alt": "Next" }
]



export default function Backround() {
    const { resolvedTheme } = useTheme()
    const style = {
        backgroundColor: resolvedTheme === 'dark' ? '#F4F6F6' : 'rgb(30 27 75)',
    };
    return (
        <>
        <div className='fixed w-screen h-screen ' style={{ backgroundColor: resolvedTheme === 'dark' ? '#FAF9F6' : '#0C012A', color: resolvedTheme === 'dark' ? 'black' : '#D1E1FF ' }}>
            {/* <div className="circles absolute top-0 left-0 w-screen h-screen    overflow-hidden    ">
                <li className='left-[25%] w-14 h-14 z-10' style={style}><Image src='/BackgroundSkills/html-5.png' width={40} height={40} alt='HTML5' /></li>
                <li className='left-[7%] w-16 h-16 z-10' style={style}><Image src='/BackgroundSkills/css.png' width={40} height={40} alt='CSS3' /></li>
                <li className='left-[75%] w-11 h-11 z-10' style={style}><Image src='/BackgroundSkills/python.png' width={40} height={40} alt='PYTHON' /></li>
                <li className='left-[40%] w-20 h-20 z-10' style={style}><Image src='/BackgroundSkills/js.png' width={40} height={40} alt='JS' /></li>
                <li className='left-[65%] w-14 h-14 z-10' style={style}><Image src='/BackgroundSkills/react.png' width={40} height={40} alt='react' /></li>
                <li className='left-[90%] w-16 h-16 z-10' style={style}><Image src='/BackgroundSkills/Etherum.png' width={40} height={40} alt='Etherum' /></li>
                <li className='left-[35%] w-11 h-11 z-10' style={style}><Image src='/BackgroundSkills/sql.png' width={40} height={40} alt='sql' /></li>
                <li className='left-[18%] w-14 h-14 z-10' style={style}><Image src='/BackgroundSkills/bitcoin.png' width={40} height={40} alt='Bitcoin' /></li>
                <li className='left-[55%] w-20 h-20 z-10' style={style}><Image src='/BackgroundSkills/node.png' width={40} height={40} alt='node' /> </li>
                <li className='left-[80%] w-16 h-16 z-10' style={style}><Image src='/BackgroundSkills/github.png' width={40} height={40} alt='github' /> </li>
                <li className='left-[25%] w-16 h-16 z-10' style={style}><Image src='/BackgroundSkills/Next.png' width={40} height={40} alt='github' /> </li>
            </div> */}
        </div>

    
        </>
    )
}


