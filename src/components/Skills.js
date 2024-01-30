
import Image from 'next/image'

const skillData = [

    { src: '/AboutSkills/html-5.png', alt: 'HTML5' },
    { src: '/AboutSkills/js.png', alt: 'JavaScript' },
    { src: '/AboutSkills/node.png', alt: 'Node.Js' },
    { src: '/AboutSkills/python.png', alt: 'Python' },
    { src: '/AboutSkills/react.png', alt: 'React.Js' },
    { src: '/AboutSkills/Next.png', alt: 'Next.Js' },
    { src: '/AboutSkills/express.png', alt: 'Express.Js' },
    { src: '/AboutSkills/css3.png', alt: 'CSS3' },
];

export default function Skills() {

    return (
        <>
            {/* <section className='text-center'>
                <h1 className='text-5xl sm:text-7xl lg:text-8xl my-5 mb-5'>Skills</h1>
                <div className='flex flex-wrap justify-center gap-5'>
                    {skillData.map((skill, index) => (
                        <>
                            <span className='bg-red-900 p-2 flex justify-center'>
                                <div>
                                <Image key={index}
                                    src={skill.src}
                                    width={50}
                                    height={50}
                                    alt={skill.alt}
                                    className='text-center'
                                />
                                <h1>{skill.alt}</h1>
                                </div>
                               
                            </span>
                            
                        </>
                    ))}
                </div>
            </section> */}
            <section class=" body-font">
                <div class="container px-5  mx-auto">
                    <div class="text-center ">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font  mb-10">Skills</h1>
                    </div>
                    <div class="flex flex-wrap justify-center sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                        {skillData.map((skill, index) => (
                            <>
                                <div key={index} class="w-10 h-10 lg:w-20 lg:h-20 p-2 bg-pink-100  flex flex-col text-center items-center  mx-3">
                                    <div class="  items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-2 flex-shrink-0">
                                        <Image src={skill.src} height={50} width={50} alt={skill.alt} />
                                    </div>
                                    <h2 class="text-sm lg:text-lg title-font font-medium ">{skill.alt}</h2>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
