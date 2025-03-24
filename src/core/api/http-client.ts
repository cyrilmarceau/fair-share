import ky, { HTTPError } from "ky";
import { useAuthStore } from "~/features/auth/stores";

const api = ky.create({
  prefixUrl: "http://127.0.0.1:8000",
  headers: { "Content-Type": "application/json" },
  hooks: {
    beforeRequest: [
      async (request) => {
        const { pathname } = new URL(request.url);
        const UNAUTHENTICATED_ROUTE: string[] = ["/login"];

        if (UNAUTHENTICATED_ROUTE.includes(pathname)) return;

        const { accesToken } = useAuthStore.getState();

        if (accesToken) {
          request.headers.set("Authorization", `Bearer ${accesToken}`);
        }
      },
    ],
  },
});

// api.extend({});

export { api, HTTPError as KyHttpError };
