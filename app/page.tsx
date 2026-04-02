import type { Metadata } from 'next'
import Image from 'next/image'
import { EmailInquiryForm } from '@/components/forms/email-inquiry-form'

export const metadata: Metadata = {
  title: 'Nurturly | Expert Care, In the Comfort of Home - Coming Soon',
  description: 'Coming Soon - Redefining home care with the grace of high-end hospitality. Expert caregiving in the comfort of home.',
  keywords: ['home care', 'elderly care', 'hospice care', 'caregiver', 'in-home care'],
  openGraph: {
    title: 'Nurturly - Coming Soon',
    description: 'Redefining home care with the grace of high-end hospitality.',
    type: 'website',
  },
}

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcf9f4]">
      {/* Header with Logo */}
      <header className="fixed top-0 w-full z-50 glass-nav">
        <div className="flex items-center justify-center w-full px-6 py-4">
          <div className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aaafb3d0-8e58-4063-a89f-0b0da8e8c2c2.jpeg"
              alt="Nurturly Logo"
              width={40}
              height={40}
              className="w-8 h-8 md:w-10 md:h-10"
              priority
            />
            <span className="font-serif text-lg md:text-2xl font-bold text-[#006d77]">Nurturly</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 pt-20 pb-12">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Heading */}
          <div className="space-y-4">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight text-[#00535b]">
              Coming <span className="italic font-light">Soon</span>
            </h1>
            <p className="text-lg md:text-2xl text-[#1c1c19]/70 leading-relaxed max-w-xl mx-auto">
              We&apos;re preparing something extraordinary. Expert care meets high-end hospitality.
            </p>
          </div>

          {/* Subheading */}
          <p className="text-[#1c1c19]/60 text-sm md:text-base leading-relaxed max-w-lg mx-auto">
            Nurturly is redefining home care by combining clinical excellence with the warmth of boutique hospitality. We&apos;re building a sanctuary of dignity, comfort, and professional support for those who deserve the very best.
          </p>

          {/* Email Inquiry Form */}
          <div className="pt-6">
            <p className="text-sm text-[#1c1c19]/50 mb-6">
              Be among the first to know when we launch
            </p>
            <EmailInquiryForm />
          </div>

          {/* Contact Information */}
          <div className="pt-8 border-t border-[#bec8ca] space-y-3">
            <p className="text-sm text-[#1c1c19]/60">
              Have questions? Reach out to us at
            </p>
            <a
              href="mailto:care@nurturlycare.com"
              className="inline-flex items-center gap-2 text-[#006d77] hover:text-[#004f56] font-semibold transition-colors"
            >
              <span className="material-symbols-outlined text-lg">mail</span>
              care@nurturlycare.com
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#f6f3ee] border-t border-[#bec8ca]/30">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center">
          <p className="text-xs text-[#1c1c19]/50">
            © 2024 Nurturly Home Care. All rights reserved. | 
            <a href="mailto:care@nurturlycare.com" className="hover:text-[#006d77] transition-colors ml-2">Contact</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
