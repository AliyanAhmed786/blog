import React from 'react';

function Hero() {
  return (
    <div className="relative w-full h-[550px]">
      {/* Background image */}
      <div className="bg-[url('/bg1.jpg')] bg-cover bg-center w-full h-full absolute top-0 left-0"></div>
      
      {/* Text content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Your Journey Your Car Your Way</h1>
        <p className="mt-4 text-lg max-w-full sm:w-[450px] md:w-[500px]">
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
    </div>
  );
}

export default Hero;
