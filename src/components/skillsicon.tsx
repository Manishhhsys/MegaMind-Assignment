import skillsIcondata from '@/config/skillsIcondata'
import React from 'react'

function SkillsIcon() {
  return (
    <div className='grid grid-cols-8  mt-8 rounded-lg h-[86px] w-full p-5 gap-3 ml-5 '>
        {skillsIcondata.map((data,index)=>(
                <div key={index}>
          {data.iconCompoment}
        </div>
        ))

        }
        
    </div>
  )
}

export default SkillsIcon
