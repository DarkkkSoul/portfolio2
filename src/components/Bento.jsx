import React, { useEffect, useRef, useState } from 'react'
import '../App.css'
import Blog from './Blog'
import blogArray from '../Arrays/blogs'
import { useModal } from '../Context/ModalContext'
import musicArray from '../Arrays/musics'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Bento() {

   const { isOpen, setIsOpen } = useModal();
   const [isCopied, setIsCopied] = useState(false);
   const [music, setMusic] = useState('');
   let [musicIndex, setMusicIndex] = useState(0);

   useGSAP(() => {
      gsap.from('.gsap-copy', {
         yPercent: 30,
         opacity: 0,
         duration: 0.5,
      })
   }, [isCopied]);

   const handleMusic = () => {
      let next = musicIndex + 1;
      if (next > musicArray.length - 1) next = 0;
      setMusicIndex(next);
      setMusic(musicArray[next]);
   }

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

   useEffect(() => {
      if (isOpen) {
         document.body.style.overflow = 'hidden';
      } else {
         document.body.style.overflow = '';
      }
   }, [isOpen]);

   return (
      <div className='css-bento h-full *:shadow-lg/35 *:bg-lime-300/30 text-istok-400'>

         {/* Code lines */}
         <div className='css-novel pl-2 flex flex-col items-start justify-center'>
            <div className='text-4xl text-istok-700'>20k+</div>
            <div className='pl-5'>lines coded</div>
         </div>

         {/* Blog */}
         <div className='css-blog flex flex-col justify-center pl-3'>
            <p className='text-md'>I write</p>
            <p onClick={() => { setIsOpen(true) }} className='text-5xl text-istok-700 underline cursor-pointer pl-3'>Blogs</p>

            {
               isOpen &&
               <div className='fixed inset-0 z-50 flex items-start justify-end p-4 sm:p-5 overflow-auto backdrop-blur-md bg-gradient-to-br from-lime-200 to-green-300 rounded-xl shadow-2xl'>
                  <div className='w-full sm:w-3xl flex flex-col gap-y-3'>

                     <div className='text-xl sm:text-2xl text-lime-900 font-extrabold drop-shadow-md drop-shadow-amber-500 text-center sm:text-left'>
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
                     <img src="/close.png" className='w-8 sm:w-9' />
                  </button>
               </div>
            }
         </div>

         {/* okaru photo */}
         <div className='css-image flex flex-col justify-center items-center'>
            <img src="/ok.png" className='rounded-xl object-fit w-44' />
         </div>

         {/* socials */}
         <div className='css-social flex flex-col justify-center text-istok-400'>
            <div className='mx-auto text-md tracking-normal text-black font-extrabold'>Socials</div>
            <div className='flex px-1 items-center justify-evenly relative'>
               <a href="https://www.linkedin.com/in/maheshhkumarg/" target='_blank' className='w-8 hover:scale-105 hover:-translate-y-2 transition-all cursor-pointer active:scale-90'><img src="/Icons/linkedin.png" /></a>
               <a href="https://github.com/darkkksoul" target='_blank' className='w-8 hover:scale-105 hover:-translate-y-2 transition-all cursor-pointer active:scale-90'><img src="/Icons/github.png" /></a>
               <img src="/Icons/discord.png" onClick={() => { handleCopy('darkk.soul_') }} className='w-8 hover:scale-105 hover:-translate-y-2 transition-all cursor-pointer active:scale-90' />
               <img src="/Icons/gmail.png" onClick={() => { handleCopy('maheshh.kumar1508@gmail.com') }} className='w-8 hover:scale-105 hover:-translate-y-2 transition-all cursor-pointer active:scale-90' />
               <a href="https://drive.google.com/file/d/1jKg7SY_IY62QWwEwhHEHSAgoS3q9x3IL/view?usp=sharing" target='_blank' className='w-7.5 hover:scale-105 hover:-translate-y-2 transition-all cursor-pointer active:scale-90'><img src="/Icons/resume.png" /></a>
               <p className={`absolute -top-9 right-5 text-sm bg-white/80 p-1.5 leading-none rounded-md tracking-wide ${isCopied ? 'block' : 'hidden'} text-istok-400 gsap-copy`}>copied!</p>
            </div>
         </div>

         {/* Music */}
         <div className='css-music flex flex-col justify-center items-center'>
            <div>
               <a onClick={handleMusic} href={music} target='_blank'>
                  <img src="music/music.png" className='rounded-xl w-40' />
               </a>
            </div>
         </div>

      </div>
   )
}

export default Bento