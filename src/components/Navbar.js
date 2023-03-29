import { ArrowRightIcon } from "@heroicons/react/solid";
import { useState } from "react";

export default function Navbar({ pastWorkRef, skillsRef }) {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navIconHandler = (e) => {
    e.preventDefault();
    setToggleMenu(!toggleMenu);
  };

  const executeScroll = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <>
      <header className="hidden bg-gray-800 md:block sticky z-50 top-0 ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="title-font font-medium text-white mb-4 md:mb-0">
            <a href="#about" className="ml-3 text-xl">
              Johnson Thieu
            </a>
          </div>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
            <a href="#projects" className="mr-5 hover:text-white">
              Past Work
            </a>
            <a href="#skills" className="mr-5 hover:text-white">
              Skills
            </a>
            {/* <a href="#testimonials" className="mr-5 hover:text-white">
            Testimonials
          </a> */}
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          >
            Hire Me
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </a>
        </div>
      </header>
      <nav className="md:hidden block xs:sticky z-50 top-0">
        <div className="flex justify-between w-100 bg-gray-800 cursor-pointer">
          <div
            className="mx-3 my-4 text-2xl text-slate-900 hover:text-slate-700 transition"
            onClick={() => {}}
          ></div>
          <svg
            onClick={navIconHandler}
            className="w-8 h-8 text-white my-4 mr-5"
            x-show="!showMenu"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </div>

        <div className={toggleMenu ? "" : "hidden"}>
          <div className="grid grid-cols-1 bg-gray-800 cursor-pointer sticky">
            <div
              className="mx-3 my-5 text-white hover:text-slate-700 transition"
              onClick={() => {
                executeScroll(pastWorkRef);
              }}
            >
              Past Work
            </div>
            <div
              className="mx-3 my-5 text-white hover:text-slate-700 transition"
              onClick={() => {
                executeScroll(skillsRef);
              }}
            >
              Skills
            </div>
            {/* <div className='mx-3 my-5 text-slate-900 hover:text-slate-700 transition' onClick={() => executeScroll(portfolioRef)}>Portfolio</div> */}
          </div>
        </div>
      </nav>
    </>
  );
}
