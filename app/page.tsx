import { Button } from '@/components/Button'
import { ArrowRight, Check, Target, Zap, Layers, Settings } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-text leading-tight">
                Get Buyer Intent Leads.
                <br />
                <span className="text-accent">Convert Them Automatically.</span>
              </h1>
              <p className="mt-6 text-xl text-secondary-text max-w-2xl">
                We deliver <strong className="text-primary-text">people already in‑market</strong> and automate their conversion with our AI marketing platform. Done‑for‑you setup included.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-4" asChild>
                  <Link href="/strategy-call">
                    Book a Strategy Call
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button variant="secondary" size="lg" className="text-lg px-8 py-4" asChild>
                  <Link href="/pricing">
                    See Pricing & Plans
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              {/* Abstract visual placeholder */}
              <div className="relative h-80 md:h-96 w-full bg-gradient-to-br from-accent/10 to-border rounded-2xl overflow-hidden border border-border">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-4">
                      <Target size={32} className="text-accent" />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-primary-text">Buyer Intent System</h3>
                    <p className="text-secondary-text mt-2">Identify → Deliver → Automate → Convert</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Truth */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-text">
              Traditional Lead Gen Fails Because It Targets the Wrong People
            </h2>
            <p className="mt-6 text-lg text-secondary-text">
              Cold lists, generic audiences, and spray‑and‑pray campaigns waste budget and time. <strong className="text-primary-text">Buyer intent leads are already searching, comparing, and ready to buy.</strong> We find them and deliver them to you—already warm.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-text text-center mb-12">
            What You Get
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: 'Buyer Intent Leads',
                description: 'People actively looking to buy—not cold traffic.',
              },
              {
                icon: Zap,
                title: 'Automation Platform',
                description: 'AI‑driven follow‑up that converts leads into customers.',
              },
              {
                icon: Layers,
                title: 'Conversion Infrastructure',
                description: 'CRM, pipelines, and tracking built for your offer.',
              },
              {
                icon: Settings,
                title: 'Done‑for‑You Setup',
                description: 'We configure everything—you start receiving leads.',
              },
            ].map((item, idx) => (
              <div key={idx} className="surface-card text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 mb-4">
                  <item.icon size={24} className="text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-primary-text mb-2">
                  {item.title}
                </h3>
                <p className="text-secondary-text text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Flow */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-text text-center mb-12">
            How the System Works
          </h2>
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
              {[
                { step: '1', title: 'Identify', desc: 'Find in‑market buyers using intent signals.' },
                { step: '2', title: 'Deliver', desc: 'Leads arrive in your CRM, tagged and ready.' },
                { step: '3', title: 'Automate', desc: 'AI‑powered sequences engage and nurture.' },
                { step: '4', title: 'Convert', desc: 'Leads become customers—tracked and measured.' },
                { step: '5', title: 'Optimize', desc: 'Continuous improvement based on performance.' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-surface border-2 border-accent flex items-center justify-center mx-auto mb-4 font-serif text-2xl font-bold text-accent">
                    {item.step}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-primary-text mb-2">
                    {item.title}
                  </h3>
                  <p className="text-secondary-text text-sm max-w-xs mx-auto">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Not Traditional Lead Gen */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-text text-center mb-12">
            Not Traditional Lead Gen
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="surface-card">
                <h3 className="font-serif text-2xl font-semibold text-primary-text mb-4 flex items-center">
                  <Check className="text-green-600 mr-2" size={24} />
                  Buyer Intent Leads
                </h3>
                <ul className="space-y-3 text-secondary-text">
                  <li className="flex items-start">
                    <Check size={18} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>People already looking to buy</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>Delivered warm, not cold</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>Automated conversion system included</span>
                  </li>
                </ul>
              </div>
              <div className="surface-card">
                <h3 className="font-serif text-2xl font-semibold text-primary-text mb-4 flex items-center">
                  <span className="text-red-500 mr-2">✗</span>
                  Traditional Lead Gen
                </h3>
                <ul className="space-y-3 text-secondary-text">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-0.5">✗</span>
                    <span>Cold lists, spray‑and‑pray</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-0.5">✗</span>
                    <span>No intent data—just contacts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-0.5">✗</span>
                    <span>You figure out conversion</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-text text-center mb-12">
            Who It’s For
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-secondary-text mb-8">
              This is for businesses that sell high‑value offers ($$$+) and want predictable, scalable revenue.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                'B2B SaaS companies',
                'Agencies & consultancies',
                'Professional services',
                'E‑commerce brands',
                'Coaches & course creators',
                'Real estate investors',
              ].map((item) => (
                <div key={item} className="surface-card text-center py-4">
                  <p className="font-medium text-primary-text">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-secondary-text">
              Not sure if you qualify?{' '}
              <Link href="/who-its-for" className="text-accent font-medium hover:underline">
                See detailed qualification
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-text text-center mb-12">
            Simple, Transparent Pricing
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="surface-card">
              <div className="mb-6">
                <span className="inline-block px-4 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm font-medium">
                  Growth
                </span>
                <h3 className="font-serif text-3xl font-bold text-primary-text mt-4">
                  $1,500<span className="text-secondary-text text-lg">/mo</span>
                </h3>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  'Buyer Intent Leads',
                  'Automation Platform',
                  'CRM + Pipeline',
                  'Done‑for‑you setup',
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <Check size={18} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" asChild>
                <Link href="/pricing">Choose Growth</Link>
              </Button>
            </div>
            <div className="surface-card border-2 border-accent relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="inline-block px-4 py-1 rounded-full bg-accent text-white text-sm font-medium">
                  Revenue Engine
                </span>
              </div>
              <div className="mb-6">
                <h3 className="font-serif text-3xl font-bold text-primary-text mt-4">
                  $2,997<span className="text-secondary-text text-lg">/mo</span>
                </h3>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  'Everything in Growth',
                  'More buyer intent leads',
                  'Multi‑channel follow‑up',
                  'Advanced workflows',
                  'Optimization support',
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <Check size={18} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" size="lg" asChild>
                <Link href="/strategy-call">Book a Strategy Call</Link>
              </Button>
            </div>
          </div>
          <p className="text-center text-secondary-text mt-10">
            Both plans include our done‑for‑you setup. No hidden fees.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-text">
            Ready to Fill Your Pipeline with Buyers?
          </h2>
          <p className="mt-6 text-xl text-secondary-text max-w-3xl mx-auto">
            Stop chasing cold leads. Get people already looking to buy—and a system that converts them automatically.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-10 py-4" asChild>
              <Link href="/strategy-call">
                Book a Strategy Call
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button variant="secondary" size="lg" className="text-lg px-10 py-4" asChild>
              <Link href="/system">
                See How It Works
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Organization',
                name: 'Buyer Intent Leads',
                url: 'https://buyerintentleads.com',
                logo: 'https://buyerintentleads.com/logo.png',
                sameAs: [],
              },
              {
                '@type': 'WebSite',
                url: 'https://buyerintentleads.com',
                name: 'Buyer Intent Leads',
                description: 'We deliver buyer intent leads—people already in-market—and automate their conversion with our AI marketing platform.',
              },
              {
                '@type': 'Service',
                name: 'Buyer Intent Leads + AI Marketing Automation',
                provider: {
                  '@type': 'Organization',
                  name: 'Buyer Intent Leads',
                },
                serviceType: 'Lead Generation & Marketing Automation',
                description: 'Delivers buyer intent leads (people actively looking to buy) and provides an AI‑powered automation platform to convert them.',
              },
            ],
          }),
        }}
      />
    </>
  )
}