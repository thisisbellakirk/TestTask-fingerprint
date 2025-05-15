import React from "react";
import Img1 from "../assets/gdp.svg";
import Img2 from "../assets/svgviewer-output (1).svg";
import Img3 from "../assets/svgviewer-output (2).svg";
import Img4 from "../assets/svgviewer-output (3).svg";
import Img5 from "../assets/svgviewer-output (4).svg";
import Img6 from "../assets/svgviewer-output (5).svg";

const CTASection = () => {
  return (
    <section className="p-4 max-w-full bg-white">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* LEFT SECTION */}
        <div className="w-full lg:w-6/12">
          <div className="flex flex-col items-start py-9 pr-10 pl-6 w-full border border-orange-600 rounded-xl bg-white h-full">
            <h2 className="text-2xl md:text-4xl leading-snug text-neutral-900">
              Identify your{" "}
              <span className="font-semibold text-[#FF5E24]">web</span> and
              <br />
              <span className="font-semibold text-[#FF5E24]">mobile</span>{" "}
              traffic in minutes
            </h2>
            <p className="mt-6 text-base text-zinc-700">
              Collect visitor IDs and signals{" "}
              <span className="font-semibold">instantly for free,</span>
              <br />
              or reach out to our team for a demo.
            </p>
            <div className="flex gap-3 mt-10 text-sm">
              <a
                href="#get-started"
                className="px-4 py-2 text-white bg-orange-600 rounded-md border border-orange-700 shadow"
              >
                Get Started
              </a>
              <a
                href="#contact-sales"
                className="px-4 py-2 text-orange-600 bg-white border border-orange-600 rounded-md shadow"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full lg:w-6/12 flex flex-col md:flex-row items-center justify-center gap-6">
          {/* First 3 vertically stacked images */}
          <div className="flex flex-row justify-between md:flex-col gap-4 items-center w-[35%] max-md:w-full h-full">
            <div className="border0 bg_cta p-4 flex justify-center items-center rounded-lg">
              <img
                src={Img1}
                alt="badge-1"
                className="w-[100px] sm:w-[100px] md:w-[180px] lg:w-[200px] object-contain"
              />
            </div>
            <div className="border0 bg_cta p-4 flex justify-center items-center rounded-lg">
              <img
                src={Img2}
                alt="badge-2"
                className="w-[100px] sm:w-[100px] md:w-[180px] lg:w-[200px] object-contain"
              />
            </div>
            <div className="border0 bg_cta p-4 flex justify-center items-center rounded-lg">
              <img
                src={Img3}
                alt="badge-3"
                className="w-[100px] sm:w-[100px] md:w-[180px] lg:w-[200px] object-contain"
              />
            </div>
          </div>

          {/* Next 3 horizontally aligned images */}
          <div className=" sm:justify-center  gap-6 w-[65%] max-md:w-full border0 bg_cta p-4 flex justify-center items-center rounded-lg h-full">
            <img
              src={Img4}
              alt="badge-4"
              className="w-[80px] sm:w-[65px] md:w-[80px] object-contain opacity-50 hover:opacity-100 transform hover:scale-105 transition duration-300"
            />

            <img
              src={Img5}
              alt="badge-5"
              className="w-[80px] sm:w-[65px] md:w-[80px] object-contain hover:opacity-100 transform hover:scale-105 transition duration-300"
            />

            <img
              src={Img6}
              alt="badge-6"
              className="w-[80px] sm:w-[65px] md:w-[80px] object-contain opacity-50 hover:opacity-100 transform hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
