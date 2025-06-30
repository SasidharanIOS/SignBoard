import React, { useState, useEffect } from "react";
import { Zap, Eye, Sparkles, CheckCircle, Star } from "lucide-react";

const Service = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      image: "/images/ledboard.jpg",
      title: "LED Sign Boards",
      description:
        "High-quality LED sign boards that enhance your brand visibility both day and night. Energy-efficient, durable, and customizable to suit your brand's look and feel.",
      features: [
        "Energy-efficient",
        "Weather-resistant",
        "High-intensity lighting",
        "Custom designs",
      ],
      gradient: "from-yellow-400 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50",
      iconColor: "text-yellow-600",
    },
    {
      id: 2,
      image: "/images/landmark.jpg",
      title: "Landmark Signage",
      description:
        "Large-scale, creative signs that create lasting impressions and increase walk-in traffic. Turn your location into a recognizable destination.",
      features: [
        "Large-scale designs",
        "Premium materials",
        "Complete customization",
        "Brand recognition",
      ],
      gradient: "from-blue-400 to-indigo-500",
      bgGradient: "from-blue-50 to-indigo-50",
      iconColor: "text-blue-600",
    },
    {
      id: 3,
      image: "/images/acp.jpeg",
      title: "ACP Elevation",
      description:
        "Stunning ACP elevation solutions to modernize your building façade. Aluminum Composite Panels offer a sleek, stylish, and weatherproof finish.",
      features: [
        "Premium materials",
        "Weather-resistant",
        "Modern aesthetics",
        "Structural integrity",
      ],
      gradient: "from-gray-400 to-slate-600",
      bgGradient: "from-gray-50 to-slate-50",
      iconColor: "text-gray-600",
    },
    {
      id: 4,
      image: "/images/acrylic.jpg",
      title: "Acrylic Scan Boards",
      description:
        "Perfect for a sleek and modern display of your brand identity. High-quality acrylic sheets with glossy and professional finish.",
      features: [
        "High-quality acrylic",
        "Professional finish",
        "Various colors",
        "Sharp visuals",
      ],
      gradient: "from-purple-400 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      iconColor: "text-purple-600",
    },
    {
      id: 5,
      image: "/images/toughenedglass.jpg",
      title: "Toughened Glass",
      description:
        "Strength, safety, and sophistication in one package. Heat-treated glass resistant to breakage and high temperatures.",
      features: [
        "Safety standards",
        "Heat-resistant",
        "Premium quality",
        "Modern appearance",
      ],
      gradient: "from-cyan-400 to-blue-500",
      bgGradient: "from-cyan-50 to-blue-50",
      iconColor: "text-cyan-600",
    },
    {
      id: 6,
      image: "/images/glasspartition.jpg",
      title: "Glass Partitions",
      description:
        "Create open, bright, and elegant spaces. Divide areas without blocking natural light, offering a spacious look.",
      features: [
        "Natural light",
        "Premium hardware",
        "Easy maintenance",
        "High-end appearance",
      ],
      gradient: "from-teal-400 to-green-500",
      bgGradient: "from-teal-50 to-green-50",
      iconColor: "text-teal-600",
    },
    {
      id: 7,
      image: "/images/wpc.jpg",
      title: "WPC Panel Work",
      description:
        "Wood Polymer Composite panels offer a beautiful and durable alternative to traditional wood. Moisture-resistant and termite-proof.",
      features: [
        "Moisture-resistant",
        "Termite-proof",
        "Low maintenance",
        "Natural texture",
      ],
      gradient: "from-amber-400 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50",
      iconColor: "text-amber-600",
    },
    {
      id: 8,
      image: "/images/upvcdoors.jpg",
      title: "UPVC Doors & Windows",
      description:
        "Premium UPVC doors and windows built for performance and elegance. Excellent insulation from sound, heat, and weather changes.",
      features: [
        "Rust-free",
        "Energy efficient",
        "Low maintenance",
        "High security",
      ],
      gradient: "from-emerald-400 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
      iconColor: "text-emerald-600",
    },
    {
      id: 9,
      image: "/images/stickers.jpg",
      title: "Stickers & Graphics",
      description:
        "High-quality stickers for branding, décor, and promotional needs. Durable vinyl, weather and fade-resistant.",
      features: [
        "Durable vinyl",
        "Weather-resistant",
        "Custom shapes",
        "Creative designs",
      ],
      gradient: "from-rose-400 to-pink-500",
      bgGradient: "from-rose-50 to-pink-50",
      iconColor: "text-rose-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-purple-400/20 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-400/20 rounded-full animate-pulse delay-700"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div
            className={`text-center space-y-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium border border-white/20">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              15+ Years of Excellence
            </div>
            <h1 className="text-4xl lg:text-7xl font-bold leading-tight">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
                Services
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              High-quality visual and architectural solutions tailored to your
              brand and space
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm font-medium">
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-green-400" />
                Durable Solutions
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                Premium Quality
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-400" />
                Custom Designs
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Complete Solutions for Your Brand
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Company Name, we specialize in providing high-quality visual and
            architectural solutions designed to leave a lasting impression
            across Tamil Nadu.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <div className="aspect-square w-full h-full">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      // Fallback gradient if image fails to load
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  {/* Fallback gradient background */}
                  <div
                    className={`w-full h-full bg-gradient-to-br ${service.gradient} items-center justify-center text-white text-4xl font-bold hidden`}
                    style={{ display: "none" }}
                  >
                    {service.title.charAt(0)}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 space-y-4">
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle
                        className={`w-4 h-4 ${service.iconColor} flex-shrink-0`}
                      />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div
          className={`mt-20 text-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-3xl p-12 shadow-2xl transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              With over 15 years of experience across Tamil Nadu, we deliver
              durable, elegant, and customized services designed to leave a
              lasting impression.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Free Quote
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
