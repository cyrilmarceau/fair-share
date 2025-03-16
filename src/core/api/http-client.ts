import ky, { HTTPError } from "ky";

const api = ky.create({
  prefixUrl: "http://127.0.0.1:8000",
  headers: { "Content-Type": "application/json" },
});

export { api, HTTPError as KyHttpError };
