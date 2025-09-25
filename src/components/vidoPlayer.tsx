import React from 'react'

function VideoPlayer({videoLink}:{videoLink?:string}) {
    return (
        <div className='flex justify-center items-center p-10'>
            <iframe width="1254" height="676" className='rounded-xl' src={videoLink || "https://www.youtube.com/embed/yHaG_3ZOLpI?si=swpMzMZ0Q6jAHPW2"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
    )
}

export default VideoPlayer
