import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { fetchList } from "../store.js";

const VehiclesList = () => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        const cachedVehicles = localStorage.getItem("vehicles");
        if (cachedVehicles) {
        setVehicles(JSON.parse(cachedVehicles));
        } else {
        fetchList("vehicles").then((data) => {
            setVehicles(data);
            localStorage.setItem("vehicles", JSON.stringify(data));
        });
        }
    }, []);

    return (
        <div>
            <h2 className="mb-3 mt-2 text-center">Vehículos</h2>
            <hr className="section-separator" />
            <div className="d-flex flex-wrap justify-content-center mb-4">
                {vehicles.map((v) => (
                    <Card
                        key={v.uid}
                        item={{ ...v, type: "vehicles" }}
                        type="vehicles"
                        showFavorite={true}
                    />
                ))}
            </div>
        </div>
    );
};

export default VehiclesList;
