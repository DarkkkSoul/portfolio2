import React from 'react'
import '../App.css'

function Bento() {
    console.log('in bento');
    return (
        <div className='css-bento w-ful h-full *:shadow-lg/35 *:bg-lime-300/30 text-istok-400'>
            <div className='css-novel flex flex-col justify-center pl-2'>
                <p className='text-md'>I read</p>
                <p className='text-4xl text-istok-700 underline '>Novels</p>
            </div>
            <div className='css-blog flex flex-col justify-center pl-3'>
                <p className='text-md'>I write</p>
                <p className='text-5xl text-istok-700 underline'>Blogs</p>
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