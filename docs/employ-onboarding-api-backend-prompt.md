# Employee onboarding API — integration spec (live)

**Status:** Backend **`POST /api/employ/onboarding`** accepts **multipart** (+ legacy JSON).  
**Frontend:** `/employee-onboarding` → `POST /api/employ/onboarding` → backend. No manual `Content-Type` header.

---

## POST `/employ/onboarding`

- **Public** (no JWT)
- Validates `accessKey` against `EMPLOY_ONBOARDING_ACCESS_KEY` (default **`Hayatcare345`** — not admin password `Hayatcare345*`)
- **Website:** `multipart/form-data` (required for HR packet uploads)
- **Legacy:** `application/json` still accepted (no file uploads)

### Multipart form fields

| Field | Type | Required |
|-------|------|----------|
| `accessKey` | text | Yes |
| `data` | text (JSON string) | Yes — `personal`, `position`, `compliance`, `policy`, `deposit`, `emergency`, `signature`, `meta` |
| `signatureImage` | text | Yes — PNG base64 data URL |
| `governmentPhotoId` | file | Yes |
| `socialSecurityCard` | file | Yes |
| `w4Form` | file | Yes |
| `i9Form` | file | Yes |
| `signedOfferLetter` | file | No |
| `signedEmploymentApplication` | file | No |
| `benefitsEnrollment` | file | No |
| `doraCredential` | file | Yes if DORA license number in `data.compliance` |
| `professionalLicense` | file | No |

Files: PDF or JPEG/PNG, max 10 MB. Cloudinary: `CLOUDINARY_FOLDER/employ-onboarding/...`

### Success `201`

```json
{
  "success": true,
  "message": "Employee packet saved",
  "data": { "id": "employee_packet_id" }
}
```

### Validation `422`

Field-level `errors` (e.g. `w4Form`, `policy.acknowledgements`).

---

## Admin

| Method | Path | Auth |
|--------|------|------|
| `GET` | `/employ/onboarding` | Bearer, `admin` — includes `documentFlags` |
| `GET` | `/employ/onboarding/:id` | Full packet: `documents`, `signatures.imageUrl`, `documentFlags` |

---

## Frontend (aligned)

```javascript
const form = buildEmployFormData(onboardingData, signatureImage, formElementFormData);
// form contains: accessKey, data (JSON), signatureImage, + file fields

await fetch("/api/employ/onboarding", { method: "POST", body: form });
```

**Env:** `NEXT_PUBLIC_API_BASE_URL` → e.g. `https://hayatbackend.onrender.com/api`

**Page password (UI only):** `Hayat2244` (`EMPLOY_ONBOARDING_PAGE_PASSWORD`)
