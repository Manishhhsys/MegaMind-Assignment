import React from 'react'
import { Button } from './ui/button'
import DownloadIcon from './icons/download'
import EmailIcon from './icons/email'
import PhoneIcon from './icons/phone'
import { LucideGithub, LucideLinkedin } from 'lucide-react'

interface FooterInterface{
  name:string,
  resumeUrl:string,
  email:string,
  phone:number

}

function Footer({name,resumeUrl,email,phone}:FooterInterface) {
  return (
    <div className=' w-full h-full bg-[#F7F6F5] p-10 flex justify-center items-center flex-col gap-10'>
        <div className='border rounded-xl flex flex-col justify-center items-center  bg-gradient-to-r from-[#F58232] to-[#EE4D3B] max-w-full md:w-[1254px] h-[254px] gap-6'>
            <div className='font-bold text-5xl text-white font-helveticDisplay'>Connect with {name}</div>
            <div><Button variant={'outline'} className='bg-white text-[#F58232] hover:text-[#F58232] p-6 font-bold text-base rounded-4xl font-helveticDisplay' onClick={()=>window.open(resumeUrl,"")}><DownloadIcon size={28} className='w-[28px] h-[24px] mr-2 fill-[#F58232] hover:text-[#F58232] '></DownloadIcon>Download My Resume</Button></div>
        </div>

        <div className='flex w-[1000px] justify-between items-center p-5'>
          <div className='flex gap-5'>
              <div className='flex justify-center items-center gap-2 text-[#8E8E93] font-helveticDisplay font-bold'><EmailIcon className={'text-[#8E8E93]'} ></EmailIcon>{email}</div>
              <div className='flex justify-center items-center gap-2 text-[#8E8E93] font-helveticDisplay font-bold'><PhoneIcon className={'text-[#8E8E93]'}></PhoneIcon>{phone}</div>
          </div>
          <div className='gap-5 flex'>
            <Button variant={'outline'} className='bg-transparent rounded-4xl text-[#8E8E93] p-5 border-[#8E8E93] border font-helveticDisplay text-base font-bold '><LucideGithub  ></LucideGithub>GitHub</Button>
            <Button variant={'outline'} className='bg-transparent rounded-4xl text-[#8E8E93] p-5 border-[#8E8E93] border font-helveticDisplay text-base font-bold'><LucideLinkedin></LucideLinkedin>LinkedIn</Button>
          </div>
        </div>
        <div className='w-[1000px] border-t-1 border-[#BDBEC2]'>

        </div>
        <div className='flex justify-center items-center gap-1 text-[#8E8E93] font-helveticDisplay'>
  <span className='text-lg'>&reg;</span>
  <span className='text-xl font-medium'>2024 MAHE B&apos;LRU</span>
</div>


    </div>
  )
}

export default Footer
