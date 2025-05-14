import React from "react";

const CTASection = () => {
  return (
    <section className="p-2 max-w-full border-r border-l border-dashed border-neutral-200 w-[1248px] ">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start self-stretch py-9 pr-20 pl-6 m-auto w-full font-medium rounded-xl border border-orange-600 border-solid bg-white bg-opacity-0 max-md:px-5 max-md:mt-5 max-md:max-w-full">
            <h2 className="text-4xl tracking-tighter leading-10 text-neutral-900">
              Identify your{" "}
              <span className="font-semibold text-[rgba(255,94,36,1)]">
                web
              </span>{" "}
              and
              <br />
              <span className="font-semibold text-[rgba(255,94,36,1)]">
                mobile
              </span>{" "}
              traffic in minutes
            </h2>
            <p className="mt-9 text-base leading-6 text-zinc-700">
              Collect visitor IDs and signals{" "}
              <span className="font-semibold">instantly for free,</span>
              <br />
              or reach out to our team for a demo.
            </p>
            <div className="flex gap-2 mt-11 text-sm leading-snug max-md:mt-10">
              <a
                href="#get-started"
                className="px-4 pt-2.5 pb-5 text-white bg-orange-600 rounded-md border border-orange-700 border-solid shadow-[0px_1px_2px_rgba(24,25,22,0.06)]"
              >
                Get Started
              </a>
              <a
                href="#contact-sales"
                className="px-4 pt-2.5 pb-5 text-orange-600 bg-white rounded-md border border-orange-600 border-solid shadow-[0px_2px_1px_rgba(24,25,22,0.02)]"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
        <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2638acc607e4c82844538f149643736ca212af2?placeholderIfAbsent=true&apiKey=88286e34b1244d269cf16236e64f27e7"
            alt="Device identification"
            className="object-contain grow w-full aspect-[2] max-md:mt-2.5 max-md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
