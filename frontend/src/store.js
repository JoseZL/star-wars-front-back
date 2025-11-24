const FAVORITES_KEY = "starwars_favorites";

export const initialStore = () => ({
  favorites: JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [],
  people: [],
  planets: [],
  vehicles: [],
});

const storeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_FAVORITE": {
      const exists = state.favorites.find(
        (item) => item.uid === action.payload.uid && item.type === action.payload.type
      );

      const updatedFavorites = exists
        ? state.favorites.filter(
            (item) => !(item.uid === action.payload.uid && item.type === action.payload.type)
          )
        : [...state.favorites, action.payload];

      localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));

      return {
        ...state,
        favorites: updatedFavorites,
      };
    }

    case "REMOVE_FAVORITE": {
      const updatedFavorites = state.favorites.filter(
        (item) => !(item.uid === action.payload.uid && item.type === action.payload.type)
      );
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
      return {
        ...state,
        favorites: updatedFavorites,
      };
    }

    case "SET_PEOPLE":
      return { ...state, people: action.payload };

    case "SET_PLANETS":
      return { ...state, planets: action.payload };

    case "SET_VEHICLES":
      return { ...state, vehicles: action.payload };

    default:
      return state;
  }
};

export const fetchList = async (type) => {
  const res = await fetch(`https://cuddly-tribble-4jrgp4r6q654c7rxx-3000.app.github.dev/${type}`);
  if (!res.ok) {
    const text = await res.text();
    console.error("Error en fetchList:", text);
    throw new Error("API Error");
  }
  return await res.json();
};

export const fetchDetail = async (type, id) => {
  const res = await fetch(`https://cuddly-tribble-4jrgp4r6q654c7rxx-3000.app.github.dev/${type}/${id}`);
  if (!res.ok) {
    const text = await res.text();
    console.error("Error en fetchDetail:", text);
    throw new Error("API Error");
  }
  return await res.json();
};

export default storeReducer;
