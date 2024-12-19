import React from 'react';
import { Card, CardContent, CardTitle } from './ui/card';
import Image from 'next/image';

type CategoryCardProps = {
  category: string;
  description: string;
  image: string;
};

const CategoryCard: React.FC<CategoryCardProps> = ({ category, description, image }) => {
  return (
    <div className="flex justify-center mb-6">
      <Card className="flex flex-col p-4 flex-grow mx-4 bg-white shadow-md rounded-lg sm:w-[270px] md:w-[300px] lg:w-[240px]">
        {/* Image */}
        <div className="mb-4 flex justify-center">
          <Image
            src={image}
            alt={category}
            width={150}
            height={150}
            className="rounded-full object-cover"
          />
        </div>

        {/* Category Title */}
        <CardTitle className="text-2xl text-center font-semibold">
          {category}
        </CardTitle>

        {/* Description */}
        <CardContent className="text-black text-center mt-2">
          {description}
        </CardContent>
      </Card>
    </div>
  );
};

export default CategoryCard;
