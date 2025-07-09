import React, { useState } from 'react'
import '../App.css'
import Blog from './Blog'
import blogArray from '../Arrays/blogs'
import { useModal } from '../Context/ModalContext'
import musicArray from '../Arrays/musics'

function Bento() {

    const { isOpen, setIsOpen } = useModal();
    // const { isCopied, setIsCopied } = useState(false);
    const [music, setMusic] = useState('');

    const handleMusic = () => {
        // for (let i = 0; i <= musicArray.length; i++) {
        //     setMusic(musicArray[i]);
        //     console.log(music);
        // }
        let i = 0;
        setMusic(musicArray[i]);
        console.log(music)
        i = i + 1;
    }

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        alert('Copied to clipboard');
    }

    return (
        <div className='css-bento w-ful h-full *:shadow-lg/35 *:bg-lime-300/30 text-istok-400'>
            {/* Code lines */}
            <div className='css-novel flex flex-col justify-center pl-2'>
                <p className='text-md'><span className='text-3xl text-istok-700'>10k+</span> lines</p>
                <p className='text-md'>coded publicly</p>
            </div>

            {/* Blog */}
            <div className='css-blog flex flex-col justify-center pl-3'>
                <p className='text-md'>I write</p>
                <p onClick={() => { setIsOpen(true) }} className='text-5xl text-istok-700 underline cursor-pointer'>Blogs</p>

                {
                    isOpen &&
                    <div className='fixed top-70 bottom-64 left-5 right-5 z-50 flex backdrop-blur-md bg-gradient-to-br from-lime-500 from-0% via-green-300 via-60% to-lime-600 rounded-xl shadow-2xl/50 p-5'>
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

            {/* socials */}
            <div className='css-social flex *:w-8 px-1 items-center justify-evenly *:hover:scale-105 *:hover:-translate-y-2 *:transition-all *:cursor-pointer *:active:scale-90'>
                {/* darkk.soul_ */}
                <a href="https://www.linkedin.com/in/maheshhkumarg/" target='_blank'><img src="/Icons/linkedin.png" /></a>
                <a href="https://github.com/darkkksoul" target='_blank'><img src="/Icons/github.png" /></a>
                <a href="https://x.com/drcsoul" target='_blank'><img src="/Icons/x.png" /></a>
                <img src="/Icons/discord.png" onClick={() => { handleCopy('darkk.soul_') }} />
                <img src="/Icons/gmail.png" onClick={() => { handleCopy('maheshh.kumar1508@gmail.com') }} />
            </div>

            {/* Music */}
            <div className='css-music flex flex-col justify-center items-center'>
                <div>
                    <a onClick={handleMusic}>
                        <img src="music/music.png" className='rounded-xl w-40' />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Bento