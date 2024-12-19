// Import ShadCN components
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';

type ClientCardProps = {
  imageSrc: string;
  text: string;
  additionalImageSrc: string;
  clientName: string;
  description: string;
  button: string;
  align: 'left' | 'right';  // Decide where to place the image
};

export default function ClientCard({
  imageSrc,
  text,
  additionalImageSrc,
  clientName,
  description,
  button,
  align = 'left', // Default alignment is 'left'
}: ClientCardProps) {
  return (
    <Card className="client-card flex flex-col sm:flex-row my-5 py-4 px-4">
      {/* Left or Right Image */}
      <div className={`client-card__image sm:${align === 'right' ? 'order-last' : ''} sm:mr-4 mb-4 sm:mb-0`}>
        <img
          src={imageSrc}
          alt={clientName}
          className="w-full sm:w-[300px] h-[345px] object-cover rounded-lg"
        />
      </div>

      {/* Card Content (Text and Description) */}
      <div className="client-card__text flex flex-col gap-3 w-full sm:w-auto">
        <CardContent>
          <p className="text-2xl sm:text-3xl font-bold">{text}</p>
        </CardContent>

        {/* Optional Additional Image */}
        <div className="client-card__additional-image flex items-center gap-3">
          <img
            src={additionalImageSrc}
            alt={`${clientName}'s additional image`}
            className="w-16 h-16 rounded-full border-2 border-white"
          />
          <CardHeader>
            <CardTitle>{clientName}</CardTitle>
          </CardHeader>
        </div>

        <CardContent>
          <p className="text-base sm:text-lg text-justify">{description}</p>
        </CardContent>

        {/* Button */}
        <CardFooter>
          <button className="bg-[#FF5959] p-3 rounded-sm text-white w-full sm:w-auto">
            {button}
          </button>
        </CardFooter>
      </div>
    </Card>
  );
}
