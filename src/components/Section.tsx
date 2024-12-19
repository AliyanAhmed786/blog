import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import Scard from './Scard'
import Link from 'next/link'


function Section() {
  return (
    <div className='w-full my-12 flex flex-col lg:flex-row px-5'>
      <div className='lg:w-1/2 flex flex-col gap-7'><h2 className='text-5xl font-bold'>Latest</h2>
        <Image src="/image.jpg" alt="Logo" width={500} height={500} className="object-contain" />
        <p >
          <span>By John Doe</span>
          <span>|</span>
          <span>March 12, 2024</span>
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur aiscing elit, sed do eiusmod tempor.</p>
        <p className='flex text-justify'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          Duis aute irure dolor in reprehenderit in voluptate v
          Duis aute irure dolor in reprehenderit in volusse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          <Link href="/blog"><Button className=' bg-[#FF5959] rounded text-white w-64 h-[61px] text-xl'>
          Read More
        </Button></Link>
      </div>
      <div className='lg:w-1/2 md:w-[720px] sm:w-screen'>
        <div className='flex justify-between'>
          <h2 className='text-3xl md:text-5xl font-bold'>Trending Blog</h2>
          <Link href="/blog"><Button className='bg-white text-black mt-3'>see all</Button></Link>
        </div>
        <div>
          <Scard author='By John Deo ' date='Aug 23,2023' content='Lorem ipsum dolor sit amet,' extraText='consectetur adipiscing' />
          <Scard author='By John Deo ' date='Aug 23,2023' content='Lorem ipsum dolor sit amet,' extraText='consectetur adipiscing' color='#FF5959' />
          <Scard author='By John Deo ' date='Aug 23,2023' content='Lorem ipsum dolor sit amet,' extraText='consectetur adipiscing' />
          <Scard author='By John Deo ' date='Aug 23,2023' content='Lorem ipsum dolor sit amet,' extraText='consectetur adipiscing' />
        </div>
      </div>
    </div>
  )
}

export default Section
