import React from "react";

const FeatureSection = () => {
  return (
    <section className="flex flex-col items-start px-px max-w-full text-xs text-neutral-900 pr-0 md:pr-5   border-t-1 border-dashed border-[#e4e5e1]">
      <div className="flex flex-col items-start pt-24 pr-20 pb-14 pl-8 max-w-full w-full lg:w-[50.9%] max-md:px-5 border-r-1 border-dashed border-[#e4e5e1]">
        <div className="px-2.5 pt-1.5 pb-3 leading-none rounded border border-solid bg-white bg-opacity-70 border-zinc-100 text-zinc-500">
          Use Cases<span className="text-[rgba(193,193,190,1)]">_</span>
        </div>
        <h2 className="mt-3.5 text-2xl md:text-4xl font-medium  leading-10">
          Build{" "}
          <span className="font-semibold text-[rgba(255,94,36,1)]">safe</span>{" "}
          and
          <br />
          <span className="font-semibold text-[rgba(255,94,36,1)]">
            seamless
          </span>{" "}
          products
        </h2>
        <p className="mt-7 text-base leading-6 text-zinc-700">
          The device intelligence platform for visitor intent.
          <br />
          <span className="font-medium">Reduce friction</span> for the good
          guys. <span className="font-medium">Stop the bad guys.</span>
        </p>
        <a
          href="#use-cases"
          className="px-[14px] py-2  mt-8 font-medium leading-tight rounded-md border border-solid bg-stone-50 border-zinc-300 shadow-[0px_2px_1px_rgba(24,25,22,0.02)]"
        >
          See all Use Cases
        </a>
      </div>
    </section>
  );
};

export default FeatureSection;
