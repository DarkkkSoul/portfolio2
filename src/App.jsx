import ProjectComponent from './components/ProjectComponent';
import './index.css';
import projects from './Arrays/projects.js';
import Bento from './components/Bento.jsx';
import Skills from './components/Skills.jsx';
import { useModal } from './Context/ModalContext.jsx';

function App() {
    const { isOpen } = useModal();
    return (
        <div>
            {isOpen && (
                <div className="fixed inset-0 backdrop-blur-lg bg-black/50 overflow-hidden" />
            )}
            <div className='bg-gradient-to-br from-lime-400 from-0% via-green-300 via-60% to-lime-900 h-full w-full flex items-center justify-center p-10'>


                <div className='bg-white/30 backdrop-blur-lg w-1/2 py-10 px-5 rounded-md flex flex-col items-center justify-center gap-y-6'>

                    {/* about me & image */}
                    <div className='flex items-center justify-between px-5 text-istok-400'>
                        <div className='w-2/3'>
                            <div className='flex flex-col gap-y-1'>
                                <div className='text-3xl text-lime-800 font-extrabold drop-shadow-md drop-shadow-amber-400'>Welcomeoi,</div>
                                <p className='text-lg tracking-tight'>
                                    Watashi wa (I’m) <span className='text-lime-800 font-extrabold'>Dark Soul</span> a.k.a Mahesh, a 19 year old web developer from India. I love building <span className='font-extrabold'>interactive, unique and scalable</span> interfaces using  <span className='text-lime-800 drop-shadow-lg drop-shadow-amber-200 font-extrabold'>MERN</span> stack. I work solo and fast, mostly with Javascript frameworks. Apart from coding, I love watching <span className='text-black font-semibold'>Minecraft</span> videos.
                                </p>
                            </div>
                        </div>

                        <div className='w-45 rounded-full'>
                            <img src="/ds.png" className='rounded-full' />
                        </div>
                    </div>

                    {/* skills */}
                    <div className='max-w-2xl flex flex-col text-istok-400 gap-y-4 mt-2'>
                        <div className='text-2xl text-center text-lime-800 font-extrabold drop-shadow-md drop-shadow-amber-400'>Skills</div>
                        <Skills />
                    </div>

                    {/* rengoku */}
                    <div className='text-istok-400 text-lg tracking-normal flex gap-x-1 items-center justify-center mt-6'>
                        <div>
                            I love designing bento styled websites, just like how <span className='[filter:drop-shadow(0_0_3px_#facc15)_drop-shadow(0_0_6px_#f43f5e)] font-bold'>Rengoku</span> loves to eat ekiben
                        </div>
                        <div>
                            <img src="/sound.png" className='w-5 cursor-pointer' />
                        </div>
                    </div>

                    {/* bento */}
                    <div className='w-full mt-4'>
                        <Bento />
                    </div>

                    {/* projects */}
                    <div className='text-istok-400 flex flex-col gap-y-5 mt-5'>
                        <div className='text-2xl text-center text-lime-800 font-extrabold drop-shadow-md drop-shadow-amber-400'>Projects</div>
                        <div className='grid grid-cols-1 gap-y-6'>
                            {
                                projects.map((project) => (
                                    <ProjectComponent key={project.pid} id={project.pid} title={project.title} description={project.description} tech={project.tech} image={project.image} demo={project.demo} source={project.source} />
                                ))
                            }
                        </div>
                    </div>

                    {/* working on */}
                    <div>
                        <div>Working On</div>
                    </div>

                    {/* footer */}
                    <div className='w-full flex flex-col gap-y-3 items-center justify-around mt-3 text-istok-400 text-sm'>
                        <hr className='w-2/3 border-1 border-lime-600 drop-shadow-lg ' />
                        <div className='flex flex-row gap-x-30'>
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