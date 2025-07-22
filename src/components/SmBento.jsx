import React, { useEffect, useRef, useState } from 'react'
import '../App.css'
import Blog from './Blog'
import blogArray from '../Arrays/blogs'
import { useModal } from '../Context/ModalContext'
import musicArray from '../Arrays/musics'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { div } from 'motion/react-client'


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
      // <div className='w-full h-full text-istok-400'>

      //    <div className='shadow-lg/35 bg-lime-300/30'>
      //       <div className='text-3xl text-istok-700 '>20k+</div>
      //       <div className=''>lines coded</div>
      //    </div>

      //    <div className='flex flex-col shadow-lg/35 bg-lime-300/30'>
      //       <p className='text-md'>I write</p>
      //       <p onClick={() => { setIsOpen(true) }} className='text-5xl text-istok-700 underline cursor-pointer pl-3'>Blogs</p>
      //       {
      //          isOpen &&
      //          <div className='fixed inset-0 z-50 flex items-start justify-end p-4 sm:p-5 overflow-auto backdrop-blur-md bg-gradient-to-br from-lime-200 to-green-300 rounded-xl shadow-2xl'>
      //             <div className='w-full sm:w-3xl flex flex-col gap-y-3'>

      //                <div className='text-xl sm:text-2xl text-lime-900 font-extrabold drop-shadow-md drop-shadow-amber-500 text-center sm:text-left'>
      //                   Blogs
      //                </div>

      //                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-slate-900 scrollbar-track-slate-300'>
      //                   {blogArray.map((blog, i) => (
      //                      <Blog key={i} title={blog.title} description={blog.description} link={blog.link} />
      //                   ))}
      //                </div>
      //             </div>

      //             <button
      //                className='absolute top-2 right-2 sm:top-3 sm:right-3 z-50 cursor-pointer'
      //                onClick={() => setIsOpen(false)}
      //             >
      //                <img src="/close.png" className='w-8 sm:w-9' />
      //             </button>
      //          </div>
      //       }
      //    </div>

      //    <div>

      //    </div>

      //    <div>

      //    </div>

      //    <div>

      //    </div>
      // </div>
      <div></div>
   )
}

export default SmBento