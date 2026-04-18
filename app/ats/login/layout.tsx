// Minimal layout for the login page — no sidebar, no ATS shell
export default function ATSLoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: '#fcf9f4' }}
    >
      {children}
    </div>
  )
}
