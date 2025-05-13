import "./App.css";
import React from "react";
import {
  EyeIcon,
  CheckCircle,
  Users,
  Shield,
  Zap,
  ChevronRight,
  Star,
} from "lucide-react";
import { Switch } from "./components/ui/switch";
import { CodeBlock } from "./components/code-block";

function App() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <header className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="mr-2">
              <EyeIcon className="h-8 w-8 text-orange-500" />
            </div>
            <span className="text-xl font-semibold">Spotter AI</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Product
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Use Cases
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Developers
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Resources
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Demo
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Pricing
            </a>
          </nav>

          <div className="flex items-center space-x-3">
            <a href="#" className="text-orange-500 hover:text-orange-600">
              Login
            </a>
            <a
              href="#"
              className="border border-orange-500 text-orange-500 px-4 py-2 rounded-md hover:bg-orange-50"
            >
              Contact Sales
            </a>
            <a
              href="#"
              className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
            >
              Get Started
            </a>
          </div>
        </header>
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Identify <span className="text-orange-500">Every Visitor</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Stop fraud, detect bots, or delight customers. Identify good and bad
            visitors with industry-leading accuracy - even if they're anonymous.
          </p>

          <div className="flex justify-center space-x-4 mb-12">
            <a
              href="#"
              className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600"
            >
              Get Started
            </a>
            <a
              href="#"
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-50"
            >
              Contact Sales
            </a>
          </div>

          {/* Code Demo Section */}
          <div className="max-w-4xl mx-auto border border-gray-200 rounded-xl shadow-sm overflow-hidden bg-white mb-24">
            <div className="flex items-center justify-end bg-gray-50 px-4 py-2 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">I'M A DEVELOPER</span>
                <Switch />
              </div>
            </div>
            <div className="p-6">
              <CodeBlock />
            </div>
          </div>
        </section>
        <section className="container mx-auto px-4 py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4 text-center">
              Build <span className="text-orange-500">safe</span> and
              <span className="text-orange-500"> seamless</span> products
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto">
              Spotter AI provides the most accurate visitor identification
              platform to help you prevent fraud and deliver personalized
              experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-orange-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fraud Prevention</h3>
              <p className="text-gray-600">
                Identify fraudsters before they can cause damage. Stop account
                takeovers, payment fraud, and fake accounts.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-orange-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">User Experience</h3>
              <p className="text-gray-600">
                Deliver personalized experiences to your legitimate users while
                keeping the bad actors out.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-orange-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Bot Detection</h3>
              <p className="text-gray-600">
                Identify and block malicious bots while allowing legitimate
                traffic to access your services.
              </p>
            </div>
          </div>
        </section>
        {/* <section className="container mx-auto px-4 py-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center">
              How Spotter AI Works
            </h2>

            <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Accurate Visitor Identification
                </h3>
                <p className="text-gray-600 mb-6">
                  Our advanced algorithms analyze hundreds of signals to create
                  a unique identifier for each visitor, even when they try to
                  hide their identity.
                </p>
                <ul className="space-y-3">
                  {[
                    "Browser fingerprinting",
                    "Network analysis",
                    "Behavioral patterns",
                    "Device recognition",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
                <div className="relative w-full h-64">
                  <img
                    src="./assets/placeholder.svg?height=256&width=384"
                    alt="Visitor identification visualization"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 bg-gray-100 rounded-lg p-8 flex items-center justify-center">
                <div className="relative w-full h-64">
                  <img
                    src="./assets/placeholder.svg?height=256&width=384"
                    alt="Real-time dashboard"
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-semibold mb-4">
                  Real-time Insights
                </h3>
                <p className="text-gray-600 mb-6">
                  Get actionable insights about your visitors in real-time. Make
                  informed decisions to protect your business and enhance user
                  experience.
                </p>
                <ul className="space-y-3">
                  {[
                    "Fraud risk scoring",
                    "User behavior analytics",
                    "Traffic quality metrics",
                    "Conversion optimization",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section className="bg-gray-50 py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center">
              Trusted by Industry Leaders
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white p-8 rounded-lg shadow-sm">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-5 w-5 text-orange-500 fill-orange-500"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6">
                    "Spotter AI has been a game-changer for our business. We've
                    reduced fraud by 87% while improving our customer
                    experience."
                  </p>
                  <div className="flex items-center">
                    <div className="bg-gray-200 rounded-full w-12 h-12 mr-4"></div>
                    <div>
                      <h4 className="font-semibold">Jane Smith</h4>
                      <p className="text-sm text-gray-500">
                        CTO, Example Company
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-2xl font-semibold mb-8">
                Trusted by 1,000+ companies
              </h3>
              <div className="flex flex-wrap justify-center gap-12">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-12 w-32 bg-gray-200 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </section> */}
        <section className="container mx-auto px-4 py-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">Use Cases</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
              See how Spotter AI can help your business across different
              scenarios
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "E-commerce & Retail",
                  description:
                    "Prevent payment fraud, account takeovers, and coupon abuse while providing a seamless shopping experience.",
                },
                {
                  title: "Financial Services",
                  description:
                    "Protect against account fraud, synthetic identities, and money laundering with accurate user identification.",
                },
                {
                  title: "Gaming & Gambling",
                  description:
                    "Prevent multi-accounting, bonus abuse, and maintain regulatory compliance.",
                },
                {
                  title: "Travel & Hospitality",
                  description:
                    "Stop loyalty program fraud, fake bookings, and provide personalized experiences to legitimate customers.",
                },
              ].map((useCase, i) => (
                <div
                  key={i}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{useCase.description}</p>
                  <a
                    href="#"
                    className="text-orange-500 font-medium flex items-center"
                  >
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* <section className="bg-gray-50 py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-4 text-center">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
              Choose the plan that works best for your business
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Starter",
                  price: "$99",
                  description: "Perfect for small businesses and startups",
                  features: [
                    "Up to 10,000 visitor identifications/month",
                    "Basic fraud prevention",
                    "Email support",
                    "7-day data retention",
                  ],
                },
                {
                  name: "Professional",
                  price: "$299",
                  description: "For growing businesses with moderate traffic",
                  features: [
                    "Up to 50,000 visitor identifications/month",
                    "Advanced fraud prevention",
                    "Bot detection",
                    "Priority email support",
                    "30-day data retention",
                  ],
                  highlighted: true,
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  description: "For large businesses with specific needs",
                  features: [
                    "Unlimited visitor identifications",
                    "Custom integration",
                    "Dedicated account manager",
                    "24/7 phone & email support",
                    "90-day data retention",
                  ],
                },
              ].map((plan, i) => (
                <div
                  key={i}
                  className={`bg-white rounded-lg p-8 ${
                    plan.highlighted
                      ? "border-2 border-orange-500 shadow-lg relative"
                      : "border border-gray-200"
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== "Custom" && (
                      <span className="text-gray-500">/month</span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className={`block text-center py-2 px-4 rounded-md font-medium ${
                      plan.highlighted
                        ? "bg-orange-500 text-white hover:bg-orange-600"
                        : "border border-orange-500 text-orange-500 hover:bg-orange-50"
                    }`}
                  >
                    {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section> */}
        {/* <section className="container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: "How does Spotter AI identify visitors?",
                  answer:
                    "Spotter AI uses a combination of browser fingerprinting, network analysis, and behavioral patterns to create a unique identifier for each visitor, even when they try to hide their identity.",
                },
                {
                  question: "Is Spotter AI compliant with privacy regulations?",
                  answer:
                    "Yes, Spotter AI is designed to be compliant with major privacy regulations including GDPR, CCPA, and others. We do not collect personally identifiable information (PII) unless explicitly configured to do so.",
                },
                {
                  question:
                    "How accurate is Spotter AI's visitor identification?",
                  answer:
                    "Spotter AI achieves industry-leading accuracy rates of over 99.5% for visitor identification, even when users clear cookies, use private browsing, or change IP addresses.",
                },
                {
                  question: "How easy is it to integrate Spotter AI?",
                  answer:
                    "Integration is simple with our JavaScript SDK, server-side libraries, and comprehensive API. Most customers can implement Spotter AI in less than a day.",
                },
                {
                  question: "Can Spotter AI help with bot detection?",
                  answer:
                    "Yes, Spotter AI includes advanced bot detection capabilities to identify and block malicious automated traffic while allowing legitimate bots like search engines to access your services.",
                },
              ].map((faq, i) => (
                <div key={i} className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-orange-500 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to identify every visitor?
            </h2>
            <p className="text-white text-lg max-w-2xl mx-auto mb-8">
              Join thousands of companies using Spotter AI to prevent fraud and
              deliver personalized experiences.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="bg-white text-orange-500 px-8 py-3 rounded-md font-medium hover:bg-gray-100"
              >
                Get Started
              </a>
              <a
                href="#"
                className="border border-white text-white px-8 py-3 rounded-md font-medium hover:bg-orange-600"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </section> */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-5 gap-8 mb-12">
              <div className="md:col-span-2">
                <div className="flex items-center mb-6">
                  <div className="mr-2">
                    <EyeIcon className="h-8 w-8 text-orange-500" />
                  </div>
                  <span className="text-xl font-semibold">Spotter AI</span>
                </div>
                <p className="text-gray-400 mb-6 max-w-md">
                  Spotter AI provides the most accurate visitor identification
                  platform to help you prevent fraud and deliver personalized
                  experiences.
                </p>
                <div className="flex space-x-4">
                  {["Twitter", "LinkedIn", "GitHub", "YouTube"].map(
                    (social, i) => (
                      <a
                        key={i}
                        href="#"
                        className="text-gray-400 hover:text-white"
                      >
                        {social}
                      </a>
                    )
                  )}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Product</h3>
                <ul className="space-y-3">
                  {[
                    "Features",
                    "Integrations",
                    "API",
                    "Documentation",
                    "Pricing",
                  ].map((item, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-400 hover:text-white">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Use Cases</h3>
                <ul className="space-y-3">
                  {[
                    "E-commerce",
                    "Financial Services",
                    "Gaming",
                    "Travel",
                    "Healthcare",
                  ].map((item, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-400 hover:text-white">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Company</h3>
                <ul className="space-y-3">
                  {[
                    "About Us",
                    "Blog",
                    "Careers",
                    "Contact",
                    "Privacy Policy",
                  ].map((item, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-400 hover:text-white">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
              <p>
                © {new Date().getFullYear()} Spotter AI. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
        <div className="fixed bottom-6 right-6 bg-white p-3 rounded-full shadow-lg">
          <EyeIcon className="h-6 w-6 text-orange-500" />
        </div>
      </div>
    </>
  );
}

export default App;
