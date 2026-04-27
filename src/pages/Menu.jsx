import { useState } from 'react'
import { menuData } from '../data/menuData'
import './Menu.css'

export default function Menu() {
  const categories = Object.keys(menuData)
  const [active, setActive] = useState(categories[0])

  return (
    <div className="menu-page">
      <div className="page-hero">
        <h1>Our Menu</h1>
        <p>Authentic Japanese cuisine, made fresh daily</p>
      </div>
      <div className="menu-container">
        <div className="menu-tabs">
          {categories.map(cat => (
            <button key={cat} className={`menu-tab ${active === cat ? 'active' : ''}`} onClick={() => setActive(cat)}>
              {cat}
            </button>
          ))}
        </div>
        <div className="menu-items">
          {menuData[active].map((item, i) => (
            <div className="menu-item" key={i}>
              <div className="menu-item-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
              <span className="menu-item-price">{item.price}</span>
            </div>
          ))}
        </div>
        <div className="menu-cta">
          <p>Ready to order? Place your order online for pickup.</p>
          <a href="https://order.toasttab.com/online/tokyo-shokudo" target="_blank" rel="noreferrer" className="btn btn-primary">Order Online</a>
        </div>
      </div>
    </div>
  )
}