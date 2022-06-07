import qs from "qs";

export const validateResponse = (response: Response) => {
  if (response.status >= 200 && response.status < 400) {
    return response.json().catch(() => null);
  }
  return response.json().then((r) => {
    throw r;
  });
};

const generateMethod = (host: string, method: string) => (
  path: string,
  payload?: { [key: string]: any },
  options?: {
    version?: string;
    json?: boolean;
  }
) => {
  const { version, json } = { json: true, version: "2.1", ...options };
  if (json && payload) {
    const body = JSON.stringify(payload);
    return fetch(`${host}v${version}/${path}`, {
      method,
      body,
    }).then(validateResponse);
  }
  if (payload) {
    const body = new FormData();
    Object.keys(payload).forEach((key: string) => {
      body.append(key, payload[key]);
    });
    return fetch(`${host}v${version}/${path}`, {
      method,
      body,
    }).then(validateResponse);
  }
  return fetch(`${host}v${version}/${path}`, {
    method,
  }).then(validateResponse);
};

export type FetchApi = (
  host: string
) => {
  get: (
    path: string,
    querystring?: object,
    options?: { version?: string; timeout?: number }
  ) => Promise<any>;
  post: ReturnType<typeof generateMethod>;
  put: ReturnType<typeof generateMethod>;
  patch: ReturnType<typeof generateMethod>;
  delete: ReturnType<typeof generateMethod>;
};

export const fetchApi: FetchApi = (host) => {
  return {
    get: (path, querystring) => {
      let query = "";
      if (querystring) {
        query = qs.stringify(querystring, { addQueryPrefix: true });
      }

      const url = `${host}${path}${query}`;

      const promise = fetch(url, {}).then(validateResponse);

      return promise;
    },
    post: generateMethod(host, "POST"),
    put: generateMethod(host, "PUT"),
    patch: generateMethod(host, "PATCH"),
    delete: generateMethod(host, "DELETE"),
  };
};
