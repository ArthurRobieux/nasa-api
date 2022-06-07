import { nasaApiKey } from "../index";
import { ApiRover, ApiRoverList, ApiRoverPhotos } from "../types/nasa";
import { FetchApi } from "../utils";

export const roversRessource = (fetchApi: ReturnType<FetchApi>) => ({
  getRoverList: (): Promise<ApiRoverList> =>
    fetchApi.get(`rovers?${nasaApiKey}`),
  getRoverInfos: (params: { rover: string }): Promise<ApiRover> =>
    fetchApi.get(`rovers/${params.rover}?${nasaApiKey}`),
  getRoverPhotos: (params: {
    rover: string;
    sol: number;
  }): Promise<ApiRoverPhotos> =>
    fetchApi.get(
      `rovers/${params.rover}/photos?sol=${params.sol}&${nasaApiKey}`
    ),
});
