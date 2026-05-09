import React from "react";

import Article from "../assets/Article.png";
import Blog from "../assets/Blog.png";
import ImageGen from "../assets/ImageGeneration.png";
import RemoveBg from "../assets/BackgroundRemoval.png";
import RemoveObject from "../assets/object.png";
import Resume from "../assets/Resume.png";

const results = [
  Article,
  Blog,
  ImageGen,
  RemoveBg,
  RemoveObject,
  Resume,
];

const Result = () => {
  return (
    <section className="w-[80%] mx-auto  py-24 px-4 md:px-10 md:-mt-25">
      
      {/* Heading */}
      <div className="text-center max-w-4xl  mx-auto mb-20">
        <h2 className="text-4xl md:text-[40px] font-bold leading-tight">
          <span className="text-black">Real-Time </span>
          <span className="bg-gradient-to-r from-indigo-600 to-cyan-400 bg-clip-text text-transparent">
            AI Results
          </span>
        </h2>

        <p className="text-gray-500 mt-6 text-lg md:text-xl">
          Explore stunning outputs generated using our powerful AI tools.
        </p>
      </div>

      {/* Full Width Images */}
      <div className="flex flex-col  gap-12">
        {results.map((image, index) => (
          <div
            key={index}
            className="w-full overflow-hidden rounded-[25px] shadow-2xl bg-white group"
          >
            <img
              src={image}
              alt="AI Result"
              className="w-full object-cover transition duration-500 group-hover:scale-[1.02]"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Result;