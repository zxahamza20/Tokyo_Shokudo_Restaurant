import { Link } from 'react-router-dom'
import './Home.css'

const featured = [
  { name: 'Tonkotsu Ramen', description: 'Rich pork bone broth, chashu, soft-boiled egg, nori', price: '$14.99', category: 'Ramen', image: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=600&q=80' },
  { name: 'Gyoza', description: 'Deep fried dumpling with chicken & pork', price: '$6.99', category: 'Appetizer', image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=600&q=80' },
  { name: 'Chicken Katsu Curry', description: 'Japanese curry with crispy fried chicken cutlet over rice', price: '$14.99', category: 'Curry', image: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?auto=format&fit=crop&w=600&q=80' },
]

export default function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-eyebrow">Japanese Dining · Plano, TX</p>
          <h1 className="hero-title">
            <span>TOKYO</span>
            <span>SHOKUDO</span>
          </h1>
          <p className="hero-subtitle">Authentic flavors, crafted with tradition</p>
          <div className="hero-ctas">
            <Link to="/menu" className="btn btn-primary">View Our Menu</Link>
            <Link to="/location" className="btn btn-outline">Find Us</Link>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="featured">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Favorites</span>
            <h2 className="section-title">Featured Dishes</h2>
          </div>
          <div className="featured-grid">
            {featured.map((item, i) => (
              <div className="dish-card" key={i}>
                <div className="dish-img-wrap">
                  <img src={item.image} alt={item.name} />
                  <span className="dish-category">{item.category}</span>
                </div>
                <div className="dish-info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <span className="dish-price">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-3">
            <Link to="/menu" className="btn btn-primary">See Full Menu</Link>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="about-snippet">
        <div className="container about-snippet-inner">
          <div className="about-snippet-text">
            <span className="section-tag">Our Story</span>
            <h2 className="section-title">A Taste of Tokyo in Plano</h2>
            <p>Tokyo Shokudo brings the warmth of Japanese home cooking to the heart of Plano, Texas. From rich tonkotsu ramen to hand-crafted sushi, every dish is prepared with care and authenticity.</p>
            <Link to="/about" className="btn btn-primary">Learn More</Link>
          </div>
          <div className="about-snippet-img">
            <img src="https://images.unsplash.com/photo-1569737399726-6b31c21e3c47?auto=format&fit=crop&w=800&q=80" alt="Japanese dining" />
          </div>
        </div>
      </section>

      {/* Hours Snippet */}
      <section className="hours-snippet">
        <div className="container hours-inner">
          <div>
            <span className="section-tag">Visit Us</span>
            <h2 className="section-title" style={{ color: 'var(--white)' }}>Hours & Location</h2>
            <div className="hours-list">
              {[['Mon – Fri', '11:00 AM – 9:00 PM'], ['Saturday', '11:00 AM – 10:00 PM'], ['Sunday', '12:00 PM – 8:00 PM']].map(([day, time]) => (
                <div className="hours-row" key={day}><span>{day}</span><span>{time}</span></div>
              ))}
            </div>
            <p className="hours-address">📍 123 Main St, Plano, TX 75023</p>
            <Link to="/location" className="btn btn-primary">Get Directions</Link>
          </div>
          <div className="hours-divider" />
          <div className="hours-order">
            <h3>Ready to Order?</h3>
            <p>Order online for pickup or dine in with us.</p>
            <a href="https://order.toasttab.com/online/tokyo-shokudo" target="_blank" rel="noreferrer" className="btn btn-primary">Order Online</a>
          </div>
        </div>
      </section>
    </div>
  )
}