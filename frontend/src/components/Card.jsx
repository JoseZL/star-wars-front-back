import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hook/useglobalreducer.jsx";
import { getImageUrl } from "./img.jsx";

const Card = ({ item, type, showFavorite = true, showRemove = false, onRemove }) => {
	const { dispatch, store } = useGlobalReducer();
	const imageUrl = getImageUrl(type, item.uid);
	const isFavorite = store.favorites.some(
		(fav) => fav.uid === item.uid && fav.type === type
	);
	const handleFavorite = () => {
		dispatch({ type: "TOGGLE_FAVORITE", payload: item });
	};
	return (
		<div className="card m-2 card-custom">
			<img src={imageUrl} className="card-img-top" alt={item.name} />
			<div className="card-body">
				<h5 className="card-title">{item.name}</h5>
				<Link to={`/${type}/${item.uid}`} className="fw-bold text-white me-2 ver-mas-link">Ver más</Link>
				{showFavorite && (
					<span className="float-end">
						<button
							className={`bg-transparent border-0 fav-btn${isFavorite ? ' favorited' : ''}`}
							onClick={handleFavorite}
							aria-label={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
							onMouseEnter={e => {
								if (isFavorite) e.target.innerText = '💔';
							}}
							onMouseLeave={e => {
								if (isFavorite) e.target.innerText = '❤️';
							}}
						>
							{isFavorite ? '❤️' : '🤍'}
						</button>
					</span>
				)}
				{showRemove && (
					<button className="bg-transparent border-0 fav-btn" onClick={onRemove}>
						💔
					</button>
				)}
			</div>
		</div>
	);
};

export default Card;
