import React from 'react'

function ProjectComponent(props) {
    return (
        <div className='w-full max-w-md sm:max-w-sm mx-auto rounded-xl border border-white/60 bg-lime-400/20 backdrop-blur-sm p-4 sm:p-4 shadow-2xl/45 hover:shadow-lg transition text-istok-400' key={props.pid}>

            <div className='flex flex-col gap-2'>

                {/* image */}
                <div className='w-full mb-1'>
                    <div className='relative rounded-lg aspect-[16/10] overflow-hidden'>
                        <img src={props.image} alt={props.title} className='w-full h-full object-cover' />
                    </div>
                </div>

                {/* title */}
                <div className='flex items-start pl-1'>
                    <div className='text-xl sm:text-xl tracking-normal font-extrabold text-black'>
                        {props.title}
                    </div>
                </div>

                {/* description */}
                <div className='text-sm sm:text-base text-black/80 leading-5.5 mb-1 pl-1'>
                    {props.description}
                </div>

                {/* tech */}
                <div className='flex flex-row gap-1.5 flex-wrap pl-1'>
                    {props.tech.map((t, i) => (
                        <div key={i} className='text-xs sm:text-sm text-black border-t border-b-zinc-100/70 border-b border-black/20 bg-emerald-400/10 backdrop-blur-md rounded-md py-1 px-2 shadow-lg/45'>
                            {t}
                        </div>
                    ))}
                </div>

                {/* links */}
                {(props.demo || props.link || props.code) && (
                    <div className='flex flex-col gap-1 pt-1 pl-1'>
                        <div className='text-sm font-semibold text-black/80'>Links:</div>
                        <div className='flex items-center gap-2 flex-wrap'>
                            {props.link && (
                                <a href={props.link} target="_blank" className='inline-flex items-center gap-1.5 rounded-md border-b border-b-white/90 bg-zinc-200 px-3 py-1 text-sm hover:bg-black/40 hover:text-white active:scale-95 transition cursor-pointer'>
                                    <img src='/link.png' className='w-4' />
                                    <span>Website</span>
                                </a>
                            )}
                            {props.demo && (
                                <a href={props.demo} target="_blank" className='inline-flex items-center gap-1.5 rounded-md border-b border-b-white/90 bg-zinc-200 px-3 py-1 text-sm hover:bg-black/40 hover:text-white active:scale-95 transition cursor-pointer'>
                                    <img src='/demo.png' className='w-4' />
                                    <span>Preview</span>
                                </a>
                            )}

                            {props.code && (
                                <a href={props.code} target="_blank" className='inline-flex items-center gap-1.5 rounded-md border-b border-b-white/90 bg-zinc-200 px-3 py-1 text-sm hover:bg-black/40 hover:text-white active:scale-95 transition cursor-pointer'>
                                    <img src='/Icons/github.png' className='w-4' />
                                    <span>Code</span>
                                </a>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}


export default ProjectComponent