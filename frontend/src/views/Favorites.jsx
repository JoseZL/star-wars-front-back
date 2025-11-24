import React from "react";
import useGlobalReducer from "../hook/useglobalreducer.jsx";
import Card from "../components/Card";

const Favorites = () => {
    const { store, actions } = useGlobalReducer();

    const handleRemove = (fav) => {
        actions.removeFavorite(fav);
    };

    if (store.favorites.length === 0) {
        return <div className="mt-5 text-center">No tienes favoritos aún.</div>;
    }

    return (
    <div>
        <h2 className="mb-3 mt-2 text-center">Favoritos</h2>
        <hr className="section-separator" />
        <div className="d-flex flex-wrap justify-content-center mb-4">
            {store.favorites.map((fav) => (
            <Card
                key={fav.uid + fav.type}
                item={fav}
                type={fav.type}
                showFavorite={false}
                showRemove={true}
                onRemove={() => handleRemove(fav)}
            />
            ))}
        </div>
        </div>
    );
};

export default Favorites;
