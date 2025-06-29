import React from 'react'
import '../App.css'

function Bento() {
    console.log('in bento');
    return (
        <div className='css-bento w-ful h-full *:shadow-lg/35 *:bg-lime-400/50'>
            <div className='css-novel'>Novels</div>
            <div className='css-blog'>Blog</div>
            <div className='css-image'>My Image</div>
            <div className='css-social'>Socials</div>
            <div className='css-music'>Music</div>
        </div>
    )
}

export default Bento