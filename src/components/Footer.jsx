import { Mail, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer-icons">
        <a
          href="mailto:wellshowe05@gmail.com"
          aria-label="Email Wells"
          title="Email"
        >
          <Mail size={18} strokeWidth={1.5} />
        </a>
        <a
          href="https://linkedin.com/in/wells-howe"
          target="_blank"
          rel="noreferrer"
          aria-label="Wells's LinkedIn"
          title="LinkedIn"
        >
          <Linkedin size={18} strokeWidth={1.5} />
        </a>
      </span>
    </footer>
  )
}
