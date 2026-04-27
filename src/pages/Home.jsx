import { Link } from 'react-router-dom'
import './Home.css'
import katsucurry from '../assets/chicken katsu curry.jpg'
import heroBg from '../assets/tokyoshokudobackgroundimage.avif'
import nikutama from '../assets/nikutama.jpg'
import storyImg from '../assets/tokyoshokudostory.avif'
import gyoza from '../assets/gyoza.jpg'

const featured = [
  { name: 'Chicken Katsu Curry', description: 'Japanese curry with crispy fried chicken cutlet over rice', price: '$14.99', category: 'Curry', image: katsucurry },
  { name: 'Gyoza', description: 'Deep fried dumpling with chicken & pork', price: '$6.99', category: 'Appetizer', image: gyoza },
  { name: 'Nikutama', description: 'Original noodle soup with beef, tempura flakes, soft boiled egg', price: '$13.99', category: 'Udon/Soba', image: nikutama },
]

export default function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
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
        <p>Tokyo Shokudo brings the warmth of Japanese home cooking to the heart of Plano, Texas. From classic Japanese curry to hand-crafted sushi, every dish is prepared with care and authenticity.</p>
        <Link to="/about" className="btn btn-primary">Learn More</Link>
        </div>
        <div className="about-snippet-img">
        <img src={storyImg} alt="Tokyo Shokudo" />
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
              {[
                ['Sunday', '11:00 AM – 11:00 PM'],
                ['Mon – Tue', '11:00 AM – 2:30 PM, 5 – 8:30 PM'],
                ['Fri – Sat', '11:00 AM – 12:00 AM'],
                ].map(([day, time]) => (
                <div className="hours-row" key={day}><span>{day}</span><span>{time}</span></div>
                ))}
            </div>
            <p className="hours-address">📍 4709 W Parker Rd #450, Plano, TX 75093</p>
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