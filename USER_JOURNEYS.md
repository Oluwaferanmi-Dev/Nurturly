# Nurturly End-to-End User Journeys

This document outlines the complete, end-to-end user flows for the two primary personas interacting with the Nurturly platform: **The Family/Service Seeker (Client)** and **The Job Applicant (Candidate)**. It also covers how internal **Nurturly Admins** interact with these users.

---

## 1. The Family / Service Seeker Flow (Client Journey)

The goal of this flow is to convert a visitor seeking care into a qualified lead, seamlessly notifying the Nurturly team while providing the user with immediate reassurance.

### Phase 1: Discovery & Education
1. **Landing:** The user arrives via the Home page (`/`) or Services page (`/services`). They experience the premium, trustworthy brand identity through high-quality typography, smooth animations, and clear value propositions.
2. **Exploration:** The user reads about specific care types (e.g., Post-Surgery, Senior Care) and reviews the "Why Nurturly" differentiators.
3. **Call to Action (CTA):** Prompted by sticky navigation or end-of-section CTAs ("Book a Consultation", "Get in Touch"), the user navigates to the `/contact` page.

### Phase 2: Inquiry & Data Capture
1. **Form Engagement:** The user lands on the Contact page and interacts with the `ContactForm` component.
2. **Information Gathering:** The user provides:
   - Personal details (Name, Email, Phone, Zip Code)
   - Care requirements (Care Type, Hours Per Week)
   - Relationship to the patient and a custom message/urgency level.
3. **Submission & Analytics:** Upon clicking submit, client-side validation ensures data integrity. Concurrently, an analytics event (`trackContactFormSubmit`) fires to track conversion metrics.

### Phase 3: System Processing & Notifications
1. **Database Storage:** The form data is securely inserted into the Supabase `inquiries` table.
2. **Automated Communication (via Resend):**
   - **Internal Alert:** An email is dispatched to `admin@nurturlycare.com` notifying the team of a new lead, containing all submitted details.
   - **User Confirmation:** A beautifully branded, automated email (from `hello@nurturlycare.com`) is sent to the user, confirming receipt and outlining the next steps (e.g., "A care coordinator will be in touch within 24 hours").
3. **Success State:** The UI transitions to a success message, thanking the user and setting expectations.

### Phase 4: Internal Admin Action
1. **Review:** A Nurturly Admin receives the email or views the Supabase `inquiries` dashboard.
2. **Follow-Up:** The admin reaches out to the family via phone or email (`hello@nurturlycare.com`) to schedule the initial consultation

---

## 2. The Job Applicant Flow (Candidate Journey)

The goal of this flow is to attract top-tier caregiver talent, capture their application seamlessly, and route them into the internal Applicant Tracking System (ATS) for evaluation.

### Phase 1: Discovery
1. **Careers Page:** The candidate navigates to `/careers`.
2. **Job Listings (Sanity CMS):** The page dynamically fetches active job postings from the Sanity Content Management System. If no jobs are active, a graceful empty state is displayed.
3. **Job Details:** The candidate clicks on a specific role (e.g., "Registered Nurse") and is taken to the dynamic job slug page (`/careers/[slug]`) to read responsibilities, requirements, and benefits.

### Phase 2: Application Submission
1. **Form Engagement:** The candidate clicks "Apply Now" and fills out the `JobApplicationForm`.
2. **Information Gathering:** The candidate provides:
   - Personal details (Name, Email, Phone, Location)
   - Professional background (Experience, Certifications)
   - A link to their resume (`resume_url`) and an optional cover message.
3. **Submission:** The candidate submits the form.

### Phase 3: System Processing
1. **Database Entry:** The application is inserted into the Supabase `applications` table. By default, it is assigned the stage `application_received` and the status `active`.
2. **Automated Communication:**
   - **Internal Alert:** An email is sent to `admin@nurturlycare.com` notifying the recruitment team of a new applicant.
   - **Candidate Confirmation:** A branded confirmation email (from `hello@nurturlycare.com`) is sent to the applicant, acknowledging their submission.
3. **Success State:** The UI updates to confirm the application was received successfully.

### Phase 4: The ATS Pipeline (Internal Admin Journey)
This phase describes how Nurturly Admins evaluate the candidate using the custom-built ATS.

1. **Authentication:** The Admin navigates to `/ats`. The `proxy.ts` middleware intercepts the request. If not logged in, they are redirected to `/ats/login`. Upon secure login, they enter the ATS.
2. **Pipeline Overview (`/ats/pipeline`):**
   - The Admin views the Kanban-style board showing all active candidates.
   - Candidates are grouped by their current stage (e.g., *Received*, *Phone Screen*, *Reference Check*, *Interview*, *Shadow Shift*, *Decision*).
   - Visual cues highlight candidate urgency (e.g., red dots for candidates sitting in a stage for too long).
3. **Candidate Review (`/ats/applicants/[id]`):**
   - The Admin clicks on a candidate to view their detailed profile, resume link, experience, and timeline.
   - **Adding Notes:** The Admin can add internal timestamped notes to the candidate's profile.
4. **Moving Stages:**
   - The Admin clicks the "Move to [Next Stage]" button (e.g., "Move to Phone Interview").
   - A Server Action updates the Supabase database (`stage` and `stage_updated_at`), securely authorized via RLS policies.
   - The UI automatically refreshes (`router.refresh()`), moving the candidate's card to the next column.
5. **Direct Communication:**
   - Using the **EmailModal**, the Admin can draft and send branded emails directly from the ATS to the candidate (e.g., to request interview availability or send an offer). These emails are dispatched via Resend from `hello@nurturlycare.com`.
6. **Archiving:**
   - If a candidate is rejected or hired, the Admin clicks "Archive". The application's status is changed to `archived`, removing them from the active pipeline board while preserving their historical data in the database.
