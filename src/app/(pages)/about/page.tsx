import React from 'react'
import Image from 'next/image'

export default function Page() {
  return (
    <div>
      <div className="w-full h-auto flex flex-col sm:flex-row">
        {/* Image Section */}
        <div className="w-full sm:w-1/2 flex justify-center">
          <Image 
            src="/a2.jpg" 
            alt="Logo" 
            width={500} 
            height={500} 
            className="object-contain w-full max-w-[550px] sm:max-w-none"
          />
        </div>

        {/* Text Content Section */}
        <div className="flex flex-col items-start justify-center h-full px-8 text-black w-full sm:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Your Journey Your Car Your Way
          </h1>
          <p className="mt-4 text-lg max-w-full sm:w-[450px] md:w-[500px]">
            Lorem ipsum dolor sit amet consectetur. Diam volutpat morbi elementum vel euismod aliquam.
            Amet ultrices neque augue consectetur purus phasellus. Ullamcorper lorem montes varius amet
            vestibulum tellus facilisis consequat pretium. Et faucibus laoreet molestie diam semper fames
            diam eget.
          </p>
        </div>
      </div>
    </div>
  )
}
