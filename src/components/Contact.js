"use client"
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer';



export default function Contact() {
    const { resolvedTheme } = useTheme()
    const boxstyle = {
        backgroundColor: resolvedTheme === 'dark' ?  '#F4F6F6' : '#0C012A',
        borderColor: resolvedTheme === 'dark' ? '#0C012A' : '#FAF9F6',
    }

    const contactInfo = [
        { type: 'Gmail', value: 'sandeshdeshmukh2704@gmail.com' },
        { type: 'Phone', value: '+91 9767359779' },
        { type: 'Address', value: 'Nagpur, Maharashtra' },
    ];

    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    return (
        <div className='px-0 sm:px-12 lg:px-20 text-center ' style={{ color: resolvedTheme === 'dark' ? 'black' : '#D1E1FF ' }}>
            <h1 className='mb-3' style={{ color: resolvedTheme === 'dark' ? '#FF5900' : 'rgb(7, 234, 255)' }}> Hey, What's Next?</h1>
            <h1 className='font-bold text-5xl sm:text-7xl lg:text-8xl  mb-5 lg:mb-8 tracking-wide'>Get In Touch</h1>
            <p className=' tracking-wide text-sm sm:text-base lg:text-base mb-8'>
                While I'm currently not actively seeking new opportunities, I welcome the chance to connect with you. Whether you have inquiries, wish to share ideas, or simply want to exchange greetings, I am committed to responding promptly. Your messages are invaluable, and I make it a priority to engage with every interaction. The prospect of connecting with diverse individuals like yourself excites me, and I look forward to the potential conversations that may unfold. Feel free to reach out, and I'll do my utmost to ensure a thoughtful and timely response.
            </p>


            <div className='flex flex-wrap'>
                {contactInfo.map((info, index) => (
                    <motion.div key={index} 
                    className='w-full lg:w-4/12 px-5 mb-5 lg:mb-0' 
                    style={boxstyle}>
                        <div className='px-3 py-5 lg:py-10 rounded-2xl border-2'>
                            <h2 className='mb-3 text-xl font-bold tracking-wider'>{info.type}</h2>
                            {info.type === 'Address' ? (
                                <p >{info.value}</p>
                            ) : (
                                <Link href={info.type === 'Gmail' ? `mailto:${info.value}` : `tel:${info.value}`} className='text-[#ff0000] break-all '>
                                    {info.value}
                                </Link>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
