import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Our Services | Nurturly Home Care',
  description: 'Explore our comprehensive non-medical home care and personal assistance services designed to support daily life with comfort, dignity, and consistency.',
}

export default function Services() {
  const mainServices = [
    {
      icon: 'favorite',
      title: 'Companionship',
      description: 'Meaningful conversation, social engagement, and emotional support to prevent isolation and brighten each day.',
    },
    {
      icon: 'wash',
      title: 'Personal Care',
      description: 'Respectful assistance with bathing, dressing, and grooming to maintain personal dignity and hygiene.',
    },
    {
      icon: 'assist_walker',
      title: 'Mobility',
      description: 'Supporting safe movement within the home, transfers, and light exercise to encourage physical well-being.',
    },
    {
      icon: 'restaurant',
      title: 'Meal Prep',
      description: 'Nutritious, home-cooked meals prepared with dietary preferences and restrictions in mind for optimal health.',
    },
  ]

  const additionalServices = [
    {
      icon: 'alarm',
      title: 'Medication Reminders',
      description: 'Ensuring prescriptions are taken consistently and at the correct times for peace of mind.',
    },
    {
      icon: 'cleaning_services',
      title: 'Light Housekeeping',
      description: 'Maintaining a clean, safe, and organized living environment for comfort and safety.',
    },
    {
      icon: 'directions_car',
      title: 'Transportation',
      description: 'Safe escorting to medical appointments, grocery shopping, and social gatherings.',
    },
    {
      icon: 'weekend',
      title: 'Respite Care',
      description: 'Support for family caregivers, providing necessary breaks to recharge and avoid burnout.',
    },
    {
      icon: 'psychology',
      title: 'Memory Care',
      description: 'Compassionate engagement techniques for those living with Alzheimer\'s or dementia.',
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
                Holistic Care Solutions
              </span>
              <h1 className="font-headline text-6xl md:text-7xl font-bold text-primary leading-tight mb-8">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed mb-10 max-w-xl">
                We provide non-medical home care and personal assistance services designed to support daily life at home with comfort, dignity, and consistency.
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
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-4">Comprehensive Support</h2>
              <p className="text-muted-foreground text-lg">Every plan is tailored to the individual, ensuring your loved one receives exactly what they need to thrive in the sanctuary of their own home.</p>
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
                  Transitioning home after a hospital stay can be challenging. Our team provides dedicated support during those critical first days to ensure a safe and smooth recovery.
                </p>
              </div>
              <div className="z-10">
                <Link
                href="/contact"
                className="bg-card text-primary px-8 py-4 rounded-xl font-bold hover:bg-primary-foreground transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                Explore Care Options
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
              Ready to begin your journey with Nurturly?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 font-light italic">
              &quot;Our mission is to bring peace of mind back to families. We aren&apos;t just caregivers; we are an extension of your home.&quot;
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
