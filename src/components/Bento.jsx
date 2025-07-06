import React, { useState } from 'react'
import '../App.css'
import Blog from './Blog'
import blogArray from '../Arrays/blogs'
import { useModal } from '../Context/ModalContext'

function Bento() {

  const { isOpen, setIsOpen } = useModal();

  return (
    <div className='css-bento w-ful h-full *:shadow-lg/35 *:bg-lime-300/30 text-istok-400'>
      <div className='css-novel flex flex-col justify-center pl-2'>
        <p className='text-md'>I read</p>
        <p className='text-4xl text-istok-700 underline '>Novels</p>
      </div>
      <div className='css-blog flex flex-col justify-center pl-3'>
        <p className='text-md'>I write</p>
        <p onClick={() => { setIsOpen(true) }} className='text-5xl text-istok-700 underline cursor-pointer'>Blogs</p>

        {
          isOpen &&

          <div className='fixed top-70 bottom-64 left-5 right-5 z-50 flex backdrop-blur-md bg-gradient-to-bl from-lime-400 via-green-400 to-lime-500 rounded-xl shadow-2xl/50 p-5'>
            <div className='flex flex-col gap-y-3'>

              <div className='text-2xl text-center text-lime-900 font-extrabold drop-shadow-md drop-shadow-amber-500'>Blogs</div>
              <div className='grid grid-cols-3 gap-2.5 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-slate-900 scrollbar-track-slate-300 '>
                {blogArray.map((blog) => (
                  <Blog title={blog.title} description={blog.description} link={blog.link} />
                ))}
              </div>

            </div>
            <button className='cursor-pointer fixed -top-4 -right-4' onClick={() => { setIsOpen(false) }}>
              <img src="/close.png" className='w-9' />
            </button>
          </div>
        }

      </div>
      <div className='css-image flex flex-col justify-center items-center'>
        {/* <img src="/mahesh.jpeg" className='rounded-xl' /> */}
      </div>
      <div className='css-social flex *:w-8 px-1 items-center justify-evenly *:hover:scale-105 *:hover:-translate-y-2 *:transition-all'>
        {/* darkk.soul_ */}
        <a href="https://www.linkedin.com/in/maheshhkumarg/" target='_blank'><img src="/Icons/linkedin.png" /></a>
        <a href="https://github.com/darkkksoul" target='_blank'><img src="/Icons/github.png" /></a>
        <a href="https://x.com/drcsoul" target='_blank'><img src="/Icons/x.png" /></a>
        <a href="" target='_blank'><img src="/Icons/discord.png" /></a>
        <a href="" target='_blank'><img src="/Icons/gmail.png" /></a>
      </div>
      <div className='css-music'>Music</div>
    </div>
  )
}

export default Bento