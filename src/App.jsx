import ProjectComponent from './components/ProjectComponent';
import './index.css';
import projects from './Arrays/projects.js';
import Bento from './components/Bento.jsx';
import Skills from './components/Skills.jsx';

function App() {
    return (
        <div className='bg-gradient-to-br from-lime-400 from-0% via-green-300 via-60% to-lime-900 h-full w-full flex items-center justify-center p-10'>

            <div className='bg-white/30 backdrop-blur-lg w-1/2 py-10 px-5 rounded-md flex flex-col items-center justify-center gap-y-7'>

                {/* about me & image */}

                <div className='flex items-center justify-between px-5 text-istok-400'>
                    <div className='text-lg w-2/3'>
                        <div className='flex flex-col'>
                            <div className='text-3xl'>Welcomeoi,</div>
                            <p>
                                Hey! I'm <span className='text-lime-600 font-extrabold'>Dark Soul</span> a.k.a Mahesh, a 19 year old web developer from India. I love building <span className='font-extrabold'>interactive, unique and scalable</span> interfaces using  <span className='text-lime-600 font-extrabold'>MERN</span> stack.
                                I work solo and fast mostly with Javascript frameworks. btw I love bento styled websites.
                                Apart from coding, I love watching Minecraft videos.
                            </p>
                        </div>
                    </div>

                    <div className='w-45 rounded-full'>
                        <img src="/ds.png" className='rounded-full' />
                    </div>
                </div>

                <div className='max-w-2xl'>
                    <Skills />
                </div>


                {/* bento */}
                <div className='w-full'>
                    <Bento />
                </div>

                <div>
                    <div className='text-2xl'>Projects</div>
                    <div className='grid grid-cols-1 gap-y-6'>
                        {
                            projects.map((project) => (
                                <ProjectComponent key={project.pid} id={project.pid} title={project.title} description={project.description} tech={project.tech} image={project.image} />
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App  