export default function AboutSection() {
  return (
    <>
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>
      <section className="about-text">
        <p>
          I&apos;m a dedicated Frontend Developer with a solid foundation in technical expertise and 4 years of hands-on experience in the field. My passion for creating seamless user experiences drives my commitment to delivering high-quality software solutions.
        </p>
        <p>
          My focus lies in building functional sites with user-experience, speed and developer experience at the core. I achieve this with my proficiency in Javascript coupled with deep understanding of related frameworks such as React, VueJs for the frontend, and NodeJs/NestJs, Python/Django for the backend. I also have a good understanding of DevOps. While developing high mastery in Frontend, I am currently honing my skills in GoLang as well.
        </p>
      </section>
      <section className="service">
        <h3 className="h3 service-title">What i do</h3>
        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img src="/images/icon-dev.svg" alt="development icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Product Development</h4>
              <p className="service-item-text">I build full web and app products from frontend to backend, focusing on performance, structure, and real-world usability.</p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <img src="/images/icon-design.svg" alt="payment icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Payment &amp; Integrations</h4>
              <p className="service-item-text">I integrate payment systems and third-party services using secure, scalable API and webhook workflows.</p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <img src="/images/icon-app.svg" alt="code icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Code Reviews &amp; Developer Experience</h4>
              <p className="service-item-text">I review code for clarity, structure, and scalability, improving how systems are built and maintained.</p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <img src="/images/icon-photo.svg" alt="design icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">UX &amp; Interface Design</h4>
              <p className="service-item-text">I design and refine user flows and interfaces, then translate them into precise, responsive UI with attention to detail and motion.</p>
            </div>
          </li>
        </ul>
      </section>
    </>
  )
}
