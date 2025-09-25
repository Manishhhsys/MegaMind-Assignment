import skillsIcondata from '@/config/skillsIcondata'
import React from 'react'

function SkillsIcon() {
  return (
    <div className='grid grid-cols-8 rounded-lg w-full gap-3 p-5'>
      {skillsIcondata.map((data, index) => (
        <div key={index} className='flex justify-center items-center'>
          {data.iconCompoment}
        </div>
      ))}
    </div>
  )
}

export default SkillsIcon
