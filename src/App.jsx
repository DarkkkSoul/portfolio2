import ProjectComponent from './components/ProjectComponent';
import './styles/index.css';
import projects from './Arrays/projects.js';
import Bento from './components/Bento.jsx';
import Skills from './components/Skills.jsx';
import { useModal } from './Context/ModalContext.jsx';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
gsap.registerPlugin(useGSAP);
import SmBento from './components/SmBento.jsx';

function App() {

   useGSAP(() => {
      const ctx = gsap.context(() => {
         gsap.set('.gsap-animate', {
            yPercent: 50,
            autoAlpha: 0,
            willChange: 'transform, opacity',
            force3D: true,
         });

         requestAnimationFrame(() => {
            gsap.to('.gsap-animate', {
               yPercent: 0,
               autoAlpha: 1,
               duration: 0.9,
               stagger: 0.06,
               ease: 'power2.out',
               force3D: true,
               lazy: false,
               clearProps: 'willChange',
            });
         });
      });
      return () => ctx.revert();
   }, []);

   const { isOpen } = useModal();
   return (
      <div>
         {/* Under Development Tag */}
         <div className="fixed top-6 sm:top-9 left-1/2 transform -translate-x-1/2 z-50 bg-amber-400/70 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm sm:text-md font-semibold shadow-lg border border-amber-400/50 font-playfair-700 tracking-widest ">
            Under Development
         </div>

         {isOpen && (
            <div className="fixed inset-0 backdrop-blur-3xl bg-black/60 overflow-hidden" />
         )}

         <div className='bg-gradient-to-br from-lime-400 from-0% via-green-300 via-60% to-lime-900 h-full w-full flex items-center justify-center sm:p-5 p-4'>

            <div className='bg-white/30 backdrop-blur-lg w-94 sm:w-1/2 py-6 sm:py-10 px-5 sm:px-0 rounded-md flex flex-col items-center justify-center gap-y-6 '>

               {/* about me & image */}
               <div className=' flex sm:flex-row flex-col-reverse items-center justify-around sm:px-6 gap-y-4 font-inter gsap-animate'>

                  <div className='sm:w-2/3'>
                     <div className='flex flex-col sm:gap-y-1 gap-y-1.5'>
                        <div className='sm:text-3xl text-2xl text-lime-800 font-extrabold drop-shadow-md drop-shadow-amber-400 gsap-welcome font-manrope-600'>Welcomeoi,</div>

                        <p className='sm:text-lg text-md font-inter-400'>
                           私は (I’m) Mahesh a.k.a <span className='text-lime-800 font-extrabold'>Dark Soul</span>, a full stack developer, based in India.  I love building interactive & scalable products, I love structuring <span className='underline underline-offset-4 decoration-amber-700/80 decoration-2'>complex backends</span>. <br />I started my web development journey around Septermber 2024 where I built countless projects which made my foundations strong enough that I can learn any new things within days. <br />I work solo and fast, mostly with <span className='underline underline-offset-4 decoration-yellow-400/80 decoration-[0.16rem]'>Javascript frameworks</span>.
                           You will see me posting about backend designing and exploring new technologies publically.
                           <br />Currently, I'm deep diving into React and planning to shift my career toward Gen AI where I can take my projects to next level by integrating AI.
                        </p>

                     </div>
                  </div>

                  <div className='sm:w-45 w-40 rounded-full gsap-image'>
                     <img src="/utils/ds.png" className='rounded-full' />
                  </div>
               </div>

               {/* projects */}
               <div className='w-full flex flex-col gap-y-4 sm:mt-5 mt-3 gsap-animate'>
                  <div className='sm:px-13 px-1 sm:text-2xl text-xl text-lime-800 font-extrabold drop-shadow-md drop-shadow-amber-400 font-manrope'>Projects I've Built</div>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto px-4 sm:px-0'>
                     {
                        projects.map((project) => (
                           <ProjectComponent key={project.pid} id={project.pid} title={project.title} description={project.description} tech={project.tech} link={project.link} demo={project.demo} code={project.code} image={project.image} />
                        ))
                     }
                  </div>
               </div>

               {/* skills */}
               <div className='sm:px-13 sm:mt-1 gsap-animate'>
                  <Skills />
               </div>

               {/* rengoku */}
               <div className='font-manrope-400 sm:text-lg text-md tracking-normal sm:mt-2 mt-3 gsap-animate'>
                  <div className='inline'>
                     I love designing bento styled websites, just like how <span className='[filter:drop-shadow(0_0_3px_#facc15)_drop-shadow(0_0_6px_#f43f5e)] font-bold'>Rengoku</span> loves to eat ekiben <span className='inline-block align-middle'> <img src="/utils/sound.png" className='sm:w-5 w-6 cursor-pointer' onClick={() => { document.getElementById('sound1').play() }} /></span>.
                     <audio id='sound1' src="/utils/umai.mp3"></audio>
                  </div>
               </div>

               {/* bento */}
               <div className='w-full sm:mt-4 gsap-animate hidden sm:block relative'>
                  <img src="/utils/construction.png" alt="" className='absolute top-9 -rotate-10 left-100 w-8 z-10' />
                  <img src="/utils/painting.png" alt="" className='absolute bottom-11 right-120 w-10 z-10' />
                  <img src="/utils/roller.png" alt="" className='absolute top-32 right-80 w-10 z-10 -rotate-30' />

                  <div className='blur-md'>
                     <Bento />
                  </div>
               </div>
               <div className='gsap-animate sm:hidden block relative'>
                  <img src="/utils/construction.png" alt="" className='absolute top-10 left-5 -rotate-10 w-7 z-10 ' />
                  <img src="/utils/painting.png" alt="" className='absolute bottom-11 right-16 w-9 -rotate-5 z-10' />
                  <img src="/utils/roller.png" alt="" className='absolute top-30 right-11 w-8 -rotate-30 z-10' />

                  <div className='blur-sm'>
                     <SmBento />
                  </div>
               </div>

               {/* Hire me */}
               <div className='sm:px-13 flex flex-col gap-y-1 mt-3 gsap-animate'>
                  <div className='sm:text-2xl text-xl text-lime-800 font-manrope drop-shadow-md drop-shadow-amber-400 mb-1'>Hire me</div>
                  <div className='text-md sm:text-lg font-inter-400'>
                     <div>Have an idea? I can bring it live within weeks. Looking for a person who has immense attraction towards coding? I’m here. I’m available for internships & freelancing gigs.</div>
                     <div className='font-bold'>I code first, talk later.</div>
                  </div>
               </div>

               {/* footer */}
               <div className='w-full flex flex-col gap-y-3 items-center justify-around mt-3 font-inter-400 sm:text-sm text-xs gsap-animate'>
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