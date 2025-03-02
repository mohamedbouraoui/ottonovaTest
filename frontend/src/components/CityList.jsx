import React, { useEffect, useState } from "react";
import CityComponent from "./CityComponent";

export default function CityList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [cities, setCities] = useState([]);
  const [citiesTotal, setcitiesTotal] = useState(0);

  const itemsPerPage = 3;

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/cities/filter?name=${searchQuery}&page=${currentPage}&limit=${itemsPerPage}`
        );
        const data = await response.json();
        setCities(data.cities);
        setcitiesTotal( data.total)
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, [currentPage, searchQuery]);


  const totalPages = Math.ceil(citiesTotal / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div id="destinations" className="max-w-6xl mx-auto p-6">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Filter by name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2 mb-6 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {/* City Cards */}
      <div className="flex flex-wrap justify-center   gap-6">
        {cities.map((city, index) => (
          <div key={index} className="flex-1  min-w-[300px] max-w-[400px]">
            <CityComponent {...city} />
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
}
