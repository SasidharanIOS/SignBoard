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
} from "lucide-react";

const StatCounter = ({ target, label, gradient, icon }) => {
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
      className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
    >
      <div className="text-center space-y-4">
        <div
          className={`text-6xl lg:text-7xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
        >
          {count.toLocaleString()}+
        </div>
        <div className="space-y-2">
          <div className="text-3xl">{icon}</div>
          <p className="text-lg font-semibold text-gray-800">{label}</p>
        </div>
        <div
          className={`h-1 bg-gradient-to-r ${gradient} rounded-full transform transition-all duration-1000 ${
            isVisible ? "scale-x-100" : "scale-x-0"
          }`}
        ></div>
      </div>
    </div>
  );
};

const ExpertiseAnimation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const expertiseItems = [
    {
      title: "LED Sign Board",
      icon: <Zap className="w-12 h-12" />,
      iconColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
      description: "Bright, energy-efficient digital displays",
    },
    {
      title: "Landmark Signage",
      icon: <MapPin className="w-12 h-12" />,
      iconColor: "bg-gradient-to-br from-red-400 to-pink-500",
      description: "Distinctive markers that define locations",
    },
    {
      title: "ACP Elevation",
      icon: <Building2 className="w-12 h-12" />,
      iconColor: "bg-gradient-to-br from-green-400 to-emerald-500",
      description: "Modern architectural composite panels",
    },
    {
      title: "Acrylic Scan Board",
      icon: <Layers className="w-12 h-12" />,
      iconColor: "bg-gradient-to-br from-purple-400 to-indigo-500",
      description: "Crystal clear premium acrylic solutions",
    },
    {
      title: "Toughened Glass",
      icon: <Shield className="w-12 h-12" />,
      iconColor: "bg-gradient-to-br from-blue-400 to-cyan-500",
      description: "Durable safety glass installations",
    },
    {
      title: "Glass Partition",
      icon: <Home className="w-12 h-12" />,
      iconColor: "bg-gradient-to-br from-teal-400 to-green-500",
      description: "Elegant space division solutions",
    },
    {
      title: "WPC Panel Work",
      icon: <Palette className="w-12 h-12" />,
      iconColor: "bg-gradient-to-br from-orange-400 to-red-500",
      description: "Weather-resistant composite panels",
    },
    {
      title: "UPVC Door & Windows",
      icon: <Square className="w-12 h-12" />,
      iconColor: "bg-gradient-to-br from-sky-400 to-blue-500",
      description: "Energy-efficient window solutions",
    },
    {
      title: "Stickers",
      icon: <FileText className="w-12 h-12" />,
      iconColor: "bg-gradient-to-br from-pink-400 to-rose-500",
      description: "Custom vinyl and digital graphics",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % expertiseItems.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-4 lg:mx-8 bg-white rounded-2xl shadow-xl border border-gray-100 transform transition-all duration-700 hover:scale-105 animate-slideInUp overflow-hidden relative">
      {/* Left and Right Vector Icons */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 opacity-10">
        <Settings className="w-24 h-24 text-blue-600 animate-float" />
      </div>
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-10">
        <Wrench
          className="w-24 h-24 text-indigo-600 animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 animate-pulse">
            <Award className="w-4 h-4" />
            Our Expertise
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4 animate-fadeIn">
            We Are Expert In Making
          </h2>
          <p className="text-lg text-gray-600 animate-fadeInDelay">
            Premium quality solutions with cutting-edge technology and creative
            excellence
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8 mb-8 transition-all duration-500 hover:bg-gray-100 hover:shadow-lg">
            <div className="flex items-center justify-center space-x-8">
              <div className="flex-shrink-0">
                <div
                  className={`w-20 h-20 ${expertiseItems[currentIndex].iconColor} rounded-lg flex items-center justify-center text-white shadow-lg transition-all`}
                >
                  {expertiseItems[currentIndex].icon}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2 transition-all duration-300">
                  {expertiseItems[currentIndex].title}
                </h3>
                <p className="text-gray-600 transition-all duration-300">
                  {expertiseItems[currentIndex].description}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-2">
            {expertiseItems.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-blue-600 animate-pulse"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutUs = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.6);
          }
        }
        
        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out;
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        
        .animate-fadeInDelay {
          animation: fadeIn 1s ease-out 0.3s both;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .animate-delayed-1 {
          animation-delay: 0.2s;
        }
        
        .animate-delayed-2 {
          animation-delay: 0.4s;
        }
        
        .animate-delayed-3 {
          animation-delay: 0.6s;
        }
        
        .animate-delayed-4 {
          animation-delay: 0.8s;
        }
        
        .animate-delayed-5 {
          animation-delay: 1s;
        }
        
        .animate-delayed-6 {
          animation-delay: 1.2s;
        }
      `}</style>

      <div className="max-w-9xl mx-auto space-y-12">
        {/* Hero Card - Updated to match Services page height */}
        <div
          className={`bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden shadow-2xl`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
            <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
              <div className="text-center space-y-12">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-medium animate-pulse">
                  <MapPin className="w-4 h-4" />
                  Serving Tamil Nadu Since 2009
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight animate-slideInLeft">
                  Welcome to{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 animate-pulse">
                    Company Name
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed animate-slideInRight">
                  Tamil Nadu's Trusted Name in{" "}
                  <span className="font-semibold text-white">
                    Smart Signage & Custom Fabrication
                  </span>
                </p>
                <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
                  <div className="flex items-center gap-2 animate-float animate-delayed-1">
                    <Award className="w-5 h-5 text-yellow-400" />
                    15+ Years Experience
                  </div>
                  <div className="flex items-center gap-2 animate-float animate-delayed-3">
                    <Building2 className="w-5 h-5 text-green-400" />
                    Premium Quality
                  </div>
                  <div className="flex items-center gap-2 animate-float animate-delayed-5">
                    <Users className="w-5 h-5 text-blue-400" />
                    Trusted Partner
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise Card */}
        <div className="animate-slideInUp animate-delayed-2 relative">
          <ExpertiseAnimation />
        </div>

        {/* Introduction Card with Vector Icons */}
        <div className="mx-4 lg:mx-8 bg-white rounded-2xl shadow-xl border border-gray-100 animate-slideInUp animate-delayed-3 hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden relative">
          {/* Left and Right Vector Icons */}
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 opacity-10">
            <Sparkles className="w-32 h-32 text-purple-600 animate-float" />
          </div>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-10">
            <Star
              className="w-32 h-32 text-yellow-600 animate-float"
              style={{ animationDelay: "1.5s" }}
            />
          </div>

          <div className="relative p-8 lg:p-12">
            <div className="text-center space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 animate-fadeIn">
                Crafting Visual Excellence for Over a Decade
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto animate-fadeInDelay">
                For over 15 years, Company Name has been at the forefront of
                crafting{" "}
                <strong>
                  impactful, durable, and visually stunning signage solutions
                </strong>{" "}
                for businesses across Tamil Nadu. We specialize in delivering
                signage and architectural fabrication services that combine{" "}
                <strong>creativity, quality, and long-term reliability</strong>.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto animate-fadeInDelay">
                Whether you're a corporate brand, retail store, or industrial
                facility, our expert team is equipped to transform your ideas
                into powerful visual statements that{" "}
                <strong>
                  attract attention and elevate your brand presence
                </strong>
                .
              </p>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold animate-glow">
                <Calendar className="w-5 h-5" />
                On Time, On Budget, Unmatched Precision
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="mx-4 lg:mx-8 grid lg:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 animate-slideInUp animate-delayed-4 hover:scale-105">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center animate-glow">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To craft innovative, durable, and visually compelling signage
              solutions that empower businesses to stand out with clarity and
              confidence. We are committed to using premium materials,
              cutting-edge techniques, and creative design to deliver unmatched
              quality. Our mission is to transform spaces, communicate
              identities, and elevate brand presence through smart, lasting
              visual experiences.
            </p>
            <div className="mt-4 text-sm font-medium text-blue-600">
              Customer satisfaction, attention to detail, and timely execution
              remain at the core of everything we do.
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 animate-slideInUp animate-delayed-5 hover:scale-105">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center animate-glow">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To be Tamil Nadu's most trusted and admired signage and
              fabrication partner, known for quality, creativity, and
              reliability. We envision shaping the visual identity of businesses
              across industries with smart, sustainable, and modern design
              solutions. By continuously evolving with technology and trends, we
              aim to lead the future of signage innovation.
            </p>
            <div className="mt-4 text-sm font-medium text-purple-600">
              Our vision is to build a legacy of excellence, one sign at a time.
            </div>
          </div>
        </div>

        {/* Brand Presence & Stats Card with Vector Icons */}
        <div className="mx-4 lg:mx-8 bg-white rounded-2xl shadow-xl border border-gray-100 animate-slideInUp animate-delayed-6 overflow-hidden relative">
          {/* Left and Right Vector Icons */}
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 opacity-10">
            <Gem className="w-36 h-36 text-blue-600 animate-float" />
          </div>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-10">
            <Briefcase
              className="w-36 h-36 text-indigo-600 animate-float"
              style={{ animationDelay: "2s" }}
            />
          </div>

          <div className="relative p-8 lg:p-12">
            <div className="text-center space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight animate-slideInLeft">
                  Empowering Your Brand Presence with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 animate-pulse">
                    Precision
                  </span>
                </h2>
                <p className="text-xl lg:text-2xl text-gray-600 font-medium animate-slideInRight">
                  Smart Signage That Builds Better Business
                </p>
              </div>

              {/* Animated Stats */}
              <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <StatCounter
                  target={1500}
                  label="Projects Completed"
                  gradient="from-blue-500 to-cyan-500"
                  icon="🎯"
                />
                <StatCounter
                  target={1350}
                  label="Happy Clients"
                  gradient="from-purple-500 to-pink-500"
                  icon="😊"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Founder Story Card */}
        <div className="mx-4 lg:mx-8 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-100 animate-slideInUp animate-delayed-1">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 animate-pulse">
              <Lightbulb className="w-4 h-4" />
              Our Founder's Journey
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 animate-slideInLeft">
              The Story of CEO Name
            </h2>
            <p className="text-xl text-gray-600 animate-slideInRight">
              Founder of Company Name
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Founder Photo Placeholder */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-blue-200 to-indigo-300 rounded-2xl aspect-square flex items-center justify-center shadow-xl animate-float">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto animate-glow">
                    <Users className="w-8 h-8 text-blue-800" />
                  </div>
                  <p className="text-blue-800 font-semibold">CEO Name</p>
                  <p className="text-blue-700 text-sm">Founder & Visionary</p>
                </div>
              </div>
            </div>

            {/* Story Content */}
            <div className="lg:col-span-2 space-y-6">
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-lg leading-relaxed animate-fadeIn">
                  It all began with a schoolboy spending his holidays immersed
                  in colors and creativity, assisting his painter-artist uncle.
                  What started as playful learning soon turned into a
                  deep-rooted passion. As the family opened a small sticker
                  shop, <strong>CEO Name</strong> found himself drawn more and
                  more toward the world of visual art and design.
                </p>

                <p className="text-lg leading-relaxed animate-fadeInDelay">
                  Even through college, he continued to work with dedication —
                  not just for income, but to feed his creative soul. After
                  graduation, while many of his friends stepped into secure
                  futures through family businesses, CEO Name was determined to
                  carve his own path.
                </p>

                <div className="bg-white rounded-xl p-6 border-l-4 border-blue-500 my-6 animate-glow">
                  <p className="text-lg font-semibold text-gray-900 mb-2">
                    The Breakthrough Moment
                  </p>
                  <p className="text-gray-700">
                    In <strong>2011</strong>, he finally made his mark with a
                    breakthrough signage project in Erode, capturing attention
                    with vibrant{" "}
                    <strong>flex designs and premium ACP elevations</strong>.
                    From there, Company Name became a name associated with{" "}
                    <strong>quality, creativity, and trust</strong>.
                  </p>
                </div>

                <p className="text-lg leading-relaxed animate-fadeIn">
                  Today, the works of Company Name don't just mark buildings —
                  they <strong>define them</strong>. What began as a sticker
                  shop in <strong>2000</strong> evolved into a brand that shapes
                  the identity of businesses across Tamil Nadu.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-6 text-center animate-glow">
                <p className="text-lg font-semibold">
                  "Through every challenge, one truth stood tall: Uncompromising
                  quality, a creative heart, and the vision of one man — Tamil
                  Selvan."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Card - Removed animations for buttons */}
        <div className="mx-4 lg:mx-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl shadow-xl p-8 lg:p-12 animate-slideInUp animate-delayed-2">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 animate-slideInLeft">
              Ready to Transform Your Brand Presence?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto animate-slideInRight">
              From design to installation, we manage it all with unmatched
              precision and creativity.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 hover:scale-105 transform">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 hover:scale-105 transform">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
