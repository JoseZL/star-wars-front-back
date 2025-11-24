import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { fetchList } from "../store.js";

const Home = () => {

	const [people, setPeople] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [vehicles, setVehicles] = useState([]);

	useEffect(() => {
		const loadData = async () => {
		const cachedPeople = localStorage.getItem("people");
		const cachedPlanets = localStorage.getItem("planets");
		const cachedVehicles = localStorage.getItem("vehicles");

		if (cachedPeople && cachedPlanets && cachedVehicles) {
			setPeople(JSON.parse(cachedPeople));
			setPlanets(JSON.parse(cachedPlanets));
			setVehicles(JSON.parse(cachedVehicles));
		} else {
			const peopleData = await fetchList("people");
			setPeople(peopleData);
			localStorage.setItem("people", JSON.stringify(peopleData));

			const planetData = await fetchList("planets");
			setPlanets(planetData);
			localStorage.setItem("planets", JSON.stringify(planetData));

			const vehicleData = await fetchList("vehicles");
			setVehicles(vehicleData);
			localStorage.setItem("vehicles", JSON.stringify(vehicleData));
		}
		};

		loadData();
	}, []);


	const renderAllSections = () => (
		<>
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
			<h2 className="mb-3 mt-5 text-center">Planetas</h2>
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
			<h2 className="mb-3 mt-5 text-center">Vehículos</h2>
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
		</>
	);

	return (
		<div className="container mt-4">
		{renderAllSections()}
		</div>
	);
};

export default Home;
