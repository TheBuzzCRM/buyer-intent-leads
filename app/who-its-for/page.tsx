import { Button } from '@/components/Button'
import { Check, X, Target, Users, BarChart, Zap, Building, UserCheck } from 'lucide-react'
import Link from 'next/link'

export default function WhoItsForPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-text leading-tight">
            Who It’s For
          </h1>
          <p className="mt-6 text-xl text-secondary-text max-w-3xl mx-auto">
            This system is designed for businesses that sell high‑value offers and want predictable, scalable revenue from buyer intent leads.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4" asChild>
              <Link href="/strategy-call">
                Book a Strategy Call
              </Link>
            </Button>
            <Button variant="secondary" size="lg" className="text-lg px-8 py-4" asChild>
              <Link href="/faq">
                Read FAQ
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Qualification Criteria */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-text text-center mb-12">
            Qualification Criteria
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="surface-card">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-800 mb-4">
                <Check size={24} />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-primary-text mb-4">
                A Good Fit If You…
              </h3>
              <ul className="space-y-3">
                {[
                  'Sell a product or service over $1,000',
                  'Have a clear target customer profile',
                  'Want predictable lead flow month‑to‑month',
                  'Are ready to invest in scaling revenue',
                  'Have capacity to handle new customers',
                  'Value automation over manual processes',
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <Check size={18} className="text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="surface-card">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-800 mb-4">
                <X size={24} />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-primary-text mb-4">
                Not a Good Fit If You…
              </h3>
              <ul className="space-y-3">
                {[
                  'Sell low‑ticket items (< $100)',
                  'Don’t know who your ideal customer is',
                  'Expect instant results without setup',
                  'Prefer manual outreach over automation',
                  'Have no bandwidth for new clients',
                  'Are looking for cheap, cold leads',
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <X size={18} className="text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-secondary-text max-w-3xl mx-auto">
              Not sure?{' '}
              <Link href="/strategy-call" className="text-accent font-medium hover:underline">
                Book a strategy call
              </Link>
              {' '}and we’ll help you decide.
            </p>
          </div>
        </div>
      </section>

      {/* Who It’s For (Detailed) */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-text text-center mb-12">
            Ideal Customer Profiles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building,
                title: 'B2B SaaS',
                desc: 'Companies selling software with ACV > $5k, looking to fill their pipeline with qualified buyers.',
              },
              {
                icon: Users,
                title: 'Agencies & Consultancies',
                desc: 'Service providers with project fees > $10k who need consistent, high‑intent leads.',
              },
              {
                icon: BarChart,
                title: 'Professional Services',
                desc: 'Law firms, accountants, coaches charging premium rates for expertise.',
              },
              {
                icon: Zap,
                title: 'E‑commerce Brands',
                desc: 'DTC brands selling high‑value products ($500+) with repeat purchase potential.',
              },
              {
                icon: Target,
                title: 'Real Estate Investors',
                desc: 'Investors looking for motivated sellers or buyers in specific markets.',
              },
              {
                icon: UserCheck,
                title: 'Coaches & Course Creators',
                desc: 'Experts selling high‑ticket programs ($1k‑$10k) to committed clients.',
              },
            ].map((item, idx) => (
              <div key={idx} className="surface-card">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 mb-4">
                  <item.icon size={24} className="text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-primary-text mb-2">
                  {item.title}
                </h3>
                <p className="text-secondary-text text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-text text-center mb-12">
            What to Expect After Joining
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '1',
                  title: 'Discovery & Setup',
                  desc: 'We learn your offer, configure CRM, automation, and tracking.',
                },
                {
                  step: '2',
                  title: 'Lead Flow Begins',
                  desc: 'Buyer intent leads start arriving in your CRM within days.',
                },
                {
                  step: '3',
                  title: 'Automated Conversion',
                  desc: 'Leads are nurtured and converted automatically.',
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-surface border-2 border-accent flex items-center justify-center mx-auto mb-4 font-serif text-2xl font-bold text-accent">
                    {item.step}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-primary-text mb-2">
                    {item.title}
                  </h3>
                  <p className="text-secondary-text text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-secondary-text max-w-3xl mx-auto">
                The system is designed to run on autopilot, but we’re here to support you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-text">
            Ready to See If You Qualify?
          </h2>
          <p className="mt-6 text-xl text-secondary-text max-w-3xl mx-auto">
            Book a strategy call and we’ll assess your fit, answer your questions, and show you exactly how the system works.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-10 py-4" asChild>
              <Link href="/strategy-call">
                Book a Strategy Call
              </Link>
            </Button>
            <Button variant="secondary" size="lg" className="text-lg px-10 py-4" asChild>
              <Link href="/pricing">
                See Pricing
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}