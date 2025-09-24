import skillsdata from '@/config/skillsdata'
import React from 'react'

function SkillsBar() {
  return (
    <div className='grid grid-cols-5 border-[#E8E8ED] mt-8 rounded-lg h-[86px] w-[1242px] border p-5 gap-5 bg-white'>
        {skillsdata.map((data,index)=>(
            <div className='flex justify-center items-center text-center font-helvetic font-bold text-base text-[#666668]'>
                {data}
            </div>
        ))
        
        }
            
    </div>
  )
}

    export default SkillsBar
