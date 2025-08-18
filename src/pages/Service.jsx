import React, { useState, useEffect } from "react";
import {
  Eye,
  Award,
  Zap,
  Grid,
  ImageIcon,
  Star,
  Users,
  Clock,
  ArrowRight,
  Play,
  Trophy,
  Building,
  CheckCircle,
  Sparkles
} from "lucide-react";

const Service = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filters = [
    "ALL",
    "LED BOARDS",
    "ELEVATION",
    "GLASS WORK",
    "PANELS & DOORS",
    "GRAPHICS",
  ];

  const services = [
    {
      id: 1,
      category: "LED BOARDS",
      image: "ledboard.jpg",
      title: "LED Sign Boards",
      description: "High-quality LED sign boards that enhance your brand visibility both day and night. Energy-efficient, durable, and customizable to suit your brand's look and feel. Perfect for retail stores, restaurants, and commercial buildings.",
      features: ["Energy-efficient", "Weather-resistant", "High-intensity lighting", "Custom designs"],
    },
    {
      id: 2,
      category: "ELEVATION",
      image: "landmark.jpg",
      title: "Landmark Signage",
      description: "Large-scale, creative signs that create lasting impressions and increase walk-in traffic. Turn your location into a recognizable destination with our premium landmark signage solutions.",
      features: ["Large-scale designs", "Premium materials", "Complete customization", "Brand recognition"],
    },
    {
      id: 3,
      category: "ELEVATION",
      image: "acp.jpeg",
      title: "ACP Elevation",
      description: "Stunning ACP elevation solutions to modernize your building façade. Aluminum Composite Panels offer a sleek, stylish, and weatherproof finish that transforms any building exterior.",
      features: ["Premium materials", "Weather-resistant", "Modern aesthetics", "Structural integrity"],
    },
    {
      id: 4,
      category: "PANELS & DOORS",
      image: "acrylic.jpg",
      title: "Acrylic Scan Boards",
      description: "Perfect for a sleek and modern display of your brand identity. High-quality acrylic sheets with glossy and professional finish that provides excellent clarity and durability.",
      features: ["High-quality acrylic", "Professional finish", "Various colors", "Sharp visuals"],
    },
    {
      id: 5,
      category: "GLASS WORK",
      image: "toughenedglass.jpg",
      title: "Toughened Glass",
      description: "Strength, safety, and sophistication in one package. Heat-treated glass resistant to breakage and high temperatures, perfect for modern commercial and residential applications.",
      features: ["Safety standards", "Heat-resistant", "Premium quality", "Modern appearance"],
    },
    {
      id: 6,
      category: "GLASS WORK",
      image: "glasspartition.jpg",
      title: "Glass Partitions",
      description: "Create open, bright, and elegant spaces without blocking natural light. Divide areas while maintaining spaciousness and allowing natural light to flow throughout your space.",
      features: ["Natural light", "Premium hardware", "Easy maintenance", "High-end appearance"],
    },
    {
      id: 7,
      category: "PANELS & DOORS",
      image: "wpc.jpg",
      title: "WPC Panel Work",
      description: "Wood Polymer Composite panels offer a beautiful and durable alternative to traditional wood. Moisture-resistant and termite-proof solution for modern construction needs.",
      features: ["Moisture-resistant", "Termite-proof", "Low maintenance", "Natural texture"],
    },
    {
      id: 8,
      category: "PANELS & DOORS",
      image: "upvcdoors.jpg",
      title: "UPVC Doors & Windows",
      description: "Premium UPVC doors and windows built for performance and elegance. Excellent insulation from sound, heat, and weather changes with superior security features.",
      features: ["Rust-free", "Energy efficient", "Low maintenance", "High security"],
    },
    {
      id: 9,
      category: "GRAPHICS",
      image: "stickers.jpg",
      title: "Stickers & Graphics",
      description: "High-quality stickers for branding, décor, and promotional needs. Durable vinyl that's weather and fade-resistant, perfect for both indoor and outdoor applications.",
      features: ["Durable vinyl", "Weather-resistant", "Custom shapes", "Creative designs"],
    },
  ];

  const filteredServices =
    activeFilter === "ALL"
      ? services
      : services.filter((service) => service.category === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
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
              High-quality visual and architectural solutions tailored to your brand and space, 
              crafted with precision and creativity.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 lg:py-20">
        <div className="max-w-full">
          
          {/* Section Header */}
          <div className="text-center mb-12 px-4 lg:px-6">
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">OUR SERVICES</p>
            <h2 className="text-2xl lg:text-3xl font-bold mb-3" style={{ color: '#1e3a8a' }}>
              Professional Services
            </h2>
            <p className="text-sm lg:text-base text-gray-600 max-w-2xl mx-auto">
              Browse through our comprehensive range of professional services across various categories
            </p>
          </div>

          {/* Services List - Vertical Layout */}
          <div className="space-y-0">
            {filteredServices.map((service, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={service.id}
                  className="bg-white shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="grid lg:grid-cols-2 min-h-[500px]">
                    {/* Image Section - No padding/margin */}
                    <div 
                      className={`relative overflow-hidden ${
                        isEven ? 'lg:order-1' : 'lg:order-2'
                      }`}
                    >
                      <img
                        src={`/${service.image}`}
                        alt={service.title}
                        className="w-full h-full object-cover min-h-[400px] lg:min-h-[500px]"
                        onError={(e) => {
                          // Fallback if image fails to load
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                      {/* Fallback placeholder */}
                      <div 
                        className="w-full h-full bg-gray-100 items-center justify-center min-h-[400px] lg:min-h-[500px] hidden"
                        style={{ display: "none" }}
                      >
                        <div className="text-center">
                          <ImageIcon className="w-16 h-16 lg:w-20 lg:h-20 text-gray-400 mx-auto mb-3" />
                          <p className="text-sm text-gray-500 font-medium">{service.image}</p>
                          <p className="text-xs text-gray-400 mt-1">{service.title}</p>
                        </div>
                      </div>
                      
                    </div>

                    {/* Content Section */}
                    <div 
                      className={`flex items-center ${
                        isEven 
                          ? 'lg:order-2 pl-8 lg:pl-16 pr-6 lg:pr-8' 
                          : 'lg:order-1 pr-8 lg:pr-16 pl-6 lg:pl-8'
                      } py-8 lg:py-16`}
                    >
                      <div className="w-full">
                        

                        {/* Title */}
                        <h3 
                          className="text-2xl lg:text-4xl font-bold mb-6 leading-tight"
                          style={{ color: '#1e3a8a' }}
                        >
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed mb-8 text-base lg:text-lg">
                          {service.description}
                        </p>

                        {/* Features Table - Professional 2x2 Grid */}
                        <div className="mb-8">
                          <div className="grid grid-cols-2 gap-4">
                            {service.features.map((feature, idx) => (
                              <div 
                                key={idx} 
                                className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors duration-200"
                              >
                                
                                <span className="text-sm font-semibold text-gray-800">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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
            Ready to Transform Your Space?
          </h2>
          <p className="text-base lg:text-lg text-gray-600 mb-6">
            With over 15 years of experience across Tamil Nadu, we deliver durable, elegant, 
            and customized services designed to leave a lasting impression.
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
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
