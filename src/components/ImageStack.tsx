
// components/ImageStack.js

import Image from 'next/image';

const ImageStack = () => {
  return (
    <div className="image-stack w-full">
      {/* First Image (on top) */}
      <div className="image-stack__item image-stack__item--top">
        <Image 
          src="/w3.jpeg"
          alt="Picture 1"
          height={400} 
          width={200}  
          objectFit="cover"  
        />
      </div>

      {/* Second Image (shifted slightly to the right) */}
      <div className="image-stack__item image-stack__item--second">
        <Image 
          src="/w1.jpeg"
          alt="Picture 2"
          height={400} 
          width={200} 
          objectFit="cover"
        />
      </div>

      {/* Third Image (on top of second image) */}
      <div className="image-stack__item image-stack__item--third">
        <Image 
          src="/w2.jpeg"
          alt="Picture 3"
          height={400} 
          width={200} 
          objectFit="cover"
        />
      </div>

      {/* Fourth Image (at the bottom) */}
      <div className="image-stack__item image-stack__item--fourth">
        <Image 
          src="/w4.jpeg"
          alt="Picture 4"
          height={400} 
          width={200} 
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default ImageStack;