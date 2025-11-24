import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { fetchList } from "../store.js";

const CharactersList = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        const cachedPeople = localStorage.getItem("people");
        if (cachedPeople) {
        setPeople(JSON.parse(cachedPeople));
        } else {
        fetchList("people").then((data) => {
            setPeople(data);
            localStorage.setItem("people", JSON.stringify(data));
        });
        }
    }, []);

    return (
        <div>
            <h2 className="mb-3 mt-2 text-center">Personajes</h2>
            <hr className="section-separator" />
            <div className="d-flex flex-wrap justify-content-center mb-4">
                {people.map((p) => (
                    <Card
                        key={p.uid}
                        item={{ ...p, type: "characters" }}
                        type="characters"
                        showFavorite={true}
                    />
                ))}
            </div>
        </div>
    );
};

export default CharactersList;
