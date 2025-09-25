import React from 'react'

function VideoPlayer() {
    return (
        <div className='mt-20 flex justify-center items-center'>
            <iframe width="560" height="315" className='rounded-xl' src="https://www.youtube.com/embed/FjeWhFi-c4E?si=BwRHwYmj88gSqpV5" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
    )
}

export default VideoPlayer
