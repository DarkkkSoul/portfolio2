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

            <div className='bg-gradient-to-br from-lime-400 from-0% via-green-300 via-60% to-lime-900 h-full w-full flex items-center justify-center sm:p-10 p-4'>

                <div className='bg-white/30 backdrop-blur-lg w-94 sm:w-1/2 py-6 sm:py-10 px-5 rounded-md flex flex-col items-center justify-center gap-y-6'>

                    {/* about me & image */}
                    <div className='flex sm:flex-row flex-col-reverse items-center justify-between sm:px-5 gap-y-4 text-istok-400'>

                        <div className='sm:w-2/3'>
                            <div className='flex flex-col sm:gap-y-1 gap-y-1.5'>
                                <div className='sm:text-3xl text-2xl text-lime-800 font-extrabold drop-shadow-md drop-shadow-amber-400'>Welcomeoi,</div>
                                <p className='sm:text-lg text-md sm:tracking-tight'>
                                    Watashi wa (I’m) Mahesh a.k.a <span className='text-lime-800 font-extrabold'>Dark Soul</span>, a 19 year old web developer from India. I love building <span className='font-extrabold'>interactive, unique and scalable</span> interfaces using  <span className='text-lime-800 drop-shadow-lg drop-shadow-amber-200 font-extrabold'>MERN</span> stack. I work solo and fast, mostly with Javascript frameworks. Apart from coding, I love watching <span className='text-black font-semibold'>Minecraft</span> videos.
                                </p>
                            </div>
                        </div>

                        <div className='sm:w-45 w-40 rounded-full'>
                            <img src="/ds.png" className='rounded-full' />
                        </div>
                    </div>

                    {/* skills */}
                    <div className='max-w-2xl flex flex-col text-istok-400 sm:gap-y-4 gap-y-3 sm:mt-2'>
                        <div className='sm:text-2xl text-xl text-center text-lime-800 font-extrabold drop-shadow-md drop-shadow-amber-400'>Skills</div>
                        <Skills />
                    </div>

                    {/* rengoku */}
                    <div className='text-istok-400 sm:text-lg text-md tracking-normal mt-6'>
                        <div className='inline'>
                            I love designing bento styled websites, just like how <span className='[filter:drop-shadow(0_0_3px_#facc15)_drop-shadow(0_0_6px_#f43f5e)] font-bold'>Rengoku</span> loves to eat ekiben <span className='inline-block align-middle'> <img src="/sound.png" className='sm:w-5 w-6 cursor-pointer' onClick={() => { document.getElementById('sound1').play() }} /></span>.
                            <audio id='sound1' src="/umai.mp3"></audio>
                        </div>
                    </div>

                    {/* bento */}
                    <div className='w-full mt-4'>
                        <Bento />
                    </div>

                    {/* projects */}
                    {/* <div className='text-istok-400 flex flex-col gap-y-5 mt-5'>
                        <div className='text-2xl text-center text-lime-800 font-extrabold drop-shadow-md drop-shadow-amber-400'>Projects</div>
                        <div className='grid grid-cols-1 gap-y-6'>
                            {
                                projects.map((project) => (
                                    <ProjectComponent key={project.pid} id={project.pid} title={project.title} description={project.description} tech={project.tech} image={project.image} demo={project.demo} source={project.source} />
                                ))
                            }
                        </div>
                    </div> */}

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