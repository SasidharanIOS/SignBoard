import React, { useState, useEffect, useRef } from "react";
import {
  Eye,
  Award,
  Zap,
  Grid,
  Image as LucideImage,
  Star,
  Users,
  Clock,
  ArrowRight,
  Play,
  Trophy,
  Building
} from "lucide-react";

// Individual section animation component
const AnimatedSection = ({ children, className = "", delay = 0, direction = "up" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [delay, hasAnimated]);

  const getTransformClasses = () => {
    const baseClasses = "transform transition-all duration-1000 ease-out";
    if (isVisible) return `${baseClasses} translate-x-0 translate-y-0 opacity-100`;
    
    switch (direction) {
      case "left":
        return `${baseClasses} -translate-x-12 opacity-0`;
      case "right":
        return `${baseClasses} translate-x-12 opacity-0`;
      case "down":
        return `${baseClasses} -translate-y-12 opacity-0`;
      default: // up
        return `${baseClasses} translate-y-12 opacity-0`;
    }
  };

  return (
    <div
      ref={sectionRef}
      className={`${getTransformClasses()} ${className}`}
    >
      {children}
    </div>
  );
};

// Portfolio card with individual animation
const AnimatedPortfolioCard = ({ children, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, (index % 4) * 100); // Stagger animation based on position in row
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index, hasAnimated]);

  return (
    <div
      ref={cardRef}
      className={`transform transition-all duration-700 ease-out ${
        isVisible 
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-8 opacity-0 scale-95'
      }`}
    >
      {children}
    </div>
  );
};

// Stat counter with individual animation
const StatCounter = ({ icon, number, label, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [count, setCount] = useState(0);
  const statRef = useRef(null);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, delay);
        }
      },
      { threshold: 0.3 }
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => observer.disconnect();
  }, [delay, hasAnimated]);

  useEffect(() => {
    if (!isVisible) return;

    const targetNumber = parseInt(number);
    const duration = 2000;
    const steps = 50;
    const increment = targetNumber / steps;
    let currentCount = 0;

    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, number]);

  return (
    <div
      ref={statRef}
      className={`text-center text-white group transform transition-all duration-1000 ease-out ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-8 opacity-0'
      }`}
    >
      <div className="mb-3 flex justify-center">
        <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
          {icon}
        </div>
      </div>
      <div className="text-2xl lg:text-4xl font-bold mb-1">
        {typeof number === 'string' && number.includes('%') 
          ? `${count}%` 
          : `${count}+`
        }
      </div>
      <p className="text-sm lg:text-base font-medium opacity-90">{label}</p>
    </div>
  );
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filters = [
    "ALL",
    "LED MODEL",
    "INDOOR & METAL LETTER",
    "MUGAVAREE",
    "ELEVATION",
  ];

  const portfolioItems = [
    // LED MODEL category
    { id: 1, category: "LED MODEL", image: "l2.jpg", title: "Premium LED Display" },
    { id: 2, category: "LED MODEL", image: "l3.jpg", title: "Digital Signage Board" },
    { id: 3, category: "LED MODEL", image: "l7.jpg", title: "Interactive LED Panel" },
    { id: 4, category: "LED MODEL", image: "l10.jpg", title: "Outdoor LED Screen" },
    { id: 5, category: "LED MODEL", image: "l17.jpg", title: "Commercial LED Display" },
    { id: 6, category: "LED MODEL", image: "l22.jpg", title: "High-Resolution LED Wall" },
    // INDOOR & METAL LETTER category
    { id: 7, category: "INDOOR & METAL LETTER", image: "i1.jpg", title: "3D Metal Letters" },
    { id: 8, category: "INDOOR & METAL LETTER", image: "i3.jpg", title: "Indoor Corporate Signage" },
    { id: 9, category: "INDOOR & METAL LETTER", image: "i4.jpg", title: "Illuminated Metal Signs" },
    { id: 10, category: "INDOOR & METAL LETTER", image: "i7.jpg", title: "Reception Area Signage" },
    { id: 11, category: "INDOOR & METAL LETTER", image: "i8.jpg", title: "Premium Metal Lettering" },
    { id: 12, category: "INDOOR & METAL LETTER", image: "i10.jpg", title: "Office Building Letters" },
    // MUGAVAREE category
    { id: 13, category: "MUGAVAREE", image: "m2.jpg", title: "Traditional Mugavaree Design" },
    { id: 14, category: "MUGAVAREE", image: "m6.jpg", title: "Cultural Signage" },
    { id: 15, category: "MUGAVAREE", image: "m9.jpg", title: "Heritage Style Board" },
    { id: 16, category: "MUGAVAREE", image: "m11.jpg", title: "Decorative Mugavaree" },
    { id: 17, category: "MUGAVAREE", image: "m13.jpg", title: "Artistic Traditional Sign" },
    // ELEVATION category
    { id: 18, category: "ELEVATION", image: "e1.jpg", title: "Modern Building Elevation" },
    { id: 19, category: "ELEVATION", image: "e5.jpg", title: "Commercial Facade" },
    { id: 20, category: "ELEVATION", image: "e6.jpg", title: "ACP Panel Elevation" },
    { id: 21, category: "ELEVATION", image: "e8.jpg", title: "Corporate Building Front" },
    { id: 22, category: "ELEVATION", image: "e9.jpg", title: "Architectural Elevation" },
  ];

  const filteredItems =
    activeFilter === "ALL"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative py-20 lg:py-24"
        style={{ backgroundColor: "#002852" }}
      >
        <div className="max-w-7xl py-10 mx-auto px-4 lg:px-6">
          <AnimatedSection className="text-center">
            <h1 className="text-3xl py-5 lg:text-5xl font-bold text-white mb-4">
              Showcasing Excellence in{" "}
              <span style={{ color: "#f59e0b" }}>Signage Design</span>
            </h1>
            <p className="text-base lg:text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Explore our diverse collection of premium signage solutions,
              architectural elevations, and digital displays crafted with precision and creativity.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          {/* Section Header */}
          <AnimatedSection className="text-center mb-12">
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">OUR WORK</p>
            <h2
              className="text-2xl lg:text-3xl font-bold mb-3"
              style={{ color: "#1e3a8a" }}
            >
              Professional Portfolio
            </h2>
            <p className="text-sm lg:text-base text-gray-600 max-w-2xl mx-auto">
              Browse through our extensive collection of completed projects across various categories
            </p>
          </AnimatedSection>

          {/* Filter Buttons */}
          <AnimatedSection delay={200} className="flex flex-wrap justify-center gap-4 mb-16">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 border-2 hover:scale-105 ${
                  activeFilter === filter
                    ? "text-white shadow-md"
                    : "bg-white text-gray-700 hover:text-white shadow-sm hover:shadow-md"
                }`}
                style={{
                  backgroundColor: activeFilter === filter ? "#1e3a8a" : "white",
                  borderColor: "#1e3a8a",
                }}
                onMouseEnter={(e) => {
                  if (activeFilter !== filter) {
                    e.target.style.backgroundColor = "#1e3a8a";
                    e.target.style.color = "white";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeFilter !== filter) {
                    e.target.style.backgroundColor = "white";
                    e.target.style.color = "#374151";
                  }
                }}
              >
                {filter}
              </button>
            ))}
          </AnimatedSection>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <AnimatedPortfolioCard key={item.id} index={index}>
                <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 h-full">
                  {/* Image Container */}
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <div className="hidden w-full h-full bg-gray-100 flex items-center justify-center">
                      <div className="text-center">
                        <LucideImage className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                        <p className="text-xs text-gray-500">{item.image}</p>
                      </div>
                    </div>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end">
                      <div className="p-4 text-white">
                        <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                        <p className="text-xs text-gray-200">{item.category}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedPortfolioCard>
            ))}
          </div>

          {/* Load More Button */}
          <AnimatedSection delay={400} className="text-center mt-16">
            <button
              className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 hover:rotate-1"
              style={{ backgroundColor: "#1e3a8a" }}
            >
              Load More Projects
              <ArrowRight className="w-5 h-5" />
            </button>
          </AnimatedSection>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16" style={{ backgroundColor: "#f59e0b" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <StatCounter
              icon={<Grid className="w-8 h-8 lg:w-10 lg:h-10" />}
              number="150"
              label="Projects Completed"
              delay={0}
            />
            <StatCounter
              icon={<Users className="w-8 h-8 lg:w-10 lg:h-10" />}
              number="120"
              label="Happy Clients"
              delay={100}
            />
            <StatCounter
              icon={<Award className="w-8 h-8 lg:w-10 lg:h-10" />}
              number="15"
              label="Years Experience"
              delay={200}
            />
            <StatCounter
              icon={<Star className="w-8 h-8 lg:w-10 lg:h-10" />}
              number="98%"
              label="Client Satisfaction"
              delay={300}
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <AnimatedSection className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 lg:px-6">
          <h2
            className="text-2xl lg:text-3xl font-bold mb-4"
            style={{ color: "#1e3a8a" }}
          >
            Ready to Start Your Project?
          </h2>
          <p className="text-base lg:text-lg text-gray-600 mb-6">
            Transform your vision into reality with our expert signage solutions.
            Let's create something extraordinary together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button 
              className="px-6 py-3 text-white font-medium rounded-lg transition-all duration-300 hover:opacity-90 hover:scale-105"
              style={{ backgroundColor: "#f59e0b" }}
            >
              Get Free Quote
            </button>
            <button 
              className="px-6 py-3 font-medium rounded-lg border-2 transition-all duration-300 hover:text-white hover:scale-105"
              style={{ 
                borderColor: "#1e3a8a",
                color: "#1e3a8a"
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#1e3a8a";
                e.target.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#1e3a8a";
              }}
            >
              Contact Us Today
            </button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Portfolio;
