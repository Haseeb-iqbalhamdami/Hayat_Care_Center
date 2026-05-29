import { backendBaseUrl } from "@/lib/apiBase";

export interface ApiEnvelope<T> {
  success?: boolean;
  message?: string;
  data?: T;
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
  };
  errors?: Record<string, string[]>;
}

export interface Job {
  _id: string;
  title: string;
  description: string;
  location?: string;
  salaryMin?: number;
  salaryMax?: number;
  status?: string;
  minimumJoiningDate?: string;
  skills?: string[];
  benefits?: string[];
  employmentType?: string;
  isArchived?: boolean;
}

export interface JobsQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: string;
  order?: "asc" | "desc";
  status?: string;
}

function buildUrl(path: string, query?: JobsQueryParams) {
  const url = new URL(`${backendBaseUrl}${path}`);
  if (query) {
    if (typeof query.page === "number") url.searchParams.set("page", String(query.page));
    if (typeof query.limit === "number") url.searchParams.set("limit", String(query.limit));
    if (query.search) url.searchParams.set("search", query.search);
    if (query.sortBy) url.searchParams.set("sortBy", query.sortBy);
    if (query.order) url.searchParams.set("order", query.order);
    if (query.status) url.searchParams.set("status", query.status);
  }
  return url.toString();
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function normalizeJob(raw: unknown): Job | null {
  if (!isRecord(raw)) return null;

  const id = raw._id ?? raw.id;
  const title = raw.title;
  const description = raw.description;

  if (typeof id !== "string" || typeof title !== "string" || typeof description !== "string") {
    return null;
  }

  return {
    _id: id,
    title,
    description,
    location: typeof raw.location === "string" ? raw.location : undefined,
    salaryMin: typeof raw.salaryMin === "number" ? raw.salaryMin : undefined,
    salaryMax: typeof raw.salaryMax === "number" ? raw.salaryMax : undefined,
    status: typeof raw.status === "string" ? raw.status : undefined,
    minimumJoiningDate:
      typeof raw.minimumJoiningDate === "string" ? raw.minimumJoiningDate : undefined,
    skills: Array.isArray(raw.skills)
      ? raw.skills.filter((item): item is string => typeof item === "string")
      : undefined,
    benefits: Array.isArray(raw.benefits)
      ? raw.benefits.filter((item): item is string => typeof item === "string")
      : undefined,
    employmentType:
      typeof raw.employmentType === "string" ? raw.employmentType : undefined,
    isArchived: raw.isArchived === true,
  };
}

function extractJobsList(payload: unknown): Job[] {
  if (Array.isArray(payload)) {
    return payload.map(normalizeJob).filter((job): job is Job => job !== null);
  }

  if (!isRecord(payload)) return [];

  const nestedKeys = ["items", "jobs", "results", "data"] as const;
  for (const key of nestedKeys) {
    const nested = payload[key];
    if (Array.isArray(nested)) {
      return nested.map(normalizeJob).filter((job): job is Job => job !== null);
    }
  }

  return [];
}

function isPublicJob(job: Job) {
  if (job.isArchived) return false;
  const status = (job.status ?? "open").toLowerCase();
  return status === "open" || status === "active";
}

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    method: "GET",
    headers: { Accept: "application/json" },
    cache: "no-store",
  });

  const body = (await response.json().catch(() => null)) as ApiEnvelope<T> | T | null;

  if (!response.ok) {
    const message =
      isRecord(body) && typeof body.message === "string"
        ? body.message
        : `Request failed (${response.status})`;
    throw new Error(message);
  }

  if (isRecord(body) && "data" in body) {
    return body.data as T;
  }

  return body as T;
}

export async function getJobs(params?: JobsQueryParams): Promise<Job[]> {
  const data = await fetchJson<unknown>(
    buildUrl("/jobs", {
      limit: 50,
      sortBy: "createdAt",
      order: "desc",
      ...params,
    }),
  );

  return extractJobsList(data).filter(isPublicJob);
}

export async function getJobById(id: string): Promise<Job | null> {
  const data = await fetchJson<unknown>(buildUrl(`/jobs/${encodeURIComponent(id)}`));
  const job = normalizeJob(isRecord(data) && "job" in data ? data.job : data);
  if (!job || !isPublicJob(job)) return null;
  return job;
}

export function formatEmploymentType(value?: string) {
  if (!value) return "Role";
  return value
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export function formatSalaryRange(min?: number, max?: number) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

  if (typeof min === "number" && typeof max === "number") {
    return `${formatter.format(min)} – ${formatter.format(max)}`;
  }
  if (typeof min === "number") return `From ${formatter.format(min)}`;
  if (typeof max === "number") return `Up to ${formatter.format(max)}`;
  return null;
}

export function formatDate(value?: string) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export async function submitJobApplication(jobId: string, formData: FormData) {
  const response = await fetch(`${backendBaseUrl}/jobs/${encodeURIComponent(jobId)}/apply`, {
    method: "POST",
    body: formData,
  });

  const payload = (await response.json().catch(() => null)) as ApiEnvelope<unknown> | null;

  return {
    ok: response.ok,
    status: response.status,
    payload,
    message:
      (payload && typeof payload.message === "string" && payload.message) ||
      (response.ok ? "Application submitted." : "Unable to submit application."),
  };
}
