import React, { useState } from 'react';

// Simple SVG icons
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const Footer = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleJoinClick = () => {
    if (validateEmail(email)) {
      setShowNotification(true);
      setError('');
      setTimeout(() => {
        setShowNotification(false);
      }, 3000); // Hide the notification after 3 seconds
    } else {
      setError('Please enter a valid email address.');
    }
  };

  return (
    <footer className="bg-white shadow-md mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h1 className="text-2xl font-bold text-indigo-500">
              Best<span className="text-gray-900">Travel</span>
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Your trusted travel partner since 2005. We help you discover the world with comfort and peace of mind.
            </p>
            <div className="mt-4 flex space-x-4">
              <a  className="text-gray-500 hover:text-indigo-500">
                <FacebookIcon />
              </a>
              <a  className="text-gray-500 hover:text-indigo-500">
                <TwitterIcon />
              </a>
              <a  className="text-gray-500 hover:text-indigo-500">
                <InstagramIcon />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h2 className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-4">
              Destinations
            </h2>
            <ul className="space-y-2">
              <li><a className="text-gray-500 hover:text-indigo-500 text-sm">Europe</a></li>
              <li><a className="text-gray-500 hover:text-indigo-500 text-sm">Asia</a></li>
              <li><a className="text-gray-500 hover:text-indigo-500 text-sm">Africa</a></li>
              <li><a className="text-gray-500 hover:text-indigo-500 text-sm">North America</a></li>
              <li><a className="text-gray-500 hover:text-indigo-500 text-sm">South America</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="col-span-1">
            <h2 className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-4">
              Services
            </h2>
            <ul className="space-y-2">
              <li><a className="text-gray-500 hover:text-indigo-500 text-sm">Flight Booking</a></li>
              <li><a className="text-gray-500 hover:text-indigo-500 text-sm">Hotel Reservation</a></li>
              <li><a className="text-gray-500 hover:text-indigo-500 text-sm">Travel Insurance</a></li>
              <li><a className="text-gray-500 hover:text-indigo-500 text-sm">Vacation Packages</a></li>
              <li><a className="text-gray-500 hover:text-indigo-500 text-sm">Car Rentals</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-span-1">
            <h2 className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-4">
              Contact Us
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-gray-500"><LocationIcon /></span>
                <span className="text-gray-500 text-sm">123 Travel Street, Tourism City, TC 10101</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-gray-500"><PhoneIcon /></span>
                <span className="text-gray-500 text-sm">1-800-TRAVEL</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-gray-500"><EmailIcon /></span>
                <span className="text-gray-500 text-sm">info@besttravel.com</span>
              </li>
            </ul>
            <div className="mt-4 bg-gray-50 rounded-lg p-4">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Subscribe to our newsletter</h3>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="block w-full border-gray-300 rounded-l-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button 
                  type="button"
                  className="bg-indigo-500 text-white px-4 py-2 rounded-r-md text-sm font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={handleJoinClick}
                >
                  Join
                </button>
              </div>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2025 BestTravel. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><a  className="text-gray-500 hover:text-indigo-500 text-sm">Terms</a></li>
                <li><a  className="text-gray-500 hover:text-indigo-500 text-sm">Privacy</a></li>
                <li><a  className="text-gray-500 hover:text-indigo-500 text-sm">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Notification */}
      {showNotification && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg">
          Thank you for subscribing!
        </div>
      )}
    </footer>
  );
};

export default Footer;