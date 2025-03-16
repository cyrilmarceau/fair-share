import "@tanstack/react-query";
import type { KyHttpError } from "~/core/api/http-client";

import type { APIError } from "~/core/errors";

declare module "@tanstack/react-query" {
  interface Register {
    defaultError: KyHttpError<APIError>;
  }
}
