import React from "react";
import styled, { keyframes } from "styled-components";
import { slideInRight, slideInLeft, bounce } from "react-animations";
import { abouts } from "../data";

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
const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
  h1 {
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: 0.15em solid orange; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: 0.15em; /* Adjust as needed */
    animation: typing 3.5s steps(60), blink-caret 0.75s step-end infinite;
  }

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: rgba(16, 185, 129);
    }
  }
`;
const About = () => {
  return (
    <section id="about">
      <div className=" mx-auto flex px-10 py-20 lg:flex-row md:flex-col sm:flex-col items-center">
        <div className="lg:flex-grow  lg:pr-24 md:w-100 md:flex flex-col md:items-bottom md:text-justify sm:text-2xl mb-16 items-center text-center">
          <BouncyDiv className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            <h1 className="typewriter">{abouts.greeting}</h1>
          </BouncyDiv>
          <RightSlideDiv className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 xs:w-1/4 xs:m-auto xs:mt-4">
            <img
              className="w-64 m-auto object-cover object-center rounded"
              alt="hero"
              src={process.env.PUBLIC_URL + "/headshot.jpeg"}
            />
          </RightSlideDiv>
          <RightSlideDiv className="mb-8 mt-8 leading-relaxed">
            {abouts.intro}
          </RightSlideDiv>
          <LeftSlideDiv>
            <p className="mb-8 leading-relaxed">{abouts.about}</p>
            <p className="mb-8 leading-relaxed">
              <b>What I am good at: </b>
              {abouts.whatImGoodAt}
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
      </div>
    </section>
  );
};

export default About;
