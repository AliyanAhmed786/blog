
import React from 'react'
import { Button } from './ui/button'
import Tcard from './Tcard'

function CardSection() {
  return (
    <div className='w-full py-8 px-10'>
      <div className='flex justify-between my-7'>
      <div className='text-3xl font-bold'>New Technology</div>
      <Button>See all</Button>
      </div>
      <div className='flex flex-wrap'>
        <Tcard clientName='Dasteen' description='A Review of Cars with Advanced Infotainment Systems' imageSrc='/side.jpg' additionalImageSrc='/p2.jpg' text='Jan 10, 2024'/>
        <Tcard clientName='Dasteen' description='A Review of Cars with Advanced Infotainment Systems' imageSrc='/side.jpg' additionalImageSrc='/p2.jpg' text='Jan 10, 2024'/>
        <Tcard clientName='Dasteen' description='A Review of Cars with Advanced Infotainment Systems' imageSrc='/side.jpg' additionalImageSrc='/p2.jpg' text='Jan 10, 2024'/>
        <Tcard clientName='Dasteen' description='A Review of Cars with Advanced Infotainment Systems' imageSrc='/side.jpg' additionalImageSrc='/p2.jpg' text='Jan 10, 2024'/>
        </div>
    </div>
  )
}

export default CardSection
