import { div } from 'motion/react-client';
import React, { useState } from 'react'

function ProjectComponent(props) {

    // const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='rounded-lg flex sm:flex-row flex-col sm:items-center sm:justify-between gap-x-4 gap-y-1.5 duration-300 text-black px-4 sm:py-3 py-4 shadow-2xl/45 hover:shadow text-istok-400 sm:w-xl w-full relative' key={props.pid}>

            <div className='sm:max-w-11/12 flex items-baseline flex-col gap-y-2 pl-1 py-1 text-black'>

                <div className='text-lg font-semibold flex items-center justify-between gap-x-1.5 '>
                    <div>{props.title}</div>

                    {/* <button onClick={() => { setIsOpen(true) }}>
                        <img src="/more2.png" className='w-5 cursor-pointer' />
                    </button> */}

                    {/* {isOpen &&
                        <div className='absolute top-0 right-0 text-istok-400'>
                            <div>
                                <div>
                                    Know more about {props.title}
                                </div>
                            </div>
                            <button className='cursor-pointer' onClick={() => { setIsOpen(false) }}>X</button>
                        </div>
                    } */}

                </div>

                <div className='text-sm'>{props.description}</div>

                <div className='flex flex-row gap-x-1.5 flex-wrap tracking-wide'>
                    {
                        props.tech.map((t) => (
                            <div className='text-xs text-black border-b-1 border-gray-500/80 rounded-lg py-0.5 px-1.5'>{t}</div>
                        ))
                    }
                </div>
            </div>

            <div className='flex items-center sm:justify-center sm:gap-x-2 gap-x-2 overflow-hidden'>
                {props.demo && (
                    <div>
                        <a href={props.demo} target="_blank" className="cursor-pointer">
                            <img src="/demo.png" className="sm:w-5 w-[22px]" />
                        </a>
                    </div>
                )}

                {props.link && (
                    <div>
                        <a href={props.link} target="_blank" className="cursor-pointer">
                            <img src="/link.png" className="sm:w-4 w-[18px]" />
                        </a>
                    </div>
                )}


            </div>
        </div >
    )
}


export default ProjectComponent