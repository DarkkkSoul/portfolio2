function ProjectComponent(props) {
    return (
        <div className='w-full bg-lime-400/20 backdrop-blur-sm rounded-lg border border-white/60 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300' key={props.pid}>

            {/* image - no padding */}
            <div className='w-full aspect-[3/2] overflow-hidden'>
                <img src={props.image} alt={props.title} className='w-full h-full object-cover' />
            </div>

            {/* content */}
            <div className='p-3'>
                {/* title */}
                <h3 className='text-lg font-bold text-black font-playfair-700'>
                    {props.title}
                </h3>

                {/* description */}
                <p className='text-sm text-black/80 leading-tight mb-2 font-playfair'>
                    {props.description}
                </p>

                {/* tech stack */}
                <div className='flex flex-wrap gap-1 mb-2 font-inter'>
                    {props.tech.map((t, i) => (
                        <span key={i} className='text-xs bg-emerald-400/20 text-black px-1.5 py-0.5 rounded border border-black/10'>
                            {t}
                        </span>
                    ))}
                </div>

                {/* action buttons */}
                <div className='flex gap-1.5'>
                    {props.code && (
                        <a
                            href={props.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='inline-flex items-center gap-1 bg-zinc-200 font-inter-400 px-2 py-1 rounded text-xs font-medium hover:bg-black/40 hover:text-white transition-colors'
                        >
                            <img src='/Icons/github.png' className='w-3 h-3' alt="GitHub" />
                            Source
                        </a>
                    )}
                    {props.demo && (
                        <a
                            href={props.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='inline-flex items-center gap-1 bg-zinc-200 font-inter-400 px-2 py-1 rounded text-xs font-medium hover:bg-black/40 hover:text-white transition-colors'
                        >
                            <img src='/utils/demo.png' className='w-3 h-3' alt="Demo" />
                            Demo
                        </a>
                    )}
                    {props.link && (
                        <a
                            href={props.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='inline-flex items-center gap-1 bg-zinc-200 font-inter-400 px-2 py-1 rounded text-xs font-medium hover:bg-black/40 hover:text-white transition-colors'
                        >
                            <img src='/utils/link.png' className='w-3 h-3' alt="Website" />
                            Website
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}


export default ProjectComponent