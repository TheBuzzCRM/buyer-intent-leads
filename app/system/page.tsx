import { Button } from '@/components/Button'
import { ArrowRight, Check, Target, Zap, Layers, Settings, Users, BarChart, Clock } from 'lucide-react'
import Link from 'next/link'

export default function SystemPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-text leading-tight">
              How It Works: Buyer Intent Leads + Automated Conversion
            </h1>
            <p className="mt-6 text-xl text-secondary-text max-w-3xl mx-auto">
              This is not just lead generation. It's a complete system that finds people already looking to buy and converts them for you—automatically.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4" asChild>
                <Link href="/strategy-call">
                  Book a Strategy Call
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button variant="secondary" size="lg" className="text-lg px-8 py-4" asChild>
                <Link href="/pricing">
                  See Pricing
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Simplified Explanation */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-text text-center mb-12">
            The Simplest Explanation
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Find',
                description: 'We identify people actively searching for what you sell.',
              },
              {
                icon: Users,
                title: 'Deliver',
                description: 'They arrive in your CRM, tagged and ready to engage.',
              },
              {
                icon: Zap,
                title: 'Convert',
                description: 'Our automation nurtures them into customers.',
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6">
                  <item.icon size={32} className="text-accent" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-primary-text mb-3">
                  {item.title}
                </h3>
                <p className="text-secondary-text">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-secondary-text mt-12 max-w-3xl mx-auto">
            That's it. No cold outreach, no guesswork, no manual follow‑up. The system runs on autopilot once we set it up.
          </p>
        </div>
      </section>

      {/* Visual Flow */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-text text-center mb-12">
            The System Flow
          </h2>
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
              {[
                { step: '1', title: 'Intent Signals', desc: 'Monitor search, review, and engagement data for buying signals.' },
                { step: '2', title: 'Identify', desc: 'Filter for high‑intent individuals who match your ideal customer.' },
                { step: '3', title: 'Enrich', desc: 'Add contact info, company details, and recent activity.' },
                { step: '4', title: 'Deliver', desc: 'Leads arrive in your CRM with tags and notes.' },
                { step: '5', title: 'Automate', desc: 'AI‑driven sequences engage, educate, and convert.' },
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
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <p className="text-lg text-secondary-text">
              This flow repeats continuously, bringing you a steady stream of warm leads while the automation handles conversion.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-text text-center mb-12">
            Why This Beats Traditional Lead Gen
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-4 px-6 text-left font-serif font-semibold text-primary-text">Feature</th>
                    <th className="py-4 px-6 text-left font-serif font-semibold text-accent">Buyer Intent Leads</th>
                    <th className="py-4 px-6 text-left font-serif font-semibold text-secondary-text">Traditional Lead Gen</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Lead Quality', buyer: 'People already looking to buy', traditional: 'Cold lists, generic audiences' },
                    { feature: 'Setup', buyer: 'Done‑for‑you', traditional: 'You figure it out' },
                    { feature: 'Follow‑up', buyer: 'Fully automated', traditional: 'Manual or basic sequences' },
                    { feature: 'Conversion Rate', buyer: 'High (warm leads)', traditional: 'Low (cold outreach)' },
                    { feature: 'Scalability', buyer: 'Built‑in', traditional: 'Requires more budget/people' },
                    { feature: 'Time to Results', buyer: 'Days, not months', traditional: 'Months of testing' },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-border hover:bg-section-alt/50">
                      <td className="py-4 px-6 font-medium text-primary-text">{row.feature}</td>
                      <td className="py-4 px-6">
                        <div className="flex items-center">
                          <Check size={18} className="text-accent mr-2 flex-shrink-0" />
                          <span>{row.buyer}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-secondary-text">{row.traditional}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-text text-center mb-12">
            What You Actually Get
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart,
                title: 'Predictable Pipeline',
                desc: 'Know exactly how many leads you’ll get each month.',
              },
              {
                icon: Clock,
                title: 'Time Back',
                desc: 'No more manual prospecting or follow‑up.',
              },
              {
                icon: Layers,
                title: 'Complete Infrastructure',
                desc: 'CRM, automation, tracking—all configured.',
              },
              {
                icon: Settings,
                title: 'Optimization Built‑in',
                desc: 'The system learns and improves over time.',
              },
              {
                icon: Zap,
                title: 'Multi‑Channel Follow‑up',
                desc: 'Email, SMS, retargeting—all automated.',
              },
              {
                icon: Users,
                title: 'Dedicated Support',
                desc: 'Experts help you get the most from the system.',
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

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-text">
            Ready to See It Live?
          </h2>
          <p className="mt-6 text-xl text-secondary-text max-w-3xl mx-auto">
            The best way to understand the system is to see it in action. Book a strategy call and we'll walk you through a real demo.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-10 py-4" asChild>
              <Link href="/strategy-call">
                Book a Demo Call
                <ArrowRight className="ml-2" size={20} />
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