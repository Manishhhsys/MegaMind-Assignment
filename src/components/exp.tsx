import React from 'react'
import ToggleSwitch3 from './toggleswitch'
import { Carousel } from './ui/carousel'
import { CarouselDemo } from './carousel-demo'

function Exp() {
  return (
    <div className='mt-20 w-full '>
        <div className='flex justify-center'>
            <div className='w-[25%] flex-wrap font-bold text-5xl'>Case Insights & Key Projects</div>
            <div className='w-[60%] flex justify-end'>
                <ToggleSwitch3></ToggleSwitch3>
            </div>
        </div>
        <div>
            <CarouselDemo></CarouselDemo>
        </div>
    </div>
  )
}

export default Exp
