import React from 'react';

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  icon,
  label,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center space-y-2 text-orange-600 hover:bg-orange-50 p-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
    >
      {icon}
      <span className="text-xs font-semibold uppercase tracking-wider">
        {label}
      </span>
    </button>
  );
};

export default ActionButton;
