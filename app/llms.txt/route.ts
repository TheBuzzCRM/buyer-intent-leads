import { NextResponse } from 'next/server'
import { queryOne } from '@/lib/neon'

export async function GET() {
  try {
    const llmsSetting = await queryOne(
      "SELECT value FROM seo_settings WHERE key = 'llms'"
    )
    
    const text = llmsSetting?.value?.text || `# Buyer Intent Leads
Premium buyer intent leads and AI marketing automation platform.
Focus: High-conversion, light luxury editorial design.
Offers: Growth ($1,500/mo), Revenue Engine ($2,997/mo).`

    return new NextResponse(text, {
      headers: {
        'Content-Type': 'text/plain',
      },
    })
  } catch (error) {
    return new NextResponse('Buyer Intent Leads', { status: 500 })
  }
}