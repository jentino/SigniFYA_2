import React, { useCallback } from 'react';
import { Modal } from './Modal';

interface PdfUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPdfUpload: (file: File) => void;
}

export const PdfUploadModal: React.FC<PdfUploadModalProps> = ({ isOpen, onClose, onPdfUpload }) => {
  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      onPdfUpload(file);
      onClose();
    }
  }, [onPdfUpload, onClose]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-4">Upload PDF</h2>
        <label className="block">
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
          />
        </label>
      </div>
    </Modal>
  );
}