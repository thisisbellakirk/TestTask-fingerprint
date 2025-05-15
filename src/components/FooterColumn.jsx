import React, { useState } from "react";

const FooterColumn = ({ title, links, isMobile, isOpen, onToggle }) => {
  return (
    <div className="flex flex-col w-full md:w-auto">
      <div
        className={`flex items-center justify-between ${
          isMobile ? "cursor-pointer" : ""
        }`}
        onClick={isMobile ? onToggle : undefined}
      >
        <h4 className="text-xs font-medium text-zinc-500 mb-4 md:mb-0">
          {title}
        </h4>
        {isMobile && (
          <svg
            className={`w-4 h-4 text-neutral-500 transition-transform ${
              isOpen ? "transform rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </div>
      <div
        className={`flex flex-col items-start text-sm text-neutral-500 ${
          isMobile && !isOpen ? "hidden" : "block"
        }`}
      >
        {links.map((link, index) => (
          <a
            key={index}
            href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
            className={`${!isMobile && index === 0 ? "mt-6" : "mt-4"} ${
              link.includes("\n") ? "leading-5" : ""
            } hover:text-neutral-700 transition-colors`}
          >
            {link.replace("\n", " ")}
          </a>
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  // State to track which accordion sections are open on mobile
  const [openSections, setOpenSections] = useState({
    product: false,
    useCases: false,
    resources: false,
    developers: false,
    company: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Check if screen is mobile
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on initial load
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Clean up event listener
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <footer className="w-full bg-white border-t border-gray-200 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-2 xl:grid-cols-6  gap-8">
          {/* Logo and newsletter - takes 1 column on mobile, 1 on desktop */}
          <div className="col-span-2 xl:col-span-1">
            <div className="flex flex-col items-start">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f925882174345faa24eddec1fb33675f10c0939?placeholderIfAbsent=true&apiKey=88286e34b1244d269cf16236e64f27e7"
                alt="Fingerprint logo"
                className="object-contain w-[137px]"
              />
              <div className="xl:flex gap-1.5 mt-8 md:mt-44 hidden">
                <p className="text-xs text-neutral-500">
                  Subscribe to our{" "}
                  <span className="text-[#f35b22]">newsletter_</span>
                </p>
              </div>
              <div className="hidden xl:flex justify-between items-center w-full px-3.5 py-3.5 mt-5 bg-white rounded-lg border border-solid border-[#e4e5e1] text-neutral-700">
                <input
                  type="email"
                  placeholder="Email address*"
                  className="text-sm w-full outline-none"
                />
                <button aria-label="Submit email">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 7H13M13 7L7 1M13 7L7 13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Navigation columns - each takes 1 column on desktop, full width on mobile */}
          <FooterColumn
            title="Product"
            links={[
              "Device Intelligence Platform",
              "Smart Signals",
              "Integrations",
              "FingerprintJS vs. Pro",
              "Demo",
              "Identification",
              "Pricing",
            ]}
            isMobile={isMobile}
            isOpen={openSections.product}
            onToggle={() => toggleSection("product")}
          />

          <FooterColumn
            title="Use Cases"
            links={[
              "New Account Fraud",
              "Account Takeover",
              "Account Sharing Prevention",
              "SMS Fraud",
              "Payment Fraud",
              "Paywall Enforcement",
              "Personalization",
              "Bot Detection",
            ]}
            isMobile={isMobile}
            isOpen={openSections.useCases}
            onToggle={() => toggleSection("useCases")}
          />

          <FooterColumn
            title="Resources"
            links={[
              "Resource Center",
              "Blog",
              "Case Studies",
              "Guides",
              "FAQ",
              "Support Center",
            ]}
            isMobile={isMobile}
            isOpen={openSections.resources}
            onToggle={() => toggleSection("resources")}
          />

          <FooterColumn
            title="Developers"
            links={[
              "Documentation",
              "Tutorials",
              "SDKs and Libraries",
              "GitHub",
              "Discord Community",
            ]}
            isMobile={isMobile}
            isOpen={openSections.developers}
            onToggle={() => toggleSection("developers")}
          />

          <div className="flex flex-col">
            <div
              className={`flex items-center justify-between ${
                isMobile ? "cursor-pointer" : ""
              }`}
              onClick={isMobile ? () => toggleSection("company") : undefined}
            >
              <h4 className="text-xs font-medium text-zinc-500 mb-4 md:mb-0">
                Company
              </h4>
              {isMobile && (
                <svg
                  className={`w-4 h-4 text-neutral-500 transition-transform ${
                    openSections.company ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </div>
            <div
              className={`${
                isMobile && !openSections.company ? "hidden" : "block"
              }`}
            >
              <div className="flex flex-col items-start">
                <div className="flex items-start gap-2 mt-6">
                  <a
                    href="#about-us"
                    className="text-sm text-neutral-500 hover:text-neutral-700 transition-colors"
                  >
                    About us
                  </a>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <a
                    href="#careers"
                    className="text-sm text-neutral-500 hover:text-neutral-700 transition-colors"
                  >
                    Careers
                  </a>
                  <div className="px-2 py-1.5 text-xs font-medium leading-none text-orange-600 bg-white rounded-md border border-orange-200 border-solid shadow-[0px_1px_0px_rgba(0,0,0,0.03)]">
                    We're hiring
                  </div>
                </div>
                <a
                  href="#press"
                  className="mt-4 text-sm text-neutral-500 hover:text-neutral-700 transition-colors"
                >
                  Press
                </a>
                <a
                  href="#partners"
                  className="mt-4 text-sm text-neutral-500 hover:text-neutral-700 transition-colors"
                >
                  Partners
                </a>
                <a
                  href="#system-status"
                  className="mt-4 text-sm text-neutral-500 hover:text-neutral-700 transition-colors"
                >
                  System status
                </a>
                <a
                  href="#security"
                  className="mt-4 text-sm text-neutral-500 hover:text-neutral-700 transition-colors"
                >
                  Security
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-12 relative">
          <div className="flex flex-col md:flex-row gap-6 justify-between p-6 rounded-2xl border border-dashed bg-stone-50 border-zinc-100">
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-sm text-neutral-500">
              <p>© 2025 FingerprintJS, Inc</p>
              <div className="flex gap-4">
                <a
                  href="#privacy"
                  className="hover:text-neutral-700 transition-colors"
                >
                  Privacy policy
                </a>
                <a
                  href="#terms"
                  className="hover:text-neutral-700 transition-colors"
                >
                  Terms and conditions
                </a>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex items-center gap-2 text-sm text-stone-300">
                <p>Join our developer community on Discord</p>
                <svg
                  width="22"
                  height="17"
                  viewBox="0 0 71 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
                    fill="#A0A0A0"
                  />
                </svg>
              </div>

              <div className="flex items-center gap-2 text-sm text-green-400">
                <p>All systems normal</p>
              </div>
            </div>
          </div>

          {/* Back to top button */}
          <button
            className="bg-white p-4 rounded-full shadow-md absolute right-4 -top-6 md:-top-6 md:right-6 hover:shadow-lg transition-shadow"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 15L12 9L6 15"
                stroke="#4B5563"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
