import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

const customIcon = new L.Icon({
  iconUrl: markerIconPng,
  shadowUrl: markerShadowPng,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
          Have questions about our travel packages or need assistance planning your trip? Our travel experts are here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info */}
<div className="col-span-1 bg-white rounded-xl shadow-md p-6">
  <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h2>
  <div className="space-y-3">
    <div className="flex items-center">
      <span className="text-gray-500 mr-2">📍</span>
      <p className="text-sm text-gray-600">123 Travel Street, Tourism City, TC 10101, United States</p>
    </div>
    <div className="flex items-center">
      <span className="text-gray-500 mr-2">📞</span>
      <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
    </div>
    <div className="flex items-center">
      <span className="text-gray-500 mr-2">✉️</span>
      <p className="text-sm text-gray-600">info@besttravel.com</p>
    </div>
    <div className="flex items-center">
      <span className="text-gray-500 mr-2">🕒</span>
      <p className="text-sm text-gray-600">Mon-Fri: 9:00 AM - 6:00 PM</p>
    </div>
  </div>
</div>
        {/* Contact Form */}
        <div className="col-span-1 md:col-span-2 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Send Us a Message</h2>

          {submitted && (
            <div className="bg-green-50 p-4 rounded-md mb-6">
              <p className="text-green-800 font-medium">Message sent successfully!</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
              ></textarea>
            </div>

            <button type="submit" className="w-full py-2 px-4 bg-indigo-500 text-white font-medium rounded-md hover:bg-indigo-600">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <h1  id="agency" className="text-4xl font-bold text-center text-gray-900 mt-8 mb-8">
        Our Agency Location
      </h1>
      <div className="mt-12 bg-gray-100 rounded-xl shadow-md overflow-hidden">
        <MapContainer center={[40.7128, -74.006]} zoom={13} style={{ height: "400px", width: "100%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[40.7128, -74.006]} icon={customIcon}>
            <Popup>123 Travel Street, Tourism City, TC 10101</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default ContactComponent;