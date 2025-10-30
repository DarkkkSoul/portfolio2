import React from 'react'

function Blog({ title, description, link }) {
    return (
        <div className='bg-lime-300/60 p-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-101 transition-all duration-200 '>
            <div className='flex justify-between items-center'>
                <div className='text-lg font-semibold flex-1 pr-2 font-playfair'>{title}</div>
                <div className='flex-shrink-0'>
                    <a href={link} target='_blank' className='block cursor-pointer'>
                        <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                        </svg>
                    </a>
                </div>
            </div>
        </div >
    )
}

export default Blog