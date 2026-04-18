# Nurturly Care

A modern, full-stack marketing and recruitment website for **Nurturly Care** — a professional home care services company. Built with Next.js 16, Supabase, and Resend.

🌐 **Live site:** [nurturlycare.com](https://nurturlycare.com)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| UI Components | [shadcn/ui](https://ui.shadcn.com) + Radix UI |
| Database | [Supabase](https://supabase.com) (PostgreSQL) |
| Storage | Supabase Storage (resume uploads) |
| Email | [Resend](https://resend.com) |
| Deployment | [Vercel](https://vercel.com) |
| Analytics | Vercel Analytics |

---

## Getting Started

### 1. Install dependencies

```bash
pnpm install
```

### 2. Set up environment variables

Create a `.env` file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key"
RESEND_API_KEY="re_your_api_key"
ADMIN_EMAIL="your@email.com"
```

### 3. Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## Project Structure

```
nurturly/
├── app/
│   ├── api/
│   │   ├── inquiries/        # Contact form submissions
│   │   ├── applications/     # Job application submissions
│   │   └── upload/           # Resume file uploads (Supabase Storage)
│   ├── about/
│   ├── careers/
│   ├── contact/
│   ├── for-families/
│   ├── for-professionals/
│   ├── how-it-works/
│   ├── resources/
│   ├── service-areas/
│   ├── services/
│   ├── why-us/
│   ├── accessibility/
│   ├── privacy/
│   ├── layout.tsx
│   └── page.tsx              # Homepage
├── components/               # Reusable UI components (shadcn/ui)
├── lib/
│   ├── email.ts              # Resend email templates (inquiry + application)
│   ├── supabase/
│   │   └── server.ts         # Supabase server client (SSR)
│   └── utils.ts
├── hooks/
├── public/                   # Static assets & logo
├── styles/
└── .env                      # Local environment variables (never commit)
```

---

## API Routes

| Route | Method | Description |
|---|---|---|
| `/api/inquiries` | `POST` | Saves a contact form inquiry to Supabase and emails admin |
| `/api/applications` | `POST` | Saves a job application to Supabase and emails admin |
| `/api/upload` | `POST` | Uploads resume PDF/DOCX to Supabase Storage (`resumes` bucket) |

---

## Database (Supabase)

Two tables with Row Level Security (RLS) enabled:

- **`inquiries`** — stores contact form submissions (`name`, `email`, `phone`, `care_type`, `message`)
- **`applications`** — stores job applications (`name`, `email`, `phone`, `job_slug`, `location`, `experience`, `certifications`, `resume_url`, `message`)

Storage bucket: **`resumes`** (public, accepts PDF and Word documents up to 5MB)

---

## Email Notifications

Admin email notifications are sent via **Resend** using branded HTML templates for:
- 📬 **New Inquiry** — triggered by the Contact Us form
- 📋 **New Application** — triggered by the job application form

Emails are sent from `noreply@nurturlycare.com` and sent to the `ADMIN_EMAIL` env variable.

---

## Deployment

The site is deployed on **Vercel**. When deploying, make sure all environment variables are added in the Vercel dashboard under **Settings → Environment Variables**:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `RESEND_API_KEY`
- `ADMIN_EMAIL`

> ⚠️ Vercel does **not** read `.env` files automatically — variables must be set manually in the dashboard.

---

## Scripts

```bash
pnpm dev        # Start local dev server
pnpm build      # Build for production
pnpm start      # Start production server
pnpm lint       # Run ESLint
```
