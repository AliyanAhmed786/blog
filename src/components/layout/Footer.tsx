import React from 'react'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Button } from '../ui/button'

export default function Footer() {
  return (
    <div className='w-full h-auto bg-[#232536] px-2 pb-4 text-white'>
      {/* Logo and Privacy Policy */}
      <div className='flex items-center justify-between flex-wrap'>
        <div className="flex justify-start">
          <Image src="/logo.png" alt="Logo" width={150} height={150} className="object-contain" />
        </div>
        {/* Use flex-col for very small screens */}
        <div className="mt-4 sm:mt-0 text-sm sm:text-base flex sm:block justify-center sm:ml-auto">
          Privacy Policy
        </div>
      </div>

      {/* Newsletter Subscription Section */}
      <div className='h-auto bg-[#2A2B39] flex flex-col sm:flex-row justify-center p-8 sm:p-24 gap-8'>
        <h2 className='text-2xl sm:text-3xl text-center sm:text-left'>
          Subscribe to our newsletter to get the latest updates and news
        </h2>
        <div className='flex justify-center'>
          <Input className='bg-white w-full sm:w-64' type="email" placeholder="example@email.com" />
        </div>
        <Button type="submit" className='bg-[#FF5959] rounded text-white flex items-center gap-2 text-base sm:text-xl'>
          Subscribe
        </Button>
      </div>

      {/* Footer Contact & Social Media Section */}
      <div className='mx-12 mt-10 flex flex-col sm:flex-row justify-between gap-8 sm:gap-0'>
        <div className='text-center sm:text-left'>
          <p>Finstreet 118 2561 abctown</p>
          <p>example@femail.com  001 21345 442</p>
        </div>

        <div className='flex justify-center sm:justify-start gap-6'>
          <Image src="/_x30_1._Facebook.png" alt="Facebook" width={10} height={10} className="object-contain" />
          <Image src="/Twitter.png" alt="Twitter" width={15} height={15} className="object-contain" />
          <Image src="/Negative.png" alt="Instagram" width={20} height={20} className="object-contain" />
          <Image src="/Linkedin.png" alt="LinkedIn" width={15} height={15} className="object-contain" />
        </div>
      </div>
    </div>
  )
}
