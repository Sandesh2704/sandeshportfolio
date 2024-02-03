"use client"
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import '../styleComponent/MoblieSocial.css'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from 'next-themes'
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";


export default function MoblieSocailIcons() {

    const { resolvedTheme } = useTheme()
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const style = {
        borderColor: resolvedTheme === 'dark' ? '#0C012A' : '#FAF9F6',
        boxShadow: `1px 1px ${resolvedTheme === 'dark' ? '#0C012A' : '#FAF9F6'}`,
        color: resolvedTheme === 'dark' ? 'black' : '#D1E1FF ',
        cursor: "pointer"
    }

    const socialMediaLinks = [
        { id: 1, url: "mailto:sandeshdeshmukh2704@gmail.com", icon: "/socialicons/gmail.png", alt: "Gmail" },
        { id: 2, url: "https://github.com/Sandesh2704", icon: "/socialicons/github.png", alt: "GitHub" },
        { id: 3, url: "https://www.linkedin.com/in/sandeshdeshmukh-036b4624b", icon: "/socialicons/linkedin.png", alt: "LinkedIn" },
        { id: 4, url: "https://www.instagram.com/sandesh__deshmukh?igsh=Ym5qeHRrbHYwcG85", icon: "/socialicons/instagram.png", alt: "Instagram" },
        { id: 5, url: "https://wa.me/qr/Y23HE5ZKAU2UF1", icon: "/socialicons/whatsapp.png", alt: "Whatsapp" },
    ];


    return (
        <>
            <div className="fixed block lg:hidden  top-2/3 right-0 social  z-[200]  ">
                <div className="flex flex-col items-center ">
                    <motion.button
                        initial={{ opacity: 0, y: -25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.1,
                            ease: 'easeInOut',
                            delay: 0.5
                        }}
                        id="show-hidden-menu"
                        onClick={toggleMenu}
                        className="ml-2 border-2 border-double py-2 text-sm rounded-lg flex text-center items-center gap-2"
                        style={style}>
                        {isMenuOpen ? <MdArrowForwardIos size={10} /> : <MdArrowBackIos size={10} />}          <h1> Social Media </h1>
                    </motion.button>
                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                className="hidden-menu flex"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                <ul className="flex gap-2">
                                    {socialMediaLinks.map((link) => (
                                        <motion.li key={link.id}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="">
                                            <Link href={link.url} target="_blank">
                                                <Image src={link.icon} height={35} width={35} alt={link.alt} />
                                                
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </>
    )
}
