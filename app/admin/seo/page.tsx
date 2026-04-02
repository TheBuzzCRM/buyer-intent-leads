'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/Button'
import { Lock, Eye, EyeOff, FileText, Code, Globe, Map, Tag, Settings, Save, RefreshCw, LogOut, Plus, Trash2 } from 'lucide-react'

export default function AdminSEOPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [initialLoading, setInitialLoading] = useState(true)

  // SEO Settings State
  const [metaTitle, setMetaTitle] = useState('')
  const [metaDescription, setMetaDescription] = useState('')
  const [robotsIndex, setRobotsIndex] = useState(true)
  const [robotsFollow, setRobotsFollow] = useState(true)
  const [llmsText, setLlmsText] = useState('')
  const [llmsJson, setLlmsJson] = useState('')
  const [embedScripts, setEmbedScripts] = useState<Array<{ id: string; name: string; script: string; location: 'head' | 'body'; enabled: boolean }>>([])

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const res = await fetch('/api/auth/verify')
      if (res.ok) {
        setIsAuthenticated(true)
        fetchData()
      }
    } catch (err) {
      console.error('Auth check failed:', err)
    } finally {
      setInitialLoading(false)
    }
  }

  const fetchData = async () => {
    try {
      const [seoRes, embedsRes] = await Promise.all([
        fetch('/api/admin/seo'),
        fetch('/api/admin/embeds')
      ])

      if (seoRes.ok) {
        const seoData = await seoRes.json()
        if (seoData.meta) {
          setMetaTitle(seoData.meta.title || '')
          setMetaDescription(seoData.meta.description || '')
        }
        if (seoData.robots) {
          setRobotsIndex(seoData.robots.index ?? true)
          setRobotsFollow(seoData.robots.follow ?? true)
        }
        if (seoData.llms) {
          setLlmsText(seoData.llms.text || '')
          setLlmsJson(seoData.llms.json || '')
        }
      }

      if (embedsRes.ok) {
        const embedsData = await embedsRes.json()
        setEmbedScripts(embedsData)
      }
    } catch (err) {
      console.error('Failed to fetch data:', err)
    }
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      if (res.ok) {
        setIsAuthenticated(true)
        fetchData()
      } else {
        const data = await res.json()
        alert(data.error || 'Login failed')
      }
    } catch (err) {
      alert('An error occurred during login')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    // In a real app, we'd call a logout API to clear the cookie
    // For now, we'll just clear state and redirect
    setIsAuthenticated(false)
    setEmail('')
    setPassword('')
  }

  const saveSetting = async (key: string, value: any) => {
    try {
      const res = await fetch('/api/admin/seo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key, value }),
      })
      if (!res.ok) throw new Error('Failed to save')
      return true
    } catch (err) {
      alert(`Failed to save ${key}`)
      return false
    }
  }

  const handleSaveMeta = async () => {
    setLoading(true)
    const success = await saveSetting('meta', { title: metaTitle, description: metaDescription })
    if (success) alert('Meta settings saved')
    setLoading(false)
  }

  const handleSaveRobots = async () => {
    setLoading(true)
    const success = await saveSetting('robots', { index: robotsIndex, follow: robotsFollow })
    if (success) alert('Robots settings saved')
    setLoading(false)
  }

  const handleSaveLlms = async () => {
    setLoading(true)
    const success = await saveSetting('llms', { text: llmsText, json: llmsJson })
    if (success) alert('LLMs files saved')
    setLoading(false)
  }

  const handleAddScript = async () => {
    const name = prompt('Script Name (e.g. Google Analytics)')
    if (!name) return
    
    const script = prompt('Paste Script Code')
    if (!script) return

    const location = prompt('Location (head or body)', 'head') as 'head' | 'body'
    if (location !== 'head' && location !== 'body') return

    try {
      const res = await fetch('/api/admin/embeds', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, script, location, enabled: true }),
      })
      if (res.ok) {
        fetchData()
      }
    } catch (err) {
      alert('Failed to add script')
    }
  }

  const handleDeleteScript = async (id: string) => {
    if (!confirm('Are you sure you want to delete this script?')) return
    try {
      const res = await fetch(`/api/admin/embeds?id=${id}`, { method: 'DELETE' })
      if (res.ok) {
        fetchData()
      }
    } catch (err) {
      alert('Failed to delete script')
    }
  }

  if (initialLoading) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-background'>
        <RefreshCw className='animate-spin text-accent' size={32} />
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-background p-4'>
        <div className='surface-card max-w-md w-full p-8'>
          <div className='text-center mb-8'>
            <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-4'>
              <Lock size={32} className='text-accent' />
            </div>
            <h1 className='font-serif text-3xl font-bold text-primary-text'>Admin SEO Panel</h1>
            <p className='text-secondary-text mt-2'>Sign in to manage SEO, LLMs, and scripts.</p>
          </div>
          <form onSubmit={handleLogin} className='space-y-6'>
            <div>
              <label className='block text-sm font-medium text-primary-text mb-2'>Email</label>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition'
                placeholder='admin@buyerintentleads.com'
                required
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-primary-text mb-2'>Password</label>
              <div className='relative'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition pr-12'
                  placeholder='••••••••'
                  required
                />
                <button
                  type='button'
                  className='absolute right-3 top-1/2 -translate-y-1/2 text-secondary-text hover:text-primary-text'
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            <Button type='submit' className='w-full' loading={loading}>
              Sign In
            </Button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-background p-4 md:p-8'>
      <header className='container-narrow mb-8'>
        <div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
          <div>
            <h1 className='font-serif text-3xl font-bold text-primary-text'>Admin SEO Panel</h1>
            <p className='text-secondary-text'>Manage meta tags, robots, LLMs, sitemap, and embed scripts.</p>
          </div>
          <div className='flex items-center gap-4'>
            <Button variant='secondary' size='sm' onClick={handleLogout}>
              <LogOut size={16} className='mr-2' />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className='container-narrow space-y-8'>
        {/* Meta Controls */}
        <section className='surface-card p-6'>
          <div className='flex items-center gap-3 mb-6'>
            <Tag size={24} className='text-accent' />
            <h2 className='font-serif text-2xl font-semibold text-primary-text'>Meta Controls</h2>
          </div>
          <div className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-primary-text mb-2'>Page Title</label>
              <input
                type='text'
                value={metaTitle}
                onChange={(e) => setMetaTitle(e.target.value)}
                className='w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-primary-text mb-2'>Meta Description</label>
              <textarea
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
                rows={3}
                className='w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition'
              />
            </div>
            <div className='flex justify-end'>
              <Button onClick={handleSaveMeta} loading={loading}>
                <Save size={16} className='mr-2' />
                Save Meta
              </Button>
            </div>
          </div>
        </section>

        {/* Robots Control */}
        <section className='surface-card p-6'>
          <div className='flex items-center gap-3 mb-6'>
            <Globe size={24} className='text-accent' />
            <h2 className='font-serif text-2xl font-semibold text-primary-text'>Robots Control</h2>
          </div>
          <div className='space-y-4'>
            <div className='flex items-center gap-4'>
              <label className='flex items-center gap-3 cursor-pointer'>
                <input
                  type='checkbox'
                  checked={robotsIndex}
                  onChange={(e) => setRobotsIndex(e.target.checked)}
                  className='w-5 h-5 text-accent rounded border-border focus:ring-accent'
                />
                <span className='text-primary-text'>Allow indexing</span>
              </label>
              <label className='flex items-center gap-3 cursor-pointer'>
                <input
                  type='checkbox'
                  checked={robotsFollow}
                  onChange={(e) => setRobotsFollow(e.target.checked)}
                  className='w-5 h-5 text-accent rounded border-border focus:ring-accent'
                />
                <span className='text-primary-text'>Allow following links</span>
              </label>
            </div>
            <div className='flex justify-end'>
              <Button onClick={handleSaveRobots} loading={loading}>
                <Save size={16} className='mr-2' />
                Save Robots
              </Button>
            </div>
          </div>
        </section>

        {/* LLMs Control */}
        <section className='surface-card p-6'>
          <div className='flex items-center gap-3 mb-6'>
            <FileText size={24} className='text-accent' />
            <h2 className='font-serif text-2xl font-semibold text-primary-text'>LLMs Control</h2>
          </div>
          <div className='grid md:grid-cols-2 gap-8'>
            <div>
              <h3 className='font-medium text-primary-text mb-3'>llms.txt</h3>
              <textarea
                value={llmsText}
                onChange={(e) => setLlmsText(e.target.value)}
                rows={12}
                className='w-full font-mono text-sm px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition'
              />
            </div>
            <div>
              <h3 className='font-medium text-primary-text mb-3'>llms.json</h3>
              <textarea
                value={llmsJson}
                onChange={(e) => setLlmsJson(e.target.value)}
                rows={12}
                className='w-full font-mono text-sm px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition'
              />
            </div>
          </div>
          <div className='flex justify-end mt-6'>
            <Button onClick={handleSaveLlms} loading={loading}>
              <Save size={16} className='mr-2' />
              Save LLMs Files
            </Button>
          </div>
        </section>

        {/* Embed / Pixel Manager */}
        <section className='surface-card p-6'>
          <div className='flex items-center justify-between mb-6'>
            <div className='flex items-center gap-3'>
              <Settings size={24} className='text-accent' />
              <h2 className='font-serif text-2xl font-semibold text-primary-text'>Embed / Pixel Manager</h2>
            </div>
            <Button variant='secondary' size='sm' onClick={handleAddScript}>
              <Plus size={16} className='mr-2' />
              Add Script
            </Button>
          </div>
          <div className='space-y-6'>
            {embedScripts.length === 0 ? (
              <p className='text-center text-secondary-text py-8'>No scripts added yet.</p>
            ) : (
              embedScripts.map((script) => (
                <div key={script.id} className='border border-border rounded-lg p-4'>
                  <div className='flex items-center justify-between mb-4'>
                    <div>
                      <h3 className='font-medium text-primary-text'>{script.name}</h3>
                      <p className='text-sm text-secondary-text'>Injected into <code className='px-2 py-1 bg-gray-100 rounded'>{script.location}</code></p>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Button variant='ghost' size='sm' onClick={() => handleDeleteScript(script.id)} className='text-red-500 hover:bg-red-50'>
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>
                  <pre className='text-xs bg-gray-50 border border-gray-200 rounded p-3 overflow-auto max-h-40'>
                    {script.script}
                  </pre>
                </div>
              ))
            )}
          </div>
        </section>
      </main>

      <footer className='container-narrow mt-12 pt-8 border-t border-border text-center text-secondary-text text-sm'>
        <p>Admin SEO Panel — Buyer Intent Leads. Connected to Neon DB.</p>
      </footer>
    </div>
  )
}