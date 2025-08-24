import React, { useState, useEffect } from "react";
import { Briefcase, Users, Star, Trophy } from "lucide-react";

const StatCounter = ({ target, label, icon, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(
      `stat-${label.replace(/\s+/g, "-").toLowerCase()}`
    );
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [label, hasAnimated]);

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
      className={`group text-center text-white transform transition-all duration-1000 ease-out hover:scale-105 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
    >
      <div className="text-white mb-6 flex justify-center transform transition-transform duration-500 group-hover:scale-110">
        {icon}
      </div>
      <div className="text-5xl lg:text-6xl font-bold mb-3 tracking-tight">
        {count.toLocaleString()}
        <span className="text-yellow-200">{suffix}</span>
      </div>
      <p className="text-xl font-medium text-yellow-100 tracking-wide uppercase letter-spacing-wide">
        {label}
      </p>
    </div>
  );
};

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    brandCompanyName: "",
    businessType: "",
    projectLocation: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const businessTypes = [
    "Retail",
    "Corporate",
    "Real Estate",
    "Hospitality",
    "Healthcare",
    "Educational",
    "Other",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber.replace(/\D/g, ""))) {
      newErrors.phoneNumber = "Please enter a valid 10-digit phone number";
    }

    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.emailAddress)) {
      newErrors.emailAddress = "Please enter a valid email address";
    }

    if (!formData.brandCompanyName.trim()) {
      newErrors.brandCompanyName = "Brand/Company name is required";
    }

    if (!formData.businessType) {
      newErrors.businessType = "Please select a business type";
    }

    if (!formData.projectLocation.trim()) {
      newErrors.projectLocation = "Project location is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const message = `*New Quote Request*

*Full Name:* ${formData.fullName}
*Phone Number:* ${formData.phoneNumber}
*Email Address:* ${formData.emailAddress}
*Brand/Company Name:* ${formData.brandCompanyName}
*Business Type:* ${formData.businessType}
*Project Location:* ${formData.projectLocation}

Please get back to me with a quote. Thank you!`;

    const whatsappNumber = "+919994141638";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber.replace(
      /\D/g,
      ""
    )}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");

    setTimeout(() => {
      setFormData({
        fullName: "",
        phoneNumber: "",
        emailAddress: "",
        brandCompanyName: "",
        businessType: "",
        projectLocation: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className={`text-center mb-12 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Get a <span className="text-yellow-400">Quote</span> from Us
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your space? Let's discuss your project and create something extraordinary together.
          </p>
        </div>

        <form onSubmit={handleSubmit} className={`space-y-8 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Full Name */}
            <div className="group space-y-3">
              <label
                htmlFor="fullName"
                className="block text-lg text-gray-300 font-medium transition-colors group-focus-within:text-yellow-400"
              >
                Full Name *
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full bg-transparent text-white text-lg pb-3 border-0 border-b-2 border-gray-500 focus:border-yellow-400 focus:outline-none transition-all duration-300 placeholder-gray-500 hover:border-gray-400"
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p className="mt-2 text-sm text-red-400 animate-pulse">{errors.fullName}</p>
                )}
              </div>
            </div>

            {/* Email Address */}
            <div className="group space-y-3">
              <label
                htmlFor="emailAddress"
                className="block text-lg text-gray-300 font-medium transition-colors group-focus-within:text-yellow-400"
              >
                Email Address *
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="emailAddress"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleInputChange}
                  className="w-full bg-transparent text-white text-lg pb-3 border-0 border-b-2 border-gray-500 focus:border-yellow-400 focus:outline-none transition-all duration-300 placeholder-gray-500 hover:border-gray-400"
                  placeholder="Enter your email address"
                />
                {errors.emailAddress && (
                  <p className="mt-2 text-sm text-red-400 animate-pulse">
                    {errors.emailAddress}
                  </p>
                )}
              </div>
            </div>

            {/* Phone Number */}
            <div className="group space-y-3">
              <label
                htmlFor="phoneNumber"
                className="block text-lg text-gray-300 font-medium transition-colors group-focus-within:text-yellow-400"
              >
                Phone Number *
              </label>
              <div className="relative">
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full bg-transparent text-white text-lg pb-3 border-0 border-b-2 border-gray-500 focus:border-yellow-400 focus:outline-none transition-all duration-300 placeholder-gray-500 hover:border-gray-400"
                  placeholder="Enter your phone number"
                />
                {errors.phoneNumber && (
                  <p className="mt-2 text-sm text-red-400 animate-pulse">
                    {errors.phoneNumber}
                  </p>
                )}
              </div>
            </div>

            {/* Brand/Company Name */}
            <div className="group space-y-3">
              <label
                htmlFor="brandCompanyName"
                className="block text-lg text-gray-300 font-medium transition-colors group-focus-within:text-yellow-400"
              >
                Brand / Company Name *
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="brandCompanyName"
                  name="brandCompanyName"
                  value={formData.brandCompanyName}
                  onChange={handleInputChange}
                  className="w-full bg-transparent text-white text-lg pb-3 border-0 border-b-2 border-gray-500 focus:border-yellow-400 focus:outline-none transition-all duration-300 placeholder-gray-500 hover:border-gray-400"
                  placeholder="Enter your brand/company name"
                />
                {errors.brandCompanyName && (
                  <p className="mt-2 text-sm text-red-400 animate-pulse">
                    {errors.brandCompanyName}
                  </p>
                )}
              </div>
            </div>

            {/* Business Type */}
            <div className="group space-y-3">
              <label
                htmlFor="businessType"
                className="block text-lg text-gray-300 font-medium transition-colors group-focus-within:text-yellow-400"
              >
                Business Type *
              </label>
              <div className="relative">
                <select
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleInputChange}
                  className="w-full bg-transparent text-white text-lg pb-3 border-0 border-b-2 border-gray-500 focus:border-yellow-400 focus:outline-none transition-all duration-300 appearance-none cursor-pointer hover:border-gray-400"
                >
                  <option value="" className="bg-slate-800 text-gray-400">
                    Select business type
                  </option>
                  {businessTypes.map((type) => (
                    <option
                      key={type}
                      value={type}
                      className="bg-slate-800 text-white"
                    >
                      {type}
                    </option>
                  ))}
                </select>
                <div className="absolute right-0 top-0 pointer-events-none">
                  <svg
                    className="w-6 h-6 text-gray-400 transition-transform duration-200 group-focus-within:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {errors.businessType && (
                  <p className="mt-2 text-sm text-red-400 animate-pulse">
                    {errors.businessType}
                  </p>
                )}
              </div>
            </div>

            {/* Project Location */}
            <div className="group space-y-3">
              <label
                htmlFor="projectLocation"
                className="block text-lg text-gray-300 font-medium transition-colors group-focus-within:text-yellow-400"
              >
                Project Location *
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="projectLocation"
                  name="projectLocation"
                  value={formData.projectLocation}
                  onChange={handleInputChange}
                  className="w-full bg-transparent text-white text-lg pb-3 border-0 border-b-2 border-gray-500 focus:border-yellow-400 focus:outline-none transition-all duration-300 placeholder-gray-500 hover:border-gray-400"
                  placeholder="Enter project location"
                />
                {errors.projectLocation && (
                  <p className="mt-2 text-sm text-red-400 animate-pulse">
                    {errors.projectLocation}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-8 text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold text-lg py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:transform-none disabled:cursor-not-allowed inline-flex items-center space-x-3 shadow-lg"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <svg
                    className="w-6 h-6 transition-transform duration-200 group-hover:translate-x-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.700" />
                  </svg>
                </>
              )}
            </button>
          </div>

          <p className="text-center text-gray-400 text-base mt-6 leading-relaxed">
            Click "Send Message" to continue with WhatsApp and send your quote
            request directly to our team. We'll get back to you within 24 hours.
          </p>
        </form>
      </div>
    </div>
  );
};

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const slides = [
    { id: 1, image: "1.jpg", alt: "Building Architecture 1" },
    { id: 2, image: "2.jpg", alt: "Building Architecture 2" },
    { id: 3, image: "3.jpg", alt: "Building Architecture 3" },
    { id: 4, image: "6.jpg", alt: "Building Architecture 4" },
    { id: 5, image: "5.jpg", alt: "Building Architecture 5" },
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  useEffect(() => {
    const timer = setTimeout(() => setIsDescriptionVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full">
      {/* Slider Section */}
      <div className="relative w-full h-screen overflow-hidden">
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1500 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                className={`w-full h-full bg-cover bg-center bg-no-repeat transform transition-transform duration-[6000ms] ease-out ${
                  index === currentSlide ? "scale-110" : "scale-100"
                }`}
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${slide.image})`,
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-300 z-10 hover:scale-110 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-300 z-10 hover:scale-110 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 hover:scale-125 ${
                index === currentSlide
                  ? "w-10 h-3 bg-yellow-400 rounded-full ring-2 ring-white ring-opacity-60"
                  : "w-3 h-3 rounded-full bg-white bg-opacity-60 hover:bg-opacity-90"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Spacer Section */}
      <div className="py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50"></div>

      {/* Description Section */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <div className={`transform transition-all duration-1000 ${
          isDescriptionVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              About <span className="text-yellow-500">I'CONZ</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>
          <p className="text-xl text-gray-700 text-center leading-relaxed font-medium">
            I'CONZ, a premium signage and display solutions company dedicated to
            creating designs that combine precision with creativity. We specialize
            in high-quality signage, architectural elevations, and digital
            displays that redefine the way businesses present themselves. Our work
            helps brands capture attention, convert visibility into customer
            footfall, and build recognition that inspires trust. By transforming
            physical spaces into powerful communication tools, I'CONZ enables
            businesses to project a professional, premium image and achieve
            lasting growth.
          </p>
        </div>
      </div>

      {/* Gap Section between Stats and Quote Form */}
      <div className="py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white"></div>

      {/* Stats Section */}
      <div className="relative overflow-hidden" style={{ backgroundColor: "#f8ac00" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600"></div>
        <div className="relative py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
              <StatCounter
                target={200}
                label="Projects delivered"
                suffix="+"
                icon={
                  <Briefcase
                    className="w-16 h-16 text-white"
                    strokeWidth={1.5}
                    fill="none"
                  />
                }
              />

              <StatCounter
                target={30}
                label="Clients"
                suffix="+"
                icon={
                  <Users
                    className="w-16 h-16 text-white"
                    strokeWidth={1.5}
                    fill="none"
                  />
                }
              />

              <StatCounter
                target={12}
                label="years of Expertise"
                suffix="+"
                icon={
                  <Star
                    className="w-16 h-16 text-white"
                    strokeWidth={1.5}
                    fill="none"
                  />
                }
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50"></div>

      {/* Quote Form Section */}
      <QuoteForm />
    </div>
  );
};

export default Home;
