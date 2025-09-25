import React from 'react'
import { Button } from './ui/button'
import DownloadIcon from './icons/download'
import EmailIcon from './icons/email'
import PhoneIcon from './icons/phone'
import { LucideGithub, LucideLinkedin } from 'lucide-react'

function Footer() {
  return (
    <div className=' w-full h-[793px] bg-[#F7F6F5] py-10 flex justify-center items-center flex-col gap-10'>
        <div className='border rounded-xl flex flex-col justify-center items-center  bg-gradient-to-r from-[#F58232] to-[#EE4D3B] px-6 py-6 w-[1254px] h-[254px] gap-6'>
            <div className='font-bold text-5xl text-white'>Connect with Saksham Arora</div>
            <div><Button variant={'outline'} className='bg-white text-[#F58232] hover:text-[#F58232] p-6 font-bold text-base rounded-4xl'><DownloadIcon className='w-[28px] h-[24px] mr-2 fill-[#F58232] hover:text-[#F58232] '></DownloadIcon>Download My Resume</Button></div>
        </div>

        <div className='flex w-[1000px] justify-between items-center p-5'>
          <div className='flex gap-5'>
              <div className='flex justify-center items-center gap-2 '><EmailIcon></EmailIcon>Email</div>
              <div className='flex justify-center items-center gap-2 '><PhoneIcon></PhoneIcon>Phone</div>
          </div>
          <div className=''>
            <Button variant={'outline'} className='bg-transparent rounded-4xl text-[#8E8E93] p-5 mr-3'><LucideGithub></LucideGithub>GitHub</Button>
            <Button variant={'outline'} className='bg-transparent rounded-4xl text-[#8E8E93] p-5'><LucideLinkedin></LucideLinkedin>LinkedIn</Button>
          </div>
        </div>
        <div className='w-[1000px] border-t-1 border-[#BDBEC2]'>

        </div>
        <div className='font-medium text-xs text-[#8E8E93] flex justify-center items-center'>
             <span className='text-2xl'>&reg;</span> 2024 MAHE B&apos;LRU
        </div>

    </div>
  )
}

export default Footer
