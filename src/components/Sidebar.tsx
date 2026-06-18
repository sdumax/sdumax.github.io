'use client'

import { useState } from 'react'

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false)

  return (
    <aside className={`sidebar ${expanded ? 'active' : ''}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="/images/my-avatar.png" alt="Maxwell Diogu" width="80" />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Maxwell Diogu">Maxwell Diogu</h1>
          <p className="title">Software Developer</p>
        </div>
        <button className="info_more-btn" data-sidebar-btn onClick={() => setExpanded(v => !v)}>
          <span>Show Contacts</span>
          <ion-icon name="chevron-down" />
        </button>
      </div>
      <div className="sidebar-info_more">
        <div className="separator" />
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline" />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:maxdiogu@gmail.com" className="contact-link">maxdiogu@gmail.com</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline" />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+2348078372893" className="contact-link">+234 807 837 2893</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="logo-whatsapp" />
            </div>
            <div className="contact-info">
              <p className="contact-title">WhatsApp</p>
              <a href="https://wa.me/2348078372893" className="contact-link">+234 807 837 2893</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="calendar-outline" />
            </div>
            <div className="contact-info">
              <p className="contact-title">Availability</p>
              <time dateTime="1982-06-23">Open to remote work</time>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline" />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Abuja, Nigeria</address>
            </div>
          </li>
        </ul>
        <div className="separator" />
        <ul className="social-list">
          <li className="social-item">
            <a href="https://www.linkedin.com/in/maxwell-diogu/" className="social-link">
              <ion-icon name="logo-linkedin" />
            </a>
          </li>
          <li className="social-item">
            <a href="https://twitter.com/DioguMaxwell" className="social-link">
              <ion-icon name="logo-twitter" />
            </a>
          </li>
          <li className="social-item">
            <a href="https://github.com/sdumax" className="social-link">
              <ion-icon name="logo-github" />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}
