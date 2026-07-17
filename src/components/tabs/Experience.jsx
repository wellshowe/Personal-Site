const WORK = [
  {
    org: 'Applied Systems',
    role: 'Product Marketing Intern',
    when: 'June 2026 – August 2026',
    points: [
      'Built a centralized Confluence hub for each product, streamlining sales prep and giving cross-functional teams faster access to key product information.',
      "Developed an AI-powered quote-finder agent that surfaces relevant customer quotes for sales pitches, significantly cutting the time reps spent searching manually.",
      'Led outreach for customer testimonials and used AI tools to produce a range of marketing assets, including blog posts, case studies, and videos.',
    ],
  },
  {
    org: 'Teklead Corp',
    role: 'Financial Administrative Assistant',
    when: 'May 2025 – Present',
    points: [
      'Reconcile and audit financial records across multiple accounts, ensuring transactional accuracy throughout company operations.',
      "Organize reports, hours, and approval statuses into a consolidated spreadsheet that documents company operations end to end.",
    ],
  },
  {
    org: 'Pendolino',
    role: 'Hostess',
    when: 'July 2024 – September 2024',
    points: [
      "Used OpenTable to manage seating arrangements and keep the restaurant's flow moving efficiently during service.",
    ],
  },
  {
    org: 'Westminster Summer Camp & Sears Pool Management',
    role: 'Lifeguard',
    when: 'June 2021 – July 2024',
    points: [
      'Completed Red Cross Lifeguard Certification and monitored pool activity to prevent accidental injury and reduce risk for patrons over multiple summers.',
    ],
  },
]

const PROJECTS = [
  {
    name: 'FlashCard App',
    when: 'April 2026 – June 2026',
    points: [
      "Built the frontend in React, TypeScript, and Tailwind, integrating Gemini to auto-generate flashcard decks directly from a user's notes.",
      'Containerized the app with Docker and deployed it to Google Kubernetes Engine, with an automated CI/CD pipeline for deployment.',
    ],
  },
  {
    name: 'Clean Consulting Case Competition — Runner-up',
    when: 'April 2026 – May 2026',
    points: [
      "Presented sustainability recommendations for LAX's Zero Carbon Built Environment track to a panel of top industry judges.",
      'Designed a TNC electrification strategy using tiered access fees and expanded EV charging to reduce ground transportation emissions.',
    ],
  },
  {
    name: 'RecipEasy',
    when: 'October 2025 – December 2025',
    points: [
      'Designed and built a full-stack web app that generates AI-powered recipes from user prompts.',
      'Implemented backend services in Node.js with RESTful APIs to handle user authentication and AI prompting.',
      'Built a responsive React and Tailwind CSS frontend for a flexible, cohesive layout across pages.',
    ],
  },
  {
    name: 'No Internet',
    when: 'January 2026 – March 2026',
    points: [
      'Spearheaded the team\'s project reimagining the iconic Chrome dinosaur game as a fully immersive 3D experience.',
      'Managed team workflow to hit milestones and presented the final product, including trade-offs and lessons learned.',
    ],
  },
]

export default function Experience() {
  return (
    <section className="panel">
      <h2 className="panel-title">Experience</h2>

      <h3 className="panel-subtitle">Work</h3>
      {WORK.map((item) => (
        <div className="entry" key={item.org}>
          <div className="entry-head">
            <span className="entry-title">
              {item.role}, {item.org}
            </span>
            <span className="entry-when">{item.when}</span>
          </div>
          <ul>
            {item.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      ))}

      <h3 className="panel-subtitle">Projects</h3>
      {PROJECTS.map((item) => (
        <div className="entry" key={item.name}>
          <div className="entry-head">
            <span className="entry-title">{item.name}</span>
            <span className="entry-when">{item.when}</span>
          </div>
          <ul>
            {item.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
