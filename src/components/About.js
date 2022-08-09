import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 lg:flex-row md:flex-col sm:flex-col items-center">
        <div className="lg:flex-grow  lg:pr-24 md:w-100 md:flex flex-col md:items-bottom md:text-justify sm:text-2xl mb-16 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Johnson.
            <br className="hidden lg:inline-block" />I am a Full-Stack Software
            Engineer, and would love to work with you!
          </h1>
          <p className="mb-8 leading-relaxed">
            Software Engineer with a successful background in consumer facing
            roles with a 90%+ quality rating. Languages & Frameworks:
            Javascript, HTML, CSS, Node, Express, Python, Django, MongoDb, React
            and libraries such as Jquery and Bootstrap technologies. Version
            Control & Workflow Management: Git, Github, Command line Life long
            learner, Proactive leader, Coordinated and Organized I am Structured
            and can delegate with humility for completing any shared task.
            Experienced with Time Management, Working well under pressure,
            Detail Oriented, very Analytical and Driven.
          </p>
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
              Resume{" "}
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="w-64 m-auto object-cover object-center rounded"
            alt="hero"
            src={"./headshot.jpeg"}
          />
        </div>
      </div>
    </section>
  );
}
