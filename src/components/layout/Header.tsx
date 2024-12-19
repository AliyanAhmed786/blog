import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <div className='w-full z-10 flex justify-between bg-[#232536] h-[80px]'>
      <div className="flex items-center justify-center">
  <Image src="/logo.png" alt="Logo" width={150} height={150} className="object-contain" />
</div>
      <ul className='hidden md:flex gap-7 py-6 mx-10 list-none text-white cursor-pointer '>
      <li className='hover:text-[#FF5959]'><Link href="/">Home</Link></li>
      <li className='hover:text-[#FF5959]'><Link href="/blog">Blog</Link></li>
      <li className='hover:text-[#FF5959]'><Link href="/about">About</Link></li>
      <li className='hover:text-[#FF5959]'><Link href="/contact">Contact Us</Link></li>
      </ul>
      <Sheet>
        <SheetTrigger className="md:hidden">
            <Menu className='text-white' />
        </SheetTrigger>
        <SheetContent>
        <ul className='flex flex-col gap-1 list-none'>
        <li className='hover:text-[#FF5959]'><Link href="/">Home</Link></li>
      <li className='hover:text-[#FF5959]'><Link href="/blog">Blog</Link></li>
      <li className='hover:text-[#FF5959]'><Link href="/about">About</Link></li>
      <li className='hover:text-[#FF5959]'><Link href="/contact">Contact Us</Link></li>
      </ul>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default Header
