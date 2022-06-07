import { nasaApiKey } from "../index";
import { ApiApod } from "../types/nasa";
import { FetchApi } from "../utils";

export const apodRessource = (fetchApi: ReturnType<FetchApi>) => ({
  getApod: (): Promise<ApiApod> => fetchApi.get(`?${nasaApiKey}`),
});
