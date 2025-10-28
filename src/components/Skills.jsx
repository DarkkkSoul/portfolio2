import { div } from 'motion/react-client';
import React from 'react'

function Skills() {

    const skillsArray = ['Javascript', 'TailwindCSS', 'ReactJs', 'Typescript', 'NodeJs', 'ExpressJs', 'MongoDB', 'GSAP', 'Docker', 'Vite', 'Vercel', 'Figma', 'Markdown', 'git'];

    return (
        <div className='flex flex-col gap-y-3'>
            <div className='sm:text-2xl text-xl text-lime-800 font-manrope drop-shadow-md drop-shadow-amber-400 mb-1'>Tech Stack</div>
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