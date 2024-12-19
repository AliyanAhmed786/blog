import React from 'react'
import Image from 'next/image'
import ImageStack from '@/components/ImageStack'
import ClientCard from '@/components/BlogCard'
import CategoryCard from '@/components/CategoryCard'
import BlogPost from '../comments/page'

export default function page() {
  return (<div>
    <div className="relative w-full gap-4 py-10 lg:h-[520px] bg-[#31323C] flex flex-col lg:flex-row">
      {/* Text content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 text-white lg:w-1/2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Your Journey Your Car Your Way</h1>
        <p className="mt-4 text-lg">
          Lorem ipsum dolor sit amet consectetur. Diam volutpat morbi elementum vel euismod aliquam.
          Amet ultrices neque augue consectetur purus phasellus. Ullamcorper lorem montes varius amet
          vestibulum tellus facilisis consequat pretium. Et faucibus laoreet molestie diam semper fames
          diam eget.
        </p>
        <button className="mt-6 px-6 py-2 bg-[#FF5959] rounded text-white flex items-center gap-2 text-xl">
          Subscribe
          {/* Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <polygon points="3 11 22 2 13 21 11 13 3 11" />
          </svg>
        </button>
      </div>
      <div className="mt-4 lg:w-1/2 flex justify-center">
      <ImageStack/>
      </div>
    </div>
      <div className=' mx-10'>
        <div className='text-5xl my-10 '>All posts</div>
        <div className=''>
        <ClientCard
            imageSrc="/side1.jpg"
            text="A Review of Cars with Advanced Infotainment Systems"
            additionalImageSrc="/p2.jpg"
            clientName="Dasteen"
            description="Lorem ipsum dolor sit amet consectetur. Consectetur risus quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet. ommodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet."
            button="Read full article..."
            align="left"  // Change this to 'right' to switch the alignment of the image
/>
<ClientCard
            imageSrc="/side1.jpg"
            text="A Review of Cars with Advanced Infotainment Systems"
            additionalImageSrc="/p2.jpg"
            clientName="Dasteen"
            description="Lorem ipsum dolor sit amet consectetur. Consectetur risus quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet. ommodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet."
            button="Read full article..."
            align="left"  // Change this to 'right' to switch the alignment of the image
/>
<ClientCard
            imageSrc="/side1.jpg"
            text="A Review of Cars with Advanced Infotainment Systems"
            additionalImageSrc="/p2.jpg"
            clientName="Dasteen"
            description="Lorem ipsum dolor sit amet consectetur. Consectetur risus quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet. ommodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet."
            button="Read full article..."
            align="left"  // Change this to 'right' to switch the alignment of the image
/>
<ClientCard
            imageSrc="/side1.jpg"
            text="A Review of Cars with Advanced Infotainment Systems"
            additionalImageSrc="/p2.jpg"
            clientName="Dasteen"
            description="Lorem ipsum dolor sit amet consectetur. Consectetur risus quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet. ommodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet."
            button="Read full article..."
            align="left"  // Change this to 'right' to switch the alignment of the image
/>
<ClientCard
            imageSrc="/side1.jpg"
            text="A Review of Cars with Advanced Infotainment Systems"
            additionalImageSrc="/p2.jpg"
            clientName="Dasteen"
            description="Lorem ipsum dolor sit amet consectetur. Consectetur risus quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet. ommodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet."
            button="Read full article..."
            align="left"  // Change this to 'right' to switch the alignment of the image
/>
<ClientCard
            imageSrc="/side1.jpg"
            text="A Review of Cars with Advanced Infotainment Systems"
            additionalImageSrc="/p2.jpg"
            clientName="Dasteen"
            description="Lorem ipsum dolor sit amet consectetur. Consectetur risus quis diam hendrerit. Interdum mattis in sed diam egestas metus at duis commodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet. ommodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci neque quis porttitor eu amet."
            button="Read full article..."
            align="left"  // Change this to 'right' to switch the alignment of the image
/>

        </div>
        </div>
        <div className=' mx-10'>
          <p className='text-5xl font-bold'>Classic Revival: Revisiting Iconic Cars Through Modern Reviews</p>
          <div className='mx-7 my-7 flex flex-col gap-8'>
            <h2 className='text-4xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>

            <h2 className='text-4xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
          
            <h2 className='text-4xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>

            <div className='mx-7'>
            <ul className="text-3xl list-disc text-[#161722]">
              <li>Lorem ipsum dolor sit amet</li>
              <li className='text-3xl text-[#161722]'>Non blandit massa enim nec scelerisque</li>
              <li className='text-3xl text-[#161722]'>Neque egestas congue quisque egestas</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='w-full py-6 px-10'>
      <div className='text-3xl font-bold my-7'>
        All Category
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        <CategoryCard category='Car Reviews' description='Lorem ipsum dolor sit amet consectetur. Urna dignissim ac egeendrerit in.' image='/p2.jpg'/>
        <CategoryCard category='Car Reviews' description='Lorem ipsum dolor sit amet consectetur. Urna dignissim ac egeendrerit in.' image='/p2.jpg'/>
        <CategoryCard category='Car Reviews' description='Lorem ipsum dolor sit amet consectetur. Urna dignissim ac egeendrerit in.' image='/p2.jpg'/>
        <CategoryCard category='Car Reviews' description='Lorem ipsum dolor sit amet consectetur. Urna dignissim ac egeendrerit in.' image='/p2.jpg'/>
      </div>
    </div>
    <BlogPost params={{
            slug: ""
          }}/>
    </div>
  )
}
