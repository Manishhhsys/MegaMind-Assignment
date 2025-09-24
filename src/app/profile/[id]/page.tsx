"use client"

import { useParams } from 'next/navigation'
import React from 'react'
import EmailIcon from '@/components/icons/email'
import PhoneIcon from '@/components/icons/phone'
import { Button } from '@/components/ui/button'
import DownloadIcon from '@/components/icons/download'
import Image from 'next/image'
import PlayIcon from '@/components/icons/play'
import SkillsBar from '@/components/skills'

function page() {
  const params = useParams()
  const { id } = params

  return (
    <div>
    <div className="relative bg-gradient-to-r from-[#F58232] to-[#EE4D3B] h-[285px] w-full grid grid-cols-3">

      <div className="flex items-end m-10 gap-3 justify-center">
        <h5 className="font-helvetic font-bold text-base flex gap-2 text-white items-center">
          <EmailIcon /> Email
        </h5>
        <h5 className="font-helvetic font-bold text-base flex gap-2 text-white items-center">
          <PhoneIcon /> Phone
        </h5>
      </div>


      <div className="relative flex justify-center items-end">
        <div className="absolute -bottom-24 w-48 h-48 rounded-full border-4 border-white bg-white shadow-xl overflow-hidden">
          <Image
            src="/image/manish.jpeg"
            width={192}
            height={192}
            alt="Manish"
            className="object-cover w-full h-full"
          />
        </div>
      </div>


      <div className="flex items-end m-10 gap-3 justify-center">
        <Button variant="outline" className="font-helvetic text-base font-bold text-white">
          <DownloadIcon /> Download My Resume
        </Button>
      </div>
      
    </div>
       <div className='w-full flex flex-col justify-center items-center mt-30'>
        <div className='font-helvetic font-bold text-5xl'>
              Manish Kumar
        </div>
        <div className='font-normal font-helvetic text-3xl mt-2'>
          Male | 25 | He/Him
        </div>
        <div className='mt-8'>
          <Button className='bg-[#F58232] font-helvetic rounded-4xl font-bold text-base text-white p-7 w-[289px] h-[48px]'><PlayIcon className="w-8 h-8 md:w-10 md:h-10"></PlayIcon>Watch my Visual Resume Now</Button>
        </div>
    </div>
      <div className='flex justify-center items-center'>
        <SkillsBar></SkillsBar>
      </div>
      </div>
  )
}

export default page
