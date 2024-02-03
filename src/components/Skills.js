"use client"
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer';


export default function Skills() {
    const { resolvedTheme } = useTheme()
    const style = {
        borderColor: resolvedTheme === 'dark' ? '#0C012A' : "#D1E1FF ",
        boxShadow: `1px 1px ${resolvedTheme === 'dark' ? '#0C012A' : '#FAF9F6'}`,
        backgroundColor: resolvedTheme === 'dark' ?  '#F4F6F6' : '#0C012A'
    }

    const FrontendSkills = [
        { name: 'Next', image: resolvedTheme === 'dark' ? '/skills/frontend/nextlight.png' : '/skills/frontend/nextdark.png' },
        { name: 'React', image: '/skills/frontend/react.png' },
        { name: 'JavaScript', image: '/skills/frontend/js.png' },
        { name: 'Redux', image: '/skills/frontend/redux.png' },
        { name: 'HTML', image: '/skills/frontend/html5.png' },
        { name: 'CSS', image: '/skills/frontend/css3.png' },
        { name: 'Tailwind CSS', image: '/skills/frontend/Tailwind.png' },
        { name: 'Bootstrap', image: '/skills/frontend/Bootstrap.png' },
        { name: 'Responsive Web Design', image: '/skills/frontend/webdesign.png' },
    ]

    const BackendSkills = [
        { name: 'Node.js', image: '/skills/backend/node.png' },
        { name: 'Express', image: '/skills/backend/express-js.png' },
        { name: 'RestAPI', image: '/skills/backend/FastAPI.png' },
        { name: 'Mongodb', image: '/skills/backend/mongodb.png' },
        { name: 'SQl', image: '/skills/backend/sql.png' },
        { name: 'Python', image: '/skills/backend/python.png' },
    ]

    const OtherTools = [
        { name: 'Git', image: '/skills/otherANDtools/Git.png' },
        { name: 'Github', image: '/skills/otherANDtools/github.png' },
        { name: 'Raplit', image: '/skills/otherANDtools/replit.png' },
        { name: 'Ethereum', image: '/skills/otherANDtools/ethereum.png' },
        { name: 'Web3.js', image: '/skills/otherANDtools/web3.png' },
        { name: 'solidity', image: '/skills/otherANDtools/solidity.webp' },
        { name: 'Fundamental of Blockchain', image: '/skills/otherANDtools/blockchain.png' },
    ];

    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    return (
        <>
            <section id="skills" className="py-2 lg:py-14">
                <div className="container mx-auto ">
                    <h2 className="text-5xl font-semibold mb-14 text-center">Skills</h2>
                    <div className='mb-10'>
                        <motion.div
                            className='flex pl-2 text-xl border-l-4 mb-5 items-center gap-3 border-[#ff0000]'
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            transition={{ duration: 0.7 }}
                            variants={{
                                hidden: { opacity: 0, x: 100 },
                                visible: { opacity: 1, x: 0 },
                            }}>
                            <p className='font-semibold'>Front-end Development</p>
                            <span className='hidden lg:block w-1/2 h-px bg-[#ff0000] ' ></span>
                        </motion.div>


                        <div className='pl-3 flex flex-wrap gap-3 items-center'>
                            {FrontendSkills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    className='flex gap-3 px-3 py-2 rounded-b-lg border-x-2 border-b-2 mb-1'
                                    style={style}
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? 'visible' : 'hidden'}
                                    transition={{
                                        duration: 1,
                                        ease: 'easeInOut',
                                        delay: 0.1 + index * 0.1
                                    }}
                                    variants={{
                                        hidden: { opacity: 0, y: -25 },
                                        visible: { opacity: 1, y: 0 },
                                    }}>
                                    <Image height={30} width={30} src={skill.image} alt={skill.name} />
                                    <h3 className='font-normal font-semibold'>{skill.name}</h3>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className='mb-10'>
                        <motion.div
                            className='flex pl-2 text-xl border-l-4 mb-5 items-center gap-3 border-[#ff0000]'
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            transition={{ duration: 0.7 }}
                            variants={{
                                hidden: { opacity: 0, x: 100 },
                                visible: { opacity: 1, x: 0 },
                            }}>
                            <p className='font-semibold'>Back-end Development</p>
                            <span className='hidden lg:block w-1/2 h-px bg-[#ff0000]' ></span>
                        </motion.div>


                        <div className='pl-3 flex flex-wrap gap-3 items-center'>
                            {BackendSkills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    className='flex gap-3 px-3 py-2 rounded-b-lg border-x-2 border-b-2 mb-1'
                                    style={style}
                                    initial="hidden"
                                    animate={inView ? 'visible' : 'hidden'}
                                    transition={{
                                        duration: 1,
                                        ease: 'easeInOut',
                                        delay: 0.1 + index * 0.1
                                    }}
                                    variants={{
                                        hidden: { opacity: 0, y: -25 },
                                        visible: { opacity: 1, y: 0 },
                                    }}>
                                    <Image height={30} width={30} src={skill.image} alt={skill.name} />
                                    <h3 className='font-normal font-semibold'>{skill.name}</h3>
                                </motion.div>
                            ))}
                        </div>
                    </div>



                    <div className='mb-10'>
                        <motion.div
                            className='flex pl-2 text-xl border-l-4 mb-5 items-center gap-3 border-[#ff0000]'
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            transition={{ duration: 0.7 }}
                            variants={{
                                hidden: { opacity: 0, x: 100 },
                                visible: { opacity: 1, x: 0 },
                            }}>
                            <p className='font-semibold'>Tools and Other Knowledge</p>
                            <span className='hidden lg:block w-1/2 h-px bg-[#ff0000] ' ></span>
                        </motion.div>


                        <div className='pl-3 flex flex-wrap gap-3 items-center'>
                            {OtherTools.map((skill, index) => (
                                <motion.div key={index}
                                    className='flex gap-3 px-3 py-2 rounded-b-lg border-x-2 border-b-2 mb-1'
                                    style={style}
                                    initial="hidden"
                                    animate={inView ? 'visible' : 'hidden'}
                                    transition={{
                                        duration: 1,
                                        ease: 'easeInOut',
                                        delay: 0.1 + index * 0.1
                                    }}
                                    variants={{
                                        hidden: { opacity: 0, y: -25 },
                                        visible: { opacity: 1, y: 0 },
                                    }}>
                                    <Image height={30} width={30} src={skill.image} alt={skill.name} />
                                    <h3 className='font-normal font-semibold'>{skill.name}</h3>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
