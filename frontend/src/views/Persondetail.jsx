import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDetail } from "../store.js";
import { getImageUrl } from "../components/img.jsx";

const PersonDetail = () => {
  const { id } = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    fetchDetail("people", id).then(setPerson);
  }, [id]);

  if (!person) return <div className="text-center mt-5">Cargando personaje...</div>;

  const imageUrl = getImageUrl("characters", id);

  return (
    <div className="container mt-4">
      <div className="card">
        <img src={imageUrl} className="card-img-top" alt={person.name} />
        <div className="card-body">
          <h3>{person.name}</h3>
          <ul className="list-group list-group-flush">
            {Object.entries(person).map(([key, value]) => (
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

export default PersonDetail;
