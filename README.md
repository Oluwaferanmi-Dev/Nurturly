# CareBase — Home Care Agency Starter

A production-ready Next.js website + ATS template built for home care agencies. Includes a public marketing site, lead capture, caregiver application system, and a full internal Applicant Tracking System (ATS).

## What’s Included

*   13-page public website (fully responsive)
*   Contact form → Supabase + email notification via Resend
*   Caregiver application form with resume upload
*   Full ATS portal at `/ats` (dashboard, pipeline board, applicant profiles, email modal)
*   Technical SEO (sitemap, robots, JSON-LD schema, Open Graph)
*   Google Analytics 4 ready

## Tech Stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · shadcn/ui · Supabase · Resend · Vercel

## Quick Start

1.  Clone the repo
2.  Copy `.env.example` to `.env` and fill in your values
3.  Run `pnpm install`
4.  Run `pnpm dev`
5.  Search for `[YOUR_` across the codebase and replace all placeholders with your real content

## Deployment

Deploy to Vercel. Add all env vars from `.env.example` to your Vercel project settings.

## Customization Guide

*   Brand colors: `styles/globals.css` → update CSS custom properties
*   Fonts: `app/layout.tsx` → swap Google Font imports
*   Logo: Replace files in `public/`
*   Email templates: `lib/email.ts`
*   ATS stages: `lib/ats/constants.ts`
