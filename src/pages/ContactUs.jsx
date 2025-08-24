import React, { useState, useEffect, useRef } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  User,
  MessageSquare,
  FileText,
  CheckCircle,
  Users,
  Clock,
  Award,
} from "lucide-react";

// Generic one-time animate-on-view for blocks
const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

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
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay, hasAnimated]);

  const transition =
    "transform transition-all duration-1000 ease-out will-change-transform";
  const directions = {
    left: "-translate-x-12 opacity-0",
    right: "translate-x-12 opacity-0",
    up: "translate-y-12 opacity-0",
    down: "-translate-y-12 opacity-0",
  };
  const visibleClass =
    "translate-x-0 translate-y-0 opacity-100";
  const baseClass = isVisible
    ? visibleClass
    : directions[direction] || directions["up"];
  return (
    <div className={`${transition} ${baseClass} ${className}`} ref={ref}>
      {children}
    </div>
  );
};

// Stat counter with minimal one-time animation
const StatCounter = ({ icon, number, label, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [count, setCount] = useState(
    typeof number === "string" && number.endsWith("%") ? 0 : 0
  );
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
    if (statRef.current) observer.observe(statRef.current);
    return () => observer.disconnect();
  }, [delay, hasAnimated]);

  useEffect(() => {
    if (!isVisible) return;

    const hasPercent = typeof number === "string" && number.endsWith("%");
    const target = parseInt(number, 10);
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, number]);

  return (
    <div
      ref={statRef}
      className={`text-center text-white group transform transition-all duration-1000 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div className="mb-3 flex justify-center">
        <span className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
          {icon}
        </span>
      </div>
      <div className="text-2xl lg:text-4xl font-bold mb-1">
        {typeof number === "string" && number.endsWith("%")
          ? `${count}%`
          : `${count}${typeof number === "string" && number.endsWith("+") ? "+" : ""}`}
      </div>
      <p className="text-sm lg:text-base font-medium opacity-90">
        {label}
      </p>
    </div>
  );
};

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const whatsappMessage = `*Name:* ${formData.name}\n*Mobile:* ${formData.mobile}\n*Subject:* ${formData.subject}\n*Message:* ${formData.message}`;
    const whatsappLink = `https://wa.me/9715477187?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappLink, "_blank");
    alert("Thank you for your message! We'll get back to you soon.");
  };

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
              Get in Touch for{" "}
              <span style={{ color: "#f59e0b" }}>Professional Signage</span>
            </h1>
            <p className="text-base lg:text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your vision to life? We're here to help you create
              stunning signage solutions that make a lasting impression.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="py-16 lg:py-20">
        <div className="max-w-full">
          <AnimatedSection className="text-center mb-12 px-4 lg:px-6">
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">
              CONTACT INFORMATION
            </p>
            <h2
              className="text-2xl lg:text-3xl font-bold mb-3"
              style={{ color: "#1e3a8a" }}
            >
              Let's Start the Conversation
            </h2>
            <p className="text-sm lg:text-base text-gray-600 max-w-2xl mx-auto">
              Professional signage solutions are just a message away. Reach out
              to us today.
            </p>
          </AnimatedSection>
          <div className="space-y-0">
            <AnimatedSection delay={0} direction="left" className="bg-white shadow-sm hover:shadow-md transition-all duration-300">
              <div className="grid lg:grid-cols-2 min-h-[500px]">
                {/* Image Section */}
                <div className="relative overflow-hidden lg:order-1">
                  <img src={`/visitus.jpg`} alt="Visit Us" />
                </div>
                {/* Content Section */}
                <div className="flex items-center lg:order-2 pl-8 lg:pl-16 pr-6 lg:pr-8 py-8 lg:py-16">
                  <div className="w-full">
                    <h3
                      className="text-2xl lg:text-4xl font-bold mb-6 leading-tight"
                      style={{ color: "#1e3a8a" }}
                    >
                      Contact Information
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-8 text-base lg:text-lg">
                      Ready to transform your space with professional signage?
                      Get in touch with our expert team for personalized
                      solutions that make your brand stand out.
                    </p>
                    {/* Contact Details Grid */}
                    <div className="mb-8">
                      <div className="grid grid-cols-1 gap-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-white border border-gray-300">
                            <MapPin
                              className="w-6 h-6 stroke-black"
                              strokeWidth={2}
                              fill="none"
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">
                              Our Address
                            </h4>
                            <p className="text-gray-600 leading-relaxed">
                              No: 123 W, KK Nagar, Salem City (Near Bus Stand),
                              Tamil Nadu 638100
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-white border border-gray-300">
                            <Phone
                              className="w-6 h-6 stroke-black"
                              strokeWidth={2}
                              fill="none"
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">
                              Phone Number
                            </h4>
                            <a
                              href="tel:+918460551367"
                              className="text-gray-600 hover:text-blue-600 transition-colors"
                            >
                              +91 12345 678890
                            </a>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-white border border-gray-300">
                            <Mail
                              className="w-6 h-6 stroke-black"
                              strokeWidth={2}
                              fill="none"
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">
                              Email Address
                            </h4>
                            <a
                              href="mailto:companyname@gmail.com"
                              className="text-gray-600 hover:text-blue-600 transition-colors"
                            >
                              Company Name@gmail.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={150} direction="right" className="bg-white shadow-sm hover:shadow-md transition-all duration-300">
              <div className="grid lg:grid-cols-2">
                {/* Image Section */}
                <div className="relative overflow-hidden lg:order-2 min-h-[400px] lg:min-h-0">
                  <img
                    src={`/contactus.jpg`}
                    className="w-full h-full object-cover lg:absolute lg:inset-0"
                    alt="Contact"
                  />
                </div>
                {/* Content Section - Contact Form */}
                <div className="flex items-center lg:order-1 pr-8 lg:pr-16 pl-6 lg:pl-8 py-8 lg:py-16">
                  <div className="w-full">
                    <h3
                      className="text-2xl lg:text-4xl font-bold mb-6 leading-tight"
                      style={{ color: "#1e3a8a" }}
                    >
                      Start the Conversation
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-8 text-base lg:text-lg">
                      Got an idea? A question? Let's talk! We're just a message
                      away from turning your vision into reality.
                    </p>
                    {/* Contact Form */}
                    <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                            placeholder="Enter your full name"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="mobile"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Mobile *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="tel"
                            id="mobile"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                            placeholder="Enter your mobile number"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Subject *
                        </label>
                        <div className="relative">
                          <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                            placeholder="What's this about?"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Message *
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={4}
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 resize-none"
                            placeholder="Tell us about your signage requirements..."
                          />
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={handleSubmit}
                        className="w-full text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 focus:ring-4 focus:ring-blue-200 transition-all duration-200 flex items-center justify-center space-x-2"
                        style={{ backgroundColor: "#f59e0b" }}
                      >
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16" style={{ backgroundColor: "#f59e0b" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <StatCounter
              icon={<Clock className="w-8 h-8 lg:w-10 lg:h-10" />}
              number="4"
              label="Hours Response Time"
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
              icon={<CheckCircle className="w-8 h-8 lg:w-10 lg:h-10" />}
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
            Ready to Work Together?
          </h2>
          <p className="text-base lg:text-lg text-gray-600 mb-6">
            With over 15 years of experience across Tamil Nadu, we deliver
            durable, elegant, and customized signage solutions designed to leave
            a lasting impression.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              className="px-6 py-3 text-white font-medium rounded-lg transition-all duration-300 hover:opacity-90 hover:scale-105"
              style={{ backgroundColor: "#f59e0b" }}
            >
              Call Now
            </button>
            <button
              className="px-6 py-3 font-medium rounded-lg border-2 transition-all duration-300 hover:text-white hover:scale-105"
              style={{
                borderColor: "#1e3a8a",
                color: "#1e3a8a",
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
              View Portfolio
            </button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ContactUs;
