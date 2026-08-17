const LINKS = [
  {
    label: 'Email',
    display: 'wellshowe05@gmail.com',
    href: 'mailto:wellshowe05@gmail.com',
  },
  {
    label: 'LinkedIn',
    display: 'linkedin.com/in/wells-howe',
    href: 'https://linkedin.com/in/wells-howe',
  },
  {
    label: 'GitHub',
    display: 'github.com/wellshowe',
    href: 'https://github.com/wellshowe',
  },
  {
    label: 'Resume',
    display: 'Download PDF',
    href: '/resume.pdf',
  },
]

export default function Contact() {
  return (
    <section className="panel">
      <h2 className="panel-title">Contact</h2>
      <p>The fastest way to reach me is email - happy to exchange some fun facts :)</p>
      <ul className="contact-list">
        {LINKS.map((link) => (
          <li key={link.label}>
            <span className="contact-label">{link.label}</span>
            <a href={link.href} target="_blank" rel="noreferrer">
              {link.display}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
