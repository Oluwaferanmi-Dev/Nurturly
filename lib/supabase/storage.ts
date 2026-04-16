'use client'

import { createClient } from '@/lib/supabase/client'

const BUCKET_NAME = 'resumes'
const ALLOWED_TYPES = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB

export async function uploadResume(file: File): Promise<{ url: string; error: string | null }> {
  try {
    // Validate file type
    if (!ALLOWED_TYPES.includes(file.type)) {
      return {
        url: '',
        error: 'Only PDF and DOC files are allowed'
      }
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      return {
        url: '',
        error: 'File size must be less than 5MB'
      }
    }

    const supabase = createClient()

    // Generate unique filename
    const timestamp = Date.now()
    const randomString = Math.random().toString(36).substring(7)
    const fileName = `${timestamp}-${randomString}-${file.name}`

    // Upload file
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(fileName, file)

    if (error) {
      return {
        url: '',
        error: `Upload failed: ${error.message}`
      }
    }

    // Get public URL
    const { data: urlData } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(fileName)

    return {
      url: urlData.publicUrl,
      error: null
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to upload resume'
    return {
      url: '',
      error: message
    }
  }
}
