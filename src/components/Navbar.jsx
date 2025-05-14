import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex flex-col justify-center items-center self-stretch px-5 py-3 w-full font-medium bg-stone-50 bg-opacity-80 shadow-sm sticky top-0 z-50 md:px-16">
      <div className="flex gap-5 justify-between items-center w-full max-w-7xl">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/53e1ee5ea4df04270735d29a0f99af5622f502f4?placeholderIfAbsent=true&apiKey=88286e34b1244d269cf16236e64f27e7"
          alt="Fingerprint logo"
          className="object-contain shrink-0 self-stretch my-auto max-w-full aspect-[5.75] w-[138px]"
        />

        <button
          className="md:hidden flex items-center p-2 text-zinc-700"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        <nav className="hidden md:flex gap-7 self-stretch mx-auto text-sm leading-loose text-zinc-700">
          <button className="hover:text-orange-600 transition-colors">
            Product
          </button>
          <button className="hover:text-orange-600 transition-colors">
            Use Cases
          </button>
          <button className="hover:text-orange-600 transition-colors">
            Developers
          </button>
          <button className="hover:text-orange-600 transition-colors">
            Resources
          </button>
          <button className="hover:text-orange-600 transition-colors">
            Demo
          </button>
          <a
            href="#pricing"
            className="hover:text-orange-600 transition-colors"
          >
            Pricing
          </a>
        </nav>

        {/* Desktop CTA buttons */}
        <div className="hidden md:flex gap-4 self-stretch text-xs leading-tight">
          <a
            href="#login"
            className="grow my-auto text-orange-600 hover:text-orange-700"
          >
            Login
          </a>
          <div className="flex gap-2">
            <a
              href="#contact"
              className="py-2 px-4 text-orange-600 bg-white rounded-md border border-orange-600 border-solid shadow-sm hover:bg-orange-50 transition-colors"
            >
              Contact Sales
            </a>
            <a
              href="#get-started"
              className="py-2 px-4 text-white bg-orange-600 rounded-md border border-orange-700 border-solid shadow-sm hover:bg-orange-700 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden w-full pt-4 pb-2 border-t border-gray-200 mt-3">
          <nav className="flex flex-col space-y-3 text-sm text-zinc-700">
            <button className="py-2 px-4 text-left hover:bg-gray-100 rounded">
              Product
            </button>
            <button className="py-2 px-4 text-left hover:bg-gray-100 rounded">
              Use Cases
            </button>
            <button className="py-2 px-4 text-left hover:bg-gray-100 rounded">
              Developers
            </button>
            <button className="py-2 px-4 text-left hover:bg-gray-100 rounded">
              Resources
            </button>
            <button className="py-2 px-4 text-left hover:bg-gray-100 rounded">
              Demo
            </button>
            <a
              href="#pricing"
              className="py-2 px-4 text-left hover:bg-gray-100 rounded"
            >
              Pricing
            </a>
          </nav>
          <div className="mt-4 flex flex-col space-y-3 px-4">
            <a
              href="#login"
              className="py-2 px-4 text-center text-orange-600 border border-orange-600 rounded-md"
            >
              Login
            </a>
            <a
              href="#contact"
              className="py-2 px-4 text-center text-orange-600 bg-white rounded-md border border-orange-600 border-solid shadow-sm"
            >
              Contact Sales
            </a>
            <a
              href="#get-started"
              className="py-2 px-4 text-center text-white bg-orange-600 rounded-md border border-orange-700 border-solid shadow-sm"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
