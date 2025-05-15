import React, { useState } from "react";
import MobileSVG from "../assets/mobileSVG.svg";

const UseCaseCollapsedItem = ({ icon, title, arrowIcon, isOpen, onClick }) => {
  return (
    <div className="w-full last:border-none border-b border-dashed border-[#e4e5e1]">
      <div
        className="flex flex-wrap gap-5 justify-between px-8 py-5 w-full text-base font-medium leading-loose max-md:px-5 max-md:max-w-full cursor-pointer"
        onClick={onClick}
      >
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
          className={`object-contain shrink-0 self-start mt-1 w-6 aspect-square transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      {isOpen && (
        <div className="pl-[70px] pr-8 pb-8 text-sm text-gray-600 max-md:px-5">
          This is the expanded content for "{title}".
        </div>
      )}
    </div>
  );
};

const VisitorInfoItem = ({ label, value, isGreen = false }) => {
  const bgClass = isGreen ? "bg-[#fafdfb] bg-opacity-20" : "";
  const textClass = isGreen ? "text-green-900" : "text-zinc-700";
  return (
    <div
      className={`flex border-l-1 border-[#6e6f6c] flex-col items-start py-4 pr-16 pl-3.5 text-xs font-medium ${bgClass} max-md:pr-5`}
    >
      <p className="leading-none text-[11px] text-zinc-500">{label}</p>
      <p className={`mt-2 tracking-normal leading-relaxed ${textClass}`}>
        {value}
      </p>
    </div>
  );
};

const UseCasesSection = () => {
  const items = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5e80586ae50258c4450f933b2b4e248e544a3f63",
      title: "Account Takeover",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2be64c6218ffc5a4b98d909d49d362ad90dfadcd",
      title: "Payment Fraud",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/613f24eecf1b0f41ffb80d51cf0830d6ba08131c",
      title: "SMS Fraud",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/06ebd811125dae5e45d32de7da1ed4f023f5a8f0",
      title: "Bot Detection",
    },
  ];

  const arrowIcon =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/622007872352e457befc2fd4b105124aef492b40";

  const [openIndex, setOpenIndex] = useState(0); // Default: first accordion open

  const handleToggle = (index) => {
    if (openIndex !== index) {
      setOpenIndex(index);
    }
  };
  return (
    <>
      <section className="grid grid-cols-12 border-t border-dashed border-[#e4e5e1] max-w-full">
        {/* Left Column */}
        <div className="col-span-12 md:col-span-5 border-r border-dashed border-[#e4e5e1]">
          {items.map((item, index) => (
            <UseCaseCollapsedItem
              key={item.title}
              icon={item.icon}
              title={item.title}
              arrowIcon={arrowIcon}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>

        {/* Center Column */}
        <div className="col-span-1 flex justify-start items-center"></div>
        <div className="col-span-6 xl:col-span-3 justify-start items-center border-l-1 border-dashed border-[#e4e5e1] hidden md:flex">
          <img
            src={MobileSVG}
            alt="Device intelligence"
            className="w-full max-w-[80%] lg:max-w-[270px] object-cover grow py-10 lg:py-0"
          />
        </div>

        {/* Right Column */}
        <div className="col-span-3 hidden xl:block">
          <div className="border-b border-dashed border-[#e4e5e1] flex text-[11px]">
            <div className="border-l-1 border-[#f35b22] px-3 py-3">
              <p className="text-zinc-500 font-medium">Visitor ID_</p>
              <p className="text-orange-600 font-semibold mt-2">
                Et9Ipke6WRQIDdtH4suY
              </p>
            </div>
            <div className="border-l border-dashed border-[#e4e5e1] px-3 py-3">
              <p className="text-zinc-500 font-medium">Suspect Score_</p>
              <div className="flex items-center gap-1 mt-2 text-green-900 font-semibold">
                <p>1</p>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4986e2107f3d6ad362b3caa0f9335331856455a9"
                  alt="Score indicator"
                  className="w-3"
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
      </section>
      <div className="grid grid-cols-12 max-w-full  overflow-hidden border-t-1 border-dashed border-[#e4e5e1]">
        <div className="col-span-6 h-24 ">&nbsp;</div>
        <div className="col-span-6 h-24 border-l-1 border-dashed border-[#e4e5e1]">
          &nbsp;
        </div>
      </div>
    </>
  );
};

export default UseCasesSection;
