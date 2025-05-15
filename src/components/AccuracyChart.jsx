import React from "react";

const AccuracyChart = () => {
  return (
    <div className="  flex flex-col items-start ml-8 max-w-full text-xs font-medium text-neutral-900 w-[411px] max-md:ml-2.5">
      <div className="px-2.5 py-2 leading-none rounded border border-solid bg-white bg-opacity-70 border-zinc-100 text-zinc-500">
        Why Fingerprint<span className="text-[rgba(193,193,190,1)]">_</span>
      </div>
      <h2 className="self-stretch mt-3.5  text-2xl md:text-4xl  leading-10">
        The internet's most
        <br />
        <span className="font-semibold text-[rgba(255,94,36,1)]">
          accurate
        </span>{" "}
        visitor identifier
      </h2>
      <p className="mt-9 text-base font-semibold leading-6 text-zinc-700">
        Industry-leading accuracy
        <span className="font-normal"> that lasts for months</span>
        <br />
        <span className="font-normal">
          or years, even when cookies are cleared.
        </span>
      </p>
      <a
        href="#learn-more"
        className="px-4 py-2 mt-8 leading-tight rounded-md border border-solid bg-stone-50 border-zinc-300 shadow-[0px_2px_1px_rgba(24,25,22,0.02)]"
      >
        Learn More
      </a>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <article className="flex overflow-hidden flex-wrap gap-4 py-9 pr-16 pl-6 bg-white rounded-xl border border-solid border-[#e4e5e1] max-md:px-5 mt-2 lg:mt-0 ">
      <img
        src={icon}
        alt={title}
        className="object-contain shrink-0 self-start aspect-square w-[34px]"
      />
      <div className="flex flex-col grow shrink-0 basis-0 w-fit">
        <h3 className="self-start text-base font-medium text-neutral-900">
          {title}
        </h3>
        <p className="mt-5 text-sm leading-5 text-zinc-700">{description}</p>
      </div>
    </article>
  );
};

const ImageFeatureCard = ({ image, icon, title, description }) => {
  return (
    <article className="flex overflow-hidden flex-col px-px pt-px pb-10 mt-2 w-full bg-white rounded-xl border border-solid border-[#e4e5e1] max-md:max-w-full">
      <img
        src={image}
        alt={title}
        className="object-contain w-full aspect-[2.46] max-md:max-w-full"
      />
      <div className="flex gap-4 items-start self-center max-w-full w-full lg:w-[443px]  px-5">
        <img
          src={icon}
          alt={title}
          className="object-contain shrink-0 aspect-square w-[34px]"
        />
        <div className="flex flex-col grow shrink-0 basis-0 w-fit">
          <h3 className="self-start text-base font-medium text-neutral-900">
            {title}
          </h3>
          <p className="mt-4 text-sm leading-5 text-zinc-700">{description}</p>
        </div>
      </div>
    </article>
  );
};

const DevSection = () => {
  return (
    <div className="flex z-10 flex-col justify-center items-center px-2 py-px w-full border-t border-dashed border-b border-[#e4e5e1] max-md:px-5 max-md:max-w-full">
      <div className=" py-2 max-w-full ">
        <div className="flex flex-wrap max-md:flex-col">
          <div className="w-full lg:w-[59%] max-md:ml-0 max-md:w-full lg:pr-1">
            <div className="flex flex-col py-7   h-full mx-auto w-full bg-white rounded-xl border border-solid border-[#e4e5e1] max-md:pr-5 max-md:mt-4 max-md:max-w-full">
              <AccuracyChart />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/71dbabb21a6ac2c0df56f3c93b92d89e61b5365c?placeholderIfAbsent=true&apiKey=88286e34b1244d269cf16236e64f27e7"
                alt="Accuracy chart"
                className="object-contain mt-20 w-full aspect-[4.76] max-md:mt-10 max-md:max-w-full px-2 lg:px-0"
              />
              <div className="flex shrink-0 mt-6 h-px bg-neutral-200 max-md:max-w-full" />
              <div className="flex px-2 lg:px-0 gap-5 justify-between self-end mt-3 max-w-full text-xs tracking-wider leading-none text-stone-300 w-[654px] max-md:mr-1">
                <div className="flex flex-col">
                  <div className="flex gap-5 justify-between whitespace-nowrap">
                    <div>0</div>
                    <div>30</div>
                  </div>
                  <div className="self-start mt-3.5 uppercase">
                    Accuracy dropoff
                  </div>
                </div>
                <div className="self-start">60</div>
                <div className="flex flex-col">
                  <div className="flex gap-5 justify-between self-end max-w-full whitespace-nowrap w-[178px]">
                    <div>90</div>
                    <div>120</div>
                  </div>
                  <div className="mt-3.5 uppercase">
                    days after initial identification
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[41%] max-md:ml-0 max-md:w-full lg:pl-1">
            <div className="w-full max-md:mt-4 max-md:max-w-full">
              <FeatureCard
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/5aae6d95d90aaa33238ccdea4d3fabb6bacf687f?placeholderIfAbsent=true&apiKey=88286e34b1244d269cf16236e64f27e7"
                title="Any browser, any device."
                description="Identify returning web and mobile app visitors on all browsers, iOS, and Android, with exceptional accuracy."
              />
              <ImageFeatureCard
                image="https://cdn.builder.io/api/v1/image/assets/TEMP/b40eba4d7de6165af38ce5d58ebc53a8269da44b?placeholderIfAbsent=true&apiKey=88286e34b1244d269cf16236e64f27e7"
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/b1bcc5a80b06545ac45b184d11c60606906259f6?placeholderIfAbsent=true&apiKey=88286e34b1244d269cf16236e64f27e7"
                title="Identify all anonymous visitors."
                description="Get details on suspicious visitors even when VPN, incognito mode, or a tampered browser or device is used."
              />
              <FeatureCard
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/1032e896922dfcc90960cc577cfd39de727433cc?placeholderIfAbsent=true&apiKey=88286e34b1244d269cf16236e64f27e7"
                title="Delight your trusted users."
                description="Personalize user experience and reduce 2FA and OTP requirements by identifying logged-out users."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevSection;
