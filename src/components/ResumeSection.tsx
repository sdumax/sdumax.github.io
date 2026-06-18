import resume from '@/data/resume.json'

export default function ResumeSection() {
  return (
    <>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline" />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          {resume.experience.map((job, i) => (
            <li className="timeline-item" key={i}>
              <h4 className="h4 timeline-item-title">{job.title}</h4>
              <span>{job.period}</span>
              <ul className="timeline-list">
                {job.highlights.map((h, j) => (
                  <li key={j}>- {h}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>
      <section className="skill">
        <h3 className="h3 skills-title" style={{ marginTop: 40 }}>Skills</h3>
        <div className="skills-tags">
          {resume.skills.map((skill, i) => (
            <span className="skill-tag" key={i}>{skill}</span>
          ))}
        </div>
      </section>
    </>
  )
}
