# Nurturly — Complete Project Documentation

> **Version:** 1.0 · **Last Updated:** April 2026  
> **Live URL:** [nurturlycare.com](https://nurturlycare.com)  
> **Internal ATS:** [nurturlycare.com/ats](https://nurturlycare.com/ats)

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Business Context & Mission](#2-business-context--mission)
3. [Technology Stack](#3-technology-stack)
4. [Architecture Overview](#4-architecture-overview)
5. [Directory Structure](#5-directory-structure)
6. [Environment Variables](#6-environment-variables)
7. [Database Schema](#7-database-schema)
8. [Pages — Public Website](#8-pages--public-website)
9. [Pages — ATS Admin Portal](#9-pages--ats-admin-portal)
10. [Components](#10-components)
11. [API Routes](#11-api-routes)
12. [User Flows — Families](#12-user-flows--families)
13. [User Flows — Job Applicants](#13-user-flows--job-applicants)
14. [User Flows — Admin (ATS)](#14-user-flows--admin-ats)
15. [SEO Strategy](#15-seo-strategy)
16. [Email System](#16-email-system)
17. [Analytics & Tracking](#17-analytics--tracking)
18. [Deployment & Hosting](#18-deployment--hosting)
19. [What Is Done ✅](#19-what-is-done-)
20. [What Is Remaining ❌](#20-what-is-remaining-)
21. [Known Issues & Notes](#21-known-issues--notes)
22. [Client Handoff Checklist](#22-client-handoff-checklist)

---

## 1. Project Overview

**Nurturly** is a premium, conversion-optimized marketing and recruitment website for a **Houston, Texas-based non-medical home care company**. The project has two primary sides:

| Side | Audience | Purpose |
|---|---|---|
| **Public Website** | Families, patients, referral partners, job seekers | Marketing, lead capture, careers |
| **ATS Admin Portal** (`/ats`) | Nurturly staff only | Track, manage, and communicate with job applicants |

The entire system is built on a **Next.js + Supabase + Resend** stack — no third-party CMS, no WordPress, no page builder. It is fully owned, fully portable, and deployable on any hosting platform.

---

## 2. Business Context & Mission

### What Nurturly Does
Nurturly provides **non-medical home care services** in the Houston, TX metro area. Their caregivers assist clients with:
- Companionship and emotional support
- Personal care (bathing, dressing, grooming)
- Meal preparation
- Mobility support
- Medication reminders
- Light housekeeping
- Transportation
- Respite care for family caregivers
- Memory care support (Alzheimer's / dementia)
- Post-hospital transitional care

### Mission Statement
> *"Nurturly was created to bring comfort, trust, and human connection back into home care. We believe care should feel personal, consistent, and deeply human."*

### Why This Site Was Built
The client needed to move beyond a generic landing page to a fully functional platform that:
1. Captures and qualifies leads from families seeking care
2. Attracts and screens quality caregiver applicants
3. Establishes credibility and trust in a competitive local market
4. Provides the admin team with tools to manage recruitment

### Target Audiences
| Audience | Primary Goal | Entry Point |
|---|---|---|
| **Families** | Find trusted, quality care for a loved one | Homepage → Contact form |
| **Job Seekers / Caregivers** | Apply for a caregiver position | Careers page → Application form |
| **Referral Partners** | Connect Nurturly with clients | For Professionals page |
| **Admin / Recruiter** | Manage the applicant pipeline | `/ats` dashboard |

---

## 3. Technology Stack

| Layer | Technology | Why |
|---|---|---|
| **Framework** | [Next.js 16](https://nextjs.org) (App Router, RSC) | SEO-friendly SSR, file-based routing, Server Actions |
| **Language** | TypeScript | Type safety across the entire codebase |
| **Styling** | Tailwind CSS v4 + inline `style={}` for ATS | Utility-first, rapid iteration |
| **UI Library** | shadcn/ui + Radix UI primitives | Accessible, composable component base |
| **Database** | [Supabase](https://supabase.com) (PostgreSQL) | Hosted Postgres, real-time, built-in auth capability |
| **File Storage** | Supabase Storage | Resume PDF/DOCX uploads |
| **Email** | [Resend](https://resend.com) | Transactional email API with HTML templates |
| **Analytics** | Google Analytics 4 | Conversion + event tracking |
| **Deployment** | [Vercel](https://vercel.com) | Zero-config Next.js hosting, edge CDN, preview deploys |
| **Fonts** | Newsreader (serif headlines) + Manrope (body) | Premium editorial feel matching Nurturly's brand |
| **Icons** | Google Material Symbols Outlined | Consistent icon language across the site and ATS |

### Design System

| Token | Value | Usage |
|---|---|---|
| Primary / Teal | `#006d77` | CTAs, headings, accents |
| Dark Teal | `#00535b` | Gradient start for buttons |
| Sand / Surface | `#fcf9f4` | Page backgrounds |
| Gold / Tertiary | `#c9a84c` | Highlights, special callouts |
| Dark Text | `#1c1c19` | Body copy |
| Muted Text | `#4a6367` | Secondary labels |
| Border | `#e4e2dc` | Dividers, card borders |

---

## 4. Architecture Overview

```
Browser
  │
  ├── Public Website (SSR + SSG via Next.js App Router)
  │     ├── Server Components fetch data from Supabase directly
  │     ├── Forms POST to /api/* routes
  │     └── GA4 tracks page views + events
  │
  ├── ATS Admin Portal (/ats)
  │     ├── Server Components fetch applicant data
  │     ├── Client Components handle UI interactions
  │     └── Server Actions mutate Supabase data (stage changes, notes, archive)
  │
  └── API Routes (/api/*)
        ├── POST /api/inquiries   → Supabase insert + Resend email
        ├── POST /api/applications → Supabase insert + Resend email
        └── POST /api/upload      → Supabase Storage (resume)

Supabase (PostgreSQL)
  ├── inquiries table   (contact form leads)
  └── applications table (job applicants + ATS stage tracking)

Resend (Email)
  ├── Admin notifications (new inquiry, new application)
  └── Candidate emails (sent from ATS email modal)
```

### Data Flow — Contact Form
```
User fills form → POST /api/inquiries
  → Supabase: INSERT into inquiries
  → Resend: Email to ADMIN_EMAIL (new lead notification)
  → Resend: Email to user (confirmation receipt)
  → User sees success message
```

### Data Flow — Careers Application
```
User fills application → POST /api/upload (if resume attached)
  → Supabase Storage: Upload to 'resumes' bucket
  → Returns public resume_url
→ POST /api/applications
  → Supabase: INSERT into applications (with resume_url, stage='application_received')
  → Resend: Email to ADMIN_EMAIL (new applicant notification)
  → Resend: Email to applicant (confirmation receipt)
  → User sees success message
```

### Data Flow — ATS Stage Advancement
```
Admin views applicant profile → clicks "Move to [Stage]"
  → Server Action: moveToNextStage()
  → Supabase: UPDATE applications SET stage=?, stage_updated_at=now()
  → Next.js: revalidatePath() refreshes dashboard + list + profile
  → UI updates instantly
```

---

## 5. Directory Structure

```
nurturly/
│
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout: fonts, GA4, metadata, global providers
│   ├── page.tsx                  # Homepage (with JSON-LD schema)
│   ├── sitemap.ts                # Auto-generates /sitemap.xml
│   ├── robots.ts                 # Auto-generates /robots.txt
│   ├── globals.css               # (in /app, symlinked from /styles)
│   │
│   ├── about/page.tsx
│   ├── accessibility/page.tsx
│   ├── careers/page.tsx
│   ├── contact/page.tsx
│   ├── for-families/page.tsx
│   ├── for-professionals/page.tsx
│   ├── how-it-works/page.tsx
│   ├── privacy/page.tsx
│   ├── resources/page.tsx
│   ├── service-areas/page.tsx
│   ├── services/page.tsx
│   ├── why-us/page.tsx
│   │
│   ├── ats/                      # ATS Admin Portal (no-index)
│   │   ├── layout.tsx            # ATS shell: sidebar + content area
│   │   ├── page.tsx              # Dashboard
│   │   ├── applicants/
│   │   │   ├── page.tsx          # Paginated applicant list
│   │   │   └── [id]/page.tsx     # Individual applicant profile
│   │   └── pipeline/
│   │       └── page.tsx          # Kanban pipeline board
│   │
│   └── api/
│       ├── inquiries/route.ts    # POST: save inquiry + notify admin
│       ├── applications/route.ts # POST: save application + notify admin
│       └── upload/route.ts       # POST: upload resume to Supabase Storage
│
├── components/
│   ├── Header.tsx                # Site-wide navigation with dropdowns
│   ├── Footer.tsx                # Site-wide footer (unified)
│   ├── ContactForm.tsx           # Contact form (client component)
│   ├── CareersForm.tsx           # Multi-step careers application form
│   ├── theme-provider.tsx        # Dark mode provider (shadcn)
│   │
│   ├── ats/
│   │   ├── ATSSidebar.tsx        # ATS navigation sidebar (responsive)
│   │   ├── ApplicantFilters.tsx  # Stage filter pills
│   │   ├── EmailModal.tsx        # Email composer modal
│   │   ├── PipelineBoard.tsx     # Kanban board (client component)
│   │   ├── StageActions.tsx      # Sticky action footer on profile
│   │   └── TimeGreeting.tsx      # Time-aware greeting on dashboard
│   │
│   ├── forms/                    # (shadcn form primitives)
│   └── ui/                       # shadcn/ui component library
│
├── lib/
│   ├── email.ts                  # Resend: branded HTML email templates
│   ├── utils.ts                  # Shared utilities (cn, etc.)
│   ├── supabase/
│   │   └── server.ts             # Supabase SSR client factory
│   └── ats/
│       ├── constants.ts          # Stage definitions, badge colors, formatters
│       └── actions.ts            # Server Actions: moveStage, archive, addNote, sendEmail
│
├── styles/
│   └── globals.css               # Tailwind base + CSS custom properties
│                                 # Includes Nurturly ATS design tokens
│
├── public/                       # Static assets (logo, og-image, favicon)
├── .env                          # Local secrets (never commit)
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── README.md                     # Developer quickstart
└── PROJECT.md                    # ← This file
```

---

## 6. Environment Variables

Create a `.env` file in the project root (never commit this file):

```env
# Supabase — get from app.supabase.com → Project Settings → API
NEXT_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key"

# Resend — get from resend.com → API Keys
RESEND_API_KEY="re_your_api_key"

# Admin email — receives new lead + application notifications
ADMIN_EMAIL="your@email.com"

# Google Analytics 4 — get from analytics.google.com → Admin → Data Streams
NEXT_PUBLIC_GA4_ID="G-XXXXXXXXXX"
```

These same variables must be set in **Vercel Dashboard → Settings → Environment Variables** for production.

---

## 7. Database Schema

### Table: `public.inquiries`
Stores contact form leads from families/partners.

| Column | Type | Notes |
|---|---|---|
| `id` | uuid | Primary key, auto-generated |
| `name` | text | Full name |
| `email` | text | Email address |
| `phone` | text (nullable) | Phone number |
| `care_type` | text (nullable) | Type of care requested |
| `message` | text (nullable) | Message / context |
| `created_at` | timestamptz | Auto-set on insert |

**RLS:** Enabled. Public users can INSERT. Read requires service role.

---

### Table: `public.applications`
Stores job applications from caregiver candidates. Also serves as the ATS data source.

| Column | Type | Notes |
|---|---|---|
| `id` | uuid | Primary key, auto-generated |
| `name` | text | Applicant full name |
| `email` | text | Applicant email |
| `phone` | text (nullable) | Phone number |
| `job_slug` | text (nullable) | e.g. `certified-caregiver` |
| `location` | text (nullable) | City / area |
| `experience` | text (nullable) | Years / type of experience |
| `certifications` | text (nullable) | Comma-separated (e.g. `CNA, CPR`) |
| `resume_url` | text (nullable) | Public URL to uploaded resume |
| `message` | text (nullable) | Cover message |
| `stage` | text | ATS stage (default: `application_received`) |
| `status` | text | `active` or `archived` (default: `active`) |
| `stage_updated_at` | timestamptz | When stage last changed (for urgency tracking) |
| `notes` | text (nullable) | Internal recruiter notes (append-only) |
| `created_at` | timestamptz | Auto-set on insert |

**ATS Hiring Stages (in order):**
1. `application_received`
2. `phone_interview`
3. `reference_check`
4. `in_person_interview`
5. `shadow_shift`
6. `decision_made`

**RLS:** Enabled. Public users can INSERT. Stage/status updates require service role.

---

### Supabase Storage
- **Bucket:** `resumes`
- **Access:** Public (resume links are publicly accessible via signed URL)
- **Accepted types:** PDF, DOCX
- **Max size:** 5MB

---

## 8. Pages — Public Website

### Homepage — `/`
**Purpose:** Convert visitors into leads. Establish credibility instantly.

**Sections:**
- Hero: Headline + CTA ("Request a Care Plan" + "Learn How It Works")
- Trust bar: Awards, certifications, Houston-local credibility signals
- Services overview: 4 core services with icons
- How It Works: 3-step summary with link to full page
- Why Nurturly: 5 differentiators
- Testimonials: Social proof from families
- Final CTA: Contact form shortcut

**SEO:**
- Title: `Nurturly | Premium Home Care in Houston, TX`
- Full JSON-LD schema: `LocalBusiness` + `HomeHealthCare` + `WebSite` + `BreadcrumbList`
- Geo meta tags: Houston, TX coordinates
- Canonical URL

---

### About — `/about`
**Purpose:** Build emotional trust and brand connection.

**Sections:**
- Mission statement with client's approved copy
- Founding story ("Born from the principles of hospitality...")
- Core values
- Team / leadership

**Copy source:** Client-approved exact copy provided in brief.

---

### Services — `/services`
**Purpose:** Educate prospects on service offerings, convert to contact.

**Sections:**
- Hero: "Care That Feels Personal" · "Non-Medical Home Care · Houston, TX"
- Main services grid (4): Companionship, Personal Care, Mobility Support, Meal Preparation
- Additional services grid (5): Medication Reminders, Housekeeping, Transportation, Respite Care, Memory Care Support
- Transitional care callout (post-hospital)
- Final CTA: "Ready to get started?" + two buttons

**SEO:** Houston-specific keywords, descriptive meta.

---

### How It Works — `/how-it-works`
**Purpose:** Reduce friction by making the process transparent and simple.

**Sections:**
- Hero: "How It Works" · "Starting care shouldn't be stressful..."
- Step 1: Start with a conversation
- Step 2: We assess your needs
- Step 3: We match your caregiver
- Step 4: Care begins (Supervised First Visit)
- Step 5: We stay connected
- Final CTA: "Start the Conversation" + "View Our Services"

---

### Why Nurturly — `/why-us`
**Purpose:** Differentiate from competitors on specifics, not generic claims.

**Sections:**
- 5 core differentiators (from client brief)

---

### Service Areas — `/service-areas`
**Purpose:** Establish local SEO presence across Houston suburbs.

**Content:** Greater Houston area listing, specific cities covered, map context.

**Copy:** Uses exact client-approved copy.

---

### For Families — `/for-families`
**Purpose:** Audience-specific page for families exploring care.

**Sections:**
- Hero: Family-focused copy
- 3-step process from a family's perspective
- FAQ section (common questions families ask)
- CTA to contact

---

### For Professionals — `/for-professionals`
**Purpose:** B2B referral page for healthcare professionals/partners.

**Sections:**
- Partner value proposition
- 6 partner types (hospitals, physicians, social workers, etc.)
- Referral CTA

**Copy:** Uses exact client-approved copy.

---

### Careers — `/careers`
**Purpose:** Attract quality caregivers and funnel them to the application form.

**Sections:**
- Hero: "Care for people, not just tasks" + CTA buttons
- Who we look for: 7 qualities (Calm, Patient, Reliable, Consistent, Observant, Emotionally Steady, Respectful)
- Our hiring process: Real 6-step process (Application → Phone → Reference → In-Person → Shadow Shift → Final Decision)
- Application form (inline, scrollable)

**Application form fields:**
- Full Name, Email, Phone Number
- Location (Houston area)
- Position Applied For (dropdown: Caregiver, CNA, HHA, Companion, Live-In)
- Years of Experience (dropdown)
- Certifications (multi-check: CNA, CPR, HHA, First Aid, Dementia Care, Other)
- Resume upload (PDF/DOCX, max 5MB)
- Cover message (textarea)

---

### Contact — `/contact`
**Purpose:** Primary lead capture form for families seeking care.

**Form fields:**
- Full Name, Email, Phone
- Type of care (dropdown)
- Message

**On submit:**
- Saves to Supabase `inquiries` table
- Emails admin via Resend
- Sends confirmation email to submitter
- Shows success state in the UI

---

### Resources — `/resources`
**Status:** Placeholder — no real content yet. Shows a "coming soon" or empty state.

---

### Privacy Policy — `/privacy`
**Status:** Page exists. Standard privacy policy copy.

### Accessibility — `/accessibility`
**Status:** Page exists. WCAG accessibility statement.

---

## 9. Pages — ATS Admin Portal

> **Access:** `yoursite.com/ats`  
> ⚠️ **No authentication yet** — anyone with the URL can access. Auth is on the roadmap.

### Dashboard — `/ats`
**What it shows:**
- Time-aware greeting ("Good morning, Admin")
- 4 stat cards: Total Applications, New This Week, In Interview Stage, Offers Pending
- Recruitment funnel bar (proportional visualization of all 6 stages)
- Recent applications table (desktop) / card list (mobile)

**Data source:** Live from Supabase `applications` table, `status = 'active'`

---

### Applicants List — `/ats/applicants`
**What it shows:**
- Stage filter pills (All, Received, Phone Screen, Reference, Interview, Shadow Shift, Decision)
- Search by name
- Paginated table (10 per page) — desktop
- Tap-friendly card list — mobile
- Each row: Name + initials, Contact info, Role, Date applied, Stage badge, View button

**URL params:** `?stage=phone_interview&q=John&page=2`

---

### Applicant Profile — `/ats/applicants/[id]`
**What it shows:**
- Back navigation + breadcrumb
- Applicant hero: Avatar initials, Name, Role, Date applied, Resume link
- Contact cards: Email, Phone, Location
- Application journey tracker:
  - Mobile: vertical step list
  - Desktop: horizontal progress bar
- Cover message (blockquote)
- Experience + Certifications
- Internal notes (if any)
- Activity log (which stages completed, with timestamps)
- Sticky action footer: Archive | Send Email | → Move to [Next Stage]

---

### Pipeline Board — `/ats/pipeline`
**What it shows:**
- 6-column Kanban board, one column per hiring stage
- Each card: Applicant name, role, days-in-stage, urgency dot
  - 🟢 Green = ≤3 days
  - 🟡 Amber = 4–7 days
  - 🔴 Red = 8+ days
- Hover → shows move-to-next-stage arrow button
- Columns scroll vertically; board scrolls horizontally

**Counters:** "High Priority: X" + "Total Active: X" shown above the board

---

### Email Modal (opens from profile page)
**Fields:** Pre-filled subject + message template
**Sends:** Branded Nurturly HTML email via Resend
**UX:** Modal overlay, close on backdrop click, success state auto-dismisses

---

## 10. Components

### Public Site Components

| Component | File | Purpose |
|---|---|---|
| `Header` | `components/Header.tsx` | Top navigation with dropdown menus, mobile hamburger |
| `Footer` | `components/Footer.tsx` | Unified site footer (replaces all inline footers) |
| `ContactForm` | `components/ContactForm.tsx` | Client-side contact form with validation |
| `CareersForm` | `components/CareersForm.tsx` | Multi-step careers application form with file upload |

### ATS Components

| Component | File | Purpose |
|---|---|---|
| `ATSSidebar` | `components/ats/ATSSidebar.tsx` | Responsive sidebar (hamburger drawer on mobile) |
| `ApplicantFilters` | `components/ats/ApplicantFilters.tsx` | Stage filter pill buttons (URL-param driven) |
| `EmailModal` | `components/ats/EmailModal.tsx` | Branded email composer modal |
| `PipelineBoard` | `components/ats/PipelineBoard.tsx` | Client-side Kanban board with move-stage buttons |
| `StageActions` | `components/ats/StageActions.tsx` | Sticky action footer on applicant profile |
| `TimeGreeting` | `components/ats/TimeGreeting.tsx` | Client component for time-aware dashboard greeting |

---

## 11. API Routes

### `POST /api/inquiries`
Handles contact form submissions.

**Request body:**
```json
{
  "name": "Jane Smith",
  "email": "jane@email.com",
  "phone": "832-000-0000",
  "care_type": "Elderly companion care",
  "message": "Looking for care for my mother..."
}
```

**Actions:**
1. Inserts row into `public.inquiries`
2. Sends admin notification email (Resend)
3. Sends confirmation email to submitter (Resend)

**Response:** `{ success: true }` or `{ error: "..." }`

---

### `POST /api/applications`
Handles caregiver job applications.

**Request body:**
```json
{
  "name": "John Doe",
  "email": "john@email.com",
  "phone": "713-000-0000",
  "job_slug": "certified-caregiver",
  "location": "Houston, TX",
  "experience": "3-5 years",
  "certifications": "CNA, CPR",
  "resume_url": "https://storage.supabase.co/...",
  "message": "I'm passionate about elder care..."
}
```

**Actions:**
1. Inserts row into `public.applications` with `stage='application_received'`, `status='active'`
2. Sends admin notification email (Resend)
3. Sends confirmation email to applicant (Resend)

---

### `POST /api/upload`
Handles resume file uploads.

**Request:** `multipart/form-data` with `file` field

**Actions:**
1. Validates file type (PDF, DOCX) and size (≤5MB)
2. Uploads to Supabase Storage `resumes` bucket
3. Returns public URL

**Response:** `{ url: "https://..." }` or `{ error: "..." }`

---

## 12. User Flows — Families

### Flow A: Family Seeking Care (Primary Conversion)

```
Landing on Homepage
  ↓
Reads hero + services overview
  ↓
Clicks "Request a Care Plan" CTA
  ↓
Contact page → fills form (name, email, phone, care type, message)
  ↓
Form submits → POST /api/inquiries
  ↓
✅ Success state shown
📧 Family receives confirmation email
📧 Admin receives lead notification
  ↓
Admin follows up by phone/email
```

### Flow B: Research-First Family

```
Homepage or organic search
  ↓
Services page → reads service descriptions
  ↓
How It Works → reads 5-step process
  ↓
Why Nurturly → reads differentiators
  ↓
About → reads mission + story
  ↓
Contact page → converts
```

### Flow C: Referred Family

```
Direct referral from healthcare provider
  ↓
For Professionals page → clicks referral CTA
  ↓
Contact page → form (mentions referral source in message)
```

---

## 13. User Flows — Job Applicants

### Flow A: Direct Application

```
Careers page (organic search or job board link)
  ↓
Reads "Who We're Looking For" + 6-step hiring process
  ↓
Clicks "Apply Now" → page scrolls to application form
  ↓
Fills multi-step form:
  Step 1: Personal info (name, email, phone, location)
  Step 2: Role + experience (position, years, certifications)
  Step 3: Resume upload + cover message
  ↓
Submits → POST /api/upload (resume) → POST /api/applications
  ↓
✅ Success state shown
📧 Applicant receives confirmation email
📧 Admin receives new applicant notification
  ↓
Admin reviews application in ATS → moves through pipeline
```

---

## 14. User Flows — Admin (ATS)

### Flow A: Daily Pipeline Review

```
Admin opens /ats
  ↓
Dashboard: sees stat snapshot + funnel overview
  ↓  
Notices new applications (stat card + funnel bar)
  ↓
Clicks "View All" → /ats/applicants
  ↓
Filters by "Application Received" stage
  ↓
Reviews each applicant → clicks name to open profile
```

### Flow B: Moving an Applicant Through Stages

```
/ats/applicants/[id] — profile open
  ↓
Reads cover message, experience, certifications
  ↓
Reviews resume (opens link)
  ↓
Clicks "→ Move to Phone Interview" in sticky footer
  ↓
Server Action fires: updates stage + stage_updated_at in DB
  ↓
Page refreshes: stage badge + journey tracker update
  ↓
Urgency dot resets to green (0 days in stage)
```

### Flow C: Sending an Email to a Candidate

```
Applicant profile → clicks "Send Email"
  ↓
Email modal opens (pre-filled subject + message)
  ↓
Admin edits message as needed
  ↓
Clicks "Send Email"
  ↓
Server Action fires: Resend sends branded HTML email
  ↓
Modal auto-closes after 2 seconds
```

### Flow D: Archiving a Candidate

```
Applicant profile → clicks "Archive"
  ↓
Confirmation dialog: "Archive [Name]?"
  ↓
Confirms → Server Action fires: status = 'archived'
  ↓
Redirects to /ats/applicants
  ↓
Applicant no longer appears in active pipeline
```

### Flow E: Monitoring Urgency via Pipeline Board

```
Admin opens /ats/pipeline
  ↓
Sees 6-column Kanban board
  ↓
Scans urgency dots:
  🟢 Green = recently moved (≤3 days)
  🟡 Amber = needs attention (4–7 days)
  🔴 Red = stalled / urgent (8+ days)
  ↓
Hovers card → arrow button appears → clicks to advance stage
  ↓
Card moves column (Server Action + revalidation)
```

---

## 15. SEO Strategy

### Technical SEO (Implemented)

| Feature | Status | Location |
|---|---|---|
| Unique `<title>` per page | ✅ Done | Each `page.tsx` metadata export |
| Meta descriptions | ✅ Done | Each `page.tsx` metadata export |
| Open Graph tags | ✅ Done | `app/layout.tsx` + page-level overrides |
| Twitter Card tags | ✅ Done | `app/layout.tsx` |
| Sitemap.xml | ✅ Done | `app/sitemap.ts` → auto-generates `/sitemap.xml` |
| Robots.txt | ✅ Done | `app/robots.ts` → auto-generates `/robots.txt` |
| Canonical URLs | ✅ Done | Homepage + will propagate |
| JSON-LD Structured Data | ✅ Done | Homepage: LocalBusiness + HomeHealthCare + WebSite + BreadcrumbList |
| Geo meta tags | ✅ Done | Homepage: `geo.region`, `geo.placename`, `ICBM` |
| Semantic HTML (h1, nav, main, section) | ✅ Done | All pages |
| ATS excluded from indexing | ✅ Done | `robots: { index: false }` in ATS layout |

### On-Page SEO (Implemented)

| Page | Primary Keyword Target |
|---|---|
| Homepage | `home care Houston TX` |
| Services | `non-medical home care Houston` |
| How It Works | `how home care works Houston` |
| About | `trusted home care company Houston` |
| Careers | `caregiver jobs Houston` |
| Service Areas | `home care Houston Sugar Land Pearland Katy` |

### Local SEO (Partially Implemented)

| Item | Status |
|---|---|
| Houston geo meta tags | ✅ Done |
| `areaServed` in JSON-LD (8 cities) | ✅ Done |
| Houston keywords in page copy | ✅ Done |
| Google Business Profile | ❌ Not done — needs client action |
| NAP consistency (Name, Address, Phone) | ⚠️ Placeholder phone in schema |
| Local citation building | ❌ Not done |

---

## 16. Email System

All emails are sent via **Resend** using branded HTML templates.

### Email Templates

| Template | Trigger | Recipients |
|---|---|---|
| New Inquiry (admin) | Contact form submitted | `ADMIN_EMAIL` env var |
| Inquiry Confirmation (user) | Contact form submitted | Form submitter |
| New Application (admin) | Careers form submitted | `ADMIN_EMAIL` env var |
| Application Confirmation (applicant) | Careers form submitted | Applicant |
| ATS Candidate Email | Admin sends from ATS | Selected applicant |

### Branded Design
All emails use:
- Gradient header (dark teal → teal)
- "Nurturly" logotype in serif font
- Clean white body with generous padding
- Sand-colored footer with contact info

### Sender Config
- **From:** `noreply@nurturlycare.com`
- **From name:** `Nurturly Care Team`

> ⚠️ The domain `nurturlycare.com` must be **verified in Resend** for emails to send successfully. Go to resend.com → Domains → Add domain → follow DNS verification steps.

---

## 17. Analytics & Tracking

### Google Analytics 4

**Setup:** GA4 script loaded via `next/script` with `afterInteractive` strategy in `app/layout.tsx`.

**Activate by:** Adding `NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX` to `.env` and Vercel env vars.

| Tracking type | Status |
|---|---|
| Page views (automatic) | ✅ Active once GA4 ID is added |
| Custom events (form submissions) | ❌ Not yet implemented |
| Custom events (CTA button clicks) | ❌ Not yet implemented |
| Scroll depth tracking | ❌ Not yet implemented |
| Conversion goals (form = lead) | ❌ Not configured in GA4 dashboard |

### Google Search Console
- Must be set up separately by connecting the live domain
- Submit `sitemap.xml` URL after verifying domain ownership

---

## 18. Deployment & Hosting

### Platform: Vercel

The site is deployed on **Vercel** with automatic deployments from the main Git branch.

| Feature | Detail |
|---|---|
| URL | `nurturlycare.com` (custom domain) |
| SSL/HTTPS | Automatic via Vercel |
| Preview Deploys | Each PR gets a unique preview URL |
| Edge Network | Global CDN via Vercel Edge |
| Build Command | `next build` |
| Output Directory | `.next` |

### Required Vercel Environment Variables

Go to **Vercel Dashboard → Project → Settings → Environment Variables** and add:

```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
RESEND_API_KEY
ADMIN_EMAIL
NEXT_PUBLIC_GA4_ID
```

### Local Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Type check
npx tsc --noEmit

# Build for production
pnpm build
```

---

## 19. What Is Done ✅

### Website — Structure & Design
- [x] All 13 pages built and navigable
- [x] Unified `<Header />` with dropdown navigation (all pages)
- [x] Unified `<Footer />` component (all pages)
- [x] Fully mobile-responsive design throughout
- [x] Nurturly brand design system (teal, sand, gold palette)
- [x] Premium typography: Newsreader (serif) + Manrope (body)
- [x] Material Symbols icon system throughout

### Website — Content
- [x] Homepage: Hero, services, how-it-works, why Nurturly, testimonials, CTA
- [x] About: Client's exact approved copy
- [x] Services: Concrete, benefit-led copy for all 9 services
- [x] How It Works: Real 5-step process (no luxury jargon)
- [x] Why Nurturly: 5 differentiators from client brief
- [x] Service Areas: Client-approved copy, Houston suburb listing
- [x] For Families: Full page built from scratch (FAQ, 3-step process, CTA)
- [x] For Professionals: Client-approved exact copy, 6 partner types
- [x] Careers: Client's exact 6-step hiring process, 7 "Who We're Looking For" qualities
- [x] Contact: Lead capture form
- [x] Privacy: Standard privacy policy
- [x] Accessibility: WCAG accessibility statement

### Forms & Lead Capture
- [x] Contact form: saves to Supabase + emails admin
- [x] Careers application form: multi-step, resume upload, saves to Supabase + emails admin
- [x] Auto-response confirmation emails to both form submitters
- [x] Structured form fields (not generic)

### Technical SEO
- [x] Unique title + meta description on every page
- [x] Open Graph + Twitter Card tags (global + page-level)
- [x] Auto-generated `/sitemap.xml`
- [x] Auto-generated `/robots.txt`
- [x] JSON-LD schema: `LocalBusiness` + `HomeHealthCare` + `WebSite` + `BreadcrumbList`
- [x] Geo meta tags (Houston coordinates)
- [x] Canonical URL on homepage
- [x] Houston-specific keywords in metadata across all pages
- [x] Semantic HTML throughout (h1, nav, main, section, article)

### Google Analytics 4
- [x] GA4 script wired up in layout.tsx (activates when `NEXT_PUBLIC_GA4_ID` is set)

### Security
- [x] HTTPS (Vercel automatic SSL)
- [x] Supabase Row Level Security (RLS) on all tables
- [x] Service role not exposed to client (all server-side operations)
- [x] Environment variables never committed to Git
- [x] ATS excluded from Google indexing

### ATS Admin Portal
- [x] Dashboard: stats, funnel, recent applications
- [x] Applicants list: search, filter by stage, paginate
- [x] Applicant profile: full details, stage tracker, cover message, certifications, activity log
- [x] Pipeline board: 6-column Kanban with urgency dots and move buttons
- [x] Email modal: branded email composer, sends via Resend
- [x] Stage advancement: server action updates DB, revalidates UI
- [x] Archive: removes applicant from active pipeline
- [x] Mobile responsive: hamburger sidebar, card-based list on mobile
- [x] All ATS bug fixes: explicit hex colors replace broken CSS tokens

---

## 20. What Is Remaining ❌

### High Priority (Complete Before Launch)

| Item | Description |
|---|---|
| **GA4 ID** | Add `NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX` to `.env` and Vercel |
| **Phone number** | Update placeholder `+1-832-000-0000` in homepage JSON-LD schema |
| **Resend domain verification** | Verify `nurturlycare.com` in Resend dashboard (DNS records) |
| **GA4 custom events** | Track form submissions, CTA clicks, scroll depth as GA4 events |
| **ATS authentication** | Protect `/ats` with Supabase Auth — anyone with the URL can currently access it |

### Medium Priority (Shortly After Launch)

| Item | Description |
|---|---|
| **Google Business Profile** | Create + verify GBP listing for Nurturly (Houston) |
| **Google Search Console** | Verify domain + submit sitemap |
| **CRM integration** | Connect form submissions to HubSpot (free tier) or GoHighLevel |
| **BreadcrumbList on inner pages** | Add JSON-LD schema to Services, About, Careers, etc. |
| **FAQPage schema** | Add FAQ JSON-LD to For Families page (already has FAQ section) |
| **JobPosting schema** | Add JSON-LD to Careers page for Google Jobs |
| **Resources page** | Build out with real content (guides, articles, FAQ for families) |
| **Contact form — more fields** | Add: relationship to patient, urgency, days/hours/week needed |
| **ATS — Notes feature** | Allow admins to append text notes to applicant profiles |

### Low Priority / Future

| Item | Description |
|---|---|
| **Sanity CMS** | Install Sanity Studio at `/studio` so client can edit content without code |
| **Blog/Insights** | Content marketing articles for SEO (caregiver tips, Houston care guides) |
| **Houston SEO doc** | Keyword research + competitor analysis + local citation strategy document |
| **Local citations** | Submit NAP to Yelp, HomeAdvisor, Care.com, Caring.com, etc. |
| **CRM-connected lead scoring** | Auto-score leads based on care type, urgency, location |
| **ATS email templates** | Multiple pre-written email templates per stage (phone invite, rejection, offer) |
| **ATS calendar** | Schedule / calendar view for interview bookings |

---

## 21. Known Issues & Notes

### ATS Access Control
The `/ats` portal has **no login**. It is excluded from Google indexing but is publicly accessible by URL. Before sharing with the client or going to full production:
- Option A: Add Supabase Auth (email/password) — recommended
- Option B: Use Vercel password protection (simple, one-click)
- Option C: Use middleware + hardcoded admin token

### Phone Number in Schema
The phone number in the homepage JSON-LD (`+1-832-000-0000`) is a placeholder. **This must be updated** before the schema is crawled by Google.
**File:** `app/page.tsx` → search for `telephone`

### Resend Domain Verification
Emails will fail silently if `nurturlycare.com` is not verified as a sending domain in Resend. Go to [resend.com](https://resend.com) → Domains → Add → follow the DNS instructions.

### Resources Page
`/resources` has no real content. It is in the sitemap and navigation. Either add content or redirect it to the blog/contact until ready.

### Social Media URLs in Schema
The `sameAs` links in the JSON-LD (`facebook.com/nurturlycare`, `instagram.com/nurturlycare`, etc.) are placeholder URLs. Update them once the client's real social profiles are established.

### ATS CSS Token System
The ATS was originally built with Stitch/Material Design CSS tokens. These have been replaced with explicit hex values. The token variables exist in `globals.css` as a reference but are not actively used by Tailwind — the inline `style={}` props are the source of truth for ATS colors.

---

## 22. Client Handoff Checklist

Before handing the project fully to the client, ensure:

### Technical
- [ ] All environment variables set in Vercel
- [ ] `NEXT_PUBLIC_GA4_ID` added and verified tracking in GA4 debug view
- [ ] Resend domain `nurturlycare.com` verified (DNS)
- [ ] Real phone number in JSON-LD schema
- [ ] Real social media URLs in JSON-LD schema
- [ ] ATS access protected (auth or password)  
- [ ] Google Search Console: domain verified + sitemap submitted

### Content
- [ ] Client has reviewed and approved all page copy
- [ ] Resources page has at least 1–2 real articles
- [ ] Blog/Insights section planned or redirected
- [ ] All team photos approved if used

### Business Tools
- [ ] Google Business Profile created and verified (Houston)
- [ ] GA4 property created + connected to site
- [ ] Resend account owned by client (or API key transferred)
- [ ] Supabase project access transferred to client account
- [ ] Vercel project transferred to client's Vercel account or team

### Documentation
- [ ] Client given access to this file (PROJECT.md)
- [ ] Client given Loom walkthrough of ATS portal
- [ ] Client given login setup instructions for Supabase dashboard (to view raw form submissions)
- [ ] Developer contact info left for ongoing support

---

*This document is maintained alongside the codebase. Update it whenever significant features are added, removed, or changed.*
