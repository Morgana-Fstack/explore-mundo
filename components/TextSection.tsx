import React from 'react';

interface TextSectionProps {
  description: string;
}

const TextSection: React.FC<TextSectionProps> = ({ description }) => {
  return (
    <div>
      <p className="text-stone-600 leading-relaxed text-justify">
        {description}
      </p>
    </div>
  );
};

export default TextSection;
