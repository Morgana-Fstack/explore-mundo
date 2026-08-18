import React from 'react';
import { StarIcon } from './Icons';

interface TitleSectionProps {
  title: string;
  location: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({ title, location }) => {
  return (
    <div className="flex items-center mb-6">
      <div className="flex-grow">
        <h1 className="text-2xl md:text-3xl font-bold text-stone-900">
          {title}
        </h1>
        <p className="text-md text-stone-500 mt-1">{location}</p>
      </div>
      <div className="flex items-center space-x-1 flex-shrink-0">
        <StarIcon />
        <span className="text-lg font-semibold text-stone-700">41</span>
      </div>
    </div>
  );
};

export default TitleSection;
