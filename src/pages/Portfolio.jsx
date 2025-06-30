import React, { useState, useEffect } from "react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filters = [
    "ALL",
    "LED MODEL",
    "INDOOR & METAL LETTER",
    "MUGAVAREE",
    "ELEVATION",
  ];

  const portfolioItems = [
    // LED MODEL category
    {
      id: 1,
      category: "LED MODEL",
      image: "l2.jpg",
    },
    {
      id: 2,
      category: "LED MODEL",
      image: "l3.jpg",
    },
    {
      id: 3,
      category: "LED MODEL",
      image: "l7.jpg",
    },
    {
      id: 4,
      category: "LED MODEL",
      image: "l10.jpg",
    },
    {
      id: 5,
      category: "LED MODEL",
      image: "l17.jpg",
    },
    {
      id: 6,
      category: "LED MODEL",
      image: "l22.jpg",
    },

    // INDOOR & METAL LETTER category
    {
      id: 7,
      category: "INDOOR & METAL LETTER",
      image: "i1.jpg",
    },
    {
      id: 8,
      category: "INDOOR & METAL LETTER",
      image: "i3.jpg",
    },
    {
      id: 9,
      category: "INDOOR & METAL LETTER",
      image: "i4.jpg",
    },
    {
      id: 10,
      category: "INDOOR & METAL LETTER",
      image: "i7.jpg",
    },
    {
      id: 11,
      category: "INDOOR & METAL LETTER",
      image: "i8.jpg",
    },
    {
      id: 12,
      category: "INDOOR & METAL LETTER",
      image: "i10.jpg",
    },

    // MUGAVAREE category
    {
      id: 13,
      category: "MUGAVAREE",
      image: "m2.jpg",
    },
    {
      id: 14,
      category: "MUGAVAREE",
      image: "m6.jpg",
    },
    {
      id: 15,
      category: "MUGAVAREE",
      image: "m9.jpg",
    },
    {
      id: 16,
      category: "MUGAVAREE",
      image: "m11.jpg",
    },
    {
      id: 17,
      category: "MUGAVAREE",
      image: "m13.jpg",
    },

    // ELEVATION category
    {
      id: 18,
      category: "ELEVATION",
      image: "e1.jpg",
    },
    {
      id: 19,
      category: "ELEVATION",
      image: "e5.jpg",
    },
    {
      id: 20,
      category: "ELEVATION",
      image: "e6.jpg",
    },
    {
      id: 21,
      category: "ELEVATION",
      image: "e8.jpg",
    },
    {
      id: 22,
      category: "ELEVATION",
      image: "e9.jpg",
    },
  ];

  const filteredItems =
    activeFilter === "ALL"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Animated Header Section with Background */}
      <div className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full animate-pulse"></div>
          <div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full animate-bounce"
            style={{ animationDuration: "3s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full animate-spin"
            style={{ animationDuration: "8s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div
            className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium text-white border border-white/20 mb-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-yellow-400">⭐</span>
            15+ Years of Excellence
          </div>

          <h1
            className={`text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
              Portfolio
            </span>
          </h1>

          <p
            className={`text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Discover our diverse range of architectural and signage solutions,
            from modern LED displays to elegant building elevations.
          </p>

          {/* Feature Icons */}
          <div
            className={`flex flex-wrap justify-center gap-8 text-sm font-medium text-white transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 text-green-400">👁️</span>
              Creative Designs
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 text-yellow-400">⭐</span>
              Premium Quality
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 text-blue-400">⚡</span>
              Professional Service
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        {/* Filter Navigation with Clean Design */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-16 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                activeFilter === filter
                  ? "bg-blue-600 text-white shadow-lg border-2 border-blue-600"
                  : "bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300 hover:text-blue-600 shadow-sm"
              } rounded-lg`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Grid with Staggered Animation */}
        <div
          className={`columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group break-inside-avoid bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                <img
                  src={item.image}
                  alt="Portfolio Item"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Section with Animation */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-1100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button className="px-12 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full font-semibold text-lg hover:from-gray-900 hover:to-black transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            Load More Projects
          </button>
        </div>

        {/* Stats Section with Animation */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 p-8 bg-white rounded-3xl shadow-xl transition-all duration-1000 delay-1300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
            <div className="text-gray-600 font-medium">Projects Completed</div>
          </div>
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-gray-600 font-medium">Happy Clients</div>
          </div>
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold text-green-600 mb-2">5</div>
            <div className="text-gray-600 font-medium">Years Experience</div>
          </div>
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600 font-medium">Support Available</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
