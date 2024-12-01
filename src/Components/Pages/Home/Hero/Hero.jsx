import React from "react";
import "./Hero.css"; // Link to the external CSS file

export const Hero = () => {
  return (
    <section
      className="relative bg-[url('https://media.istockphoto.com/id/1230726725/photo/traditional-dishes-of-israeli-and-middle-eastern-cuisine-malavach-with-different-fillings.jpg?s=612x612&w=0&k=20&c=TrPwpB1BwvqbXx4gQ5P_ciLEFGHHjs-KWJ8225OWDRg=')] bg-cover bg-center bg-no-repeat"
      aria-label="Hero section"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#3586FF] via-[#ffffffc4] to-[#eef6eb] opacity-90 z-0"></div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-y-8 lg:gap-x-52">
          {/* Image Content */}
          <div className="flex justify-center lg:justify-end relative">
            {/* Discount Label */}
            <div className="absolute font4 flex justify-center text-center items-center top-2 right-2 bg-[#3586FF] text-white font-bold border-[6px] text-lg py-2 px-4 w-36 h-36 rounded-full shadow-lg z-50">
              <p> 35% Discount</p>
            </div>

            {/* Image */}
            <div className="rotating-border">
              <img
                src="https://media.istockphoto.com/id/673909238/photo/grilled-beef-steak.jpg?s=612x612&w=0&k=20&c=QpQzHAbx7jaUUl9WzSrWpmgcwwF9aC-2kkE5tEunUp8="
                alt="Delicious grilled beef steak"
                className="w-80 h-80 sm:w-96 sm:h-96 rounded-full shadow-lg object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="max-w-xl text-center lg:text-left space-y-4">
            {/* Heading */}
            <h1 className="text-3xl font-extrabold sm:text-6xl text-black font1">
              Delicious Foods With
              <strong className="block font-extrabold text-[#3586FF]">
                Wonderful Eating
              </strong>
            </h1>

            {/* Subheading */}
            <p className="mt-4 font4 max-w-lg sm:text-xl text-black sm:leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#"
                className="block font1 w-full rounded bg-[#3586FF] px-12 py-3 text-sm font-medium text-white shadow focus:outline-none focus:ring sm:w-auto"
              >
                Get Started
              </a>
              <a
                href="#"
                className="block font1 w-full rounded bg-white px-12 py-3 text-sm font-medium text-black shadow focus:outline-none focus:ring sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
