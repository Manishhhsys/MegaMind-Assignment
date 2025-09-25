import React from 'react'
import VideoPlayer from './vidoPlayer'

function VisualResume({videoUrl}:{videoUrl?:string}) {
  return (
    <div className=' w-full p-12'>
        <h2 className='w-full lg:text-5xl text-center font-helveticDisplay font-bold text-3xl'>Visual Resume</h2>
        <VideoPlayer videoLink={videoUrl}></VideoPlayer>
    </div>
  )
}

export default VisualResume
