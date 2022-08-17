import React from "react";
import styled, { keyframes } from "styled-components";
import { slideInRight, slideInLeft, bounce } from "react-animations";

const slideInRightAnimation = keyframes`${slideInRight}`;
const RightSlideDiv = styled.div`
  animation: 3s ${slideInRightAnimation};
`;

const slideInLeftAnimation = keyframes`${slideInLeft}`;
const LeftSlideDiv = styled.div`
  animation: 2s ${slideInLeftAnimation};
  margin: 10px 0px;
`;

const bounceAnimation = keyframes`${bounce}`;
const BouncyDiv = styled.h1`
  animation: 1s ${bounceAnimation};
`;
export default function About() {
  return (
    <section id="about">
      <div className=" mx-auto flex px-10 py-20 lg:flex-row md:flex-col sm:flex-col items-center">
        <div className="lg:flex-grow  lg:pr-24 md:w-100 md:flex flex-col md:items-bottom md:text-justify sm:text-2xl mb-16 items-center text-center">
          <BouncyDiv className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Johnson!
          </BouncyDiv>
          <RightSlideDiv className="mb-8 mt-8 leading-relaxed">
            I am a Full-Stack Software Engineer, and would love to work with
            you!
          </RightSlideDiv>
          <LeftSlideDiv>
            <p className="mb-8 leading-relaxed">
              I love problem solving and am a lifelong learner. I am always
              looking for new ways to solve problems more efficiently in order
              to optimize my code. When I use products, I tend to look for
              things that could be implemented to make the user experience
              better and transfer that knowledge to my projects. I know when to
              research tools or libraries to use for certain designs and
              features of my projects, which keeps me up to date with new
              technology. Having worked on teams of developers, and owning
              different features, I can stay on track with any of my projects
              codebase.
            </p>
            <p className="mb-8 leading-relaxed">
              <b>What I am good at: </b> I enjoy coding with Javascript, HTML,
              CSS, Node, Express, Python, Django, MongoDb and libraries such as
              React, Jquery and Bootstrap technologies. My Version Control go to
              is Github. I am a Proactive leader, Coordinated and Organized. I
              am Structured and can delegate with humility for completing any
              shared task.
            </p>
          </LeftSlideDiv>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
            <a
              href="#resume"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              R&eacute;sum&eacute;
            </a>
          </div>
        </div>
        <RightSlideDiv className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="w-64 m-auto object-cover object-center rounded"
            alt="hero"
            src={process.env.PUBLIC_URL + "/headshot.jpeg"}
          />
        </RightSlideDiv>
      </div>
    </section>
  );
}
