import React from 'react'

function Skills() {

    const skillsArray = ['Javascript', 'ReactJs', 'TailwindCSS', 'Typescript', 'NodeJs', 'ExpressJs', 'MongoDB', 'Vite', 'Vercel', 'Figma', 'Markdown', 'git'];

    return (
        <div className='flex flex-wrap gap-x-2 gap-y-1 *:bg-lime-400/50'>
            {
                skillsArray.map((skill) => (
                    <div className='py-1 px-1.5 text-sm border-1 border-white rounded-lg'>
                        {skill}
                    </div>
                ))
            }
        </div>
    )
}

export default Skills