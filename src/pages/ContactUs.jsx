import React, { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  User,
  MessageSquare,
  FileText,
  Sparkles,
  Star,
  Zap,
  Eye,
  Trophy,
  Users,
  Clock,
  CheckCircle,
  Building,
  Award,
} from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    subject: "",
    message: "",
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // Method 1: Email integration (recommended)
    const emailBody = `
Name: ${formData.name}
Mobile: ${formData.mobile}
Subject: ${formData.subject}
Message: ${formData.message}
    `;

    // Method 2: WhatsApp integration (alternative)
    const whatsappMessage = `*Name:* ${formData.name}\n*Mobile:* ${formData.mobile}\n*Subject:* ${formData.subject}\n*Message:* ${formData.message}`;
    const whatsappLink = `https://wa.me/9715477187?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappLink, "_blank");

    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Matching Services Page */}
      <div
        className="relative py-20 lg:py-24"
        style={{ backgroundColor: "#002852" }}
      >
        <div className="max-w-7xl py-10 mx-auto px-4 lg:px-6">
          <div className="text-center">
            <h1 className="text-3xl py-5 lg:text-5xl font-bold text-white mb-4">
              Get in Touch for{" "}
              <span style={{ color: "#f59e0b" }}>Professional Signage</span>
            </h1>

            <p className="text-base lg:text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your vision to life? We're here to help you create
              stunning signage solutions that make a lasting impression.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section - Alternating Layout like Services */}
      <div className="py-16 lg:py-20">
        <div className="max-w-full">
          {/* Section Header */}
          <div className="text-center mb-12 px-4 lg:px-6">
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
          </div>

          {/* Contact Information Section */}
          <div className="space-y-0">
            {/* Contact Info - Left Image, Right Content */}
            <div className="bg-white shadow-sm hover:shadow-md transition-all duration-300">
              <div className="grid lg:grid-cols-2 min-h-[500px]">
                {/* Image Section */}
                <div className="relative overflow-hidden lg:order-1">
                  <img src={`/visitus.jpg`} />
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
            </div>

            {/* Contact Form - Right Image, Left Content */}
            <div className="bg-white shadow-sm hover:shadow-md transition-all duration-300">
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
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section - Matching Services Page */}
      <div className="py-16" style={{ backgroundColor: "#f59e0b" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center text-white">
              <div className="mb-3 flex justify-center">
                <Clock className="w-8 h-8 lg:w-10 lg:h-10" />
              </div>
              <div className="text-2xl lg:text-4xl font-bold mb-1">2-4</div>
              <p className="text-sm lg:text-base font-medium opacity-90">
                Hours Response Time
              </p>
            </div>

            <div className="text-center text-white">
              <div className="mb-3 flex justify-center">
                <Users className="w-8 h-8 lg:w-10 lg:h-10" />
              </div>
              <div className="text-2xl lg:text-4xl font-bold mb-1">120+</div>
              <p className="text-sm lg:text-base font-medium opacity-90">
                Happy Clients
              </p>
            </div>

            <div className="text-center text-white">
              <div className="mb-3 flex justify-center">
                <Award className="w-8 h-8 lg:w-10 lg:h-10" />
              </div>
              <div className="text-2xl lg:text-4xl font-bold mb-1">15+</div>
              <p className="text-sm lg:text-base font-medium opacity-90">
                Years Experience
              </p>
            </div>

            <div className="text-center text-white">
              <div className="mb-3 flex justify-center">
                <CheckCircle className="w-8 h-8 lg:w-10 lg:h-10" />
              </div>
              <div className="text-2xl lg:text-4xl font-bold mb-1">98%</div>
              <p className="text-sm lg:text-base font-medium opacity-90">
                Client Satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Matching Services Page */}
      <div className="py-16 bg-white">
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
              className="px-6 py-3 text-white font-medium rounded-lg transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: "#f59e0b" }}
            >
              Call Now
            </button>
            <button
              className="px-6 py-3 font-medium rounded-lg border-2 transition-all duration-300 hover:text-white"
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
      </div>
    </div>
  );
};

export default ContactUs;
