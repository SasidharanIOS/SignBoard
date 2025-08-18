import React, { useState, useEffect } from "react";
import {
  Eye,
  Award,
  Zap,
  Grid,
  Image,
  Star,
  Users,
  Clock,
  ArrowRight,
  Play,
  Trophy,
  Building
} from "lucide-react";

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
      title: "Premium LED Display",
    },
    {
      id: 2,
      category: "LED MODEL",
      image: "l3.jpg",
      title: "Digital Signage Board",
    },
    {
      id: 3,
      category: "LED MODEL",
      image: "l7.jpg",
      title: "Interactive LED Panel",
    },
    {
      id: 4,
      category: "LED MODEL",
      image: "l10.jpg",
      title: "Outdoor LED Screen",
    },
    {
      id: 5,
      category: "LED MODEL",
      image: "l17.jpg",
      title: "Commercial LED Display",
    },
    {
      id: 6,
      category: "LED MODEL",
      image: "l22.jpg",
      title: "High-Resolution LED Wall",
    },
    // INDOOR & METAL LETTER category
    {
      id: 7,
      category: "INDOOR & METAL LETTER",
      image: "i1.jpg",
      title: "3D Metal Letters",
    },
    {
      id: 8,
      category: "INDOOR & METAL LETTER",
      image: "i3.jpg",
      title: "Indoor Corporate Signage",
    },
    {
      id: 9,
      category: "INDOOR & METAL LETTER",
      image: "i4.jpg",
      title: "Illuminated Metal Signs",
    },
    {
      id: 10,
      category: "INDOOR & METAL LETTER",
      image: "i7.jpg",
      title: "Reception Area Signage",
    },
    {
      id: 11,
      category: "INDOOR & METAL LETTER",
      image: "i8.jpg",
      title: "Premium Metal Lettering",
    },
    {
      id: 12,
      category: "INDOOR & METAL LETTER",
      image: "i10.jpg",
      title: "Office Building Letters",
    },
    // MUGAVAREE category
    {
      id: 13,
      category: "MUGAVAREE",
      image: "m2.jpg",
      title: "Traditional Mugavaree Design",
    },
    {
      id: 14,
      category: "MUGAVAREE",
      image: "m6.jpg",
      title: "Cultural Signage",
    },
    {
      id: 15,
      category: "MUGAVAREE",
      image: "m9.jpg",
      title: "Heritage Style Board",
    },
    {
      id: 16,
      category: "MUGAVAREE",
      image: "m11.jpg",
      title: "Decorative Mugavaree",
    },
    {
      id: 17,
      category: "MUGAVAREE",
      image: "m13.jpg",
      title: "Artistic Traditional Sign",
    },
    // ELEVATION category
    {
      id: 18,
      category: "ELEVATION",
      image: "e1.jpg",
      title: "Modern Building Elevation",
    },
    {
      id: 19,
      category: "ELEVATION",
      image: "e5.jpg",
      title: "Commercial Facade",
    },
    {
      id: 20,
      category: "ELEVATION",
      image: "e6.jpg",
      title: "ACP Panel Elevation",
    },
    {
      id: 21,
      category: "ELEVATION",
      image: "e8.jpg",
      title: "Corporate Building Front",
    },
    {
      id: 22,
      category: "ELEVATION",
      image: "e9.jpg",
      title: "Architectural Elevation",
    },
  ];

  const filteredItems =
    activeFilter === "ALL"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Matching Service Page Style */}
      <div 
        className="relative py-20 lg:py-24"
        style={{ backgroundColor: '#002852' }}
      >
        <div className="max-w-7xl py-10 mx-auto px-4 lg:px-6">
          <div className="text-center">
            <h1 className="text-3xl py-5 lg:text-5xl font-bold text-white mb-4">
              Showcasing Excellence in{" "}
              <span style={{ color: '#f59e0b' }}>Signage Design</span>
            </h1>
            
            <p className="text-base lg:text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Explore our diverse collection of premium signage solutions, 
              architectural elevations, and digital displays crafted with precision and creativity.
            </p>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">OUR WORK</p>
            <h2 className="text-2xl lg:text-3xl font-bold mb-3" style={{ color: '#1e3a8a' }}>
              Professional Portfolio
            </h2>
            <p className="text-sm lg:text-base text-gray-600 max-w-2xl mx-auto">
              Browse through our extensive collection of completed projects across various categories
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 border-2 ${
                  activeFilter === filter
                    ? 'text-white shadow-md'
                    : 'bg-white text-gray-700 hover:text-white shadow-sm hover:shadow-md'
                }`}
                style={{
                  backgroundColor: activeFilter === filter ? '#1e3a8a' : 'white',
                  borderColor: '#1e3a8a',
                }}
                onMouseEnter={(e) => {
                  if (activeFilter !== filter) {
                    e.target.style.backgroundColor = '#1e3a8a';
                    e.target.style.color = 'white';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeFilter !== filter) {
                    e.target.style.backgroundColor = 'white';
                    e.target.style.color = '#374151';
                  }
                }}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-square">
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <div className="text-center">
                      <Image className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-xs text-gray-500">{item.image}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-16">
            <button
              className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: '#1e3a8a' }}
            >
              Load More Projects
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div
        className="py-16"
        style={{ backgroundColor: '#f59e0b' }}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center text-white">
              <div className="mb-3 flex justify-center">
                <Grid className="w-8 h-8 lg:w-10 lg:h-10" />
              </div>
              <div className="text-2xl lg:text-4xl font-bold mb-1">150+</div>
              <p className="text-sm lg:text-base font-medium opacity-90">Projects Completed</p>
            </div>
            
            <div className="text-center text-white">
              <div className="mb-3 flex justify-center">
                <Users className="w-8 h-8 lg:w-10 lg:h-10" />
              </div>
              <div className="text-2xl lg:text-4xl font-bold mb-1">120+</div>
              <p className="text-sm lg:text-base font-medium opacity-90">Happy Clients</p>
            </div>
            
            <div className="text-center text-white">
              <div className="mb-3 flex justify-center">
                <Award className="w-8 h-8 lg:w-10 lg:h-10" />
              </div>
              <div className="text-2xl lg:text-4xl font-bold mb-1">15+</div>
              <p className="text-sm lg:text-base font-medium opacity-90">Years Experience</p>
            </div>
            
            <div className="text-center text-white">
              <div className="mb-3 flex justify-center">
                <Star className="w-8 h-8 lg:w-10 lg:h-10" />
              </div>
              <div className="text-2xl lg:text-4xl font-bold mb-1">98%</div>
              <p className="text-sm lg:text-base font-medium opacity-90">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 lg:px-6">
          <h2
            className="text-2xl lg:text-3xl font-bold mb-4"
            style={{ color: '#1e3a8a' }}
          >
            Ready to Start Your Project?
          </h2>
          <p className="text-base lg:text-lg text-gray-600 mb-6">
            Transform your vision into reality with our expert signage solutions.
            Let's create something extraordinary together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button 
              className="px-6 py-3 text-white font-medium rounded-lg transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: '#f59e0b' }}
            >
              Get Free Quote
            </button>
            <button 
              className="px-6 py-3 font-medium rounded-lg border-2 transition-all duration-300 hover:text-white"
              style={{ 
                borderColor: '#1e3a8a',
                color: '#1e3a8a'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#1e3a8a';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#1e3a8a';
              }}
            >
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;