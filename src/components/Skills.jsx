import { div } from 'motion/react-client';
import React from 'react'

function Skills() {

    const skillsArray = ['Javascript', 'TailwindCSS', 'ReactJs', 'Typescript', 'NodeJs', 'ExpressJs', 'MongoDB', 'GSAP', 'Docker', 'Vite', 'Vercel', 'Figma', 'Markdown', 'git'];

    return (
        <div className='flex flex-col gap-y-7 mt-5'>
            <div className='sm:text-2xl text-xl text-lime-800 font-manrope drop-shadow-md drop-shadow-amber-400 relative inline-block'>
                <span className="relative z-10 px-3 py-1">Tech Stack
                    <div className="absolute inset-0 border-2 border-transparent">
                        <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-teal-600"></div>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-teal-600"></div>
                    </div>
                </span>

            </div>
            <div className='flex flex-wrap items-center gap-x-2 gap-y-2.5 *:bg-lime-300/30 font-manrope'>

                {
                    skillsArray.map((skill) => (
                        <div className='py-1 px-2 sm:text-sm tracking-wide text-xs border-1 border-white/80 rounded-lg flex items-center shadow-lg/27' key={Math.random()}>
                            {skill}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Skills