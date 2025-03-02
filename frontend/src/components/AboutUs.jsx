import React from "react";

export default function AboutUs() {
  return (
    <div id="aboutUs" className="max-w-6xl mx-auto p-6">
      {/* Section Title */}
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
        About Us
      </h1>

      {/* Mission Section */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden md:flex md:max-w-2xl mx-auto mb-8">
        <div className="p-8">
          <h2 className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Our Mission
          </h2>
          <p className="mt-2 text-gray-600">
            At BestTravel Travels, our mission is to inspire and empower travelers
            to explore the world with confidence and curiosity. We believe that
            travel is not just about visiting new places but about creating
            unforgettable experiences that enrich your life.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-indigo-500 mb-2">
            Passion for Travel
          </h3>
          <p className="text-gray-600">
            We are passionate about discovering new destinations and sharing our
            love for travel with you.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-indigo-500 mb-2">
            Personalized Service
          </h3>
          <p className="text-gray-600">
            Every journey is unique. We tailor our services to match your
            individual needs and preferences.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-indigo-500 mb-2">
            Sustainable Travel
          </h3>
          <p className="text-gray-600">
            We are committed to promoting sustainable travel practices that
            protect our planet and support local communities.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden md:flex md:max-w-2xl mx-auto">
        <div className="p-8">
          <h2 className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Meet Our Team
          </h2>
          <p className="mt-2 text-gray-600">
            Our team of travel experts is here to guide you every step of the way.
            With years of experience and a deep love for exploration, we are
            dedicated to making your travel dreams a reality.
          </p>
          <div className="mt-4">
            <div className="flex items-center mt-4">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src="./images/CEO.jpg"
                alt="Team Member"
              />
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-900">John Doe</h4>
                <p className="text-sm text-gray-600">Founder & CEO</p>
              </div>
            </div>
            <div className="flex items-center mt-4">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src="./images/Consultant.jpg"
                alt="Team Member"
              />
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-900">Jane Smith</h4>
                <p className="text-sm text-gray-600">Travel Consultant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}