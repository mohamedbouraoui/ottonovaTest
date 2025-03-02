import React, { useState } from "react";

export default function CityComponent(cityData) {
  // State for tracking image loading status
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Merge provided cityData with defaults
  const data = { ...cityData };

  // Format population with commas
  const formatPopulation = (population) => {
    return parseInt(population.replace(/,/g, "")).toLocaleString();
  };

  // Handle image loading success
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // Handle image loading error
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="h-full bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
      {/* Image at the top with loading states */}
      <div className="w-full h-48 md:h-64 flex-shrink-0 relative bg-gray-100">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-pulse flex space-x-2">
              <div className="h-3 w-3 bg-gray-400 rounded-full"></div>
              <div className="h-3 w-3 bg-gray-400 rounded-full"></div>
              <div className="h-3 w-3 bg-gray-400 rounded-full"></div>
            </div>
          </div>
        )}
        
        {imageError ? (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <div className="text-center p-4">
              <svg className="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <p className="mt-2 text-sm text-gray-500">Image unavailable</p>
            </div>
          </div>
        ) : (
          <img
            className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
            src={data.image || "/image/placeholder-image.jpg"} 
            alt={`${data.name} cityscape`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        )}
      </div>

      {/* City details */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start">
          <div>
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              City Profile
            </div>
            <h1 className="mt-1 text-2xl font-bold text-gray-900">
              {data.name}
            </h1>
            {data.name_native !== data.name && (
              <p className="text-gray-600">{data.name_native}</p>
            )}
          </div>
          <div className="bg-gray-100 px-3 py-1 rounded-full text-sm font-semibold text-gray-700">
            {data.continent}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-500 text-sm">Country</p>
            <p className="font-medium">{data.country}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Founded</p>
            <p className="font-medium">{data.founded}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Population</p>
            <p className="font-medium">{formatPopulation(data.population)}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Coordinates</p>
            <p className="font-medium">
              {data.latitude}, {data.longitude}
            </p>
          </div>
        </div>

        <div className="mt-6 flex-1">
          <h2 className="text-gray-500 text-sm mb-2">Notable Landmarks</h2>
          <ul className="bg-gray-50 rounded-lg p-4 ">
            {data.landmarks && data.landmarks.length > 0 ? (
              data.landmarks.map((landmark, index) => (
                <li
                  key={index}
                  className={`font-medium ${
                    index < data.landmarks.length - 1
                      ? "mb-2 pb-2 border-b border-gray-200"
                      : ""
                  }`}
                >
                  {landmark}
                </li>
              ))
            ) : (
              <p className="text-gray-500">No landmarks available.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}