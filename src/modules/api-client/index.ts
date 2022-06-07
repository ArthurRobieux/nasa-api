import { roversRessource } from "./ressources/rovers";
import { apodRessource } from "./ressources/apod";

import { fetchApi } from "./utils";

export const nasaApiKey = "api_key=UTTGXxgbXU7cL66kAwvRrVdoJYRR6vtcYmmNE7Ok";

export const initApiClient = () => ({
  rovers: roversRessource(fetchApi("https://api.nasa.gov/mars-photos/api/v1/")),
  apod: apodRessource(fetchApi("https://api.nasa.gov/planetary/apod/")),
});

export const apiClient = initApiClient();
