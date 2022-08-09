import React from "react";
import { Page, Document, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  return (
    <section
      id="resume"
      className="grid grid-cols-2 gap-4 place-content-center"
    >
      <Document
        file={"./resume.pdf"}
        onLoadError={console.error}
        className="basis-1/2"
      >
        <Page pageIndex={0} />
      </Document>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded basis-1/4">
        <a
          href="https://drive.google.com/file/d/1eKzfh-f-MAfRwCPiDRFhAnVYgo0JpsnP/view?usp=sharing"
          rel="noreferrer noopener"
          target="_blank"
        >
          Download Resume
        </a>
      </button>
    </section>
  );
};

export default Resume;
