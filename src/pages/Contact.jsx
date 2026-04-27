import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = async (e) => {
  e.preventDefault()
  const response = await fetch('https://formspree.io/f/xvzdnbyp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form)
  })
  if (response.ok) {
    setSent(true)
  }
}

  return (
    <div className="contact-page">
      <div className="page-hero">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you</p>
      </div>
      <div className="contact-container">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="section-tag">Get In Touch</span>
            <h2 className="section-title">Say Hello</h2>
            <p>Have a question, feedback, or special request? Reach out and we'll get back to you as soon as possible.</p>
            <div className="contact-details">
              {[['Phone', '(469) 626-0117'], ['Email', 'plano@tokyoshokudo.com'], ['Address', '4709 W Parker Rd #450, Plano, TX 75093']].map(([label, val]) => (
                <div key={label}><strong>{label}</strong><span>{val}</span></div>
              ))}
            </div>
          </div>
          <div className="contact-form-wrap">
            {sent ? (
              <div className="contact-success">
                <span>✓</span>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We'll get back to you shortly.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="What's this about?" />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Your message..." />
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}