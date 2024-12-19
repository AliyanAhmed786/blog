import Image from 'next/image'
import React from 'react'

function SectionFive() {
  return (
    <div className='w-full  bg-[#232536] text-white px-4 flex flex-wrap py-14'>
      <div className=' flex flex-col gap-10'>
        <p className='text-2xl'>TESTIMONIALS</p>
        <h2 className='text-5xl font-bold'>What people say about our blog</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className=' mx-4'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className='my-24 flex gap-8'>
            <div>
            <Image src="/p2.jpg" alt="Logo" width={100} height={100} className="object-contain rounded-full" />
            </div>
            <div className=''>
            <h2>Jonathan Vallem</h2>
            <p>New York,</p>
            <p>USA</p>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default SectionFive
