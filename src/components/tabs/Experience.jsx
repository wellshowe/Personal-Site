const WORK = [
  {
    org: 'Applied Systems',
    role: 'Product Marketing Intern',
    when: 'June 2026 – August 2026',
    points: [
      'Architected 9 sales-enablement hubs that centralized product messaging, competitive intelligence, release materials, and customer assets across cross-functional teams.',
      'Built an AI quote-finder across 30+ customer transcripts, surfacing sales-ready proof points in seconds at no added software cost.',
      'Led testimonial outreach to 35 customers with a 60% response rate, expanding the pipeline for future customer success stories.',
      'Transformed 10 customer stories into multi-channel content spanning case studies, blogs, email, social media, and video.',
      'Automated 77 legacy story updates with Claude during a company-wide digital rebrand, scaling brand consistency across the new website.',
    ],
  },
  {
    org: 'Teklead Corp',
    role: 'Financial Administrative Assistant',
    when: 'May 2025 – Present',
    points: [
      'Reconcile approximately $200K in monthly financial activity in QuickBooks across bank, credit-card, and investment accounts.',
      'Manage timekeeping for 30 U.S. and overseas contractors, processing 21 monthly timesheets and maintaining payment records in Excel.',
      'Manage roughly 40 monthly billing transactions across vendor invoices, client invoicing, and company bill payments.',
    ],
  },
  {
    org: 'Introships',
    role: 'Coca-Cola Fellow',
    when: 'May 2026 – July 2026',
    points: [
      'Selected as 1 of 50 Coca-Cola Fellows for a 10-week career program spanning exposure to professionals across 50 companies.',
    ],
  },
  {
    org: 'Pendolino',
    role: 'Hostess',
    when: 'July 2024 – September 2024',
    points: [
      'Managed real-time reservations and seating through OpenTable, balancing walk-ins, guest preferences, table availability, and server capacity.',
      'Resolved guest issues and coordinated front-of-house adjustments during fast-paced service to keep restaurant flow on track.',
    ],
  },
  {
    org: 'Westminster Summer Camp & Sears Pool Management',
    role: 'Lifeguard',
    when: 'June 2021 – July 2024',
    points: [
      'Maintained Red Cross certification across 4 summers, monitoring pool activity and enforcing safety protocols in high-responsibility environments.',
      'Coordinated with aquatic staff to maintain continuous coverage, identify hazards, and respond quickly to changing conditions.',
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
    </section>
  )
}
