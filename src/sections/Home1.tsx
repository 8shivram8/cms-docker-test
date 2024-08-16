'use client';


import React, { useState } from 'react'
import sampleVideo from '../app/assets/sample.mp4'

const Home1 = () => {

    const [isWatchVideo, setIsWatchVideo] = useState(false);

  return (
    <section id={'home'} className="home bg-white padding-0 scroll-smooth" style={{backgroundColor:'#050337'}}>
    <div className="py-16 px-4 mx-auto max-w-screen-xl text-center lg:py-32 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">At insightgen.ai, explore the Horizon of AI-Powered Innovation, Where Cutting-Edge Technology Drives Creativity and Transforms Everyday Challenges. With Gen AI, Unleash the Full Spectrum of Possibilities, Revolutionizing Industries and Enriching Lives.</p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="/contact" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-black hover:bg-secondary focus:ring-4 focus:ring-primary-300 dark:focus:#050337">
                Try for free
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" onClick={()=>setIsWatchVideo(true)} className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-500 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:bg-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                Watch video
            </a>  
        </div>
        {
            isWatchVideo && <div className='flex justify-center'>

<video width="320" height="240" controls preload="none" aria-label="Video player">
                <source src={sampleVideo} type="video/mp4" />
                Your browser does not support the video tag.
                {/* <track
        // src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag. */}
            </video>
                </div>
        }
    </div>
</section>
  )
}

export default Home1