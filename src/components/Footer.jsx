import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <span className="footer-kanji">東京食堂</span>
          <p>Authentic Japanese Dining<br />Plano, Texas</p>
        </div>
        <div className="footer-links">
          <h4>Pages</h4>
          <ul>
            {[['/', 'Home'], ['/menu', 'Menu'], ['/about', 'About'], ['/location', 'Location'], ['/contact', 'Contact']].map(([to, label]) => (
              <li key={to}><Link to={to}>{label}</Link></li>
            ))}
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>123 Main St, Plano, TX 75023</p>
          <p>(972) 555-0123</p>
          <p>plano@tokyoshokudo.com</p>
          <a href="https://order.toasttab.com/online/tokyo-shokudo" target="_blank" rel="noreferrer" className="footer-order-btn">
            Order Online
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Tokyo Shokudo – Plano, TX. For educational purposes only.</p>
      </div>
    </footer>
  )
}