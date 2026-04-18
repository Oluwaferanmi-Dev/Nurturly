import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Our Services | Nurturly Home Care Houston',
  description: 'Nurturly provides non-medical home care in Houston, TX — companionship, personal care, meal prep, mobility support, memory care, and more. Care that feels personal, consistent, and deeply human.',
  keywords: ['home care Houston', 'non-medical home care', 'in-home caregiver Houston Texas', 'senior care Houston', 'companionship care', 'personal care services'],
}

export default function Services() {
  const mainServices = [
    {
      icon: 'favorite',
      title: 'Companionship',
      description: 'Genuine conversation, shared activities, and a steady presence so your loved one never feels alone — because connection is care too.',
    },
    {
      icon: 'wash',
      title: 'Personal Care',
      description: 'Sensitive, dignified assistance with bathing, dressing, and grooming — delivered with the respect every person deserves.',
    },
    {
      icon: 'assist_walker',
      title: 'Mobility Support',
      description: 'Safe assistance with moving around the home, transfers, and gentle activity to maintain independence and reduce fall risk.',
    },
    {
      icon: 'restaurant',
      title: 'Meal Preparation',
      description: 'Fresh, nourishing meals planned around dietary needs, personal preferences, and cultural comfort — cooked with care, not convenience.',
    },
  ]

  const additionalServices = [
    {
      icon: 'alarm',
      title: 'Medication Reminders',
      description: 'Gentle, consistent reminders to take medications on schedule — keeping health routines intact without clinical pressure.',
    },
    {
      icon: 'cleaning_services',
      title: 'Light Housekeeping',
      description: 'A tidy, safe, and organized home environment so your loved one can move comfortably and live with ease.',
    },
    {
      icon: 'directions_car',
      title: 'Transportation',
      description: 'Reliable, safe rides to medical appointments, errands, and social outings — so life doesn\'t stop at the front door.',
    },
    {
      icon: 'weekend',
      title: 'Respite Care',
      description: 'Planned relief for family caregivers — so you can rest, recharge, and return to your role without burning out.',
    },
    {
      icon: 'psychology',
      title: 'Memory Care Support',
      description: 'Patient, technique-driven support for clients living with Alzheimer\'s or dementia — focused on safety, calm, and dignity.',
    },
  ]

  return (
    <>
      <Header />
      <main className="bg-background text-foreground font-body">
        {/* Hero Section: Editorial */}
        <section className="relative overflow-hidden pt-32 pb-24 md:pb-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="z-10">
              <span className="text-secondary/60 font-semibold tracking-widest text-xs uppercase mb-6 block">
                Non-Medical Home Care · Houston, TX
              </span>
              <h1 className="font-headline text-6xl md:text-7xl font-bold text-primary leading-tight mb-8">
                Care That Feels
                <em className="block not-italic text-secondary">Personal</em>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed mb-10 max-w-xl">
                We provide non-medical home care and personal assistance across Houston — built around the individual, not a one-size-fits-all package.
              </p>
              <Link
                href="/contact"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:opacity-90 transition-all text-center"
              >
                Request a Personalized Care Plan
              </Link>
            </div>

            <div className="relative hidden lg:block">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10 transform -rotate-2">
                <img
                  alt="A gentle caregiver holding the hand of an elderly woman"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVbmnMCi6vytQLWtyHzq74NZ31akP82omyaliWGGJ6ntaIdrfwbGbRBy7ifFMRbf8YBKaE8G1HgQ5S7vOo7er47Y0ubRnBUVnUj2s76T4JAyxuFwtAnc6wV_PYTUBGozTJh4j16_4jKWpf6XJzbJHfIbUC5gu6idZJiQbekwIzzbgylakGbgzITPUFW3XeQ8eJ9uqupJwkydjlg5st88NrXEQYJ0FV2nUReoc4umcMEB_zT3C6rkVfqNTqm5oJW9OGEtOiUnZGMHAv"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid Services */}
        <section className="bg-secondary/5 py-24 md:py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-20">
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-4">What We Offer</h2>
              <p className="text-muted-foreground text-lg">Every care plan is built around the individual — their routines, preferences, and health needs — so your loved one receives consistent, attentive support right where they are most comfortable: home.</p>
            </div>

            {/* Main Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {mainServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-border/20 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {service.icon}
                    </span>
                  </div>
                  <h3 className="font-headline text-xl md:text-2xl font-bold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Additional Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {additionalServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-border/20 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {service.icon}
                    </span>
                  </div>
                  <h3 className="font-headline text-lg font-bold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Transitional Care Callout */}
            <div className="mt-12 bg-primary text-primary-foreground p-12 rounded-3xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="z-10 max-w-xl">
                <h3 className="font-headline text-3xl font-bold mb-4">Post-Hospital Transitional Care</h3>
                <p className="text-primary-foreground/90 text-lg leading-relaxed">
                  Coming home after a hospital stay is a vulnerable moment. Our team steps in during those critical first days — managing routines, monitoring comfort, and giving families peace of mind when it matters most.
                </p>
              </div>
              <div className="z-10">
                <Link
                href="/contact"
                className="bg-card text-primary px-8 py-4 rounded-xl font-bold hover:bg-primary-foreground transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                Request Care Now
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_forward</span>
              </Link>
              </div>
              <div className="absolute right-0 top-0 w-96 h-96 opacity-10 pointer-events-none hidden md:block">
                <span
                  className="material-symbols-outlined text-[20rem]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  shield_with_heart
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-32 px-6 md:px-12 bg-background">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-bold mb-8">
              <span
                className="material-symbols-outlined text-base"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified_user
              </span>
              LICENSED &amp; COMPASSIONATE CARE
            </div>
            <h2 className="font-headline text-5xl font-bold text-primary mb-8">
              Ready to get started?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 font-light italic">
              &quot;Our mission is to bring peace of mind back to families. We aren&apos;t just caregivers — we are an extension of your home.&quot;
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/contact"
                className="bg-primary text-primary-foreground px-10 py-5 rounded-xl font-bold text-lg shadow-xl hover:opacity-90 transition-all w-full sm:w-auto text-center"
              >
                Request a Personalized Care Plan
              </Link>
              <Link
                href="/contact"
                className="bg-card border border-border text-foreground px-10 py-5 rounded-xl font-bold text-lg hover:bg-secondary/5 transition-all w-full sm:w-auto text-center"
              >
                Speak With Our Team
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
