import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDetail } from "../store.js";
import { getImageUrl } from "../components/img.jsx";

const PlanetDetail = () => {
    const { id } = useParams();
    const [planet, setPlanet] = useState(null);

    useEffect(() => {
        fetchDetail("planets", id).then(setPlanet);
    }, [id]);

    if (!planet) return <div className="text-center mt-5">Cargando planeta...</div>;

    const imageUrl = getImageUrl("planets", id);

    return (
            <div className="container mt-4">
                <div className="card">
                    <img src={imageUrl} className="card-img-top" alt={planet.name} />
                    <div className="card-body">
            <h3>{planet.name}</h3>
            <ul className="list-group list-group-flush">
                {Object.entries(planet).map(([key, value]) => (
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

export default PlanetDetail;
