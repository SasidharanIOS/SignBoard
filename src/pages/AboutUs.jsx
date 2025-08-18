import React, { useState, useEffect } from "react";
import {
  Award,
  Eye,
  Target,
  MapPin,
  Calendar,
  Users,
  Lightbulb,
  Building2,
  Zap,
  Home,
  Layers,
  Shield,
  Palette,
  FileText,
  Square,
  Settings,
  Sparkles,
  Star,
  Gem,
  Wrench,
  Briefcase,
  Play,
  ChevronLeft,
  ChevronRight,
  Trophy,
  Quote,
} from "lucide-react";

const StatCounter = ({ target, label, icon }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById(
      `stat-${label.replace(/\s+/g, "-").toLowerCase()}`
    );
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [label]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2500;
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;

    let currentCount = 0;
    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div
      id={`stat-${label.replace(/\s+/g, "-").toLowerCase()}`}
      className="text-center text-white"
    >
      <div className="text-white mb-4 flex justify-center">{icon}</div>
      <div className="text-4xl lg:text-5xl font-bold mb-2">
        {count.toLocaleString()}
      </div>
      <p className="text-lg font-medium">{label}</p>
    </div>
  );
};

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Alex Martin",
      position: "Main Director",
      text: "Sed in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions Sed in the 1960s with including versions",
    },
    {
      name: "Sarah Johnson",
      position: "Business Owner",
      text: "Outstanding signage solutions that transformed our business presence. The quality and attention to detail exceeded our expectations in every way.",
    },
    {
      name: "Michael Chen",
      position: "Marketing Manager",
      text: "Professional service from start to finish. The team delivered exactly what we needed on time and within budget. Highly recommended.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Static Image */}
        <div className="order-2 lg:order-1">
          <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/reviews.jpg"
              alt="Client Review"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <div className="hidden w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <Users
                  className="w-16 h-16 mx-auto mb-4 text-gray-600"
                  strokeWidth={1.5}
                  fill="none"
                />
                <p className="text-lg font-semibold">Client Review</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Testimonial Slider */}
        <div className="order-1 lg:order-2">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-gray-500 text-sm uppercase tracking-wider">
                GREAT SERVICES
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#002852]">
                What Our Clients Say!
              </h2>
              <div className="w-16 h-1 bg-[#f8ac00]"></div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 relative">
              <Quote
                className="w-12 h-12 text-[#f8ac00] mb-6"
                strokeWidth={1.5}
                fill="none"
              />
              <p className="text-gray-600 text-lg leading-relaxed mb-8 italic">
                {testimonials[currentIndex].text}
              </p>
              <div>
                <div className="text-[#002852] font-bold text-xl mb-1">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-gray-500">
                  {testimonials[currentIndex].position}
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-between items-center">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-xl border border-black bg-white hover:bg-gray-50 flex items-center justify-center transition-colors"
              >
                <ChevronLeft
                  className="w-6 h-6 text-black"
                  strokeWidth={1.5}
                  fill="none"
                />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-[#f8ac00] w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-xl border border-black bg-white hover:bg-gray-50 flex items-center justify-center transition-colors"
              >
                <ChevronRight
                  className="w-6 h-6 text-black"
                  strokeWidth={1.5}
                  fill="none"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section - Portfolio Style */}
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
              architectural elevations, and digital displays crafted with
              precision and creativity.
            </p>
          </div>
        </div>
      </div>

      {/* About Content Section */}
      <div className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
              ABOUT SIGNAGE
            </p>
            <h2
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{ color: "#002852" }}
            >
              Professional Portfolio
            </h2>
            <div
              className="w-16 h-1 mx-auto"
              style={{ backgroundColor: "#f8ac00" }}
            ></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-[#002852] leading-tight">
                Experienced Signage And Graphic Professionals
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed">
                Connecticut since 1965, Vemila Signage brings more than 50 years
                of well experience in design, manufacture & installation. It
                began as a handcrafted sign shop of the high-quality for indoor
                & outdoor signage. We story-tell through creative concepts and
                provide all kind of signs for the most recognized brands across
                the worldwide.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
                A form of communication between you and your customers and the
                potential customers. Build That's How We Like The World To Be.
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:pl-8">
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg shadow-lg h-96 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <Users
                      className="w-16 h-16 mx-auto mb-4 text-gray-600"
                      strokeWidth={1.5}
                      fill="none"
                    />
                    <p className="text-lg font-semibold">
                      Professional at Work
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div style={{ backgroundColor: "#f8ac00" }} className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCounter
              target={35}
              label="Completed Project"
              icon={
                <Briefcase
                  className="w-12 h-12 text-white"
                  strokeWidth={1.5}
                  fill="none"
                />
              }
            />
            <StatCounter
              target={10}
              label="Expert Worker"
              icon={
                <Users
                  className="w-12 h-12 text-white"
                  strokeWidth={1.5}
                  fill="none"
                />
              }
            />
            <StatCounter
              target={405}
              label="Happy Customers"
              icon={
                <Star
                  className="w-12 h-12 text-white"
                  strokeWidth={1.5}
                  fill="none"
                />
              }
            />
            <StatCounter
              target={0}
              label="Award Winner"
              icon={
                <Trophy
                  className="w-12 h-12 text-white"
                  strokeWidth={1.5}
                  fill="none"
                />
              }
            />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 lg:py-24">
        <TestimonialSlider />
      </div>

      {/* Our Story Section */}
      <div className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
              OUR JOURNEY
            </p>
            <h2
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{ color: "#002852" }}
            >
              Our Founder's Story
            </h2>
            <div
              className="w-16 h-1 mx-auto"
              style={{ backgroundColor: "#f8ac00" }}
            ></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold" style={{ color: "#002852" }}>
                The Story of CEO Name
              </h3>
              <p className="text-gray-600 leading-relaxed">
                It all began with a schoolboy spending his holidays immersed in
                colors and creativity, assisting his painter-artist uncle. What
                started as playful learning soon turned into a deep-rooted
                passion. As the family opened a small sticker shop, CEO Name
                found himself drawn more and more toward the world of visual art
                and design.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Even through college, he continued to work with dedication — not
                just for income, but to feed his creative soul. After
                graduation, while many of his friends stepped into secure
                futures through family businesses, CEO Name was determined to
                carve his own path.
              </p>
              <div
                className="bg-white rounded-lg p-6 shadow-sm"
                style={{ borderLeft: "4px solid #f8ac00" }}
              >
                <h4 className="font-semibold mb-2" style={{ color: "#002852" }}>
                  The Breakthrough Moment
                </h4>
                <p className="text-gray-600">
                  In 2011, he finally made his mark with a breakthrough signage
                  project in Erode, capturing attention with vibrant flex
                  designs and premium ACP elevations.
                </p>
              </div>
            </div>

            <div className="lg:pl-8">
              <div
                className="rounded-2xl aspect-square flex items-center justify-center text-white shadow-xl"
                style={{
                  background:
                    "linear-gradient(135deg, #002852 0%, #003d75 100%)",
                }}
              >
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto">
                    <Users
                      className="w-12 h-12 text-white"
                      strokeWidth={1.5}
                      fill="none"
                    />
                  </div>
                  <h4 className="text-xl font-semibold">CEO Name</h4>
                  <p className="text-blue-200">Founder & Visionary</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="text-center p-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl border border-black bg-white flex items-center justify-center">
                  <Target
                    className="w-6 h-6 text-black"
                    strokeWidth={1.5}
                    fill="none"
                  />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: "#002852" }}>
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To craft innovative, durable, and visually compelling signage
                solutions that empower businesses to stand out with clarity and
                confidence. We are committed to using premium materials,
                cutting-edge techniques, and creative design to deliver
                unmatched quality.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl border border-black bg-white flex items-center justify-center">
                  <Eye
                    className="w-6 h-6 text-black"
                    strokeWidth={1.5}
                    fill="none"
                  />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: "#002852" }}>
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be Tamil Nadu's most trusted and admired signage and
                fabrication partner, known for quality, creativity, and
                reliability. We envision shaping the visual identity of
                businesses across industries with smart, sustainable, and modern
                design solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Expertise Section */}
      <div className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
              OUR EXPERTISE
            </p>
            <h2
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{ color: "#002852" }}
            >
              What We Specialize In
            </h2>
            <div
              className="w-16 h-1 mx-auto"
              style={{ backgroundColor: "#f8ac00" }}
            ></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <Zap
                    className="w-8 h-8 text-black"
                    strokeWidth={1.5}
                    fill="none"
                  />
                ),
                title: "LED Sign Board",
                desc: "Bright, energy-efficient digital displays",
              },
              {
                icon: (
                  <MapPin
                    className="w-8 h-8 text-black"
                    strokeWidth={1.5}
                    fill="none"
                  />
                ),
                title: "Landmark Signage",
                desc: "Distinctive markers that define locations",
              },
              {
                icon: (
                  <Building2
                    className="w-8 h-8 text-black"
                    strokeWidth={1.5}
                    fill="none"
                  />
                ),
                title: "ACP Elevation",
                desc: "Modern architectural composite panels",
              },
              {
                icon: (
                  <Layers
                    className="w-8 h-8 text-black"
                    strokeWidth={1.5}
                    fill="none"
                  />
                ),
                title: "Acrylic Scan Board",
                desc: "Crystal clear premium acrylic solutions",
              },
              {
                icon: (
                  <Shield
                    className="w-8 h-8 text-black"
                    strokeWidth={1.5}
                    fill="none"
                  />
                ),
                title: "Toughened Glass",
                desc: "Durable safety glass installations",
              },
              {
                icon: (
                  <Home
                    className="w-8 h-8 text-black"
                    strokeWidth={1.5}
                    fill="none"
                  />
                ),
                title: "Glass Partition",
                desc: "Elegant space division solutions",
              },
            ].map((service, index) => (
              <div key={index} className="text-center p-6">
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: "#002852" }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="py-16 lg:py-24" style={{ backgroundColor: "#002852" }}>
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Brand Presence?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            From design to installation, we manage it all with unmatched
            precision and creativity.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              className="text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105"
              style={{ backgroundColor: "#f8ac00" }}
            >
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white transition-all duration-200 hover:scale-105 transform hover:text-[#002852]">
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;