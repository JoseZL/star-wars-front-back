import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hook/useglobalreducer.jsx";

const Navbar = () => {
	const { store } = useGlobalReducer();
	const navigate = useNavigate();
	return (
	<nav className="navbar navbar-dark px-4 flex-column navbar-custom">
			<div className="container-fluid w-100 d-flex justify-content-center align-items-center">
				<img 
					src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" 
					alt="Star Wars Logo" 
					className="navbar-logo" 
				/>
			</div>
			<div className="w-100 mt-2">
				<div className="d-flex justify-content-center">
					<Link className="btn fw-bold text-white mx-2 navbar-link" to="/">INICIO</Link>
					<Link className="btn fw-bold text-white mx-2 navbar-link" to="/characters">PERSONAJES</Link>
					<Link className="btn fw-bold text-white mx-2 navbar-link" to="/planets">PLANETAS</Link>
					<Link className="btn fw-bold text-white mx-2 navbar-link" to="/vehicles">VEHÍCULOS</Link>
					<Link className="btn fw-bold text-white navbar-link-favorites" to="/favorites">
						FAVORITOS ({store.favorites.length})
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
