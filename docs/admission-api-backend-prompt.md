# Hayat client admission API — integration spec

**Status:** Backend **`POST /api/admission-form`** is implemented (multipart + Cloudinary + Mongo `admission_submissions` + staff email).  
**Frontend:** `/admission-form` submits via `POST /api/admission-form` (Next.js proxy → backend). No `Content-Type` header on `fetch` — the browser sets the multipart boundary.

Reference packet: `HAYAT_Admission_Packet_5pg.pdf`.

### Frontend submit pattern (matches backend)

```javascript
const form = new FormData();
form.append("clientName", "Jane Doe");
form.append("dateOfBirth", "1955-03-12");
// ... all text fields
form.append("policiesAccepted", "true");
form.append("contactConsent", "true");
form.append("clientSignatureName", "Jane Doe");
form.append("clientSignedDate", "2026-05-21");
form.append("clientSignatureImage", canvasDataUrl); // PNG data URL
form.append("medicalReport", medicalPdfFile);
form.append("immunizationRecords", immunizationPdfFile);
form.append("tbScreening", tbPdfFile);
// optional: guardianshipDocuments, insuranceCards, governmentId, advanceDirectives

await fetch(`${API_BASE}/admission-form`, { method: "POST", body: form });
// Do NOT set Content-Type manually
```

---

## Endpoint

| Method | Path | Auth |
|--------|------|------|
| `POST` | `/api/admission-form` | **Public** (no JWT) |

**Content-Type:** `multipart/form-data` (required for file uploads).

Do **not** require a separate upload call before submit. One submission = one stored admission record + all files linked to that record.

---

## Success response (keep existing shape if possible)

```json
{
  "success": true,
  "message": "Admission packet received",
  "data": {
    "id": "67abc123...",
    "submissionId": "67abc123...",
    "status": "received"
  }
}
```

**HTTP status:** `201 Created`

---

## Error response

```json
{
  "success": false,
  "message": "Validation failed",
  "errorCode": "VALIDATION_ERROR",
  "errors": {
    "medicalReport": ["Medical report PDF is required"],
    "clientName": ["Client name is required"]
  }
}
```

| Status | When |
|--------|------|
| `400` | Bad request / missing required file |
| `422` | Field validation |
| `413` | Payload too large |
| `500` | Server error |

---

## File fields (PDF uploads)

Each field is a **single file**. Accept **PDF** (required). Optionally accept **JPEG/PNG** for ID/insurance scans.

| Form field name | Required | Packet reference |
|-----------------|----------|------------------|
| `medicalReport` | **Yes** | Physician medical report signed within last 6 months |
| `immunizationRecords` | **Yes** | Immunization records or physician contraindication statement (CDPHE) |
| `tbScreening` | **Yes** | TB screening documentation within past 12 months |
| `guardianshipDocuments` | No | Guardianship, conservatorship, or POA if applicable |
| `insuranceCards` | No | Copy of insurance card(s) |
| `governmentId` | No | Government-issued ID |
| `advanceDirectives` | No | Advance directives / living will / CPR-DNR if applicable |

**Rules:**
- Max **10 MB** per file
- Reject empty files
- Store files (S3, local disk, or existing `/upload` pipeline) and save **URLs or storage keys** on the admission document
- Virus scan optional but recommended

---

## Text / structured fields (same request)

Send as normal form fields. Arrays: repeat the field name (e.g. multiple `preferredDays`) **or** accept JSON strings (frontend may send both patterns; prefer repeated fields).

### Client information
| Field | Required | Notes |
|-------|----------|-------|
| `clientName` | Yes | Full legal name |
| `nickname` | No | |
| `dateOfBirth` | Yes | ISO date `YYYY-MM-DD` |
| `programStartDate` | No | |
| `clientPhone` | Yes | |
| `streetAddress` | Yes | |
| `city` | Yes | |
| `state` | Yes | e.g. `CO` |
| `zip` | Yes | |
| `caseManager` | No | Intake staff name (packet cover) |

### Emergency contact
| Field | Required |
|-------|----------|
| `emergencyName` | Yes |
| `emergencyPhone` | Yes |
| `emergencyRelationship` | Yes |

### Responsible party / best contact
| Field | Required |
|-------|----------|
| `contactName` | Yes |
| `contactRelationship` | No |
| `contactAddress` | No |
| `contactHomePhone` | No |
| `contactCellPhone` | No |
| `contactWorkPhone` | No |
| `contactEmail` | Yes |
| `employer` | No |

### Program schedule
| Field | Required | Notes |
|-------|----------|-------|
| `preferredDays` | No | Repeat: `Monday`, `Tuesday`, … |
| `scheduleStart` | No | `HH:mm` |
| `scheduleEnd` | No | `HH:mm` |
| `transportation` | No | `Family drop-off`, `Access-a-Ride`, `Hayat transportation` |

### Medical
| Field | Required |
|-------|----------|
| `physicianName` | No |
| `physicianPhone` | No |
| `physicianFax` | No |
| `hospitalPreference` | No |
| `primaryDiagnosis` | No |
| `healthConditions` | No |
| `allergies` | No |
| `dietaryRestrictions` | No |
| `medications` | No | Free text / list |
| `mobility` | No | Independent, Cane, Walker, Wheelchair, Incontinence care |
| `equipmentAids` | No | Repeat: Glasses, Hearing aids, Oxygen, Dentures |

### Social history
| Field | Required |
|-------|----------|
| `maritalStatus` | No |
| `spousePartner` | No |
| `birthplace` | No |
| `languages` | No |
| `workHistory` | No |
| `hobbies` | No |
| `favoriteFood` | No |
| `favoriteMusic` | No |
| `organizations` | No |
| `familyGoals` | No |

### Acknowledgments & signatures
| Field | Required | Notes |
|-------|----------|-------|
| `policiesAccepted` | Yes | `true` / `on` / `1` |
| `contactConsent` | Yes | Agree to be contacted |
| `clientSignatureName` | Yes | Legal name — client/representative |
| `clientSignedDate` | Yes | `YYYY-MM-DD` |
| `clientSignatureImage` | Yes | PNG data URL or store uploaded PNG from frontend |
| `responsiblePartySignatureName` | No | If different from client |
| `responsiblePartySignedDate` | No | |
| `responsiblePartySignatureImage` | No | PNG data URL |

For signatures, frontend sends **base64 PNG** in field `clientSignatureImage` (and optional `responsiblePartySignatureImage`). Backend should persist as image file or embedded in record.

### Meta
| Field | Required |
|-------|----------|
| `submittedFrom` | No | Default: `hayat-website-admission-form` |
| `packetVersion` | No | e.g. `2026-admission-packet` |

---

## Suggested MongoDB / DB shape

```js
{
  status: "received", // received | under_review | intake_scheduled | enrolled | declined
  client: { clientName, dateOfBirth, clientPhone, address: { street, city, state, zip }, ... },
  emergency: { ... },
  responsibleParty: { ... },
  schedule: { preferredDays: [], scheduleStart, scheduleEnd, transportation },
  medical: { ... },
  social: { ... },
  documents: {
    medicalReport: { url, originalName, mimeType, size },
    immunizationRecords: { ... },
    tbScreening: { ... },
    guardianshipDocuments: { ... },
    insuranceCards: { ... },
    governmentId: { ... },
    advanceDirectives: { ... }
  },
  signatures: {
    client: { legalName, signedDate, imageUrl },
    responsibleParty: { legalName, signedDate, imageUrl }
  },
  policiesAccepted: true,
  contactConsent: true,
  submittedFrom: "hayat-website-admission-form",
  createdAt, updatedAt
}
```

---

## Admin APIs (recommended)

| Method | Path | Auth |
|--------|------|------|
| `GET` | `/api/admission-form?page=1&limit=20&search=` | admin / intake staff |
| `GET` | `/api/admission-form/:id` | admin |
| `PATCH` | `/api/admission-form/:id/status` | admin — body: `{ "status": "under_review" }` |

List view should show: client name, program start date, contact email, status, createdAt, document upload flags (which PDFs received).

---

## Notifications (recommended)

- Email intake team on new submission (include client name, phone, contact email, link to admin detail)
- Optional: confirmation email to `contactEmail`

---

## cURL example

```bash
curl -X POST "http://localhost:5000/api/admission-form" \
  -F "clientName=Jane Doe" \
  -F "dateOfBirth=1955-03-12" \
  -F "clientPhone=7195550100" \
  -F "streetAddress=2030 Jet Wing Dr" \
  -F "city=Colorado Springs" \
  -F "state=CO" \
  -F "zip=80916" \
  -F "emergencyName=John Doe" \
  -F "emergencyPhone=7195550101" \
  -F "emergencyRelationship=Son" \
  -F "contactName=John Doe" \
  -F "contactEmail=family@example.com" \
  -F "preferredDays=Monday" \
  -F "preferredDays=Wednesday" \
  -F "policiesAccepted=true" \
  -F "contactConsent=true" \
  -F "clientSignatureName=Jane Doe" \
  -F "clientSignedDate=2026-05-21" \
  -F "clientSignatureImage=data:image/png;base64,..." \
  -F "medicalReport=@/path/medical-report.pdf" \
  -F "immunizationRecords=@/path/immunizations.pdf" \
  -F "tbScreening=@/path/tb.pdf"
```

---

## Frontend integration (live)

| Item | Value |
|------|--------|
| Page | `https://www.hayatcarecenter.org/admission-form` |
| Browser → Next | `POST /api/admission-form` |
| Next → backend | `POST {API_BASE}/admission-form` |
| Env | `NEXT_PUBLIC_API_BASE_URL` (e.g. `https://hayatbackend.onrender.com/api`) |

---

## POST `/admission-form` (contract summary)

- **Public** (no JWT), **`multipart/form-data`**
- Cloudinary: `CLOUDINARY_FOLDER/admissions/...`, Mongo: `admission_submissions`

**Required files:** `medicalReport`, `immunizationRecords`, `tbScreening`  
**Optional files:** `guardianshipDocuments`, `insuranceCards`, `governmentId`, `advanceDirectives`

**Required text:** `clientName`, `dateOfBirth`, `clientPhone`, `streetAddress`, `city`, `state`, `zip`, `emergencyName`, `emergencyPhone`, `emergencyRelationship`, `contactName`, `contactEmail`, `policiesAccepted` (`true`), `contactConsent` (`true`), `clientSignatureName`, `clientSignedDate`, `clientSignatureImage`

**Success `201`:** `data.id`, `data.submissionId`, `data.status: "received"`  
**422:** `errors` map per field  
**Statuses:** `received` | `under_review` | `intake_scheduled` | `enrolled` | `declined`

Staff email: `ADMISSION_NOTIFICATION_EMAIL`

## Admin APIs (implemented)

| Method | Path | Auth |
|--------|------|------|
| `GET` | `/admission-form` | admin / recruiter — list + `documentFlags` |
| `GET` | `/admission-form/:id` | admin / recruiter — `documents`, `signatures`, `documentFlags` |
| `PATCH` | `/admission-form/:id/status` | `{ "status": "under_review", "staffNotes": "..." }` |
| `PATCH` | `/admission-form/:id` | Legacy: `status` / `staffNotes` |
