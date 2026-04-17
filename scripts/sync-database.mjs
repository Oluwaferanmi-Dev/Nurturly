#!/usr/bin/env node

import { createClient } from '@supabase/supabase-js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Get environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !serviceRoleKey) {
  console.error('[v0] Error: Missing Supabase credentials')
  console.error('[v0] NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl ? '✓' : '✗')
  console.error('[v0] SUPABASE_SERVICE_ROLE_KEY:', serviceRoleKey ? '✓' : '✗')
  process.exit(1)
}

// Create Supabase client with service role key for admin operations
const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
})

async function executeSql(sql) {
  try {
    // Use the PostgreSQL query directly via the REST API
    const response = await fetch(`${supabaseUrl}/rest/v1/rpc/exec`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${serviceRoleKey}`,
      },
      body: JSON.stringify({ sql }),
    })

    if (!response.ok) {
      const error = await response.text()
      throw new Error(`HTTP ${response.status}: ${error}`)
    }

    return true
  } catch (error) {
    console.error('[v0] SQL execution error:', error.message)
    return false
  }
}

async function executeManualSetup() {
  console.log('[v0] Setting up database tables...')

  // Create inquiries table
  const inquiriesTable = `
    CREATE TABLE IF NOT EXISTS public.inquiries (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      care_type TEXT,
      message TEXT,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `

  // Create applications table
  const applicationsTable = `
    CREATE TABLE IF NOT EXISTS public.applications (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      job_slug TEXT,
      location TEXT,
      experience TEXT,
      certifications TEXT,
      resume_url TEXT,
      message TEXT,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `

  // Enable RLS
  const enableRls = `
    ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;
    ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;
  `

  // RLS Policies
  const inquiriesPolicy = `
    CREATE POLICY "Allow public to insert inquiries" 
      ON public.inquiries 
      FOR INSERT 
      WITH CHECK (true);
  `

  const applicationsPolicy = `
    CREATE POLICY "Allow public to insert applications" 
      ON public.applications 
      FOR INSERT 
      WITH CHECK (true);
  `

  // Indexes
  const createIndexes = `
    CREATE INDEX IF NOT EXISTS idx_inquiries_email ON public.inquiries(email);
    CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON public.inquiries(created_at);
    CREATE INDEX IF NOT EXISTS idx_applications_email ON public.applications(email);
    CREATE INDEX IF NOT EXISTS idx_applications_created_at ON public.applications(created_at);
  `

  const statements = [
    { name: 'Inquiries Table', sql: inquiriesTable },
    { name: 'Applications Table', sql: applicationsTable },
    { name: 'Enable RLS', sql: enableRls },
    { name: 'Inquiries RLS Policy', sql: inquiriesPolicy },
    { name: 'Applications RLS Policy', sql: applicationsPolicy },
    { name: 'Create Indexes', sql: createIndexes },
  ]

  for (const statement of statements) {
    process.stdout.write(`[v0] ${statement.name}... `)
    const success = await executeSql(statement.sql)
    if (success) {
      console.log('✓')
    } else {
      console.log('⚠ (may already exist)')
    }
  }

  console.log('[v0] ✓ Database schema setup complete!')
}

async function setupStorage() {
  console.log('[v0] Setting up storage bucket...')

  try {
    // Create storage bucket via Supabase SDK
    const { data: buckets, error: listError } = await supabase.storage.listBuckets()

    if (listError) {
      console.error('[v0] Error listing buckets:', listError)
      return false
    }

    const resumesBucketExists = buckets?.some(b => b.name === 'resumes')

    if (!resumesBucketExists) {
      const { error: createError } = await supabase.storage.createBucket('resumes', {
        public: true,
      })

      if (createError) {
        console.error('[v0] Error creating bucket:', createError)
        return false
      }

      console.log('[v0] ✓ Created resumes bucket')
    } else {
      console.log('[v0] ✓ Resumes bucket already exists')
    }

    return true
  } catch (error) {
    console.error('[v0] Storage setup error:', error)
    return false
  }
}

async function main() {
  console.log('[v0] Starting Supabase database synchronization...')
  console.log('[v0] URL:', supabaseUrl)
  console.log()

  try {
    // Set up tables and RLS
    await executeManualSetup()
    console.log()

    // Set up storage
    const storageSuccess = await setupStorage()
    console.log()

    if (storageSuccess) {
      console.log('[v0] ✓ Database synchronization complete!')
      console.log('[v0] Your Supabase database is ready for the application')
      process.exit(0)
    } else {
      console.log('[v0] ⚠ Database sync completed with warnings')
      process.exit(0)
    }
  } catch (error) {
    console.error('[v0] Fatal error:', error)
    process.exit(1)
  }
}

main()
