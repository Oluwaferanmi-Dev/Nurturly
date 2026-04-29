'use client'

export default function TimeGreeting() {
  const hour = new Date().getHours()
  const greeting =
    hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening'

  return (
    <h2 className="font-headline text-3xl text-primary leading-tight">
      {greeting}, Admin
    </h2>
  )
}
