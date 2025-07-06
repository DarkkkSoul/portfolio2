import React from 'react'

function Blog({ title, description, link }) {
    return (
        <div className='bg-lime-300/60 text-istok-400 p-3 rounded-md shadow-xl/25 flex flex-col gap-y-1 hover:shadow-sm/30 transition-all'>

            <div className='flex justify-between'>
                <div className='w-44 text-istok-700 text-md'>{title}</div>
                <div>
                    <a href={link} target='_blank'><img src="/view.png" className='w-4 pt-0.5' /></a>
                </div>
            </div>

            <div className='text-sm'>{description}</div>
        </div>
    )
}

export default Blog