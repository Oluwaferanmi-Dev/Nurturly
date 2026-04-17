# Nurturly Heritage - Complete Technical Breakdown

## 1. PROJECT OVERVIEW

**Project Name:** Nurturly Heritage  
**Purpose:** A luxury home care sanctuary platform featuring marketing website with customer inquiry and career application systems

**Tech Stack:**
- **Framework:** Next.js 16.2.0 (App Router)
- **Runtime:** Node.js
- **UI Library:** React 19.0
- **Styling:** Tailwind CSS 4.2.0
- **Database:** Supabase (PostgreSQL)
- **Storage:** Supabase Storage
- **Email:** Resend (Email service)
- **Form Validation:** Zod
- **Form Management:** React Hook Form
- **UI Components:** Radix UI (30+ components)
- **Icons:** Lucide React + Material Symbols
- **Charts:** Recharts
- **Dark Mode:** next-themes
- **Analytics:** Vercel Analytics
- **Notifications:** Sonner (toast)

---

## 2. FRONTEND

### Pages/Routes (13 Total)

| Route | File | Purpose | Status |
|-------|------|---------|--------|
| `/` | `app/page.tsx` | Landing page with hero, services overview, features grid, CTA sections | ✅ Complete |
| `/about` | `app/about/page.tsx` | Company mission, philosophy, values, team story | ✅ Complete |
| `/services` | `app/services/page.tsx` | Detailed service offerings (personal care, mobility, meals, etc.) | ✅ Complete |
| `/careers` | `app/careers/page.tsx` | Job opportunities, hiring process, application form section | ✅ Complete |
| `/how-it-works` | `app/how-it-works/page.tsx` | Process flow for families interested in services | ✅ Complete |
| `/why-us` | `app/why-us/page.tsx` | Competitive positioning, value proposition | ✅ Complete |
| `/for-families` | `app/for-families/page.tsx` | Family-focused resources and information | ✅ Complete |
| `/for-professionals` | `app/for-professionals/page.tsx` | Healthcare provider information | ✅ Complete |
| `/contact` | `app/contact/page.tsx` | Contact form with inquiry submission | ✅ Complete |
| `/service-areas` | `app/service-areas/page.tsx` | Geographic coverage information | ✅ Complete |
| `/resources` | `app/resources/page.tsx` | Educational content library | ✅ Complete |
| `/privacy` | `app/privacy/page.tsx` | Privacy policy | ✅ Complete |
| `/accessibility` | `app/accessibility/page.tsx` | WCAG compliance statement | ✅ Complete |

### Components (4 Total)

1. **Header.tsx**
   - Fixed navigation bar
   - Logo linking to home
   - Navigation menu with links: About, Services, How It Works, Why Us, Careers
   - Mobile responsive design
   - Brand color: Primary teal (#00535b)

2. **ContactForm.tsx**
   - Client-side form component
   - Fields: name, email, phone (optional), care_type (optional), message
   - Validation using Zod (`contactFormSchema`)
   - States: loading, success message, error message
   - Submits to `/api/inquiries` endpoint
   - Form reset after successful submission
   - Auto-clear messages after 5 seconds

3. **CareersForm.tsx**
   - Client-side form component
   - Fields: name, email, phone, location, experience, certifications, message, resume file
   - CV/Resume upload with validation:
     - Allowed types: PDF, DOC, DOCX
     - Max file size: 5MB
   - Uploads to Supabase Storage bucket "resumes"
   - Submits to `/api/applications` endpoint
   - Hardcoded job_slug: "caregiver-general"
   - States: loading, upload progress, success, error
   - Form reset after successful submission

4. **theme-provider.tsx**
   - next-themes integration
   - Provides dark mode support
   - Light/dark color scheme switching

### Design System

**Typography:**
- Headline Font: Newsreader (serif) - weights: 200, 300, 400, 500, 600, 700, 800
- Body Font: Manrope (sans-serif) - weights: 200, 300, 400, 500, 600, 700, 800

**Color Palette:**
- Primary: #00535b (teal)
- Primary Container: #006d77 (darker teal)
- Secondary: #8c4e35 (warm brown)
- Secondary Container: #ffad8f (light orange)
- Tertiary: #735c00 (gold)
- Background: #fcf9f4 (warm off-white)
- Surface: #fcf9f4
- On-Surface: #1c1c19 (dark text)
- Error: #ba1a1a

**Signature Gradient:** `linear-gradient(135deg, #00535b 0%, #006d77 100%)`

**Layout:** Mobile-first responsive design using Tailwind CSS with flexbox prioritized

---

## 3. BACKEND / API

### API Routes (2 Total)

#### POST `/api/inquiries`
**File:** `app/api/inquiries/route.ts`

**Purpose:** Handle general inquiries from contact form

**Request Body:**
```typescript
{
  name: string (min 2 chars)
  email: string (valid email)
  phone?: string | null
  care_type?: string | null
  message: string (min 10 chars)
}
```

**Response (Success - 201):**
```json
{
  "success": true,
  "message": "Thank you for your inquiry! We'll be in touch soon.",
  "data": [{ id, name, email, phone, care_type, message, created_at }]
}
```

**Response (Error - 400/500):**
```json
{
  "error": "Error message describing the issue"
}
```

**Processing:**
1. Validate input with Zod schema
2. Insert into Supabase `inquiries` table
3. Send branded HTML email to admin
4. Return success/error response

**Validation Schema:**
- name: min 2 characters
- email: valid email format
- phone: optional
- care_type: optional
- message: min 10 characters

---

#### POST `/api/applications`
**File:** `app/api/applications/route.ts`

**Purpose:** Handle career applications with resume uploads

**Request Body:**
```typescript
{
  name: string (min 2 chars)
  email: string (valid email)
  phone: string (min 10 chars - required)
  location?: string | null
  experience?: string | null
  certifications?: string | null
  message?: string | null
  resume_url?: string (valid URL) | null
  job_slug: string (required)
}
```

**Response (Success - 201):**
```json
{
  "success": true,
  "message": "Thank you for your application! We'll review it and be in touch soon.",
  "data": [{ id, name, email, phone, job_slug, location, experience, certifications, resume_url, message, created_at }]
}
```

**Response (Error - 400/500):**
```json
{
  "error": "Error message describing the issue"
}
```

**Processing:**
1. Validate input with Zod schema
2. Insert into Supabase `applications` table
3. Send branded HTML email to admin with resume URL
4. Return success/error response

**Validation Schema:**
- name: min 2 characters
- email: valid email format
- phone: min 10 characters (required)
- location: optional
- experience: optional
- certifications: optional
- message: optional
- resume_url: optional, valid URL format
- job_slug: required

---

## 4. DATABASE (Supabase PostgreSQL)

### Tables

#### `public.inquiries`
**Purpose:** Stores general inquiry submissions from contact form

**Columns:**
| Column | Type | Constraints | Notes |
|--------|------|-------------|-------|
| id | UUID | PRIMARY KEY | Default: gen_random_uuid() |
| name | TEXT | NOT NULL | Full name of inquirer |
| email | TEXT | NOT NULL | Contact email |
| phone | TEXT | Nullable | Phone number if provided |
| care_type | TEXT | Nullable | Type of care interested in |
| message | TEXT | NOT NULL | Inquiry message |
| created_at | TIMESTAMP | Default: CURRENT_TIMESTAMP | Submission timestamp |

**Indexes:**
- `idx_inquiries_email` on email column
- `idx_inquiries_created_at` on created_at column

**RLS Policies:**
- INSERT: Allow public (anyone can submit inquiries)

---

#### `public.applications`
**Purpose:** Stores career application submissions

**Columns:**
| Column | Type | Constraints | Notes |
|--------|------|-------------|-------|
| id | UUID | PRIMARY KEY | Default: gen_random_uuid() |
| name | TEXT | NOT NULL | Applicant full name |
| email | TEXT | NOT NULL | Applicant email |
| phone | TEXT | NOT NULL | Applicant phone number |
| job_slug | TEXT | Nullable | Job reference (e.g., "caregiver-general") |
| location | TEXT | Nullable | Preferred work location |
| experience | TEXT | Nullable | Years/description of experience |
| certifications | TEXT | Nullable | Relevant certifications |
| resume_url | TEXT | Nullable | Public URL to uploaded resume in storage |
| message | TEXT | Nullable | Additional message from applicant |
| created_at | TIMESTAMP | Default: CURRENT_TIMESTAMP | Submission timestamp |

**Indexes:**
- `idx_applications_email` on email column
- `idx_applications_created_at` on created_at column

**RLS Policies:**
- INSERT: Allow public (anyone can submit applications)

---

## 5. STORAGE (Supabase)

### Buckets

#### `resumes` (Public Bucket)
**Purpose:** Store uploaded CV/resume files from career applications

**Configuration:**
- Visibility: Public
- Allowed file types: PDF (.pdf), Word (.doc, .docx)
- Max file size: 5MB (enforced client-side)
- File naming: `{timestamp}-{randomString}-{originalName}`

**RLS Policies:**
- INSERT: Allow public to upload
- SELECT: Allow public to read (download)

**URL Generation:**
- Public URL format: `https://{supabase-url}/storage/v1/object/public/resumes/{filename}`

### File Upload Flow (CareersForm)
1. User selects PDF/DOC file in form
2. Client validates:
   - File type (PDF, DOC, DOCX only)
   - File size (max 5MB)
3. Upload to `resumes` bucket via `uploadResume()` function
4. Generate public URL from uploaded file
5. Include resume_url in application submission
6. Submit form data to `/api/applications`

---

## 6. APPLICATION SYSTEM

### Career Application Workflow

**Form Fields Collected:**
- name (required)
- email (required)
- phone (required, min 10 chars)
- location (optional)
- experience (optional)
- certifications (optional)
- message (optional)
- resume file (optional, PDF/DOC, max 5MB)

**Job Reference System:**
- Currently hardcoded: `job_slug = "caregiver-general"`
- Stored in database for filtering/reporting
- Can be extended to support multiple positions

**Data Storage:**
- All applications stored in `public.applications` table
- Resume files stored in `resumes` storage bucket
- Resume URL stored in database for direct access
- Created timestamp automatically recorded

**Post-Submission:**
- Admin notification email sent via Resend
- Email includes all application details + resume download link
- Application saved even if email fails
- User receives success message

**Admin Notification Email:**
- To: admin@nurturlycare.com
- Format: HTML with branded styling
- Contains: applicant info, experience, certifications, message, resume URL

---

## 7. CONTACT / INQUIRY SYSTEM

### Inquiry Submission Workflow

**Form Fields Collected:**
- name (required, min 2 chars)
- email (required, valid email)
- phone (optional)
- care_type (optional)
- message (required, min 10 chars)

**Data Storage:**
- All inquiries stored in `public.inquiries` table
- Created timestamp automatically recorded
- No file uploads in this flow

**Post-Submission:**
- Admin notification email sent via Resend
- Email includes all inquiry details
- Inquiry saved even if email fails
- User receives success message
- Form automatically resets

**Admin Notification Email:**
- To: admin@nurturlycare.com
- Format: HTML with branded styling
- Contains: name, email, phone, care_type, message

---

## 8. EMAIL SYSTEM

### Email Service Integration

**Service:** Resend (https://resend.com)

**Configuration:**
- API Key: `RESEND_API_KEY` environment variable
- Default Admin Email: `admin@nurturlycare.com` (configurable via `ADMIN_EMAIL` env var)
- From Address: `noreply@nurturlycare.com`

**Email Utility Functions** (`lib/email.ts`)

#### `sendInquiryEmail(data)`
**Purpose:** Send inquiry details to admin

**Input:**
```typescript
{
  name: string
  email: string
  phone?: string | null
  care_type?: string | null
  message: string
}
```

**Output:**
```typescript
{
  success: boolean
  error?: string
  messageId?: string
}
```

**Email Template:**
- Header with "New Inquiry Received"
- Formatted fields: Name, Email, Phone, Care Type, Message
- Brand colors: Primary teal (#00535b), Secondary brown (#8c4e35)
- Reply-To: Inquirer's email address
- Professional HTML formatting with CSS

#### `sendApplicationEmail(data)`
**Purpose:** Send application details with resume URL to admin

**Input:**
```typescript
{
  name: string
  email: string
  phone: string
  location?: string | null
  experience?: string | null
  certifications?: string | null
  message?: string | null
  resume_url?: string | null
  job_slug: string
}
```

**Output:**
```typescript
{
  success: boolean
  error?: string
  messageId?: string
}
```

**Email Template:**
- Header with "New Career Application Received"
- Formatted fields: Name, Email, Phone, Location, Experience, Certifications, Message
- Resume Download Button: Clickable link to resume_url
- Job Position: Shows job_slug
- Brand colors: Primary teal (#00535b), Secondary brown (#8c4e35)
- Reply-To: Applicant's email address
- Professional HTML formatting with CSS

### Email Error Handling
- Both email functions fail gracefully
- If email send fails, API still returns success (data is saved in database)
- Console warning logged for debugging
- User not impacted by email failures

---

## 9. ENVIRONMENT VARIABLES

### Required Environment Variables

```
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=<supabase-project-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<supabase-anon-key>
SUPABASE_SERVICE_ROLE_KEY=<supabase-service-role-key>

# Email Service
RESEND_API_KEY=<resend-api-key>

# Optional
ADMIN_EMAIL=admin@nurturlycare.com (defaults if not set)
```

### Currently Available (Via Vercel Integration)

- POSTGRES_PRISMA_URL
- SUPABASE_JWT_SECRET
- POSTGRES_PASSWORD
- POSTGRES_DATABASE
- SUPABASE_PUBLISHABLE_KEY
- SUPABASE_URL
- SUPABASE_ANON_KEY
- POSTGRES_URL
- POSTGRES_URL_NON_POOLING
- NEXT_PUBLIC_SUPABASE_URL
- POSTGRES_USER
- SUPABASE_SERVICE_ROLE_KEY
- POSTGRES_HOST
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
- SUPABASE_SECRET_KEY
- NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL

---

## 10. CURRENT LIMITATIONS / TODOs

### Not Yet Implemented

1. **Authentication System**
   - No user login/registration
   - No protected routes
   - No user profiles/accounts

2. **Job Listings**
   - No dynamic job posts database
   - job_slug hardcoded to "caregiver-general"
   - Cannot create/edit/delete job postings
   - No job-specific application tracking

3. **Admin Dashboard**
   - No admin panel to view inquiries/applications
   - No way to manage submissions without Supabase console
   - No export/reporting features

4. **Email Confirmations**
   - No confirmation emails sent to users
   - No email verification for inquiries
   - No application status updates

5. **Payment/Booking**
   - No online booking system
   - No payment processing
   - No appointment scheduling

6. **User Profiles**
   - No resident profiles
   - No caregiver profiles
   - No user account management

7. **Search & Filtering**
   - No search functionality on public site
   - No inquiry/application filtering in admin area

8. **Analytics**
   - Vercel Analytics installed but not custom configured
   - No inquiry/application metrics

9. **Multi-language Support**
   - Site only in English

10. **Compliance & Legal**
    - Privacy policy page placeholder
    - No terms of service
    - No HIPAA compliance layer

### Mock/Placeholder Logic Still Present

- Job position fixed to "caregiver-general" (hardcoded in CareersForm)
- Admin email hardcoded in email utility (configurable via env var)
- No actual job database to reference

---

## 11. DEPLOYMENT STATUS

### Production Readiness: **PARTIALLY READY**

#### ✅ Ready for Production
- Frontend pages and styling complete
- Contact form fully functional with email notifications
- Career application form with file upload
- Database schema created with RLS policies
- Email notifications integrated (Resend)
- Form validation in place
- Error handling implemented
- Mobile responsive design complete
- Brand design system implemented

#### ⚠️ Ready with Considerations
- Email API key needs to be securely set in production
- Supabase needs production database configured
- Admin email should be updated to actual admin email
- Storage bucket created (resumes) but needs testing at scale

#### ❌ Not Ready for Production
- No authentication system (cannot restrict admin access)
- No admin dashboard to manage submissions
- No user account system
- No job management system (hardcoded position)
- Limited error recovery mechanisms
- No backup/disaster recovery setup
- No rate limiting on form submissions
- No spam protection/CAPTCHA

### Deployment Steps Needed
1. Set `RESEND_API_KEY` in production environment
2. Update `ADMIN_EMAIL` to actual admin email address
3. Ensure Supabase credentials are securely configured
4. Test email sending with Resend in production
5. Test file uploads to storage bucket
6. Set up error logging/monitoring (e.g., Sentry)
7. Enable rate limiting on API routes
8. Add CAPTCHA to forms if needed
9. Set up backups for Supabase database
10. Configure monitoring for API performance

---

## 12. ARCHITECTURE SUMMARY

```
Nurturly Heritage
├── Frontend (Next.js 16)
│   ├── Pages (13 routes)
│   ├── Components (4 shared)
│   ├── Forms (Contact, Careers)
│   └── Design System (Colors, Typography)
│
├── Backend (Next.js API Routes)
│   ├── POST /api/inquiries
│   └── POST /api/applications
│
├── Database (Supabase PostgreSQL)
│   ├── inquiries table
│   └── applications table
│
├── Storage (Supabase Storage)
│   └── resumes bucket
│
├── Email Service (Resend)
│   ├── Inquiry notifications
│   └── Application notifications
│
└── Utilities
    ├── Zod validation schemas
    ├── Supabase clients (client, server)
    ├── Email templates (HTML)
    ├── Storage utilities (upload, URL generation)
    └── Form management (React Hook Form)
```

---

## 13. KEY FILES REFERENCE

| File | Purpose |
|------|---------|
| `app/layout.tsx` | Root layout with fonts, metadata, viewport |
| `app/page.tsx` | Landing page |
| `app/contact/page.tsx` | Contact form page |
| `app/careers/page.tsx` | Career applications page |
| `components/ContactForm.tsx` | Contact form component |
| `components/CareersForm.tsx` | Career application form component |
| `components/Header.tsx` | Navigation header |
| `app/api/inquiries/route.ts` | Inquiry submission API |
| `app/api/applications/route.ts` | Application submission API |
| `lib/email.ts` | Email template functions |
| `lib/schemas.ts` | Zod validation schemas |
| `lib/supabase/client.ts` | Browser Supabase client |
| `lib/supabase/server.ts` | Server Supabase client |
| `lib/supabase/storage.ts` | Storage utility functions |
| `scripts/init-schema.sql` | Database schema creation |
| `app/globals.css` | Global styles & design tokens |

---

Generated: 2026-04-16
Last Updated: Production integration phase
