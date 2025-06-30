import React from "react";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Portfolio from "./pages/Portfolio";
import Service from "./pages/Service";
import Contact from "./pages/ContactUs";
import Footer from "./Footer.jsx"; // Import the Footer component
import { useState } from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      case "service":
        return <Service />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation Header */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-yellow-400 font-bold text-2xl">
                <img
                  src="sign.jpg"
                  alt="Company Name Logo"
                  className="h-16 w-auto mr-2 object-contain"
                />
              </div>
            </div>

            {/* Menu Items */}
            <div className="hidden md:flex space-x-8">
              {[
                { key: "home", label: "HOME" },
                { key: "about", label: "ABOUT US" },
                { key: "portfolio", label: "PORTFOLIO" },
                { key: "service", label: "SERVICE" },
                { key: "contact", label: "CONTACT" },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => setCurrentPage(item.key)}
                  className={`text-white hover:text-yellow-400 transition-colors duration-300 font-medium ${
                    currentPage === item.key ? "text-yellow-400" : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-white">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      {renderPage()}

      {/* Footer - Common for all pages */}
      <Footer />
    </div>
  );
}
