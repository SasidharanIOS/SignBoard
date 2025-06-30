import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white mt-16">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img
                  src="/images/sign.jpg"
                  alt="Company Logo"
                  className="h-10 w-auto object-contain"
                />
                <h3 className="text-xl font-semibold text-white">
                  Company Name
                </h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Tamil Nadu's trusted partner for premium signage and architectural fabrication solutions since 2009.
              </p>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wide">Follow Us</h4>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-gray-600 transition-colors">
                  <Facebook className="w-4 h-4 text-gray-300" />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-gray-600 transition-colors">
                  <Twitter className="w-4 h-4 text-gray-300" />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-gray-600 transition-colors">
                  <Instagram className="w-4 h-4 text-gray-300" />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-gray-600 transition-colors">
                  <Linkedin className="w-4 h-4 text-gray-300" />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-gray-600 transition-colors">
                  <Youtube className="w-4 h-4 text-gray-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-medium text-white mb-1">Address</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    123 Business Street<br />
                    Erode, Tamil Nadu 638001<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-medium text-white mb-1">Phone</h4>
                  <p className="text-gray-300 text-sm">+91 98765 43210</p>
                  <p className="text-gray-300 text-sm">+91 87654 32109</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-medium text-white mb-1">Email</h4>
                  <p className="text-gray-300 text-sm">info@companyname.com</p>
                  <p className="text-gray-300 text-sm">projects@companyname.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-medium text-white mb-1">Hours</h4>
                  <p className="text-gray-300 text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-300 text-sm">Sat: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide">
              Our Services
            </h3>
            <div className="space-y-2">
              {[
                "LED Sign Board",
                "Landmark Signage", 
                "ACP Elevation",
                "Acrylic Scan Board",
                "Toughened Glass",
                "Glass Partition",
                "WPC Panel Work",
                "UPVC Door & Windows"
              ].map((service, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors text-sm py-1"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links & Location */}
          <div className="space-y-6">
            <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide">
              Quick Links
            </h3>
            <div className="space-y-2">
              {[
                "About Us",
                "Portfolio", 
                "Services",
                "Contact Us",
                "Privacy Policy",
                "Terms of Service"
              ].map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors text-sm py-1"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Google Map */}
            <div className="mt-8">
              <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-4">Location</h4>
              <div className="bg-gray-700 rounded overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1887!2d77.7172!3d11.3410!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDIwJzI3LjYiTiA3N8KwNDMnMDIuIUU!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                  width="100%"
                  height="150"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Company Location"
                  className="w-full h-32 grayscale"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2024 Company Name. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;