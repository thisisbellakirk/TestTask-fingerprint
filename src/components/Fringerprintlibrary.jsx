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
      <div className="min-h-screen bg-[#121212]  text-white rounded-4xl w-[80%]  mb-10 overflow-hidden">
        <div className="container mx-auto  max-w-full">
          <div className="grid grid-cols-12  ">
            <div className="col-span-6">
              <div className="mb-12 px-4 md:px-8 py-12">
                <div className="text-sm text-gray-400 mb-2">For Developers</div>
                <h1 className="text-4xl font-bold py-4">
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
                <div className="grid grid-cols-12 pl-8">
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
            <div className="col-span-6 border-b border-l border-gray-800 border-dashed">
              <div className="min-h-[350px] "></div>

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
              <div className=" min-h-[200px]"></div>
              <div className="grid grid-cols-8 border border-[#2e2e2c] border-dashed">
                <div className="p-5 border-r-[1px] border-[#2e2e2c] border-dashed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="none"
                    viewBox="0 0 38 38"
                    class="ForDevelopersSection-module--swift--6cba2"
                  >
                    <path
                      fill="#838383"
                      fill-opacity="0.7"
                      d="M37 11a50.2 50.2 0 0 0-.1-3.5 7.6 7.6 0 0 0-6.3-6.3A15.8 15.8 0 0 0 27 .8H12.2a229.6 229.6 0 0 0-4.7.2l-1.7.5a7.6 7.6 0 0 0-4.6 5.9 15.8 15.8 0 0 0-.3 3.4v16.2a50 50 0 0 0 .3 3.4c0 .8.3 1.6.7 2.3a7.6 7.6 0 0 0 5.6 4 15.7 15.7 0 0 0 3.4.3h16.2a54.4 54.4 0 0 0 3.4-.3 7.6 7.6 0 0 0 6.3-6.3 15.9 15.9 0 0 0 .3-3.4V10.9Z"
                    ></path>
                    <path
                      fill="#fff"
                      fill-opacity="0.8"
                      d="M29.6 23.2v-.4c1.6-6-2-13-8.3-16.7 2.7 3.6 4 8.1 2.9 12l-.4 1-.5-.3S17 15 10.4 8.2a80 80 0 0 0 7.8 9.9 84 84 0 0 1-11-8.4 68 68 0 0 0 12.9 14c-3.3 2-7.8 2-12.4 0-1.1-.6-2.2-1.2-3.2-2 2 3.1 5 5.8 8.5 7.3 4.3 1.9 8.6 1.8 11.8 0l.4-.2c1.6-.8 4.6-1.6 6.2 1.6.4.8 1.3-3.3-1.8-7.2Z"
                    ></path>
                  </svg>
                </div>
                <div className="p-5 border-r-[1px] border-[#2e2e2c] border-dashed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="none"
                    viewBox="0 0 38 38"
                    class="ForDevelopersSection-module--swift--6cba2"
                  >
                    <path
                      fill="#838383"
                      fill-opacity="0.7"
                      d="M37 11a50.2 50.2 0 0 0-.1-3.5 7.6 7.6 0 0 0-6.3-6.3A15.8 15.8 0 0 0 27 .8H12.2a229.6 229.6 0 0 0-4.7.2l-1.7.5a7.6 7.6 0 0 0-4.6 5.9 15.8 15.8 0 0 0-.3 3.4v16.2a50 50 0 0 0 .3 3.4c0 .8.3 1.6.7 2.3a7.6 7.6 0 0 0 5.6 4 15.7 15.7 0 0 0 3.4.3h16.2a54.4 54.4 0 0 0 3.4-.3 7.6 7.6 0 0 0 6.3-6.3 15.9 15.9 0 0 0 .3-3.4V10.9Z"
                    ></path>
                    <path
                      fill="#fff"
                      fill-opacity="0.8"
                      d="M29.6 23.2v-.4c1.6-6-2-13-8.3-16.7 2.7 3.6 4 8.1 2.9 12l-.4 1-.5-.3S17 15 10.4 8.2a80 80 0 0 0 7.8 9.9 84 84 0 0 1-11-8.4 68 68 0 0 0 12.9 14c-3.3 2-7.8 2-12.4 0-1.1-.6-2.2-1.2-3.2-2 2 3.1 5 5.8 8.5 7.3 4.3 1.9 8.6 1.8 11.8 0l.4-.2c1.6-.8 4.6-1.6 6.2 1.6.4.8 1.3-3.3-1.8-7.2Z"
                    ></path>
                  </svg>
                </div>
                <div className="p-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="none"
                    viewBox="0 0 38 38"
                    class="ForDevelopersSection-module--swift--6cba2"
                  >
                    <path
                      fill="#838383"
                      fill-opacity="0.7"
                      d="M37 11a50.2 50.2 0 0 0-.1-3.5 7.6 7.6 0 0 0-6.3-6.3A15.8 15.8 0 0 0 27 .8H12.2a229.6 229.6 0 0 0-4.7.2l-1.7.5a7.6 7.6 0 0 0-4.6 5.9 15.8 15.8 0 0 0-.3 3.4v16.2a50 50 0 0 0 .3 3.4c0 .8.3 1.6.7 2.3a7.6 7.6 0 0 0 5.6 4 15.7 15.7 0 0 0 3.4.3h16.2a54.4 54.4 0 0 0 3.4-.3 7.6 7.6 0 0 0 6.3-6.3 15.9 15.9 0 0 0 .3-3.4V10.9Z"
                    ></path>
                    <path
                      fill="#fff"
                      fill-opacity="0.8"
                      d="M29.6 23.2v-.4c1.6-6-2-13-8.3-16.7 2.7 3.6 4 8.1 2.9 12l-.4 1-.5-.3S17 15 10.4 8.2a80 80 0 0 0 7.8 9.9 84 84 0 0 1-11-8.4 68 68 0 0 0 12.9 14c-3.3 2-7.8 2-12.4 0-1.1-.6-2.2-1.2-3.2-2 2 3.1 5 5.8 8.5 7.3 4.3 1.9 8.6 1.8 11.8 0l.4-.2c1.6-.8 4.6-1.6 6.2 1.6.4.8 1.3-3.3-1.8-7.2Z"
                    ></path>
                  </svg>
                </div>
                <div className="p-5 border-r-[1px] border-[#2e2e2c] border-dashed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="none"
                    viewBox="0 0 38 38"
                    class="ForDevelopersSection-module--swift--6cba2"
                  >
                    <path
                      fill="#838383"
                      fill-opacity="0.7"
                      d="M37 11a50.2 50.2 0 0 0-.1-3.5 7.6 7.6 0 0 0-6.3-6.3A15.8 15.8 0 0 0 27 .8H12.2a229.6 229.6 0 0 0-4.7.2l-1.7.5a7.6 7.6 0 0 0-4.6 5.9 15.8 15.8 0 0 0-.3 3.4v16.2a50 50 0 0 0 .3 3.4c0 .8.3 1.6.7 2.3a7.6 7.6 0 0 0 5.6 4 15.7 15.7 0 0 0 3.4.3h16.2a54.4 54.4 0 0 0 3.4-.3 7.6 7.6 0 0 0 6.3-6.3 15.9 15.9 0 0 0 .3-3.4V10.9Z"
                    ></path>
                    <path
                      fill="#fff"
                      fill-opacity="0.8"
                      d="M29.6 23.2v-.4c1.6-6-2-13-8.3-16.7 2.7 3.6 4 8.1 2.9 12l-.4 1-.5-.3S17 15 10.4 8.2a80 80 0 0 0 7.8 9.9 84 84 0 0 1-11-8.4 68 68 0 0 0 12.9 14c-3.3 2-7.8 2-12.4 0-1.1-.6-2.2-1.2-3.2-2 2 3.1 5 5.8 8.5 7.3 4.3 1.9 8.6 1.8 11.8 0l.4-.2c1.6-.8 4.6-1.6 6.2 1.6.4.8 1.3-3.3-1.8-7.2Z"
                    ></path>
                  </svg>
                </div>
                <div className="p-5 border-r-[1px] border-[#2e2e2c] border-dashed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="none"
                    viewBox="0 0 38 38"
                    class="ForDevelopersSection-module--swift--6cba2"
                  >
                    <path
                      fill="#838383"
                      fill-opacity="0.7"
                      d="M37 11a50.2 50.2 0 0 0-.1-3.5 7.6 7.6 0 0 0-6.3-6.3A15.8 15.8 0 0 0 27 .8H12.2a229.6 229.6 0 0 0-4.7.2l-1.7.5a7.6 7.6 0 0 0-4.6 5.9 15.8 15.8 0 0 0-.3 3.4v16.2a50 50 0 0 0 .3 3.4c0 .8.3 1.6.7 2.3a7.6 7.6 0 0 0 5.6 4 15.7 15.7 0 0 0 3.4.3h16.2a54.4 54.4 0 0 0 3.4-.3 7.6 7.6 0 0 0 6.3-6.3 15.9 15.9 0 0 0 .3-3.4V10.9Z"
                    ></path>
                    <path
                      fill="#fff"
                      fill-opacity="0.8"
                      d="M29.6 23.2v-.4c1.6-6-2-13-8.3-16.7 2.7 3.6 4 8.1 2.9 12l-.4 1-.5-.3S17 15 10.4 8.2a80 80 0 0 0 7.8 9.9 84 84 0 0 1-11-8.4 68 68 0 0 0 12.9 14c-3.3 2-7.8 2-12.4 0-1.1-.6-2.2-1.2-3.2-2 2 3.1 5 5.8 8.5 7.3 4.3 1.9 8.6 1.8 11.8 0l.4-.2c1.6-.8 4.6-1.6 6.2 1.6.4.8 1.3-3.3-1.8-7.2Z"
                    ></path>
                  </svg>
                </div>
                <div className="p-5 border-r-[1px] border-[#2e2e2c] border-dashed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="none"
                    viewBox="0 0 38 38"
                    class="ForDevelopersSection-module--swift--6cba2"
                  >
                    <path
                      fill="#838383"
                      fill-opacity="0.7"
                      d="M37 11a50.2 50.2 0 0 0-.1-3.5 7.6 7.6 0 0 0-6.3-6.3A15.8 15.8 0 0 0 27 .8H12.2a229.6 229.6 0 0 0-4.7.2l-1.7.5a7.6 7.6 0 0 0-4.6 5.9 15.8 15.8 0 0 0-.3 3.4v16.2a50 50 0 0 0 .3 3.4c0 .8.3 1.6.7 2.3a7.6 7.6 0 0 0 5.6 4 15.7 15.7 0 0 0 3.4.3h16.2a54.4 54.4 0 0 0 3.4-.3 7.6 7.6 0 0 0 6.3-6.3 15.9 15.9 0 0 0 .3-3.4V10.9Z"
                    ></path>
                    <path
                      fill="#fff"
                      fill-opacity="0.8"
                      d="M29.6 23.2v-.4c1.6-6-2-13-8.3-16.7 2.7 3.6 4 8.1 2.9 12l-.4 1-.5-.3S17 15 10.4 8.2a80 80 0 0 0 7.8 9.9 84 84 0 0 1-11-8.4 68 68 0 0 0 12.9 14c-3.3 2-7.8 2-12.4 0-1.1-.6-2.2-1.2-3.2-2 2 3.1 5 5.8 8.5 7.3 4.3 1.9 8.6 1.8 11.8 0l.4-.2c1.6-.8 4.6-1.6 6.2 1.6.4.8 1.3-3.3-1.8-7.2Z"
                    ></path>
                  </svg>
                </div>
                <div className="p-5 border-r-[1px] border-[#2e2e2c] border-dashed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="none"
                    viewBox="0 0 38 38"
                    class="ForDevelopersSection-module--swift--6cba2"
                  >
                    <path
                      fill="#838383"
                      fill-opacity="0.7"
                      d="M37 11a50.2 50.2 0 0 0-.1-3.5 7.6 7.6 0 0 0-6.3-6.3A15.8 15.8 0 0 0 27 .8H12.2a229.6 229.6 0 0 0-4.7.2l-1.7.5a7.6 7.6 0 0 0-4.6 5.9 15.8 15.8 0 0 0-.3 3.4v16.2a50 50 0 0 0 .3 3.4c0 .8.3 1.6.7 2.3a7.6 7.6 0 0 0 5.6 4 15.7 15.7 0 0 0 3.4.3h16.2a54.4 54.4 0 0 0 3.4-.3 7.6 7.6 0 0 0 6.3-6.3 15.9 15.9 0 0 0 .3-3.4V10.9Z"
                    ></path>
                    <path
                      fill="#fff"
                      fill-opacity="0.8"
                      d="M29.6 23.2v-.4c1.6-6-2-13-8.3-16.7 2.7 3.6 4 8.1 2.9 12l-.4 1-.5-.3S17 15 10.4 8.2a80 80 0 0 0 7.8 9.9 84 84 0 0 1-11-8.4 68 68 0 0 0 12.9 14c-3.3 2-7.8 2-12.4 0-1.1-.6-2.2-1.2-3.2-2 2 3.1 5 5.8 8.5 7.3 4.3 1.9 8.6 1.8 11.8 0l.4-.2c1.6-.8 4.6-1.6 6.2 1.6.4.8 1.3-3.3-1.8-7.2Z"
                    ></path>
                  </svg>
                </div>
                <div className="p-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="none"
                    viewBox="0 0 38 38"
                    class="ForDevelopersSection-module--swift--6cba2"
                  >
                    <path
                      fill="#838383"
                      fill-opacity="0.7"
                      d="M37 11a50.2 50.2 0 0 0-.1-3.5 7.6 7.6 0 0 0-6.3-6.3A15.8 15.8 0 0 0 27 .8H12.2a229.6 229.6 0 0 0-4.7.2l-1.7.5a7.6 7.6 0 0 0-4.6 5.9 15.8 15.8 0 0 0-.3 3.4v16.2a50 50 0 0 0 .3 3.4c0 .8.3 1.6.7 2.3a7.6 7.6 0 0 0 5.6 4 15.7 15.7 0 0 0 3.4.3h16.2a54.4 54.4 0 0 0 3.4-.3 7.6 7.6 0 0 0 6.3-6.3 15.9 15.9 0 0 0 .3-3.4V10.9Z"
                    ></path>
                    <path
                      fill="#fff"
                      fill-opacity="0.8"
                      d="M29.6 23.2v-.4c1.6-6-2-13-8.3-16.7 2.7 3.6 4 8.1 2.9 12l-.4 1-.5-.3S17 15 10.4 8.2a80 80 0 0 0 7.8 9.9 84 84 0 0 1-11-8.4 68 68 0 0 0 12.9 14c-3.3 2-7.8 2-12.4 0-1.1-.6-2.2-1.2-3.2-2 2 3.1 5 5.8 8.5 7.3 4.3 1.9 8.6 1.8 11.8 0l.4-.2c1.6-.8 4.6-1.6 6.2 1.6.4.8 1.3-3.3-1.8-7.2Z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-span-6 border-l-[1px] border-t-[1px] border-[#2e2e2c] border-dashed">
              <div className="">
                <div className="mb-12 pt-24 px-2  ">
                  <div className="flex flex-col sm:flex-row gap-8">
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
                <div className="p-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="none"
                    viewBox="0 0 38 38"
                    class="ForDevelopersSection-module--swift--6cba2"
                  >
                    <path
                      fill="#838383"
                      fill-opacity="0.7"
                      d="M37 11a50.2 50.2 0 0 0-.1-3.5 7.6 7.6 0 0 0-6.3-6.3A15.8 15.8 0 0 0 27 .8H12.2a229.6 229.6 0 0 0-4.7.2l-1.7.5a7.6 7.6 0 0 0-4.6 5.9 15.8 15.8 0 0 0-.3 3.4v16.2a50 50 0 0 0 .3 3.4c0 .8.3 1.6.7 2.3a7.6 7.6 0 0 0 5.6 4 15.7 15.7 0 0 0 3.4.3h16.2a54.4 54.4 0 0 0 3.4-.3 7.6 7.6 0 0 0 6.3-6.3 15.9 15.9 0 0 0 .3-3.4V10.9Z"
                    ></path>
                    <path
                      fill="#fff"
                      fill-opacity="0.8"
                      d="M29.6 23.2v-.4c1.6-6-2-13-8.3-16.7 2.7 3.6 4 8.1 2.9 12l-.4 1-.5-.3S17 15 10.4 8.2a80 80 0 0 0 7.8 9.9 84 84 0 0 1-11-8.4 68 68 0 0 0 12.9 14c-3.3 2-7.8 2-12.4 0-1.1-.6-2.2-1.2-3.2-2 2 3.1 5 5.8 8.5 7.3 4.3 1.9 8.6 1.8 11.8 0l.4-.2c1.6-.8 4.6-1.6 6.2 1.6.4.8 1.3-3.3-1.8-7.2Z"
                    ></path>
                  </svg>
                </div>
                <div className="p-5 border-r-[1px] border-[#2e2e2c] border-dashed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="none"
                    viewBox="0 0 38 38"
                    class="ForDevelopersSection-module--swift--6cba2"
                  >
                    <path
                      fill="#838383"
                      fill-opacity="0.7"
                      d="M37 11a50.2 50.2 0 0 0-.1-3.5 7.6 7.6 0 0 0-6.3-6.3A15.8 15.8 0 0 0 27 .8H12.2a229.6 229.6 0 0 0-4.7.2l-1.7.5a7.6 7.6 0 0 0-4.6 5.9 15.8 15.8 0 0 0-.3 3.4v16.2a50 50 0 0 0 .3 3.4c0 .8.3 1.6.7 2.3a7.6 7.6 0 0 0 5.6 4 15.7 15.7 0 0 0 3.4.3h16.2a54.4 54.4 0 0 0 3.4-.3 7.6 7.6 0 0 0 6.3-6.3 15.9 15.9 0 0 0 .3-3.4V10.9Z"
                    ></path>
                    <path
                      fill="#fff"
                      fill-opacity="0.8"
                      d="M29.6 23.2v-.4c1.6-6-2-13-8.3-16.7 2.7 3.6 4 8.1 2.9 12l-.4 1-.5-.3S17 15 10.4 8.2a80 80 0 0 0 7.8 9.9 84 84 0 0 1-11-8.4 68 68 0 0 0 12.9 14c-3.3 2-7.8 2-12.4 0-1.1-.6-2.2-1.2-3.2-2 2 3.1 5 5.8 8.5 7.3 4.3 1.9 8.6 1.8 11.8 0l.4-.2c1.6-.8 4.6-1.6 6.2 1.6.4.8 1.3-3.3-1.8-7.2Z"
                    ></path>
                  </svg>
                </div>
                <div className="p-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="none"
                    viewBox="0 0 38 38"
                    class="ForDevelopersSection-module--swift--6cba2"
                  >
                    <path
                      fill="#838383"
                      fill-opacity="0.7"
                      d="M37 11a50.2 50.2 0 0 0-.1-3.5 7.6 7.6 0 0 0-6.3-6.3A15.8 15.8 0 0 0 27 .8H12.2a229.6 229.6 0 0 0-4.7.2l-1.7.5a7.6 7.6 0 0 0-4.6 5.9 15.8 15.8 0 0 0-.3 3.4v16.2a50 50 0 0 0 .3 3.4c0 .8.3 1.6.7 2.3a7.6 7.6 0 0 0 5.6 4 15.7 15.7 0 0 0 3.4.3h16.2a54.4 54.4 0 0 0 3.4-.3 7.6 7.6 0 0 0 6.3-6.3 15.9 15.9 0 0 0 .3-3.4V10.9Z"
                    ></path>
                    <path
                      fill="#fff"
                      fill-opacity="0.8"
                      d="M29.6 23.2v-.4c1.6-6-2-13-8.3-16.7 2.7 3.6 4 8.1 2.9 12l-.4 1-.5-.3S17 15 10.4 8.2a80 80 0 0 0 7.8 9.9 84 84 0 0 1-11-8.4 68 68 0 0 0 12.9 14c-3.3 2-7.8 2-12.4 0-1.1-.6-2.2-1.2-3.2-2 2 3.1 5 5.8 8.5 7.3 4.3 1.9 8.6 1.8 11.8 0l.4-.2c1.6-.8 4.6-1.6 6.2 1.6.4.8 1.3-3.3-1.8-7.2Z"
                    ></path>
                  </svg>
                </div>
                <div className="p-5 border-r-[1px] border-[#2e2e2c] border-dashed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="none"
                    viewBox="0 0 38 38"
                    class="ForDevelopersSection-module--swift--6cba2"
                  >
                    <path
                      fill="#838383"
                      fill-opacity="0.7"
                      d="M37 11a50.2 50.2 0 0 0-.1-3.5 7.6 7.6 0 0 0-6.3-6.3A15.8 15.8 0 0 0 27 .8H12.2a229.6 229.6 0 0 0-4.7.2l-1.7.5a7.6 7.6 0 0 0-4.6 5.9 15.8 15.8 0 0 0-.3 3.4v16.2a50 50 0 0 0 .3 3.4c0 .8.3 1.6.7 2.3a7.6 7.6 0 0 0 5.6 4 15.7 15.7 0 0 0 3.4.3h16.2a54.4 54.4 0 0 0 3.4-.3 7.6 7.6 0 0 0 6.3-6.3 15.9 15.9 0 0 0 .3-3.4V10.9Z"
                    ></path>
                    <path
                      fill="#fff"
                      fill-opacity="0.8"
                      d="M29.6 23.2v-.4c1.6-6-2-13-8.3-16.7 2.7 3.6 4 8.1 2.9 12l-.4 1-.5-.3S17 15 10.4 8.2a80 80 0 0 0 7.8 9.9 84 84 0 0 1-11-8.4 68 68 0 0 0 12.9 14c-3.3 2-7.8 2-12.4 0-1.1-.6-2.2-1.2-3.2-2 2 3.1 5 5.8 8.5 7.3 4.3 1.9 8.6 1.8 11.8 0l.4-.2c1.6-.8 4.6-1.6 6.2 1.6.4.8 1.3-3.3-1.8-7.2Z"
                    ></path>
                  </svg>
                </div>
                <div className="p-5 border-r-[1px] border-[#2e2e2c] border-dashed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="none"
                    viewBox="0 0 38 38"
                    class="ForDevelopersSection-module--swift--6cba2"
                  >
                    <path
                      fill="#838383"
                      fill-opacity="0.7"
                      d="M37 11a50.2 50.2 0 0 0-.1-3.5 7.6 7.6 0 0 0-6.3-6.3A15.8 15.8 0 0 0 27 .8H12.2a229.6 229.6 0 0 0-4.7.2l-1.7.5a7.6 7.6 0 0 0-4.6 5.9 15.8 15.8 0 0 0-.3 3.4v16.2a50 50 0 0 0 .3 3.4c0 .8.3 1.6.7 2.3a7.6 7.6 0 0 0 5.6 4 15.7 15.7 0 0 0 3.4.3h16.2a54.4 54.4 0 0 0 3.4-.3 7.6 7.6 0 0 0 6.3-6.3 15.9 15.9 0 0 0 .3-3.4V10.9Z"
                    ></path>
                    <path
                      fill="#fff"
                      fill-opacity="0.8"
                      d="M29.6 23.2v-.4c1.6-6-2-13-8.3-16.7 2.7 3.6 4 8.1 2.9 12l-.4 1-.5-.3S17 15 10.4 8.2a80 80 0 0 0 7.8 9.9 84 84 0 0 1-11-8.4 68 68 0 0 0 12.9 14c-3.3 2-7.8 2-12.4 0-1.1-.6-2.2-1.2-3.2-2 2 3.1 5 5.8 8.5 7.3 4.3 1.9 8.6 1.8 11.8 0l.4-.2c1.6-.8 4.6-1.6 6.2 1.6.4.8 1.3-3.3-1.8-7.2Z"
                    ></path>
                  </svg>
                </div>
                <div className="p-5 border-r-[1px] border-[#2e2e2c] border-dashed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="none"
                    viewBox="0 0 38 38"
                    class="ForDevelopersSection-module--swift--6cba2"
                  >
                    <path
                      fill="#838383"
                      fill-opacity="0.7"
                      d="M37 11a50.2 50.2 0 0 0-.1-3.5 7.6 7.6 0 0 0-6.3-6.3A15.8 15.8 0 0 0 27 .8H12.2a229.6 229.6 0 0 0-4.7.2l-1.7.5a7.6 7.6 0 0 0-4.6 5.9 15.8 15.8 0 0 0-.3 3.4v16.2a50 50 0 0 0 .3 3.4c0 .8.3 1.6.7 2.3a7.6 7.6 0 0 0 5.6 4 15.7 15.7 0 0 0 3.4.3h16.2a54.4 54.4 0 0 0 3.4-.3 7.6 7.6 0 0 0 6.3-6.3 15.9 15.9 0 0 0 .3-3.4V10.9Z"
                    ></path>
                    <path
                      fill="#fff"
                      fill-opacity="0.8"
                      d="M29.6 23.2v-.4c1.6-6-2-13-8.3-16.7 2.7 3.6 4 8.1 2.9 12l-.4 1-.5-.3S17 15 10.4 8.2a80 80 0 0 0 7.8 9.9 84 84 0 0 1-11-8.4 68 68 0 0 0 12.9 14c-3.3 2-7.8 2-12.4 0-1.1-.6-2.2-1.2-3.2-2 2 3.1 5 5.8 8.5 7.3 4.3 1.9 8.6 1.8 11.8 0l.4-.2c1.6-.8 4.6-1.6 6.2 1.6.4.8 1.3-3.3-1.8-7.2Z"
                    ></path>
                  </svg>
                </div>
                <div className="p-5 border-r-[1px] border-[#2e2e2c] border-dashed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="none"
                    viewBox="0 0 38 38"
                    class="ForDevelopersSection-module--swift--6cba2"
                  >
                    <path
                      fill="#838383"
                      fill-opacity="0.7"
                      d="M37 11a50.2 50.2 0 0 0-.1-3.5 7.6 7.6 0 0 0-6.3-6.3A15.8 15.8 0 0 0 27 .8H12.2a229.6 229.6 0 0 0-4.7.2l-1.7.5a7.6 7.6 0 0 0-4.6 5.9 15.8 15.8 0 0 0-.3 3.4v16.2a50 50 0 0 0 .3 3.4c0 .8.3 1.6.7 2.3a7.6 7.6 0 0 0 5.6 4 15.7 15.7 0 0 0 3.4.3h16.2a54.4 54.4 0 0 0 3.4-.3 7.6 7.6 0 0 0 6.3-6.3 15.9 15.9 0 0 0 .3-3.4V10.9Z"
                    ></path>
                    <path
                      fill="#fff"
                      fill-opacity="0.8"
                      d="M29.6 23.2v-.4c1.6-6-2-13-8.3-16.7 2.7 3.6 4 8.1 2.9 12l-.4 1-.5-.3S17 15 10.4 8.2a80 80 0 0 0 7.8 9.9 84 84 0 0 1-11-8.4 68 68 0 0 0 12.9 14c-3.3 2-7.8 2-12.4 0-1.1-.6-2.2-1.2-3.2-2 2 3.1 5 5.8 8.5 7.3 4.3 1.9 8.6 1.8 11.8 0l.4-.2c1.6-.8 4.6-1.6 6.2 1.6.4.8 1.3-3.3-1.8-7.2Z"
                    ></path>
                  </svg>
                </div>

                <div className="p-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="none"
                    viewBox="0 0 38 38"
                    class="ForDevelopersSection-module--swift--6cba2"
                  >
                    <path
                      fill="#838383"
                      fill-opacity="0.7"
                      d="M37 11a50.2 50.2 0 0 0-.1-3.5 7.6 7.6 0 0 0-6.3-6.3A15.8 15.8 0 0 0 27 .8H12.2a229.6 229.6 0 0 0-4.7.2l-1.7.5a7.6 7.6 0 0 0-4.6 5.9 15.8 15.8 0 0 0-.3 3.4v16.2a50 50 0 0 0 .3 3.4c0 .8.3 1.6.7 2.3a7.6 7.6 0 0 0 5.6 4 15.7 15.7 0 0 0 3.4.3h16.2a54.4 54.4 0 0 0 3.4-.3 7.6 7.6 0 0 0 6.3-6.3 15.9 15.9 0 0 0 .3-3.4V10.9Z"
                    ></path>
                    <path
                      fill="#fff"
                      fill-opacity="0.8"
                      d="M29.6 23.2v-.4c1.6-6-2-13-8.3-16.7 2.7 3.6 4 8.1 2.9 12l-.4 1-.5-.3S17 15 10.4 8.2a80 80 0 0 0 7.8 9.9 84 84 0 0 1-11-8.4 68 68 0 0 0 12.9 14c-3.3 2-7.8 2-12.4 0-1.1-.6-2.2-1.2-3.2-2 2 3.1 5 5.8 8.5 7.3 4.3 1.9 8.6 1.8 11.8 0l.4-.2c1.6-.8 4.6-1.6 6.2 1.6.4.8 1.3-3.3-1.8-7.2Z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-span-6 border-l-[1px] border-t-[1px] border-[#2e2e2c] border-dashed h-16 rounded-bl-4xl"></div>
            <div className="col-span-6 border-l-[1px] border-t-[1px] border-[#2e2e2c] border-dashed h-16 rounded-br-4xl"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fringerprintlibrary;
