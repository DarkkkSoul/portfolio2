import React from 'react'

function ProjectComponent(props) {
    return (
        <div className='rounded-lg flex items-center justify-between gap-x-4 duration-300 text-black px-4 py-2 ring shadow-2xl/45 hover:ring-amber-100 hover:shadow-none' key={props.pid}>

            <div className='w-80 flex items-baseline flex-col gap-y-2 pl-1 py-1 text-black'>

                <div className='text-lg font-semibold tracking-wide text-kanit'>{props.title}</div>

                <div className='text-sm'>{props.description}</div>

                <div className='flex flex-row gap-x-1.5 gap-y-2 flex-wrap text-outfit tracking-wide'>
                    {
                        props.tech.map((t) => (
                            <div className='text-xs text-black border-1 border-gray-500/80 rounded-lg py-1 px-1.5'>{t}</div>
                        ))
                    }
                </div>

                <div className='flex gap-x-4 text-xs overflow-hidden'>
                    <div>
                        <a href={props.source} target='_blank'>
                            <button className='hover:underline cursor-pointer'>
                                Demo
                            </button>
                        </a>
                    </div>
                    <div>
                        <a href={props.demo} target='_blank'>
                            <button className=' text-heebo tracking-wider hover:underline cursor-pointer'>Try Out</button>
                        </a>
                    </div>
                </div>

            </div>

            <div className='ring ring-white rounded-xl'>
                <img src={props.image} className='w-66 h-35 rounded-xl' />
            </div>
        </div>
    )
}

export default ProjectComponent