import React from "react";
import {
  Wifi,
  Globe,
  Activity,
  Database,
  ArrowRight,
  ShieldAlert,
  Map,
  BotMessageSquare,
  Shield,
  Star,
  Icon,
} from "lucide-react";
import one_img from "../assets/mg-icon-1.svg";
import two_img from "../assets/mg-icon-2.svg";
import three_img from "../assets/mg-icon-3.svg";
import four_img from "../assets/mg-icon-4.svg";
import five_img from "../assets/mg-icon-5.svg";
import six_img from "../assets/mg-icon-6.svg";
import seven_img from "../assets/mg-icon-7.svg";
// import eight_img from "../assets/mg-icon-8.svg";
// import nine_img from "../assets/mg-icon-9.svg";
import ten_img from "../assets/mg-icon-10.svg";
import eleven_img from "../assets/mg-icon-11.svg";
import twelv_img from "../assets/mg-icon-12.svg";
import thriteen_img from "../assets/mg-icon-13.svg";
import fouteen_img from "../assets/mg-icon-14.svg";
import fifteen_img from "../assets/mg-icon-15.svg";
import sixteen_img from "../assets/mg-icon-16.svg";

const FeatureCard = ({ icon: Icon, title }) => (
  <div className="col-span-6  border border-[#2e2e2c] border-dashed p-4 flex items-center  hover:bg-[#252525] transition-colors cursor-pointer space-x-2 ">
    <Icon size={20} className="text-gray-400" />
    <span className="text-sm text-[#a0a09d]">{title}</span>
  </div>
);
const features = [
  { icon: Wifi, title: "VPN Detection" },
  { icon: Globe, title: "IP Geolocation" },
  { icon: Activity, title: "High-activity Device" },
  { icon: Database, title: "Raw Device Attributes" },
  { icon: ShieldAlert, title: "IP Blocklist Matching" },
  { icon: Map, title: "Geolocation Spoofing" },
  { icon: BotMessageSquare, title: "Browser Bot Detection" },
  { icon: Shield, title: "Rooted Device Detection" },
];
const LinkItem = ({ title, linkText }) => (
  <div className="flex-1">
    <h3 className="text-lg font-medium mb-2">{title}</h3>
    <a
      href="#"
      className="text-[#f77c55] hover:underline flex items-center text-sm"
    >
      {linkText}
      <ArrowRight size={14} className="ml-1" />
    </a>
  </div>
);
const Fringerprintlibrary = () => {
  return (
    <>
      <div className="grid grid-cols-12 h-32">
        <div className="col-span-6 border-dashed border-r border-[#e4e5e1]"></div>
        <div className="col-span-6"></div>
      </div>
      <div className="min-h-screen bg-[#121212]  text-white rounded-2xl overflow-hidden mx-2.5">
        <div className="container mx-auto  max-w-full">
          <div className="grid grid-cols-12  ">
            <div className="col-span-12 lg:col-span-6">
              <div className="mb-12 px-4 md:px-8 py-12">
                <div className="text-sm text-gray-400 mb-2">For Developers</div>
                <h1 className="text-2xl md:text-4xl font-bold py-4">
                  The <span className="text-orange-500">original</span> <br />
                  fingerprinting library
                </h1>
                <p className="text-gray-400 text-sm max-w-md mb-4">
                  Over 100 bleeding-edge signals, built by our world-class
                  research team. So powerful, our competitors use Fingerprint
                  open-source under the hood.
                </p>
                <button className="flex items-center gap-2 bg-[#1E1E1E] hover:bg-[#282828] px-4 py-2 rounded-md border border-gray-700">
                  <Star size={16} className="text-white" />
                  <span>Star</span>
                  <span className="text-gray-400">24K+</span>
                </button>
              </div>
              <div className="border  border-[#2e2e2c] border-dashed">
                <div className="grid grid-cols-12 md:pl-8">
                  {features?.map((feature, index) => (
                    <FeatureCard
                      key={index}
                      icon={feature.icon}
                      title={feature.title}
                    />
                  ))}
                </div>
                <div className="py-4 pl-15 border-t-[1px] border-[#2e2e2c] border-dashed">
                  <a
                    href="#"
                    className="text-sm text-[#434344] flex items-center"
                  >
                    See all Smart Signals
                    <span className="inline-block ml-1">→</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 border-b border-l border-gray-800 border-dashed">
              <div className="hidden lg:block  min-h-[350px] border-dashed border-b-1 border-[#2e2e2c] "></div>

              <div className="p-3">
                <div className="rounded-lg border border-gray-800 overflow-hidden">
                  <div className="bg-[#1E1E1E] px-4 py-2 border-b border-gray-800">
                    <span className="text-xs text-gray-400">response.json</span>
                  </div>
                  <pre className="bg-[#121212] p-4 overflow-x-auto text-sm">
                    <code>
                      <span className="text-white">{"{"}</span>
                      <br />
                      <span className="text-gray-400 ml-4">
                        "visitorId":
                      </span>{" "}
                      <span className="text-green-400">"visitor_id"</span>
                      <br />
                      <span className="text-white">{"}"}</span>
                      <br />
                      <br />
                      <span className="text-white">{"{"}</span>
                      <br />
                      <span className="text-gray-400 ml-4">
                        "requestId":
                      </span>{" "}
                      <span className="text-green-400">"request_id"</span>
                      <br />
                      <span className="text-gray-400 ml-4">
                        "confidence":
                      </span>{" "}
                      <span className="text-blue-400">"high"</span>
                      <br />
                      <span className="text-gray-400 ml-4">
                        "visitorFound":
                      </span>{" "}
                      <span className="text-green-400">true</span>
                      <br />
                      <span className="text-gray-400 ml-4">
                        "incognito":
                      </span>{" "}
                      <span className="text-green-400">false</span>
                      <br />
                      <span className="text-white">{"}"}</span>
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 border-b-[1px] border-[#2e2e2c] border-dashed">
            <div className="col-span-6">
              <div className="min-h-[377px] lg:min-h-[200px]"></div>
              <div className="grid grid-cols-8 border border-[#2e2e2c] border-dashed">
                <div className="p-3 lg:p-5 border-r-[1px] border-[#2e2e2c] border-dashed">
                  <img src={one_img} />
                </div>
                <div className="p-3 lg:p-5 border-r-[1px] border-[#2e2e2c] border-dashed">
                  <img src={two_img} />
                </div>
                <div className="p-3 lg:p-5 border-r-[1px] border-[#2e2e2c] border-dashed">
                  <img src={three_img} />
                </div>
                <div className="p-3 lg:p-5 border-r-[1px] border-[#2e2e2c] border-dashed">
                  <img src={four_img} />
                </div>
                <div className="p-3 lg:p-5 border-r-[1px] border-[#2e2e2c] border-dashed">
                  <img src={five_img} />
                </div>
                <div className="p-3 lg:p-5 border-r-[1px] border-[#2e2e2c] border-dashed">
                  <img src={six_img} />
                </div>
                <div className="p-3 lg:p-5 border-r-[1px] border-[#2e2e2c] border-dashed">
                  <img src={seven_img} />
                </div>
                <div className="p-3 lg:p-5">
                  <img src={ten_img} />
                </div>
              </div>
            </div>
            <div className="col-span-6 border-l-[1px] border-t-[1px] border-[#2e2e2c] border-dashed">
              <div className="">
                <div className="mb-12 pt-24 px-2  ">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <LinkItem
                      title="API and webhooks"
                      linkText="Request API Key"
                    />
                    <LinkItem
                      title="SDKs and libraries"
                      linkText="Check out the SDKs"
                    />
                    <LinkItem
                      title="Integrations"
                      linkText="Explore integrations"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-8 border border-[#2e2e2c] border-dashed">
                <div className="p-3 lg:p-5">
                  <img src={twelv_img} />
                </div>
                <div className="p-3 lg:p-5 border-r-[1px] border-[#2e2e2c] border-dashed">
                  <img src={ten_img} />
                </div>
                <div className="p-3 lg:p-5">
                  <img src={eleven_img} />
                </div>
                <div className="p-3 lg:p-5 border-r-[1px] border-[#2e2e2c] border-dashed">
                  <img src={twelv_img} />
                </div>
                <div className="p-3 lg:p-5 border-r-[1px] border-[#2e2e2c] border-dashed">
                  <img src={thriteen_img} />
                </div>
                <div className="p-3 lg:p-5 border-r-[1px] border-[#2e2e2c] border-dashed">
                  <img src={fouteen_img} />
                </div>
                <div className="p-3 lg:p-5 border-r-[1px] border-[#2e2e2c] border-dashed">
                  <img src={fifteen_img} />
                </div>

                <div className="p-3 lg:p-5">
                  <img src={sixteen_img} />
                </div>
              </div>
            </div>
            <div className="col-span-6 border-l-[1px] border-t-[1px] border-[#2e2e2c] border-dashed h-16 rounded-bl-4xl"></div>
            <div className="col-span-6 border-l-[1px] border-t-[1px] border-[#2e2e2c] border-dashed h-16 rounded-br-4xl"></div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 max-w-full  overflow-hidden">
        <div className="col-span-6 h-24 border-r-1 border-dashed border-[#e4e5e1]">
          &nbsp;
        </div>
        <div className="col-span-6 h-24">&nbsp;</div>
      </div>
    </>
  );
};

export default Fringerprintlibrary;
