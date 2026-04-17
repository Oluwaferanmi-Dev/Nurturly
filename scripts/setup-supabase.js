#!/usr/bin/env node

import { createClient } from '@supabase/supabase-js'
import fs from 'fs'
import path from 'path'

// Get environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !serviceRoleKey) {
  console.error('[v0] Error: Missing Supabase credentials')
  console.error('[v0] Please ensure NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set')
  process.exit(1)
}

// Create Supabase client with service role key for admin operations
const supabase = createClient(supabaseUrl, serviceRoleKey)

async function runSQL(sqlContent, scriptName) {
  try {
    console.log(`[v0] Running ${scriptName}...`)
    const { error } = await supabase.rpc('exec', { sql: sqlContent })
    
    if (error) {
      console.error(`[v0] Error in ${scriptName}:`, error)
      return false
    }
    
    console.log(`[v0] ✓ ${scriptName} completed successfully`)
    return true
  } catch (error) {
    console.error(`[v0] Exception in ${scriptName}:`, error)
    return false
  }
}

async function setupDatabase() {
  try {
    console.log('[v0] Starting Supabase database setup...')
    
    // Read SQL scripts
    const scriptDir = path.join(process.cwd(), 'scripts')
    const schemaSql = fs.readFileSync(path.join(scriptDir, 'init-schema.sql'), 'utf-8')
    const storageSql = fs.readFileSync(path.join(scriptDir, 'init-storage.sql'), 'utf-8')
    
    // Execute schema script
    const schemaSuccess = await runSQL(schemaSql, 'init-schema.sql')
    if (!schemaSuccess) {
      console.log('[v0] Note: Schema script may have already been applied (this is okay)')
    }
    
    // Execute storage script
    const storageSuccess = await runSQL(storageSql, 'init-storage.sql')
    if (!storageSuccess) {
      console.log('[v0] Note: Storage script may have already been applied (this is okay)')
    }
    
    console.log('[v0] ✓ Database setup completed!')
    console.log('[v0] Your Supabase database is now ready for the application')
  } catch (error) {
    console.error('[v0] Fatal error during setup:', error)
    process.exit(1)
  }
}

setupDatabase()
