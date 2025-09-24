import Image from 'next/image'
import React from 'react'

function NavBar() {
  return (
    <div className='w-full h-[100px] bg-amber-50 flex  items-center p-15 sticky top-0 z-1'>
        <div className='w-[85%]'>
            <Image src={"/mainlogo.png"} width={247} height={64} alt='Main-logo'/>
        </div>
        <div className='flex gap-3 '>
            <Image src={"/SideLogo1.png"} width={97} height={40} alt='prime-logo'/>
            <Image src={"/SideLogo2.png"} width={97} height={40} alt='AASCB-logo'/>
        </div>
    </div>
  )
}

export default NavBar
