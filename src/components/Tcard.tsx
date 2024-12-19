"use client"
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import Image from 'next/image';

type ClientCardProps = {
  imageSrc: string;
  clientName: string;
  description: string;
  text: string;
  additionalImageSrc: string;  // Add an additional image source to switch between
};

const ClientCard: React.FC<ClientCardProps> = ({ imageSrc, clientName, description, additionalImageSrc, text }) => {
  const [currentImage, setCurrentImage] = React.useState(imageSrc);

  const changeImage = () => {
    setCurrentImage(currentImage === imageSrc ? additionalImageSrc : imageSrc);  // Toggle between images
  };

  return (
    <Card className="flex flex-col flex-grow p-4 m-3 bg-white shadow-md rounded-lg basis-56">
      {/* Image on top */}
      <div className="mb-4">
        <Image src={imageSrc} alt={clientName} width={300} height={300} className="rounded-sm" />
      </div>

      {/* Description */}
      <CardContent className="text-xl text-black">
        {description}
      </CardContent>

      {/* Client name and image section */}
      <CardHeader className="flex flex-row items-center gap-3">
        {/* Circular image */}
        <div> {/* Click to change image */}
          <Image
            src={additionalImageSrc} // Dynamically change image
            alt={"picture"}
            width={100}
            height={100}
            className="rounded-full cursor-pointer" // Add cursor to show that it's clickable
          />
        </div>
        
        {/* Client Name */}
        <CardTitle className="font-semibold text-slate-400 text-sm flex flex-col justify-start">{clientName}
        <CardContent className='flex'>
          {text}
        </CardContent>
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

export default ClientCard;
