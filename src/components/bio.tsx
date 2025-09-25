import React from 'react'

function Bio({bio}:{bio:string}) {
  return (
    <div className='w-[1242px] h-[264px] flex justify-center flex-wrap p-10'>
          <p className='text-2xl font-HelveticaNeueBlack font-normal text-[#6E6E73]'>{bio}</p>
      </div>
  )
}

export default Bio
