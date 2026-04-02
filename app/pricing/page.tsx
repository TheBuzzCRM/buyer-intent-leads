import { Button } from '@/components/Button'
import { Check, Star, ArrowRight, Zap, Users, BarChart, Settings, HelpCircle } from 'lucide-react'
import Link from 'next/link'

export default function PricingPage() {
  const growthFeatures = [
    'Buyer Intent Leads',
    'Automation Platform',
    'CRM + Pipeline',
    'Done‑for‑you setup',
    'Basic reporting',
    'Email support',
  ]

  const revenueEngineFeatures = [
    'Everything in Growth',
    'More buyer intent leads',
    'Multi‑channel follow‑up',
    'Advanced workflows',
    'Optimization support',
    'Priority onboarding',
    'Weekly performance reviews',
    'Dedicated account manager',
  ]

  const faqs = [
    {
      question: 'What’s included in the setup?',
      answer: 'We configure your CRM, automation sequences, lead delivery, and tracking—everything needed to start receiving and converting leads.',
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, both plans are month‑to‑month. No long‑term contracts.',
    },
    {
      question: 'How fast do leads come in?',
      answer: 'Setup takes 3–5 business days. Leads start flowing immediately after.',
    },
    {
      question: 'Do I need a CRM already?',
      answer: 'No. We set up a CRM for you as part of the done‑for‑you setup.',
    },
    {
      question: 'What if I need more leads?',
      answer: 'Revenue Engine includes more leads. Growth clients can upgrade anytime.',
    },
    {
      question: 'Is there a trial?',
      answer: 'No trials—the system delivers real leads from day one. Book a strategy call to see a live demo.',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-text leading-tight">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-6 text-xl text-secondary-text max-w-3xl mx-auto">
            Two plans. No hidden fees. Everything you need to get buyer intent leads and convert them automatically.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4" asChild>
              <Link href="/strategy-call">
                Book a Strategy Call
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button variant="secondary" size="lg" className="text-lg px-8 py-4" asChild>
              <Link href="#plans">
                See Plans Below
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section id="plans" className="section-padding">
        <div className="container-narrow">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Growth */}
            <div className="surface-card">
              <div className="mb-6">
                <span className="inline-block px-4 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm font-medium">
                  Growth
                </span>
                <div className="mt-6 flex items-baseline">
                  <span className="font-serif text-5xl font-bold text-primary-text">$1,500</span>
                  <span className="ml-2 text-secondary-text text-lg">/month</span>
                </div>
                <p className="mt-4 text-secondary-text">
                  Perfect for businesses starting with buyer intent leads.
                </p>
              </div>
              <ul className="space-y-4 mb-8">
                {growthFeatures.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check size={20} className="text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" size="lg" asChild>
                <Link href="/strategy-call">Choose Growth</Link>
              </Button>
              <p className="text-center text-secondary-text text-sm mt-4">
                Month‑to‑month · No setup fee
              </p>
            </div>

            {/* Revenue Engine */}
            <div className="surface-card border-2 border-accent relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="inline-block px-4 py-1 rounded-full bg-accent text-white text-sm font-medium flex items-center gap-1">
                  <Star size={14} />
                  Revenue Engine
                </span>
              </div>
              <div className="mb-6">
                <div className="mt-6 flex items-baseline">
                  <span className="font-serif text-5xl font-bold text-primary-text">$2,997</span>
                  <span className="ml-2 text-secondary-text text-lg">/month</span>
                </div>
                <p className="mt-4 text-secondary-text">
                  For scaling revenue with more leads and advanced automation.
                </p>
              </div>
              <ul className="space-y-4 mb-8">
                {revenueEngineFeatures.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check size={20} className="text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" size="lg" variant="primary" asChild>
                <Link href="/strategy-call">
                  Book a Strategy Call
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <p className="text-center text-secondary-text text-sm mt-4">
                Most popular · Includes priority support
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-secondary-text max-w-3xl mx-auto">
              Both plans include our done‑for‑you setup. You’ll have a fully operational system within days.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-text text-center mb-12">
            Plan Comparison
          </h2>
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 px-6 text-left font-serif font-semibold text-primary-text">Feature</th>
                  <th className="py-4 px-6 text-left font-serif font-semibold text-primary-text">Growth</th>
                  <th className="py-4 px-6 text-left font-serif font-semibold text-accent">Revenue Engine</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Buyer Intent Leads', growth: 'Yes', revenue: 'Yes (more)' },
                  { feature: 'Automation Platform', growth: 'Yes', revenue: 'Yes (advanced)' },
                  { feature: 'CRM + Pipeline', growth: 'Yes', revenue: 'Yes' },
                  { feature: 'Done‑for‑you Setup', growth: 'Yes', revenue: 'Yes (priority)' },
                  { feature: 'Multi‑channel Follow‑up', growth: 'Basic', revenue: 'Advanced' },
                  { feature: 'Optimization Support', growth: 'Limited', revenue: 'Weekly' },
                  { feature: 'Dedicated Account Manager', growth: 'No', revenue: 'Yes' },
                  { feature: 'Reporting', growth: 'Basic', revenue: 'Advanced + insights' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-border hover:bg-surface/50">
                    <td className="py-4 px-6 font-medium text-primary-text">{row.feature}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        {row.growth === 'Yes' || row.growth === 'Basic' || row.growth === 'Limited' ? (
                          <Check size={18} className="text-accent mr-2 flex-shrink-0" />
                        ) : (
                          <span className="text-red-500 mr-2">✗</span>
                        )}
                        <span>{row.growth}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        {row.revenue.includes('Yes') || row.revenue.includes('Advanced') || row.revenue.includes('Weekly') ? (
                          <Check size={18} className="text-accent mr-2 flex-shrink-0" />
                        ) : null}
                        <span className={row.revenue.includes('more') || row.revenue.includes('advanced') ? 'font-medium text-primary-text' : ''}>
                          {row.revenue}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-text text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="surface-card">
                <h3 className="font-serif text-xl font-semibold text-primary-text mb-2 flex items-start">
                  <HelpCircle size={20} className="text-accent mr-3 mt-0.5 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-secondary-text pl-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-secondary-text">
              Still have questions?{' '}
              <Link href="/faq" className="text-accent font-medium hover:underline">
                Visit our full FAQ page
              </Link>
              {' '}or{' '}
              <Link href="/strategy-call" className="text-accent font-medium hover:underline">
                book a strategy call
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-text">
            Ready to Get Started?
          </h2>
          <p className="mt-6 text-xl text-secondary-text max-w-3xl mx-auto">
            Choose a plan and we’ll have your buyer intent lead system up and running in days.
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
          <p className="mt-8 text-secondary-text text-sm">
            Not sure which plan is right? Book a call and we’ll help you decide.
          </p>
        </div>
      </section>

      {/* JSON-LD for Offer */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Offer',
                name: 'Growth Plan',
                price: 1500,
                priceCurrency: 'USD',
                priceSpecification: {
                  '@type': 'UnitPriceSpecification',
                  price: 1500,
                  priceCurrency: 'USD',
                  billingIncrement: 1,
                  unitCode: 'MON',
                },
                description: 'Buyer Intent Leads, Automation Platform, CRM + Pipeline, Done‑for‑you setup.',
                url: 'https://buyerintentleads.com/pricing',
                availability: 'https://schema.org/InStock',
              },
              {
                '@type': 'Offer',
                name: 'Revenue Engine Plan',
                price: 2997,
                priceCurrency: 'USD',
                priceSpecification: {
                  '@type': 'UnitPriceSpecification',
                  price: 2997,
                  priceCurrency: 'USD',
                  billingIncrement: 1,
                  unitCode: 'MON',
                },
                description: 'Everything in Growth plus more leads, multi‑channel follow‑up, advanced workflows, and optimization support.',
                url: 'https://buyerintentleads.com/pricing',
                availability: 'https://schema.org/InStock',
              },
            ],
          }),
        }}
      />
    </>
  )
}