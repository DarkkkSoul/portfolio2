import React, { useEffect, useState } from 'react'
import '../styles/bento.css'
import { useModal } from '../Context/ModalContext';
import blogArray from '../Arrays/blogs';
import Blog from './Blog';
import musicArray from '../Arrays/musics';

function NewBento() {
    // copy
    const [isCopied, setIsCopied] = useState(false);
    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setIsCopied(true);
        console.log(isCopied);
    }
    useEffect(() => {
        if (isCopied) {
            setTimeout(() => {
                setIsCopied(false);
            }, 800);
        }
    }, [isCopied]);


    // time
    const [time, setTime] = useState();
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toTimeString().split(' ')[0]);
        }, 1000);

        return () => clearInterval(interval);
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

    // music
    const [music, setMusic] = useState('');
    let [musicIndex, setMusicIndex] = useState(0);
    const handleMusic = () => {
        let next = musicIndex + 1;
        if (next > musicArray.length - 1) next = 0;
        setMusicIndex(next);
        setMusic(musicArray[next]);
    }

    return (
        <div className="parent *:border *:border-white/70 *:shadow-lg/35 relative">

            <div className="div1 bg-lime-300/30 px-2 font-playfair flex flex-col py-3 gap-y-2">
                <div className="font-bold text-center">Tools I use</div>
                <ul className="list-disc list-inside space-y-0.5 text-sm pl-2">
                    <li className='hover:underline'>
                        <a href="https://www.figma.com" target='_blank'>Figma</a>
                    </li>
                    <li className='hover:underline'>
                        <a href="https://windsurf.com/" target='_blank'>Windsurf</a>
                    </li>
                    <li className='hover:underline'>
                        <a href="https://kiro.dev/" target='_blank'>Kiro</a>
                    </li>
                    <li className='hover:underline'>
                        <a href="https://insomnia.rest/" target='_blank'>Insomnia</a>
                    </li>
                    <li className='hover:underline'>
                        <a href="https://www.tldraw.com/" target='_blank'>tlDraw</a>
                    </li>
                </ul>
            </div>

            <div className='div2 flex flex-col justify-center items-center'>
                <a onClick={handleMusic} href={music} target='_blank'>
                    <img src="music/music.png" className='object-cover rounded-[0.5rem]' />
                </a>
            </div>

            <div className="div3 flex items-center justify-center text-4xl font-rubik relative bg-lime-300/30">
                <div className='absolute flex items-center gap-x-1.5 top-1.5 left-1.5'>
                    <img src="/utils/earth.png" className=' w-5 ' />
                    <div className='text-xs tracking-wide'>{day}</div>
                </div>
                {time}
                <div className='text-xs absolute bottom-1.5 right-1.5'>{year}</div>
            </div>

            <div className="div4 flex flex-col justify-center bg-lime-300/30">
                <div className='flex px-1 items-center justify-evenly relative'>
                    <a href="https://www.linkedin.com/in/maheshkgdev/" target='_blank' className='w-8 hover:scale-105 hover:-translate-y-2 transition-all cursor-pointer active:scale-90'><img src="/Icons/linkedin.png" /></a>
                    <a href="https://github.com/darkkksoul" target='_blank' className='w-8 hover:scale-105 hover:-translate-y-2 transition-all cursor-pointer active:scale-90'><img src="/Icons/github.png" /></a>
                    <img src="/Icons/discord.png" onClick={() => { handleCopy('darkk.soul_') }} className='w-8 hover:scale-105 hover:-translate-y-2 transition-all cursor-pointer active:scale-90' />
                    <img src="/Icons/gmail.png" onClick={() => { handleCopy('maheshh.kumar1508@gmail.com') }} className='w-8 hover:scale-105 hover:-translate-y-2 transition-all cursor-pointer active:scale-90' />
                    <a href="https://drive.google.com/file/d/13I3srbRVf7Z6zT26URq9cTKv0rniHiib/view?usp=sharing" target='_blank' className='w-7.5 hover:scale-105 hover:-translate-y-2 transition-all cursor-pointer active:scale-90'><img src="/Icons/resume.png" /></a>
                    <p className={`absolute -top-9 right-5 text-sm bg-white/80 p-1.5 leading-none rounded-md tracking-wide ${isCopied ? 'block' : 'hidden'} text-istok-400`}>copied!</p>
                </div>
            </div>

            <div className='div5 flex flex-col justify-center font-rubik bg-lime-300/30 '>
                <p className='text-lg pl-6'>I write</p>
                <p onClick={() => { setIsOpen(true) }} className='text-7xl underline underline-offset-4 cursor-pointer pl-11 relative'>Blogs
                    <img src="/utils/link.png" className='absolute top-2 right-7 w-4' />
                </p>
                {
                    isOpen &&
                    <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] flex items-center justify-center max-w-4xl min-w-4xl'>
                        <div className='relative w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-lime-200 to-green-300 rounded-xl shadow-2xl p-4 sm:pt-5 pb-7 px-7'>
                            <div className='w-full flex flex-col gap-y-3'>
                                <div className='text-xl sm:text-2xl text-lime-900 font-extrabold drop-shadow-md drop-shadow-amber-500 text-center sm:text-left font-manrope-400 tracking-wide'>
                                    Blogs
                                </div>
                                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-slate-900 scrollbar-track-slate-300'>
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
                    </div>
                }
            </div>

            <div className='div6 overflow-hidden'>
                <img src="/utils/Cute.jpeg" className='w-full h-full object-cover' />
            </div>
        </div>

    )
}

export default NewBento