'use client'
import { useState } from 'react'

export const metadata = { title: 'Contact - AI Hustle Stack' }

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  return (
    <div className="prose">
      <h1>Contact</h1>
      {submitted ? (
        <p>Thanks for reaching out!</p>
      ) : (
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault()
            setSubmitted(true)
          }}
        >
          <input
            type="email"
            placeholder="Your email"
            className="w-full border p-2"
            required
          />
          <textarea
            placeholder="Message"
            className="w-full border p-2"
            required
          />
          <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">
            Send
          </button>
        </form>
      )}
    </div>
  )
}
