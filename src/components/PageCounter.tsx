import React from 'react';

interface PageCounterProps {
  currentPage: number;
  totalPages: number;
}

export const PageCounter: React.FC<PageCounterProps> = ({ currentPage, totalPages }) => {
  return (
    <div className="flex items-center justify-center py-4 text-white">
      <span className="bg-gray-700 px-4 py-2 rounded-lg text-sm font-medium">
        Page {currentPage} of {totalPages}
      </span>
    </div>
  );
}