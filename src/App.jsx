import { useState } from 'react'
import TopSection from './components/TopSection.jsx'
import TabNav from './components/TabNav.jsx'
import TabPanel from './components/TabPanel.jsx'
import About from './components/tabs/About.jsx'
import FunFacts from './components/tabs/FunFacts.jsx'
import Experience from './components/tabs/Experience.jsx'
import Projects from './components/tabs/Projects.jsx'
import Contact from './components/tabs/Contact.jsx'
import Footer from './components/Footer.jsx'
import ScrollHint from './components/ScrollHint.jsx'
import './App.css'

const TABS = [
  { id: 'about', label: 'About', Component: About },
  { id: 'fun-facts', label: 'Fun Facts', Component: FunFacts },
  { id: 'experience', label: 'Experience', Component: Experience },
  { id: 'projects', label: 'Projects', Component: Projects },
  { id: 'contact', label: 'Contact', Component: Contact },
]

export default function App() {
  const [activeId, setActiveId] = useState('about')
  const activeIndex = TABS.findIndex((t) => t.id === activeId)

  return (
    <div className="page">
      <TopSection />
      <main className="lower">
        <div className="lower-inner">
          <TabNav tabs={TABS} activeId={activeId} onSelect={setActiveId} />
          <TabPanel tabs={TABS} activeIndex={activeIndex} activeId={activeId} />
        </div>
      </main>
      <ScrollHint watch={activeId} />
      <Footer />
    </div>
  )
}
