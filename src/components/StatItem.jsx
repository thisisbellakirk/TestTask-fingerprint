import React from "react";

const StatItem = ({ number, description }) => {
  return (
    <article className="flex flex-col items-start pt-5 pr-20 pb-32 w-full max-md:pb-24">
      <div className="flex gap-8 items-start text-3xl font-medium leading-none text-orange-600 whitespace-nowrap">
        <div className="flex shrink-0 w-px bg-orange-600 h-[30px]" />
        <div>{number}</div>
      </div>
      <p className="mt-2.5 ml-8 text-sm leading-5 text-zinc-700 max-md:ml-2.5">
        {description}
      </p>
    </article>
  );
};

const StatsSection = () => {
  return (
    <section className="py-px max-w-full  border-dashed border-neutral-200 w-[1248px]">
      <div className="flex gap-5 max-md:flex-col border-dashed border-1 border-neutral-200 ">
        <div className="w-[33%] max-md:ml-0 max-md:w-full border-dashed border-r border-neutral-200 ">
          <StatItem
            number="250+"
            description="countries and territories where we identified devices_"
          />
        </div>
        <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full border-dashed border-r border-neutral-200">
          <StatItem
            number="2 Billion +"
            description="unique browsers and mobile devices identified_"
          />
        </div>
        <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <StatItem
            number="50 Million +"
            description="real-time device intelligence API events per day processed_"
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
