import React from "react";
// import { Page, Document, pdfjs } from "react-pdf";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const buttonStyle = {
  display: "flex",
  position: "relative",
  bottom: "70px",
  width: "100%",
  flexWrap: "nowrap",
  flexDirection: "row",
  alignItems: "flexEnd",
  justifyContent: "center",
};

const Resume = () => {
  return (
    <section id="resume" className="grid place-content-center">
      <div className="lg:container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            R&eacute;sum&eacute;
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Here is my up-to-date downloadable r&eacute;sum&eacute;.
            <br />
            <b> Looking forward to hearing from you! </b>
          </p>
        </div>

        <a
          href={process.env.PUBLIC_URL + "/Johnson_Thieu_Resume.pdf"}
          download
          target="_blank"
          rel="noreferrer noopener"
        >
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            style={buttonStyle}
          >
            <p style={{ paddingRight: "10px" }}>
              Download R&eacute;sum&eacute;
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </a>
      </div>
    </section>
  );
};

export default Resume;
