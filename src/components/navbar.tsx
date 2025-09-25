import Image from 'next/image'
import React from 'react'

function NavBar() {
  return (
    <div className='w-full h-[100px] bg-white flex justify-between  items-center lg:p-15 sticky top-0 z-10 lg:gap-0 gap-10 p-8'>
        <div className=''>
            <Image src={"/mainlogo.png"} width={247} height={64} alt='Mainlogo' className=''/>
        </div>
        <div className='flex lg:gap-3 md:gap-2 gap-2 '>
            <Image src={"/SideLogo1.png"} width={97} height={40} alt='prime-logo'/>
            <Image src={"/SideLogo2.png"} width={97} height={40} alt='AASCB-logo'/>
        </div>
    </div>
  )
}

export default NavBar
