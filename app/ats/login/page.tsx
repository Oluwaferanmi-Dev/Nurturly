'use client'

import { Suspense, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

function ATSLoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const supabase = createClient()
    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (authError) {
      setError('Invalid email or password. Please try again.')
      setLoading(false)
      return
    }

    const next = searchParams.get('next') ?? '/ats'
    router.push(next)
    router.refresh()
  }

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '420px',
        margin: '0 auto',
        padding: '0 16px',
      }}
    >
      {/* Card */}
      <div
        style={{
          background: '#ffffff',
          borderRadius: '16px',
          boxShadow: '0 4px 32px rgba(0,83,91,0.10), 0 1px 4px rgba(0,0,0,0.06)',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <div
          style={{
            background: 'linear-gradient(135deg, #00535b 0%, #006d77 100%)',
            padding: '36px 40px 28px',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              color: 'rgba(255,255,255,0.55)',
              fontSize: '10px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              margin: '0 0 6px',
              fontFamily: 'Manrope, sans-serif',
            }}
          >
            Admin Portal
          </p>
          <h1
            style={{
              color: '#ffffff',
              fontFamily: 'Newsreader, Georgia, serif',
              fontSize: '32px',
              fontWeight: 400,
              letterSpacing: '-0.5px',
              margin: '0 0 4px',
            }}
          >
            Nurturly
          </h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: '13px',
              margin: 0,
              fontFamily: 'Manrope, sans-serif',
            }}
          >
            Applicant Tracking System
          </p>
        </div>

        {/* Form */}
        <div style={{ padding: '36px 40px 40px' }}>
          <form onSubmit={handleSubmit} noValidate>
            {/* Email */}
            <div style={{ marginBottom: '20px' }}>
              <label
                htmlFor="ats-email"
                style={{
                  display: 'block',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#4a6367',
                  marginBottom: '8px',
                  fontFamily: 'Manrope, sans-serif',
                }}
              >
                Email address
              </label>
              <input
                id="ats-email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@nurturlycare.com"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  border: '1.5px solid #e4e2dc',
                  background: '#fcf9f4',
                  color: '#1c1c19',
                  fontSize: '15px',
                  fontFamily: 'Manrope, sans-serif',
                  outline: 'none',
                  transition: 'border-color 0.15s',
                  boxSizing: 'border-box',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#006d77')}
                onBlur={(e) => (e.target.style.borderColor = '#e4e2dc')}
              />
            </div>

            {/* Password */}
            <div style={{ marginBottom: '28px' }}>
              <label
                htmlFor="ats-password"
                style={{
                  display: 'block',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#4a6367',
                  marginBottom: '8px',
                  fontFamily: 'Manrope, sans-serif',
                }}
              >
                Password
              </label>
              <input
                id="ats-password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  border: '1.5px solid #e4e2dc',
                  background: '#fcf9f4',
                  color: '#1c1c19',
                  fontSize: '15px',
                  fontFamily: 'Manrope, sans-serif',
                  outline: 'none',
                  transition: 'border-color 0.15s',
                  boxSizing: 'border-box',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#006d77')}
                onBlur={(e) => (e.target.style.borderColor = '#e4e2dc')}
              />
            </div>

            {/* Error */}
            {error && (
              <div
                style={{
                  background: '#fff5f5',
                  border: '1px solid #fca5a5',
                  borderRadius: '8px',
                  padding: '12px 16px',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ color: '#dc2626', fontSize: '18px', flexShrink: 0 }}
                >
                  error
                </span>
                <p
                  style={{
                    color: '#dc2626',
                    fontSize: '13px',
                    margin: 0,
                    fontFamily: 'Manrope, sans-serif',
                  }}
                >
                  {error}
                </p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: '10px',
                border: 'none',
                background: loading
                  ? '#4a6367'
                  : 'linear-gradient(135deg, #00535b 0%, #006d77 100%)',
                color: '#ffffff',
                fontSize: '15px',
                fontWeight: 600,
                fontFamily: 'Manrope, sans-serif',
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'opacity 0.15s, transform 0.1s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
              onMouseEnter={(e) => {
                if (!loading) (e.currentTarget.style.opacity = '0.92')
              }}
              onMouseLeave={(e) => {
                (e.currentTarget.style.opacity = '1')
              }}
            >
              {loading ? (
                <>
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: '18px', animation: 'spin 1s linear infinite' }}
                  >
                    progress_activity
                  </span>
                  Signing in…
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                    lock_open
                  </span>
                  Sign In
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Footer note */}
      <p
        style={{
          textAlign: 'center',
          color: '#4a6367',
          fontSize: '12px',
          marginTop: '24px',
          fontFamily: 'Manrope, sans-serif',
        }}
      >
        Internal use only · Nurturly ATS
      </p>

      {/* Spin animation */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

export default function ATSLoginPage() {
  return (
    <Suspense fallback={null}>
      <ATSLoginForm />
    </Suspense>
  )
}
