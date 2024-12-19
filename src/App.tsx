import React, { useState } from 'react';
import { Header } from './components/Header';
import { PdfUploadModal } from './components/PdfUploadModal';
import { PdfViewer } from './components/PdfViewer';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pdfFile, setPdfFile] = useState<File | null>(null);

  return (
    <div className="min-h-screen bg-gray-25">
      <Header 
        onAddPdfClick={() => setIsModalOpen(true)} 
        showSignatureButton={!!pdfFile}
      />
      <main className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 min-h-[calc(100vh-4rem)]">
        <div className="bg-white rounded-lg shadow-sm p-8 min-h-full">
          {pdfFile ? (
            <PdfViewer file={pdfFile} />
          ) : (
            <p className="text-gray-500 text-center">Upload a PDF to get started</p>
          )}
        </div>
      </main>
      <PdfUploadModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onPdfUpload={setPdfFile}
      />
    </div>
  );
}

export default App;