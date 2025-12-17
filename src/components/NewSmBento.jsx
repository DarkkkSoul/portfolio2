import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useModal } from '../Context/ModalContext';
import blogArray from '../Arrays/blogs';
import musicArray from '../Arrays/musics';
import Blog from './Blog';

function NewSmBento() {

    // social
    const [isCopied, setIsCopied] = useState(false);
    const handleCopy = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            setIsCopied(true);
            alert('Email copied to clipboard.');
        } catch {
            const textArea = document.createElement("textarea");
            textArea.value = text;

            textArea.style.position = "fixed";
            textArea.style.top = 0;
            textArea.style.left = 0;

            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();

            try {
                const successful = document.execCommand('copy');
                if (successful) {
                    setIsCopied(true);
                    alert('Email copied to clipboard.');
                } else {
                    throw new Error('Fallback copy failed.');
                }
            } catch (fallbackErr) {
                console.error('Copy failed', fallbackErr);
                alert('Failed to copy email. Please copy manually.');
            }

            document.body.removeChild(textArea);
        }
    };

    // time
    const [time, setTime] = useState();
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toTimeString().split(' ')[0]);
        }, 1000);

        () => clearInterval(interval);
    }, []);

    const [day, setDay] = useState('');
    useEffect(() => {
        const updateDate = () => {
            const now = new Date();
            const formatted = now.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
            });
            setDay(formatted);
        };
        updateDate();
        const interval = setInterval(updateDate, 86400000);
        return () => clearInterval(interval);
    }, []);

    const [year, setYear] = useState();
    useEffect(() => {
        const updateYear = () => {
            const now = new Date();
            const formatted = now.getFullYear();
            setYear(formatted);
        };
        updateYear();
        const interval = setInterval(updateYear, 86400000);
        return () => clearInterval(interval);
    }, [])

    // blog
    const { isOpen, setIsOpen } = useModal();

    //music
    const [music, setMusic] = useState('');
    let [musicIndex, setMusicIndex] = useState(0);
    const handleMusic = () => {
        let next = musicIndex + 1;
        if (next > musicArray.length - 1) next = 0;
        setMusicIndex(next);
        setMusic(musicArray[next]);
    }


    return (
        <div className='sm-parent *:border *:border-white/70 *:shadow-lg/35 relative'>

            <div className='d1 flex flex-col items-center justify-evenly bg-lime-300/30'>
                <a href="https://www.linkedin.com/in/maheshkgdev/" target='_blank' className='w-8'><img src="/Icons/linkedin.png" /></a>
                <a href="https://github.com/darkkksoul" target='_blank' className='w-8'><img src="/Icons/github.png" /></a>
                <img src="/Icons/gmail.png" onClick={() => handleCopy('maheshh.kumar1508@gmail.com')} className='w-8' />
                <a href="https://drive.google.com/file/d/1dcbpIeedksKAY6yg8mwrmJIYSmBFc5R9/view?usp=sharing" target='_blank' className='w-7.5'><img src="/Icons/resume.png" /></a>
            </div>

            <div className='d2 flex flex-col justify-center items-center'>
                <a onClick={handleMusic} href={music} target='_blank'>
                    <img src="music/music.png" className='object-cover rounded-[0.5rem]' />
                </a>
            </div>

            <div className="d3 flex items-center justify-center text-3xl font-rubik relative bg-lime-300/30">
                <div className='absolute flex items-center gap-x-0.5 top-1.5 left-1'>
                    <img src="/utils/earth.png" className=' w-4 ' />
                    <div className='text-xs tracking-wide'>{day}</div>
                </div>
                {time}
                <div className='text-xs absolute bottom-1 right-1'>{year}</div>
            </div>

            <div className='d4 flex flex-col justify-center font-rubik bg-lime-300/30'>
                <p className='text-sm pl-4'>I write</p>
                <p onClick={() => { setIsOpen(true) }} className='text-5xl underline underline-offset-4 cursor-pointer pl-6 relative'>Blogs
                    <img src="/utils/link.png" className='absolute top-1 right-2 w-3' />
                </p>

                {
                    isOpen &&
                    <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[999] flex p-4 sm:pt-5 pb-7 px-7 bg-gradient-to-br from-lime-200 to-green-300 rounded-xl shadow-2xl min-w-xs max-w-xs'>
                        <div className='w-full flex flex-col gap-y-3'>
                            <div className='text-xl text-lime-900 font-extrabold drop-shadow-md drop-shadow-amber-500 text-center font-manrope-400 tracking-wide'>
                                Blogs
                            </div>
                            <div className='grid grid-cols-1 gap-2.5 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-slate-900 scrollbar-track-slate-300'>
                                {blogArray.map((blog, i) => (
                                    <Blog key={i} title={blog.title} description={blog.description} link={blog.link} />
                                ))}
                            </div>
                        </div>

                        <button
                            className='absolute top-2 right-2 sm:top-3 sm:right-3 z-50 cursor-pointer'
                            onClick={() => setIsOpen(false)}
                        >
                            <img src="/utils/close.png" className='w-8 sm:w-9' />
                        </button>
                    </div>
                }
            </div>

            <div className='d5 overflow-hidden'>
                <img src="/utils/Cute.jpeg" className='w-full h-full object-cover' />
            </div>
        </div>
    )
}

export default NewSmBento