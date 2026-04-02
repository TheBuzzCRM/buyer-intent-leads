import { Button } from '@/components/Button'
import { HelpCircle, ChevronDown, ChevronUp, Target, Zap, Users, Clock, BarChart, Settings, Check } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  const faqs = [
    {
      question: 'What are buyer intent leads?',
      answer: 'Buyer intent leads are people actively searching for, comparing, and ready to buy what you sell. They show clear signals—like visiting pricing pages, reading reviews, or searching for specific solutions—that indicate they’re in‑market now. Unlike cold lists, these leads are warm and already motivated.',
      icon: Target,
    },
    {
      question: 'Is this just lead generation?',
      answer: 'No. Traditional lead generation delivers contacts; we deliver buyers and a system that converts them. You get buyer intent leads plus a complete automation platform that nurtures, follows up, and converts them—plus done‑for‑you setup. It’s a full revenue system, not just a list.',
      icon: Zap,
    },
    {
      question: 'Is automation included?',
      answer: 'Yes. Every plan includes our AI‑driven automation platform. It handles follow‑up, nurturing, and conversion sequences across email, SMS, and retargeting. You don’t need to manually reach out—the system does it for you.',
      icon: Settings,
    },
    {
      question: 'What’s included in each plan?',
      answer: '<strong>Growth ($1,500/mo)</strong>: Buyer intent leads, automation platform, CRM + pipeline, done‑for‑you setup, basic reporting, email support.<br/><strong>Revenue Engine ($2,997/mo)</strong>: Everything in Growth plus more leads, multi‑channel follow‑up, advanced workflows, optimization support, priority onboarding, weekly performance reviews, and a dedicated account manager.',
      icon: BarChart,
    },
    {
      question: 'Who is this best for?',
      answer: 'Businesses selling high‑value offers ($$$+) that want predictable, scalable revenue. Ideal for B2B SaaS, agencies, consultancies, professional services, e‑commerce brands, coaches, and real estate investors. If you sell something over $1,000 and have capacity for new customers, you’re a good fit.',
      icon: Users,
    },
    {
      question: 'Do I need a CRM?',
      answer: 'No. We set up a CRM for you as part of the done‑for‑you setup. The system includes a CRM and pipeline configured specifically for buyer intent leads and automated conversion.',
      icon: Check,
    },
    {
      question: 'How fast do leads come in?',
      answer: 'After the setup period (3–5 business days), leads start arriving in your CRM immediately. You’ll see a steady flow of buyer intent leads from day one.',
      icon: Clock,
    },
    {
      question: 'What makes this different from traditional lead gen?',
      answer: 'Traditional lead gen gives you cold contacts; we give you warm buyers. Traditional requires manual follow‑up; we automate conversion. Traditional is guesswork; we use intent signals. Traditional scales with more budget; our system scales with automation. It’s a complete revenue engine, not just a source of names.',
      icon: Target,
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes. Both plans are month‑to‑month with no long‑term contracts. You can cancel at any time.',
    },
    {
      question: 'Do you work with businesses outside the US?',
      answer: 'Yes, we work with businesses globally. The system can target buyer intent signals in multiple regions and languages.',
    },
    {
      question: 'What if I need more leads than my plan includes?',
      answer: 'Revenue Engine includes more leads. Growth clients can upgrade anytime. We can also discuss custom volumes if needed.',
    },
    {
      question: 'How do you track buyer intent?',
      answer: 'We monitor a combination of search behavior, review activity, website engagement, and other intent signals across multiple platforms. The system identifies individuals who match your ideal customer profile and are actively researching solutions.',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-text leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 text-xl text-secondary-text max-w-3xl mx-auto">
            Clear answers about buyer intent leads, automation, pricing, and how the system works.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4" asChild>
              <Link href="/strategy-call">
                Book a Strategy Call
              </Link>
            </Button>
            <Button variant="secondary" size="lg" className="text-lg px-8 py-4" asChild>
              <Link href="/pricing">
                See Pricing
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="surface-card cursor-pointer transition-all duration-200 hover:shadow-hover"
                onClick={() => toggleFAQ(idx)}
              >
                <div className="flex items-center justify-between p-6">
                  <div className="flex items-start gap-4">
                    {faq.icon && (
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                        <faq.icon size={20} className="text-accent" />
                      </div>
                    )}
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-primary-text text-left">
                        {faq.question}
                      </h3>
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    {openIndex === idx ? (
                      <ChevronUp size={24} className="text-secondary-text" />
                    ) : (
                      <ChevronDown size={24} className="text-secondary-text" />
                    )}
                  </div>
                </div>
                {openIndex === idx && (
                  <div className="px-6 pb-6 border-t border-border pt-4">
                    <div 
                      className="text-secondary-text prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                    {idx === 3 && ( // pricing question
                      <div className="mt-4">
                        <Link href="/pricing" className="text-accent font-medium hover:underline inline-flex items-center gap-1">
                          Compare plans in detail <ChevronDown size={16} className="rotate-270" />
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-secondary-text max-w-3xl mx-auto">
              Still have questions?{' '}
              <Link href="/strategy-call" className="text-accent font-medium hover:underline">
                Book a strategy call
              </Link>
              {' '}and we’ll answer them live.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-text">
            Ready to Get Answers Directly?
          </h2>
          <p className="mt-6 text-xl text-secondary-text max-w-3xl mx-auto">
            A 30-minute strategy call will clarify everything and show you exactly how the system works for your business.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-10 py-4" asChild>
              <Link href="/strategy-call">
                Book a Strategy Call
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

      {/* JSON-LD FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.slice(0, 8).map(faq => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer.replace(/<[^>]+>/g, ''),
              },
            })),
          }),
        }}
      />
    </>
  )
}