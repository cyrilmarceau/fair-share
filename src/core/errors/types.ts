interface DetailAPIError {
  error_type: string;
  message: string;
  loc: string;
}

interface APIError {
  detail: DetailAPIError;
}

export { APIError };
