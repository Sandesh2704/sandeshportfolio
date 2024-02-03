"use client"
import { useTheme } from 'next-themes'
import React from 'react'
import '../styleComponent/Backround.css'
import Image from 'next/image';
import Link from 'next/link';
import { TiAnchor } from "react-icons/ti";
import { motion } from 'framer-motion';





export default function Backround() {
    const { resolvedTheme } = useTheme()


    const boxstyle = {
        // backgroundColor: resolvedTheme === 'dark' ? '#F4F6F6' : 'rgb(30 27 75)',
        backgroundColor: resolvedTheme === 'dark' ? ' #E6E6F9 ' : '#0B0D75 '
    };

    const linestyle = {
        backgroundColor: resolvedTheme === 'dark' ? 'black' : '#D1E1FF '
    }

    const socialIcons = [
        { href: 'https://github.com/Sandesh2704', icon: 'github.png', alt: 'Github' },
        { href: 'https://www.linkedin.com/in/sandeshdeshmukh-036b4624b', icon: 'linkedin.png', alt: 'Linkdin' },
        { href: 'https://www.instagram.com/sandesh__deshmukh?igsh=Ym5qeHRrbHYwcG85', icon: 'instagram.png', alt: 'instagram' },
        { href: 'tel:9767359779', icon: 'phone-call.png', alt: 'call' },
        { href: 'https://wa.me/qr/Y23HE5ZKAU2UF1', icon: 'whatsapp.png', alt: 'Whatsup' },
    ];



    return (
        <>
            <div className='fixed w-screen h-full ' style={{ backgroundColor: resolvedTheme === 'dark' ? '#F4F6F6' : '#0C012A', color: resolvedTheme === 'dark' ? '#D1E1FF ' : 'black' }}>
                <div className="circles absolute top-0 right-0 w-screen h-screen    overflow-hidden    ">
                    <li className='left-[25%] w-14 h-14 z-10' style={boxstyle}><Image src='/BackgroundSkills/html-5.png' width={40} height={40} alt='HTML5' /></li>
                    <li className='left-[7%] w-16 h-16 z-10' style={boxstyle}><Image src='/BackgroundSkills/css3.png' width={40} height={40} alt='CSS3' /></li>
                    <li className='left-[75%] w-11 h-11 z-10' style={boxstyle}><Image src='/BackgroundSkills/python.png' width={40} height={40} alt='PYTHON' /></li>
                    <li className='left-[40%] w-20 h-20 z-10' style={boxstyle}><Image src='/BackgroundSkills/js.png' width={40} height={40} alt='JS' /></li>
                    <li className='left-[65%] w-14 h-14 z-10' style={boxstyle}><Image src='/BackgroundSkills/react.png' width={40} height={40} alt='react' /></li>
                    <li className='left-[90%] w-16 h-16 z-10' style={boxstyle}><Image src='/BackgroundSkills/Etherum.png' width={40} height={40} alt='Etherum' /></li>
                    <li className='left-[35%] w-11 h-11 z-10' style={boxstyle}><Image src='/BackgroundSkills/sql.png' width={40} height={40} alt='sql' /></li>
                    <li className='left-[18%] w-14 h-14 z-10' style={boxstyle}><Image src='/BackgroundSkills/bitcoin.png' width={40} height={40} alt='Bitcoin' /></li>
                    <li className='left-[55%] w-20 h-20 z-10' style={boxstyle}><Image src='/BackgroundSkills/node.png' width={40} height={40} alt='node' /> </li>
                    <li className='left-[80%] w-16 h-16 z-10' style={boxstyle}><Image src='/BackgroundSkills/github.png' width={40} height={40} alt='github' /> </li>
                    <li className='left-[25%] w-16 h-16 z-10' style={boxstyle}><Image src='/BackgroundSkills/Next.png' width={40} height={40} alt='github' /> </li>
                </div>
            </div>


            <motion.div
                className='gmail hidden lg:block z-[100] -translate-y-[50%] fixed top-3/4 right-12 flex '
                style={{ color: resolvedTheme === 'dark' ? 'black' : '#D1E1FF ' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    delay: 1.4
                }}>
                <div className='flex items-center gap-5 tracking-wide'>
                    <Link href='mailto:sandeshdeshmukh2704@gmail.com' className='flex items-center gap-4' target="_blank"> sandeshdeshmukh2704@gmail.com 
                     
                    <Image   src='/socialicons/gmail.png' height={20} width={20} alt='gmail' /> 
                    
                   
                    </Link>
                    <span className='w-0.5 h-32 ' style={linestyle}></span>
                </div>
            </motion.div>


            <motion.div
                className='hidden  z-[100] fixed  lg:grid gap-8 top-2/3 left-12 -translate-y-[50%]'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    delay: 1.3
                }}>


                {socialIcons.map((icons, index) => (
                    <Link key={index} rel="stylesheet" href={icons.href} target="_blank">
                        <motion.div
                            whileHover={{
                                scale: 1.5,
                                borderRadius: '50%',
                                rotate: 360
                            }}
                            className="hover:border-[#ff0000] hover:border-2 hover:p-0.5  transition-transform">
                            <Image src={`/socialicons/${icons.icon}`} height={35} width={35} alt={icons.alt} />
                        </motion.div>
                        {/* <Image src={`/socialicons/${icons.icon}`} height={35} width={35} alt={icons.alt} /> */}
                    </Link>
                ))}
                <div>
                    <div className='flex justify-center '>
                        <span className='w-0.5 h-32 ' style={linestyle}></span>
                    </div>
                    <div style={{ color: resolvedTheme === 'dark' ? 'black' : '#D1E1FF ' }}>
                        <TiAnchor size={40} />
                    </div>


                </div>
            </motion.div>
        </>
    )
}


