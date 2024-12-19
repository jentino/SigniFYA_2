import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { PageCounter } from './PageCounter';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface PdfViewerProps {
  file: File;
}

export const PdfViewer: React.FC<PdfViewerProps> = ({ file }) => {
  const [numPages, setNumPages] = React.useState<number | null>(null);

  return (
    <div className="bg-gray-800 p-8 rounded-lg">
      <Document
        file={file}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        className="max-w-full flex flex-col gap-8"
      >
        {Array.from(new Array(numPages), (_, index) => (
          <React.Fragment key={`page_${index + 1}`}>
            <div className="bg-white shadow-md rounded-lg p-4">
              <Page
                pageNumber={index + 1}
                width={window.innerWidth > 1280 ? 1024 : window.innerWidth - 48}
              />
            </div>
            {index < (numPages || 0) - 1 && (
              <PageCounter currentPage={index + 1} totalPages={numPages || 0} />
            )}
          </React.Fragment>
        ))}
      </Document>
    </div>
  );
}