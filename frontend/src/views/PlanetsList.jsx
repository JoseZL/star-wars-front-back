import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { fetchList } from "../store.js";

const PlanetsList = () => {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        const cachedPlanets = localStorage.getItem("planets");
        if (cachedPlanets) {
        setPlanets(JSON.parse(cachedPlanets));
        } else {
        fetchList("planets").then((data) => {
            setPlanets(data);
            localStorage.setItem("planets", JSON.stringify(data));
        });
        }
    }, []);

    return (
        <div>
            <h2 className="mb-3 mt-2 text-center">Planetas</h2>
            <hr className="section-separator" />
            <div className="d-flex flex-wrap justify-content-center mb-4">
                {planets.map((p) => (
                    <Card
                        key={p.uid}
                        item={{ ...p, type: "planets" }}
                        type="planets"
                        showFavorite={true}
                    />
                ))}
            </div>
        </div>
    );
};

export default PlanetsList;
