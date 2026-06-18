'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import NavTabs from '@/components/NavTabs'
import AboutSection from '@/components/AboutSection'
import ResumeSection from '@/components/ResumeSection'
import PortfolioSection from '@/components/PortfolioSection'

export default function Home() {
  const [activePage, setActivePage] = useState('about')

  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <NavTabs activePage={activePage} onPageChange={setActivePage} />
        <article className={`about ${activePage === 'about' ? 'active' : ''}`} data-page="about">
          <AboutSection />
        </article>
        <article className={`resume ${activePage === 'resume' ? 'active' : ''}`} data-page="resume">
          <ResumeSection />
        </article>
        <article className={`portfolio ${activePage === 'portfolio' ? 'active' : ''}`} data-page="portfolio">
          <PortfolioSection />
        </article>
      </div>
    </main>
  )
}
