export const backendBaseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") ||
  "https://hmt4c7sf-5000.asse.devtunnels.ms/api";

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
