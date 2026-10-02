import { useState, FormEvent } from 'react'
import FadeIn from '../components/FadeIn'

const WEB3FORMS_ACCESS_KEY = 'YOUR-ACCESS-KEY-HERE'

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const formData = new FormData(form)
    formData.append('access_key', WEB3FORMS_ACCESS_KEY)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const result = await res.json()
      if (result.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-10 sm:mb-14"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Contact
        </h2>
      </FadeIn>

      <FadeIn delay={0.15} y={20}>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col gap-4">
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="bg-transparent border-2 border-[#D7E2EA] rounded-2xl px-5 py-3 text-[#D7E2EA] placeholder:text-[#D7E2EA]/50 outline-none"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your email"
            className="bg-transparent border-2 border-[#D7E2EA] rounded-2xl px-5 py-3 text-[#D7E2EA] placeholder:text-[#D7E2EA]/50 outline-none"
          />
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Your message"
            className="bg-transparent border-2 border-[#D7E2EA] rounded-2xl px-5 py-3 text-[#D7E2EA] placeholder:text-[#D7E2EA]/50 outline-none resize-none"
          />
          <button
            type="submit"
            disabled={status === 'sending'}
            className="rounded-full text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 disabled:opacity-60"
            style={{
              background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
            }}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="text-center text-sm" style={{ color: '#D7E2EA' }}>
              Thanks — your message has been sent!
            </p>
          )}
          {status === 'error' && (
            <p className="text-center text-sm text-red-400">
              Something went wrong. Please email muntasirmatin@gmail.com directly.
            </p>
          )}
        </form>
      </FadeIn>
    </section>
  )
}