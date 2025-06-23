import React from 'react'

function Terminal() {
   return (
      <div className='flex items-center justify-center '>

         <div className='bg-black/75 flex flex-col sm:gap-y-2 sm:pl-5 sm:pr-45 sm:pb-4 sm:pt-11 sm:text-lg text-sm rounded-md relative pt-9 pb-4 pl-3 pr-16 gap-y-3'>

            {/* header */}
            <div className='bg-black/40 text-white absolute top-0 right-0 left-0 flex sm:px-3 sm:py-2 px-1.5 py-1 rounded-t-md items-center justify-between'>
               <div>
                  <img src="/icons/stack/terminal.png" className='sm:w-7 w-5' />
               </div>
               <div className='sm:text-sm tracking-wider'>darksoul:zsh -- Konsole</div>
               <div className='flex gap-x-1'>
                  <div className='bg-red-600 sm:w-3 sm:h-3 h-2.5 w-2.5 rounded-full'></div>
                  <div className='bg-yellow-600 sm:w-3 sm:h-3 h-2.5 w-2.5 rounded-full'></div>
                  <div className='bg-green-600 sm:w-3 sm:h-3 h-2.5 w-2.5 rounded-full'></div>
               </div>
            </div>

            {/* syntax */}
            <div className='flex gap-x-2'>
               <div>
                  <span className='text-emerald-300'>mahesh@darksoul</span><span className='text-fuchsia-200'></span>:<span className='text-purple-600'>~</span><span className='text-fuchsia-200'>$</span>
               </div>
               <div className='flex gap-x-2.5'>
                  <div className='text-emerald-300'>ls</div>
                  <div className='text-red-400'>technologies</div>
               </div>
            </div>

            {/* stack */}
            <div>
               <div className='grid sm:grid-cols-5 sm:gap-x-4 sm:gap-y-5 sm:pl-3 grid-cols-3 pl-2 gap-y-2.5'>

                  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target='_blank'>
                     <img src="StackIcons/html.png" className='sm:w-12 w-11' />
                  </a>
                  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target='_blank'>
                     <img src="StackIcons/css.png" className='sm:w-12 w-11' />
                  </a>
                  <a href="https://tailwindcss.com/docs/installation/using-vite" target='_blank'>
                     <img src="StackIcons/tw.png" className='sm:w-12 w-11' />
                  </a>
                  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target='_blank'>
                     <img src="StackIcons/js.png" className='sm:w-12 w-11' />
                  </a>
                  <a href="https://react.dev/learn" target='_blank'>
                     <img src="StackIcons/rjs.png" className='sm:w-12 w-11' />
                  </a>
                  <a href="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html" target='_blank'>
                     <img src="StackIcons/ts.png" className='sm:w-12 w-11' />
                  </a>
                  <a href="https://nodejs.org/docs/latest/api/" target='_blank'>
                     <img src="StackIcons/node.png" className='sm:w-12 w-11' />
                  </a>
                  <a href="https://expressjs.com/" target='_blank'>
                     <img src="StackIcons/express.png" className='sm:w-12 w-11' />
                  </a>
                  <a href="https://www.mongodb.com/docs/" target='_blank'>
                     <img src="StackIcons/mongo.png" className='sm:w-12 w-11' />
                  </a>
                  <a href="https://vite.dev/guide/" target='_blank'>
                     <img src="StackIcons/vite.png" className='sm:w-12 w-11' />
                  </a>
                  <a href="https://www.markdownguide.org/getting-started/" target='_blank'>
                     <img src="StackIcons/markdown.png" className='sm:w-12 w-11' />
                  </a>
                  <a href="https://git-scm.com/doc" target='_blank'>
                     <img src="StackIcons/git.png" className='sm:w-12 w-11' />
                  </a>
               </div>

            </div>

            {/* syntax */}
            <div className='flex gap-x-3 items-center'>
               <div>
                  <span className='text-emerald-300 '>mahesh@darksoul</span><span className='text-fuchsia-200'></span>:<span className='text-purple-600'>~</span><span className='text-fuchsia-200'>$</span>
               </div>
               <div>
                  <div className='sm:w-1 sm:h-5.5 h-4 w-1 bg-white/80 blinker'></div>
               </div>
            </div>

         </div>
      </div >
   )
}

export default Terminal