import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';

const icon = L.icon({
  iconUrl: "/images/marker-icon.png",
  iconSize: [30, 45],
  iconAnchor: [15, 45],
  popupAnchor: [0, -40],
});

const CityMap = () => {

  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/cities`);
        const data = await response.json();  
        setCities(data);  
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };
  
    fetchCities();
  }, []); 


  return (
    <div style={{ textAlign: "center", marginBottom: "20px", padding: "20px", backgroundColor: "#f8f9fa", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", border: "2px solid #ddd" }}>
      <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#333", marginBottom: "10px" }}>🌍 Our Destinations Map</h2>
      <p style={{ color: "#555", fontSize: "16px", marginBottom: "15px" }}>Explore the world's top cities and their famous landmarks.</p>
      <MapContainer center={[20, 0]} zoom={2} minZoom={2} maxBounds={[[85, -180], [-85, 180]]} style={{ width: "100%", height: "500px", borderRadius: "10px", overflow: "hidden", filter: "grayscale(20%) drop-shadow(2px 4px 6px rgba(0,0,0,0.2))" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
        {cities.map((city, index) => (
          <Marker key={index} icon={icon} position={[city.latitude, city.longitude]}>
            <Popup>
              <div style={{ textAlign: "center", backgroundColor: "#fff", padding: "10px", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.2)" }}>
                <strong style={{ fontSize: "16px", color: "#333" }}>{city.name}</strong><br />
                <span style={{ color: "#777" }}>{city.country}</span><br />
                <span style={{ fontSize: "14px", color: "#444" }}>Population: {city.population}</span>
                <br /><strong>Landmarks:</strong>
                <ul style={{ padding: "5px 10px", textAlign: "left" }}>
                  {city.landmarks.map((landmark, idx) => (
                    <li key={idx} style={{ fontSize: "13px", color: "#555" }}>{landmark}</li>
                  ))}
                </ul>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default CityMap;
