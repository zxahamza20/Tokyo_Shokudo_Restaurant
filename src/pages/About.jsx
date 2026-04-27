import './About.css'

export default function About() {
  const values = [
    { icon: '🍜', title: 'Authentic Recipes', desc: 'Traditional Japanese recipes passed down and refined over generations.' },
    { icon: '🌿', title: 'Fresh Ingredients', desc: 'We source the freshest ingredients daily to ensure every dish is at its best.' },
    { icon: '🤝', title: 'Community First', desc: 'Proud to serve Plano and be a part of your everyday dining experience.' },
  ]

  return (
    <div className="about-page">
      <div className="page-hero">
        <h1>About Us</h1>
        <p>Our story, our passion, our food</p>
      </div>
      <div className="about-container">
        <div className="about-intro">
          <div className="about-intro-text">
            <span className="section-tag">Who We Are</span>
            <h2 className="section-title">A Taste of Tokyo in Plano</h2>
            <p>Tokyo Shokudo — meaning "Tokyo Dining Hall" — was born out of a love for authentic Japanese home cooking. We believe great food brings people together, and our mission is to deliver that warmth and authenticity to the Plano community.</p>
            <p>Every bowl of ramen, every piece of sushi, and every plate of curry is prepared with care using traditional techniques and quality ingredients.</p>
          </div>
          <div className="about-intro-img">
            <img src="https://images.unsplash.com/photo-1617196034183-421b4040ed20?auto=format&fit=crop&w=800&q=80" alt="Tokyo Shokudo" />
          </div>
        </div>
        <div className="about-values">
          {values.map((v, i) => (
            <div className="value-card" key={i}>
              <span className="value-icon">{v.icon}</span>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}