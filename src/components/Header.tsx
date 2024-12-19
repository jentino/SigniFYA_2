import React from 'react';
import { PenLine } from 'lucide-react';

interface HeaderProps {
  onAddPdfClick: () => void;
  showSignatureButton?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onAddPdfClick, showSignatureButton = false }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <PenLine className="h-8 w-8 text-indigo-600" />
          <span className="ml-2 text-2xl font-bold text-gray-900">SigniFYA</span>
        </div>
        <div className="flex gap-4">
          <button
            onClick={onAddPdfClick}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add PDF
          </button>
          {showSignatureButton && (
            <button
              className="inline-flex items-center px-4 py-2 border-2 border-indigo-600 rounded-md text-sm font-medium text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add your signature
            </button>
          )}
        </div>
      </div>
    </header>
  );
}