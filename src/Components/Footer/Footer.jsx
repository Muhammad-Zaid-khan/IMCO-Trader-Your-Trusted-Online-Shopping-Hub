import React, { useState } from 'react';
import { Facebook, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !agreedToTerms) {
      alert('Please enter your email and agree to the terms and conditions');
      return;
    }
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
    setAgreedToTerms(false);
  };

  return (
    <footer className="bg-primary-bg border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Us Section */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Contact us</h3>
            <div className="space-y-3">
              <p className="text-primary-six">Classyshop - Mega Super Store</p>
              <p className="text-primary-six">507-Union Trade Centre France</p>
              <p className="text-primary-six">sales@yourcompany.com</p>
              <p className="text-primary font-semibold text-lg">(+91) 9876-543-210</p>
              <div className="flex items-center space-x-2 mt-4">
                <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                  <span className="text-white text-xs">💬</span>
                </div>
                <div>
                  <p className="text-primary font-medium">Online Chat</p>
                  <p className="text-primary-six text-sm">Get Expert Help</p>
                </div>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-six hover:text-primary transition-colors">Prices drop</a></li>
              <li><a href="#" className="text-primary-six hover:text-primary transition-colors">New products</a></li>
              <li><a href="#" className="text-primary-six hover:text-primary transition-colors">Best sales</a></li>
              <li><a href="#" className="text-primary-six hover:text-primary transition-colors">Contact us</a></li>
              <li><a href="#" className="text-primary-six hover:text-primary transition-colors">Sitemap</a></li>
              <li><a href="#" className="text-primary-six hover:text-primary transition-colors">Stores</a></li>
            </ul>
          </div>

          {/* Our Company Section */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Our company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-six hover:text-primary transition-colors">Delivery</a></li>
              <li><a href="#" className="text-primary-six hover:text-primary transition-colors">Legal Notice</a></li>
              <li><a href="#" className="text-primary-six hover:text-primary transition-colors">Terms and conditions of use</a></li>
              <li><a href="#" className="text-primary-six hover:text-primary transition-colors">About us</a></li>
              <li><a href="#" className="text-primary-six hover:text-primary transition-colors">Secure payment</a></li>
              <li><a href="#" className="text-primary-six hover:text-primary transition-colors">Login</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Subscribe to newsletter</h3>
            <p className="text-primary-six mb-4">Subscribe to our latest newsletter to get news about special discounts.</p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <input
                type="email"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary- transition-colors font-semibold"
              >
                SUBSCRIBE
              </button>
              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="mt-1"
                />
                <label htmlFor="terms" className="text-sm text-primary-six">
                  I agree to the terms and conditions and the privacy policy
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-primary-six hover:text-blue-600 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-primary-six hover:text-primary-third transition-colors">
                <Youtube size={24} />
              </a>
              <a href="#" className="text-primary-six hover:text-primary-fav transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-primary-six hover:text-primary-fav transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <div className="text-primary-six text-sm">
              © 2025 - IMCO Trader | Your Trusted Online Shopping Partner
            </div>

            {/* Payment Methods */}
            <div className="flex space-x-2">
              <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">CC</div>
              <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">VISA</div>
              <div className="bg-primary text-white px-2 py-1 rounded text-xs font-semibold">MC</div>
              <div className="bg-blue-800 text-white px-2 py-1 rounded text-xs font-semibold">AMEX</div>
              <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">PP</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;