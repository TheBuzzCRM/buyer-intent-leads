import { NextResponse } from 'next/server'
import { queryOne } from '@/lib/neon'

export async function GET() {
  try {
    const llmsSetting = await queryOne(
      "SELECT value FROM seo_settings WHERE key = 'llms'"
    )
    
    const data = llmsSetting?.value?.json || {
      name: "Buyer Intent Leads",
      description: "Premium buyer intent leads and AI marketing automation platform.",
      url: "https://buyerintentleads.com"
    }

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ name: "Buyer Intent Leads" }, { status: 500 })
  }
}