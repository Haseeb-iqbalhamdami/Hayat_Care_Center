/** Production API host — routes live under `/api`. */
export const BACKEND_ORIGIN = "https://hayatbackend.onrender.com";

/**
 * Resolves API base URL for all HayatCare backend calls.
 * Accepts `https://hayatbackend.onrender.com` or `.../api` from env.
 */
export function resolveBackendBaseUrl(envValue?: string): string {
  const raw = (envValue?.trim() || `${BACKEND_ORIGIN}/api`).replace(/\/+$/, "");
  if (raw.endsWith("/api")) {
    return raw;
  }
  return `${raw}/api`;
}

export const backendBaseUrl = resolveBackendBaseUrl(
  process.env.NEXT_PUBLIC_API_BASE_URL,
);

export type ApiFieldErrors = Record<string, string[]>;

export type ApiErrorPayload = {
  success?: boolean;
  message?: string;
  errorCode?: string;
  errors?: ApiFieldErrors;
};

export function getApiErrorMessage(payload: ApiErrorPayload | null | undefined) {
  if (payload?.errors) {
    const firstFieldErrors = Object.values(payload.errors).find(
      (messages) => Array.isArray(messages) && messages.length > 0,
    );
    if (firstFieldErrors?.[0]) return firstFieldErrors[0];
  }
  return payload?.message || "Something went wrong. Please try again.";
}
