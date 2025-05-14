import React from "react";

const UseCaseItem = ({ icon, title, description }) => {
  return (
    <div className="flex flex-auto gap-3">
      <img
        src={icon}
        alt={title}
        className="object-contain shrink-0 self-start w-7 rounded-lg aspect-square shadow-[0px_1px_2px_rgba(24,25,22,0.06)]"
      />
      <div className="flex flex-col grow shrink-0 basis-0 w-fit">
        <h3 className="self-start text-base font-medium leading-loose">
          {title}
        </h3>
        {description && (
          <p className="mt-6 text-sm tracking-normal leading-6">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

const UseCaseCollapsedItem = ({ icon, title, arrowIcon }) => {
  return (
    <div className="flex flex-wrap gap-5 justify-between px-8 py-6 w-full text-base font-medium leading-loose max-md:px-5 max-md:max-w-full">
      <div className="flex gap-3">
        <img
          src={icon}
          alt={title}
          className="object-contain shrink-0 w-7 rounded-lg aspect-square shadow-[0px_1px_2px_rgba(24,25,22,0.06)]"
        />
        <h3 className="self-start basis-auto">{title}</h3>
      </div>
      <img
        src={arrowIcon}
        alt="Arrow"
        className="object-contain shrink-0 self-start mt-1 w-6 aspect-square"
      />
    </div>
  );
};

const VisitorInfoItem = ({ label, value, isGreen = false }) => {
  const bgClass = isGreen ? "bg-green-100 bg-opacity-20" : "";
  const textClass = isGreen ? "text-green-900" : "text-zinc-700";

  return (
    <div
      className={`flex flex-col items-start py-5 pr-16 pl-3.5 text-xs font-medium ${bgClass} max-md:pr-5`}
    >
      <p className="leading-none text-zinc-500">{label}</p>
      <p className={`mt-2 tracking-normal leading-relaxed ${textClass}`}>
        {value}
      </p>
    </div>
  );
};

const UseCasesSection = () => {
  return (
    <section className="p-px max-w-full border border-dashed border-neutral-200 w-[1248px]">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow items-start text-zinc-700 max-md:mr-0 max-md:max-w-full">
            <div className="pb-6 max-w-full w-[518px]">
              <UseCaseCollapsedItem
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/5e80586ae50258c4450f933b2b4e248e544a3f63?placeholderIfAbsent=true&apiKey=88286e34b1244d269cf16236e64f27e7"
                title="Account Takeover"
                arrowIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/622007872352e457befc2fd4b105124aef492b40?placeholderIfAbsent=true&apiKey=88286e34b1244d269cf16236e64f27e7"
              />
              <UseCaseCollapsedItem
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/2be64c6218ffc5a4b98d909d49d362ad90dfadcd?placeholderIfAbsent=true&apiKey=88286e34b1244d269cf16236e64f27e7"
                title="Payment Fraud"
                arrowIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/622007872352e457befc2fd4b105124aef492b40?placeholderIfAbsent=true&apiKey=88286e34b1244d269cf16236e64f27e7"
              />
              <UseCaseCollapsedItem
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/613f24eecf1b0f41ffb80d51cf0830d6ba08131c?placeholderIfAbsent=true&apiKey=88286e34b1244d269cf16236e64f27e7"
                title="SMS Fraud"
                arrowIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/622007872352e457befc2fd4b105124aef492b40?placeholderIfAbsent=true&apiKey=88286e34b1244d269cf16236e64f27e7"
              />

              <div className="flex gap-5 justify-between mx-8 mt-6 text-base font-medium leading-loose max-md:mr-2.5 max-md:max-w-full">
                <div className="flex gap-3">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/06ebd811125dae5e45d32de7da1ed4f023f5a8f0?placeholderIfAbsent=true&apiKey=88286e34b1244d269cf16236e64f27e7"
                    alt="Bot Detection"
                    className="object-contain shrink-0 w-7 rounded-lg aspect-square shadow-[0px_1px_2px_rgba(24,25,22,0.06)]"
                  />
                  <h3 className="self-start basis-auto">Bot Detection</h3>
                </div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/622007872352e457befc2fd4b105124aef492b40?placeholderIfAbsent=true&apiKey=88286e34b1244d269cf16236e64f27e7"
                  alt="Arrow"
                  className="object-contain shrink-0 self-start mt-1 w-6 aspect-square"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf120b2111db252cf26e27359e93edd576f97535?placeholderIfAbsent=true&apiKey=88286e34b1244d269cf16236e64f27e7"
            alt="Device intelligence"
            className="object-contain grow w-full aspect-[0.92]"
          />
        </div>

        <div className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="w-full">
            <div className="flex gap-3 py-px pr-3.5">
              <div className="flex flex-col items-start py-7 pr-10 pl-3.5 leading-none max-md:pr-5">
                <p className="text-xs font-medium text-zinc-500">Visitor ID_</p>
                <p className="mt-2 text-xs font-semibold text-orange-600">
                  Et9Ipke6WRQIDdtH4suY
                </p>
              </div>
              <div className="flex flex-col my-auto">
                <p className="text-xs font-medium leading-none text-zinc-500">
                  Suspect Score_
                </p>
                <div className="flex gap-1.5 self-start mt-1.5 text-xs leading-none text-green-900 whitespace-nowrap">
                  <p>1</p>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4986e2107f3d6ad362b3caa0f9335331856455a9?placeholderIfAbsent=true&apiKey=88286e34b1244d269cf16236e64f27e7"
                    alt="Score indicator"
                    className="object-contain shrink-0 self-start w-full aspect-[0.85]"
                  />
                </div>
              </div>
            </div>

            <VisitorInfoItem label="Geolocation_" value="Lima, Peru" />
            <VisitorInfoItem label="VPN_" value="Not Detected" isGreen={true} />
            <VisitorInfoItem
              label="Browser Tampering_"
              value="Not Detected"
              isGreen={true}
            />
            <VisitorInfoItem
              label="Incognito_"
              value="Not Detected"
              isGreen={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
