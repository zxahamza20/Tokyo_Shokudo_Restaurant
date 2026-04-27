import './Location.css'

const hours = [
  ['Monday', '11:00 AM – 9:00 PM'], ['Tuesday', '11:00 AM – 9:00 PM'],
  ['Wednesday', '11:00 AM – 9:00 PM'], ['Thursday', '11:00 AM – 9:00 PM'],
  ['Friday', '11:00 AM – 10:00 PM'], ['Saturday', '11:00 AM – 10:00 PM'],
  ['Sunday', '12:00 PM – 8:00 PM'],
]

export default function Location() {
  return (
    <div className="location-page">
      <div className="page-hero">
        <h1>Location & Hours</h1>
        <p>Come visit us in Plano, TX</p>
      </div>
      <div className="location-container">
        <div className="location-grid">
          <div className="location-info">
            <div className="info-block">
              <span className="section-tag">Address</span>
              <h3>Tokyo Shokudo – Plano</h3>
              <p>123 Main St<br />Plano, TX 75023</p>
              <a href="https://maps.google.com/?q=Tokyo+Shokudo+Plano+TX" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>
                Get Directions
              </a>
            </div>
            <div className="info-block">
              <span className="section-tag">Hours</span>
              <div className="hours-table">
                {hours.map(([day, time]) => (
                  <div className="hours-row" key={day}><span>{day}</span><span>{time}</span></div>
                ))}
              </div>
            </div>
            <div className="info-block">
              <span className="section-tag">Contact</span>
              <p>📞 (972) 555-0123</p>
              <p>✉️ plano@tokyoshokudo.com</p>
            </div>
          </div>
          <div className="location-map">
            <iframe
              title="Tokyo Shokudo Plano"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107257.69819673!2d-96.75!3d33.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c21a3a8a49e31%3A0x79de45e0d2d8e6d0!2sPlano%2C%20TX!5e0!3m2!1sen!2sus!4v1620000000000"
              width="100%" height="100%"
              style={{ border: 0 }} allowFullScreen="" loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  )
}