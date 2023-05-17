import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import styled, { keyframes } from "styled-components";
import { slideInUp, flipInX } from "react-animations";
import { useInView } from "react-intersection-observer";

const slideInUpAnimation = keyframes`${slideInUp}`;
const UpSlideDiv = styled.div`
  animation: 1s ${slideInUpAnimation};
  position: relative;
  z-index: 1;
`;

export default function Projects({ pastWorkRef }) {
  const { ref, inView } = useInView();

  return (
    <section
      id="projects"
      className="text-gray-400 bg-gray-900 body-font z-10"
      ref={pastWorkRef}
    >
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            These were projects I build using HTML, CSS and JavaScript.
          </p>
        </div>
        <div ref={ref} className="relative">
          {inView && (
            <UpSlideDiv className="flex flex-wrap m-2 ">
              {projects.map((project) => (
                <a
                  href={project.link}
                  key={project.image}
                  className=" lg:w-1/2 lg:h-full w-100 h-96 p-4 "
                >
                  <div className="flex relative demo">
                    <img
                      alt="gallery"
                      className="absolute inset-0 w-full h-80 object-center"
                      src={project.image}
                    />
                    <div className="h-80 px-8 py-10 relative w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 ">
                      <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                        {project.subtitle}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-white mb-3">
                        {project.title}
                      </h1>
                      <p className="leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </UpSlideDiv>
          )}
        </div>
      </div>
    </section>
  );
}
