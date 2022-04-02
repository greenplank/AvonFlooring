import Tiles from "../pages/assets/tiles.json";

export const getProductById = pid => {
    return Tiles.find(t => t.id == parseInt(pid));
}