import { Button } from '@/components/Button'
import { Calendar, Clock, Users, Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function StrategyCallPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-text leading-tight">
            Book a Strategy Call
          </h1>
          <p className="mt-6 text-xl text-secondary-text max-w-3xl mx-auto">
            Let’s discuss your business, your goals, and see if buyer intent leads are the right fit. No pressure—just a clear, honest conversation.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4" asChild>
              <a href="#calendar">
                Book Your Slot Now
                <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
            <Button variant="secondary" size="lg" className="text-lg px-8 py-4" asChild>
              <Link href="/pricing">
                See Pricing First
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-text text-center mb-12">
            What We’ll Cover
          </h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Your Business & Goals',
                desc: 'We’ll understand your offer, target audience, and revenue goals.',
              },
              {
                icon: Calendar,
                title: 'System Walkthrough',
                desc: 'See exactly how buyer intent leads and automation work for your niche.',
              },
              {
                icon: Check,
                title: 'Clear Next Steps',
                desc: 'If it’s a fit, we’ll outline the setup process. If not, we’ll tell you why.',
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
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-secondary-text max-w-3xl mx-auto">
              This call is a two‑way discovery. You’ll leave with clarity on whether buyer intent leads can scale your revenue—no strings attached.
            </p>
          </div>
        </div>
      </section>

      {/* Calendar Embed */}
      <section id="calendar" className="section-padding bg-section-alt">
        <div className="container-narrow">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-text text-center mb-12">
            Choose a Time That Works
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="surface-card p-6 md:p-8">
              <div className="mb-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-4">
                  <Calendar size={32} className="text-accent" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-primary-text">
                  Schedule Your Strategy Call
                </h3>
                <p className="text-secondary-text mt-2">
                  Select a date and time below. You’ll receive a confirmation email with a Zoom link.
                </p>
              </div>
              
              {/* Calendar Embed Placeholder */}
              <div className="bg-surface border border-border rounded-xl p-8 text-center min-h-[400px] flex flex-col items-center justify-center">
                <div className="max-w-md mx-auto">
                  <Calendar size={64} className="text-accent mx-auto mb-6 opacity-50" />
                  <h4 className="font-serif text-xl font-semibold text-primary-text mb-4">
                    Calendar Embed Ready
                  </h4>
                  <p className="text-secondary-text mb-6">
                    Replace this placeholder with your Calendly, Acuity, or other calendar embed code.
                  </p>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 font-mono text-sm text-gray-700 text-left">
                    {'<!-- Embed code goes here -->'}
                    <br />
                    {'<iframe src="https://calendly.com/yourusername/strategy" width="100%" height="600" frameborder="0"></iframe>'}
                  </div>
                  <p className="text-secondary-text text-sm mt-6">
                    To connect a real calendar, paste your embed code in <code className="px-2 py-1 bg-gray-100 rounded">/app/strategy-call/page.tsx</code>.
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center text-secondary-text text-sm">
                <p>
                  Need to reschedule? The confirmation email will include a link to change your appointment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-text text-center mb-12">
            Common Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'How long is the call?',
                a: '30 minutes. We keep it focused and efficient.',
              },
              {
                q: 'Who will I be speaking with?',
                a: 'A senior strategist who understands buyer intent leads and automation.',
              },
              {
                q: 'Is this a sales pitch?',
                a: 'No. It’s a discovery call to see if the system fits your business. If it’s not a fit, we’ll tell you.',
              },
              {
                q: 'What if I need to cancel?',
                a: 'You can cancel or reschedule up to 24 hours before your appointment via the link in your confirmation email.',
              },
            ].map((item, idx) => (
              <div key={idx} className="surface-card">
                <h3 className="font-serif text-xl font-semibold text-primary-text mb-2">
                  {item.q}
                </h3>
                <p className="text-secondary-text">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-secondary-text">
              More questions?{' '}
              <Link href="/faq" className="text-accent font-medium hover:underline">
                Visit our FAQ page
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-text">
            Ready to Fill Your Pipeline with Buyers?
          </h2>
          <p className="mt-6 text-xl text-secondary-text max-w-3xl mx-auto">
            Stop guessing. Let’s talk about how buyer intent leads and automated conversion can scale your revenue.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-10 py-4" asChild>
              <a href="#calendar">
                Book Your Strategy Call
                <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
            <Button variant="secondary" size="lg" className="text-lg px-10 py-4" asChild>
              <Link href="/system">
                See How It Works
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}