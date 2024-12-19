import React from 'react'
import CategoryCard from './CategoryCard'
import Image from 'next/image'

function Category() {
  return (
    <div className='w-full  py-6 px-10'>
      <div className='text-3xl font-bold my-7'>
        All Category
      </div>
      <div className='flex flex-wrap justify-center'>
        <CategoryCard category='Car Reviews' description='Lorem ipsum dolor sit amet consectetur. Urna dignissim ac egeendrerit in.' image='/p2.jpg'/>
        <CategoryCard category='Car Reviews' description='Lorem ipsum dolor sit amet consectetur. Urna dignissim ac egeendrerit in.' image='/p2.jpg'/>
        <CategoryCard category='Car Reviews' description='Lorem ipsum dolor sit amet consectetur. Urna dignissim ac egeendrerit in.' image='/p2.jpg'/>
        <CategoryCard category='Car Reviews' description='Lorem ipsum dolor sit amet consectetur. Urna dignissim ac egeendrerit in.' image='/p2.jpg'/>
      </div>
    </div>
  )
}

export default Category
