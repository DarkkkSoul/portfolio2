import React from 'react'

function ProjectComponent(props) {
    return (

        <div className='rounded-lg flex items-center justify-between gap-x-4 duration-300 text-black px-4 py-2 shadow-2xl/45 hover:shadow text-istok-400 w-lg ' key={props.pid}>

            <div className='w-80 flex items-baseline flex-col gap-y-2 pl-1 py-1 text-black'>

                <div className='text-lg font-semibold'>{props.title}</div>

                <div className='text-sm'>{props.description}</div>

                <div className='flex flex-row gap-x-1.5 flex-wrap tracking-wide'>
                    {
                        props.tech.map((t) => (
                            <div className='text-xs text-black border-b-1 border-gray-500/80 rounded-lg py-0.5 px-1.5'>{t}</div>
                        ))
                    }
                </div>
            </div>

            <div className='flex items-center justify-center gap-x-2 text-xs overflow-hidden'>
                <div>
                    <a href={props.source} target='_blank' className='cursor-pointer'>
                        <img src="/demo.png" className='w-5' />
                    </a>
                </div>
                <div>
                    <a href={props.demo} target='_blank' className='cursor-pointer'>
                        <img src="/link.png" className='w-4' />
                    </a>
                </div>
            </div>
        </div>
    )
}


export default ProjectComponent