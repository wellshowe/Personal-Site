import { useState } from 'react'
import { Play } from 'lucide-react'
import Lightbox from '../Lightbox.jsx'

const PROJECTS = [
  {
    name: 'Clean Consulting Case Competition — LAWA',
    when: 'April 2026 – May 2026',
    points: [
      'Modeled an LAX EV rideshare strategy projected to raise adoption from 9.1% to 20% while preserving $72.6M in annual fee revenue.',
      "Benchmarked JFK's EV infrastructure model to shape a financially viable ground-transportation strategy for LAX's Zero Carbon initiative.",
      'Designed the final pitch deck, translating complex analysis into a clear visual argument that helped earn 2nd place among 30+ teams.',
    ],
    link: {
      label: 'View the full slide deck (PDF)',
      href: '/projects/clean-consulting/lax-sustainability-deck.pdf',
    },
    media: [
      {
        type: 'image',
        src: '/projects/clean-consulting/slide-0-cover.jpg',
        alt: 'LAX: Elevating Sustainable Infrastructure in Aviation cover slide',
      },
      {
        type: 'image',
        src: '/projects/clean-consulting/slide-1.png',
        alt: 'Electric Vehicle Rideshare Promotion overview slide',
      },
      {
        type: 'image',
        src: '/projects/clean-consulting/slide-2.png',
        alt: 'Airport EV Charging Hub case study slide',
      },
      {
        type: 'image',
        src: '/projects/clean-consulting/slide-3.png',
        alt: 'Cost-benefit analysis slide',
      },
    ],
  },
  {
    name: 'FlashCard — AI Study Platform',
    when: 'April 2026 – June 2026',
    points: [
      'Co-built an AI study platform in React, TypeScript, and Gemini that automatically converts notes into tailored flashcard decks.',
      'Automated CI/CD for 2 Dockerized services across 4 pods on a 2-node GKE cluster, moving the application from code to production through GitHub Actions.',
    ],
    media: [
      {
        type: 'video',
        src: '/projects/flashcard-app/demo.mp4',
        poster: '/projects/flashcard-app/demo-poster.jpg',
      },
      {
        type: 'image',
        src: '/projects/flashcard-app/screenshot-1.png',
        alt: 'FlashCard App AI deck generation screen',
      },
      {
        type: 'image',
        src: '/projects/flashcard-app/screenshot-2.png',
        alt: 'FlashCard App generated cards view',
      },
      {
        type: 'image',
        src: '/projects/flashcard-app/screenshot-3.png',
        alt: 'FlashCard App study mode with question and answer flow',
      },
    ],
  },
  {
    name: 'RecipEasy — AI Social Recipe Platform',
    when: 'October 2025 – December 2025',
    points: [
      'Implemented 7 core React experiences spanning AI recipe generation, authentication, social feeds, profiles, posting, and user search.',
      'Redesigned navigation after testing with 11 users revealed friction in post creation, moving the feature into a more intuitive social-media flow.',
    ],
    media: [
      { type: 'image', src: '/projects/recipeasy/feed.png', alt: 'RecipEasy feed screen' },
      { type: 'image', src: '/projects/recipeasy/search.png', alt: 'RecipEasy search for users screen' },
      { type: 'image', src: '/projects/recipeasy/login.png', alt: 'RecipEasy login screen' },
      { type: 'image', src: '/projects/recipeasy/new-post.png', alt: 'RecipEasy create new post screen' },
      { type: 'image', src: '/projects/recipeasy/ai-chat.png', alt: 'RecipEasy AI chef chat screen' },
    ],
  },
  {
    name: 'No Internet — 3D Chrome Dinosaur Game',
    when: 'January 2026 – March 2026',
    points: [
      "Reimagined Chrome's iconic Dinosaur game as a 3D Three.js experience with three-lane gameplay, procedural obstacles, and dynamic environments.",
      'Built a procedural world rendering 300 mountain objects, randomized cactus formations, pterodactyls, moving clouds, and a day-night cycle.',
    ],
    media: [
      {
        type: 'video',
        src: '/projects/no-internet/demo.mp4',
        poster: '/projects/no-internet/demo-poster.jpg',
      },
      {
        type: 'image',
        src: '/projects/no-internet/screenshot-1.png',
        alt: 'No Internet gameplay screenshot',
      },
      {
        type: 'image',
        src: '/projects/no-internet/screenshot-2.png',
        alt: 'No Internet game over screen',
      },
      {
        type: 'image',
        src: '/projects/no-internet/screenshot-3.png',
        alt: 'No Internet nighttime gameplay with plane obstacle',
      },
    ],
  },
]

function Thumb({ item, onOpen }) {
  const isVideo = item.type === 'video'
  return (
    <button
      type="button"
      className="media-thumb"
      onClick={onOpen}
      aria-label={isVideo ? 'Play video' : item.alt}
    >
      <img src={isVideo ? item.poster : item.src} alt={isVideo ? '' : item.alt} loading="lazy" />
      {isVideo && (
        <span className="media-thumb__play" aria-hidden="true">
          <Play size={20} strokeWidth={0} fill="currentColor" />
        </span>
      )}
    </button>
  )
}

export default function Projects() {
  const [lightbox, setLightbox] = useState(null) // { media, index }

  const openLightbox = (media, index) => setLightbox({ media, index })
  const closeLightbox = () => setLightbox(null)
  const prev = () =>
    setLightbox((l) => l && { ...l, index: (l.index - 1 + l.media.length) % l.media.length })
  const next = () =>
    setLightbox((l) => l && { ...l, index: (l.index + 1) % l.media.length })

  return (
    <section className="panel">
      <h2 className="panel-title">Projects</h2>

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
          {item.link && (
            <p className="entry-link">
              <a href={item.link.href} target="_blank" rel="noreferrer">
                {item.link.label}
              </a>
            </p>
          )}
          {item.media.length > 0 && (
            <div className="project-media">
              {item.media.map((m, i) => (
                <Thumb key={m.src} item={m} onOpen={() => openLightbox(item.media, i)} />
              ))}
            </div>
          )}
        </div>
      ))}

      {lightbox && (
        <Lightbox
          items={lightbox.media}
          index={lightbox.index}
          onClose={closeLightbox}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  )
}
