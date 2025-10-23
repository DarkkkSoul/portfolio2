import ProjectComponent from './components/ProjectComponent';
import './index.css';
import projects from './Arrays/projects.js';
import Bento from './components/Bento.jsx';
import Skills from './components/Skills.jsx';
import { useModal } from './Context/ModalContext.jsx';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
gsap.registerPlugin(useGSAP);
import SmBento from './components/SmBento.jsx';

function App() {

   // useGSAP(() => {
   //    const ctx = gsap.context(() => {
   //       gsap.set('.gsap-animate', {
   //          yPercent: 50,
   //          autoAlpha: 0,
   //          willChange: 'transform, opacity',
   //          force3D: true,
   //       });

   //       requestAnimationFrame(() => {
   //          gsap.to('.gsap-animate', {
   //             yPercent: 0,
   //             autoAlpha: 1,
   //             duration: 0.9,
   //             stagger: 0.06,
   //             ease: 'power2.out',
   //             force3D: true,
   //             lazy: false,
   //             clearProps: 'willChange',
   //          });
   //       });
   //    });
   //    return () => ctx.revert();
   // }, []);

   const { isOpen } = useModal();
   return (
      <div>
         {isOpen && (
            <div className="fixed inset-0 backdrop-blur-lg bg-black/50 overflow-hidden" />
         )}

         <div className='bg-gradient-to-br from-lime-400 from-0% via-green-300 via-60% to-lime-900 h-full w-full flex items-center justify-center sm:p-5 p-4'>

            <div className='bg-white/30 backdrop-blur-lg w-94 sm:w-1/2 py-6 sm:py-10 px-5 sm:px-0 rounded-md flex flex-col items-center justify-center gap-y-6 '>

               {/* about me & image */}
               <div className=' flex sm:flex-row flex-col-reverse items-center justify-around sm:px-6 gap-y-4 text-istok-400 gsap-animate'>

                  <div className='sm:w-2/3'>
                     <div className='flex flex-col sm:gap-y-1 gap-y-1.5'>
                        <div className='sm:text-3xl text-2xl text-lime-800 font-extrabold drop-shadow-md drop-shadow-amber-400 gsap-welcome'>Welcomeoi,</div>
                        <p className='sm:text-lg text-md text-sans'>
                           私は (I’m) Mahesh a.k.a <span className='text-lime-800 font-extrabold'>Dark Soul</span>, a 20 year old web developer based in India. I love building <span className='font-extrabold'>interactive, unique and scalable</span> products. I work solo and fast, mostly with Javascript frameworks.
                        </p>
                     </div>
                  </div>

                  <div className='sm:w-45 w-40 rounded-full gsap-image'>
                     <img src="/ds.png" className='rounded-full' />
                  </div>
               </div>

               {/* skills */}
               <div className=' sm:px-13 text-istok-400 sm:mt-1 gsap-animate'>
                  <Skills />
               </div>

               {/* Todo npm */}
               <div className="flex items-center gap-x-4 sm:mt-5 mt-6 mb-4 gap-3 bg-lime-300/30 text-black text-lg px-4 py-2 rounded-lg shadow-lg/27 shadow-amber-400/60 border-2 border-white/40  cursor-text select-all gsap-animate">
                  <code className='font-semibold'>npm i -g todo-in-cli</code>
                  <img
                     src="/copy.png"
                     className="w-5 cursor-pointer hover:scale-110 active:scale-95 transition-transform"
                     onClick={() => {
                        navigator.clipboard.writeText('npm i -g todo-in-cli');
                     }}
                     alt="Copy command"
                  />
               </div>


               {/* Hire me */}
               <div className='sm:px-13 flex flex-col text-istok-400 gap-y-1 sm:mt-2 gsap-animate'>
                  <div className='sm:text-2xl text-xl text-lime-800 font-extrabold drop-shadow-md drop-shadow-amber-400 mb-1'>Hire me</div>
                  <div className='text-md sm:text-lg tracking-normal text-sans'>
                     <div>Have an idea? I can bring it live within weeks. Looking for a person who has immense attraction towards coding? I’m here. I’m available for internships & freelancing gigs.</div>
                     <div className='font-bold'>I code first, talk later.</div>
                  </div>
               </div>

               {/* rengoku */}
               <div className='text-istok-400 sm:text-xl text-md tracking-normal sm:mt-2 mt-3 gsap-animate'>
                  <div className='inline'>
                     I love designing bento styled websites, just like how <span className='[filter:drop-shadow(0_0_3px_#facc15)_drop-shadow(0_0_6px_#f43f5e)] font-bold'>Rengoku</span> loves to eat ekiben <span className='inline-block align-middle'> <img src="/sound.png" className='sm:w-5 w-6 cursor-pointer' onClick={() => { document.getElementById('sound1').play() }} /></span>.
                     <audio id='sound1' src="/umai.mp3"></audio>
                  </div>
               </div>

               {/* bento */}
               <div className='w-full sm:mt-4 gsap-animate hidden sm:block'>
                  <Bento />
               </div>
               <div className='gsap-animate sm:hidden block'>
                  <SmBento />
               </div>


               {/* projects */}
               <div className='w-full flex flex-col text-istok-400 gap-y-5 sm:mt-5 mt-3 gsap-animate'>
                  <div className='px-13 sm:text-2xl text-xl text-lime-800 font-extrabold drop-shadow-md drop-shadow-amber-400'>Projects</div>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 items-start mx-auto'>
                     {
                        projects.map((project) => (
                           <ProjectComponent key={project.pid} id={project.pid} title={project.title} description={project.description} tech={project.tech} link={project.link} demo={project.demo} code={project.code} image={project.image} />
                        ))
                     }
                  </div>
               </div>

               {/* footer */}
               <div className='w-full flex flex-col gap-y-3 items-center justify-around mt-3 text-istok-400 sm:text-sm text-xs gsap-animate'>
                  <hr className='w-2/3 border-1 border-lime-600 drop-shadow-lg ' />
                  <div className='flex sm:flex-row flex-col items-center gap-x-30 gap-y-1'>
                     <div>Peace Out!</div>
                     <div>&copy; 2025. All rights reserved</div>
                  </div>
               </div>

            </div>
         </div>
      </div>
   );
}

export default App  