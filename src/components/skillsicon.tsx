import skillsIcondata from '@/config/skillsIcondata'
import React from 'react'

function SkillsIcon() {
  return (
    <div className='lg:grid lg:grid-cols-8 lg:rounded-lg lg:w-full lg:gap-3 lg:p-5  mt-40 grid grid-cols-8 text-[10px] gap-2'>
      {skillsIcondata.map((data, index) => (
        <div key={index} className='flex justify-center items-center'>
          {data.iconCompoment}
        </div>
      ))}
    </div>
  )
}

export default SkillsIcon
