import React from 'react';
import ActionButton from './ActionButton';
import { CallIcon, RouteIcon, ShareIcon, QuoteIcon } from './Icons';

interface ButtonSectionProps {
  onQuoteClick: () => void;
}

const ButtonSection: React.FC<ButtonSectionProps> = ({ onQuoteClick }) => {
  return (
    <div className="py-6 border-y border-stone-200 mb-6">
      <div className="flex justify-around">
        <ActionButton icon={<CallIcon />} label="CALL" />
        <ActionButton icon={<RouteIcon />} label="ROUTE" />
        <ActionButton icon={<ShareIcon />} label="SHARE" />
        <ActionButton
          icon={<QuoteIcon />}
          label="ORÇAMENTO"
          onClick={onQuoteClick}
        />
      </div>
    </div>
  );
};

export default ButtonSection;
