import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Work That Feels Meaningful | Nurturly Heritage Careers',
  description: 'Join Nurturly Heritage and work in a sanctuary of care. Discover meaningful careers dedicated to the art of hospitality in healthcare.',
}

export default function Careers() {
  const responsibilities = [
    { icon: 'heart_check', title: 'Curate Daily Joy', description: 'Go beyond medical tasks to facilitate moments of genuine happiness, from shared stories to personal hobbies.' },
    { icon: 'verified_user', title: 'Maintain Heritage Standards', description: 'Uphold our signature hospitality-first approach in every interaction, ensuring a premium resident experience.' },
    { icon: 'groups', title: 'Collaborative Care', description: 'Work in multidisciplinary teams to create personalized wellness plans that respect individual history.' },
  ]

  const qualities = [
    'Emotional Intelligence',
    'Hospitality Mindset',
    'Dignity-First Approach',
    'Growth Seekers',
  ]

  const standards = [
    { icon: 'workspace_premium', title: 'Excellence', description: 'A commitment to the highest quality in every micro-moment of care.' },
    { icon: 'eco', title: 'Integrity', description: 'Unwavering ethical conduct and transparency with families.' },
    { icon: 'volunteer_activism', title: 'Empathy', description: 'The ability to walk alongside our residents in their lived experience.' },
    { icon: 'local_library', title: 'Tradition', description: 'Respecting the stories and heritage of those we serve.' },
  ]

  const process = [
    { step: '01', title: 'Discovery', description: 'Submit your application and share your story.' },
    { step: '02', title: 'Initial Chat', description: 'A brief call to align on values and vision.' },
    { step: '03', title: 'Immersive', description: 'Visit a sanctuary to see our culture in action.' },
    { step: '04', title: 'Deep Dive', description: 'Connect with your future team and leaders.' },
    { step: '05', title: 'Refinement', description: 'Aligning logistics and mutual expectations.' },
    { step: '06', title: 'Welcome Home', description: 'Begin your journey in a sanctuary of care.' },
  ]

  return (
    <>
      <Header />
      <main className="bg-surface text-on-surface font-body min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[600px] md:h-[700px] lg:h-[870px] flex items-center overflow-hidden mt-16">
          <div className="absolute inset-0 z-0">
            <img
              alt="Nurturly Heritage Workplace"
              className="w-full h-full object-cover brightness-[0.85]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjGcWAI3g1cyeI962zZIEE6o92o0vt1ZH2_gKsa0hqCHpIoT25DP_lxPYZciutWDlQHHU99XPOMFhyzeynMuAAD4Fk_ijpPdi8NVZqw3cj3h9-r9MkRYQdbZsLnqsjVXZcK3Wg053FaS-ZTV2zPNe1dmIKz-gRNnMcEIO0FLopdOnwsPkw6012pe7stO9VodhAFcv7rHTZ1yKjKNiefrwBQhfaQaXAdz1UP2YK6ECg8Z7UWxnfdoc7Vcdrw3lGdslEBTc8-ii8dcd7"
            />
          </div>
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="max-w-3xl">
              <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6 md:mb-8">
                Work That Feels <br />
                <span className="italic">Meaningful</span>
              </h1>
              <p className="text-white/90 text-lg md:text-xl lg:text-2xl font-light leading-relaxed mb-8 md:mb-10 max-w-xl">
                At Nurturly Heritage, we don&apos;t just provide care. We curate sanctuaries. Join a team dedicated to the art of hospitality in healthcare.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 md:px-10 py-3 md:py-4 signature-gradient text-white font-bold rounded-xl shadow-lg hover:scale-105 transition-transform active:scale-95">
                  View Open Positions
                </button>
                <button className="px-8 md:px-10 py-3 md:py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold rounded-xl hover:bg-white/20 transition-all">
                  Our Philosophy
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* We Care Differently Section */}
        <section className="py-20 md:py-32 bg-surface">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div className="relative">
                <div className="bg-surface-container-low p-8 md:p-12 rounded-xl relative z-10">
                  <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl text-primary mb-6 md:mb-8 leading-tight">
                    We Care <span className="italic font-medium">Differently</span>
                  </h2>
                  <p className="text-base md:text-lg text-on-surface-variant leading-relaxed mb-4 md:mb-6">
                    We&apos;ve moved beyond the clinical. Our sanctuary model focuses on the dignity of our residents and the fulfillment of our staff. We believe that to care for others, our team must first feel cared for.
                  </p>
                  <p className="text-base md:text-lg text-on-surface-variant leading-relaxed">
                    From unhurried schedules to beautiful environments, every detail is designed to foster genuine human connection. This isn&apos;t just a job; it&apos;s a practice of empathy and excellence.
                  </p>
                </div>
                <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl -z-10"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <img
                  alt="Trust"
                  className="rounded-xl w-full h-60 sm:h-72 md:h-80 object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_2g6RlTgQM1xMynhJu-Q3TIZit3mVpaI9mS1xCuq2z0nCB0otRmD9TT_iEhBv5j0j2gHcggAFdV6_3l8PWiA1ZzJAWq3v-H2juxjq-I2Kw6p5nhOKZdun7d_4NAJcv_IDY7ozPU1cn2dea0uhV4m270Axs45iEhYJay_yllODWHqYnVO-YSgPG8HSrMzOhZbRPtdtKa5yu8XUPAUbCiyhZ0vw5Bov-rBcyMR9dT_dSNJG4mBoCB0RY0jnTXQ3uj_xpkg9yoO3Ia0x"
                />
                <img
                  alt="Environment"
                  className="rounded-xl w-full h-60 sm:h-72 md:h-80 object-cover sm:mt-12"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGZe5jnvVDkHZKhxkBzdCQy_quzm1TjQ3pGyabKEp32spzsn43LoaxJ_ha1_JH6tHEFtB9mDRSPBpj7n9qvs0rVlao_k-glVWPGbWjquLroDhJKOhTV4i6GvbmPUvoY7kAJA0A8yN1jT3W_H2knPW-vD-gcDdZW5b4L1tvQh2IkW-p0nuIbXd5e_ATzyzBkZdPTQ-FJFv-bgpoyGL2xr6Fs1IZtVj6XhSBRuDhoVXJQSEZC6Z2S7PJrdWgLPyPlMcaRHO3lTWFMj79"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Do & Who We Look For Section */}
        <section className="py-20 md:py-24 bg-surface-container-low">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-7 gap-8">
              {/* What You'll Do */}
              <div className="lg:col-span-4 bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-sm">
                <span className="text-secondary font-semibold tracking-widest text-xs uppercase mb-4 block">The Mission</span>
                <h3 className="font-headline text-3xl md:text-4xl mb-8">What You&apos;ll Do</h3>
                <div className="space-y-8">
                  {responsibilities.map((item, index) => (
                    <div key={index} className="flex gap-6">
                      <div className="w-12 h-12 flex-shrink-0 bg-primary/10 text-primary flex items-center justify-center rounded-lg">
                        <span className="material-symbols-outlined">{item.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg md:text-xl mb-2">{item.title}</h4>
                        <p className="text-on-surface-variant text-sm md:text-base">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Who We Look For */}
              <div className="lg:col-span-3 flex flex-col gap-8">
                <div className="signature-gradient text-white p-8 md:p-12 rounded-xl flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-headline text-3xl md:text-4xl mb-6 leading-tight">
                      Who We <br />
                      <span className="italic">Look For</span>
                    </h3>
                    <p className="text-white/80 mb-8 text-sm md:text-base">We seek individuals who view care as a craft, not just a career.</p>
                  </div>
                  <ul className="space-y-4 font-medium text-base md:text-lg">
                    {qualities.map((quality, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-secondary-fixed-dim text-5xl leading-none">check_circle</span>
                        <span>{quality}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-secondary-container/30 p-6 md:p-8 rounded-xl border border-secondary/10">
                  <p className="font-headline text-xl md:text-2xl text-secondary italic">&quot;The best care doesn&apos;t come from a handbook, it comes from the heart.&quot;</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Standards Grid */}
        <section className="py-20 md:py-32 bg-surface">
          <div className="container mx-auto px-6 lg:px-12 text-center mb-12 md:mb-16">
            <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl mb-4">Our Heritage Standards</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto text-sm md:text-base">The pillars that uphold our community and define our professional excellence.</p>
          </div>
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {standards.map((standard, index) => (
                <div key={index} className="bg-surface-container-high p-8 md:p-10 rounded-xl hover:bg-surface-container-lowest transition-all duration-300 group">
                  <span className="material-symbols-outlined text-primary text-3xl md:text-4xl mb-6 block">{standard.icon}</span>
                  <h4 className="font-bold text-lg md:text-xl mb-3 md:mb-4">{standard.title}</h4>
                  <p className="text-on-surface-variant text-xs md:text-sm">{standard.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-20 md:py-32 bg-surface-container-low overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl mb-12 md:mb-20 text-center">
              Your Journey to <span className="italic">Joining Us</span>
            </h2>
            <div className="relative">
              <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-outline-variant/30 z-0"></div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 lg:gap-12 relative z-10">
                {process.map((item, index) => (
                  <div key={index} className="text-center group">
                    <div className={`w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-sm border-4 rounded-full transition-all ${
                      index === process.length - 1
                        ? 'signature-gradient text-white'
                        : 'bg-surface-container-lowest border-surface group-hover:border-primary-container'
                    }`}>
                      <span className={`font-headline text-2xl md:text-3xl ${index === process.length - 1 ? 'text-white' : 'text-primary'}`}>
                        {item.step}
                      </span>
                    </div>
                    <h5 className="font-bold text-base md:text-lg mb-2">{item.title}</h5>
                    <p className="text-xs md:text-sm text-on-surface-variant">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 md:py-32 bg-surface">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="signature-gradient rounded-2xl md:rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-20"></div>
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="font-headline text-3xl md:text-4xl lg:text-6xl text-white mb-6 md:mb-8">Ready to Curate Sanctuary?</h2>
                <p className="text-white/90 text-base md:text-xl mb-10 md:mb-12">We are always looking for compassionate souls to join our heritage properties across the country.</p>
                <button className="px-10 md:px-12 py-4 md:py-5 bg-white text-primary font-extrabold text-base md:text-lg rounded-xl shadow-xl hover:scale-105 active:scale-95 transition-transform">
                  Explore Open Roles
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-lowest dark:bg-on-surface w-full pt-16 md:pt-20 pb-8 md:pb-10 px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-7xl mx-auto mb-12 md:mb-20">
          <div className="col-span-1 sm:col-span-2">
            <div className="font-headline text-lg md:text-xl text-primary mb-4 md:mb-6">Nurturly Heritage</div>
            <p className="text-on-surface-variant font-body max-w-md mb-6 md:mb-8 text-sm md:text-base">A curated sanctuary dedicated to the art of aging with dignity, grace, and unparalleled personal attention.</p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
                <span className="material-symbols-outlined text-lg">public</span>
              </a>
              <a className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
                <span className="material-symbols-outlined text-lg">mail</span>
              </a>
              <a className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
                <span className="material-symbols-outlined text-lg">call</span>
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h6 className="font-bold text-xs md:text-sm tracking-widest uppercase text-primary">Company</h6>
            <div className="flex flex-col gap-3">
              <a className="text-xs md:text-sm tracking-wide text-on-surface-variant hover:text-secondary transition-colors" href="#">Our Story</a>
              <a className="text-xs md:text-sm tracking-wide text-primary font-semibold" href="#">Careers</a>
              <a className="text-xs md:text-sm tracking-wide text-on-surface-variant hover:text-secondary transition-colors" href="#">Employee Portal</a>
              <a className="text-xs md:text-sm tracking-wide text-on-surface-variant hover:text-secondary transition-colors" href="#">Sustainability</a>
            </div>
          </div>
          <div className="space-y-4">
            <h6 className="font-bold text-xs md:text-sm tracking-widest uppercase text-primary">Legal</h6>
            <div className="flex flex-col gap-3">
              <a className="text-xs md:text-sm tracking-wide text-on-surface-variant hover:text-secondary transition-colors" href="#">Privacy Policy</a>
              <a className="text-xs md:text-sm tracking-wide text-on-surface-variant hover:text-secondary transition-colors" href="#">Terms of Service</a>
              <a className="text-xs md:text-sm tracking-wide text-on-surface-variant hover:text-secondary transition-colors" href="#">Accessibility</a>
            </div>
          </div>
        </div>
        <div className="border-t border-outline-variant/10 pt-8 md:pt-10 max-w-7xl mx-auto text-center">
          <p className="text-xs md:text-sm tracking-wide text-on-surface-variant">© 2024 Nurturly Heritage. A Sanctuary of Care.</p>
        </div>
      </footer>
    </>
  )
}
