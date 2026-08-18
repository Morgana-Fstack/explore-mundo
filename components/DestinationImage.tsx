import React from 'react';

interface DestinationImageProps {
  imageUrl: string;
  altText: string;
}

const DestinationImage: React.FC<DestinationImageProps> = ({
  imageUrl,
  altText,
}) => {
  return (
    <div className="w-full h-48 sm:h-64 md:h-80">
      <img
        src={imageUrl}
        alt={altText}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default DestinationImage;
