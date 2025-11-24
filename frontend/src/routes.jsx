import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Layout from "./layout.jsx";
import Home from "./views/Home.jsx";
import PersonDetail from "./views/Persondetail.jsx";
import PlanetDetail from "./views/planetdetail.jsx";
import VehicleDetail from "./views/vehicledetail.jsx";
import CharactersList from "./views/CharactersList.jsx";
import PlanetsList from "./views/PlanetsList.jsx";
import VehiclesList from "./views/VehiclesList.jsx";
import Favorites from "./views/Favorites.jsx";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} errorElement={<h1>¡No encontrada!</h1>}>
      <Route path="/" element={<Home />} />
  <Route path="/favorites" element={<Favorites />} />
  <Route path="/characters" element={<CharactersList />} />
  <Route path="/planets" element={<PlanetsList />} />
  <Route path="/vehicles" element={<VehiclesList />} />
      <Route path="/characters/:id" element={<PersonDetail />} />
      <Route path="/planets/:id" element={<PlanetDetail />} />
      <Route path="/vehicles/:id" element={<VehicleDetail />} />
    </Route>
  )
);
