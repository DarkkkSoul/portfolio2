import React from 'react'

function Skills() {

    const skillsArray = ['Javascript', 'ReactJs', 'TailwindCSS', 'Typescript', 'NodeJs', 'ExpressJs', 'MongoDB', 'Vite', 'Vercel', 'Figma', 'Markdown', 'git'];

    return (
        <div className='flex flex-wrap items-center gap-x-2 gap-y-2.5 *:bg-lime-300/30 text-istok-400'>
            {
                skillsArray.map((skill) => (
                    <div className='pt-1.5 pb-1 px-2 text-sm border-1 border-white/80 rounded-lg flex items-center shadow-lg/27'>
                        {skill}
                    </div>
                ))
            }
        </div>
    )
}

export default Skills