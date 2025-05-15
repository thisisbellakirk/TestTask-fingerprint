import React from "react";

const Hero = () => {
  return (
    <section className="relative z-20 flex flex-col justify-center items-center px-20 py-10 max-w-full font-medium max-md:px-5">
      <div className="flex flex-col items-center max-w-full w-[514px]">
        <h1 className="text-5xl  leading-none text-center text-black max-md:max-w-full max-md:text-2xl">
          Identify{" "}
          <span className="font-semibold text-[rgba(243,91,34,1)]">
            Every Visitor
          </span>
        </h1>
        <p className="self-stretch mt-7 text-base leading-6 text-center text-zinc-700 max-md:max-w-full">
          Stop fraud, detect bots, or delight customers. Identify good and bad
          <br />
          visitors with industry-leading accuracy - even if they're anonymous.
        </p>
        <div className="flex gap-2 mt-8 max-w-full text-sm leading-snug w-[247px]">
          <a
            href="#get-started"
            className="px-4 py-2 text-white bg-orange-600 rounded-md border border-orange-700 border-solid shadow-[0px_1px_2px_rgba(24,25,22,0.06)]"
          >
            Get Started
          </a>
          <a
            href="#contact"
            className="px-4 py-2 text-orange-600 bg-white rounded-md border border-orange-600 border-solid shadow-[0px_2px_1px_rgba(24,25,22,0.02)]"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
