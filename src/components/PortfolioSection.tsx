'use client'

import { useState } from 'react'

const projects = [
  {
    title: 'Tutor Konnect',
    category: 'web development',
    image: '/images/tutorconnect.png',
    url: 'https://tutorkonect.com/',
  },
  {
    title: 'Academic Staff Union of Polytechnics(ASUP)',
    category: 'web development',
    image: '/images/asup.png',
    url: 'https://asupng.org/',
  },
  {
    title: 'DEDA Hospital',
    category: 'web design',
    image: '/images/deda.png',
    url: 'https://dedahospital.com/',
  },
  {
    title: 'Capsule business manager',
    category: 'applications',
    image: '/images/capsule.png',
    url: 'https://play.google.com/store/apps/details?id=com.tribesquare.mbm&hl=en&gl=US',
  },
]

const categories = [
  { value: 'all', label: 'All' },
  { value: 'web design', label: 'Web design' },
  { value: 'applications', label: 'Applications' },
  { value: 'web development', label: 'Web development' },
]

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectOpen, setSelectOpen] = useState(false)

  const filtered = projects.filter(
    p => activeFilter === 'all' || p.category === activeFilter
  )

  const currentLabel = categories.find(c => c.value === activeFilter)?.label ?? 'All'

  return (
    <>
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>
      <section className="projects">
        <ul className="filter-list" style={{ display: 'none' }}>
          {categories.map(cat => (
            <li className="filter-item" key={cat.value}>
              <button
                className={activeFilter === cat.value ? 'active' : ''}
                data-filter-btn
                onClick={() => setActiveFilter(cat.value)}
              >
                {cat.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="filter-select-box" style={{ display: 'none' }}>
          <button
            className={`filter-select ${selectOpen ? 'active' : ''}`}
            data-select
            onClick={() => setSelectOpen(v => !v)}
          >
            <div className="select-value" data-selecct-value>
              {currentLabel}
            </div>
            <div className="select-icon">
              <ion-icon name="chevron-down" />
            </div>
          </button>
          <ul className="select-list">
            {categories.map(cat => (
              <li className="select-item" key={cat.value}>
                <button
                  data-select-item
                  onClick={() => {
                    setActiveFilter(cat.value)
                    setSelectOpen(false)
                  }}
                >
                  {cat.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <ul className="project-list">
          {filtered.map(p => (
            <li
              className="project-item active"
              data-filter-item
              data-category={p.category}
              key={p.title}
            >
              <a href={p.url}>
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline" />
                  </div>
                  <img src={p.image} alt={p.title} loading="lazy" />
                </figure>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-category">{p.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
