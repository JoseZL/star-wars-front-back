import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDetail } from "../store.js";
import { getImageUrl } from "../components/img.jsx";

const VehicleDetail = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    fetchDetail("vehicles", id).then(setVehicle);
  }, [id]);

  if (!vehicle) return <div className="text-center mt-5">Cargando vehículo...</div>;

  const imageUrl = getImageUrl("vehicles", id);

  return (
    <div className="container mt-4">
      <div className="card">
        <img src={imageUrl} className="card-img-top" alt={vehicle.name} />
        <div className="card-body">
          <h3>{vehicle.name}</h3>
          <ul className="list-group list-group-flush">
            {Object.entries(vehicle).map(([key, value]) => (
              <li key={key} className="list-group-item">
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetail;
