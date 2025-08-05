import React, { useEffect, useRef, useState } from 'react'
import '../App.css'
import Blog from './Blog'
import blogArray from '../Arrays/blogs'
import { useModal } from '../Context/ModalContext'
import musicArray from '../Arrays/musics'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function SmBento() {

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
      <div className='css-sm-bento h-full *:shadow-lg/35 *:bg-lime-300/30 *:rounded-2xl text-istok-400'>

         {/* Socials */}
         <div className='css-sm-social flex flex-col items-center justify-evenly'>
            <a href="https://www.linkedin.com/in/maheshhkumarg/" target='_blank' className='w-8'><img src="/Icons/linkedin.png" /></a>
            <a href="https://github.com/darkkksoul" target='_blank' className='w-8'><img src="/Icons/github.png" /></a>
            <img src="/Icons/gmail.png" onClick={() => { handleCopy('maheshh.kumar1508@gmail.com') }} className='w-8' />
            <a href="https://drive.google.com/file/d/1B4ljFvLkta-UpOaGXlq7GY3kVQiqE_fH/view?usp=sharing" target='_blank' className='w-7.5'><img src="/Icons/resume.png" /></a>
         </div>

         {/* Lines */}
         <div className='css-sm-novel flex flex-col items-start justify-center'>
            <div className='text-3xl text-istok-700 pl-3'>20k+</div>
            <div className='pl-7 text-sm'>lines coded</div>
         </div>

         {/* Blogs */}
         <div className='css-sm-blog flex flex-col justify-center'>
            <div>
               <p className='text-sm pl-3'>I write</p>
               <p onClick={() => { setIsOpen(true) }} className='text-5xl text-istok-700 underline cursor-pointer pl-4'>Blogs</p>
            </div>

            {/* {
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
            } */}
         </div>

         <div className='css-sm-image flex flex-col justify-center items-center'>
            <img src="/ok.png" className='rounded-xl object-fill' />
         </div>

         <div className='css-sm-music'>
            song
         </div>

      </div>
   )
}

export default SmBento