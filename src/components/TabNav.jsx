export default function TabNav({ tabs, activeId, onSelect }) {
  return (
    <nav className="tab-nav" aria-label="Sections">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab-nav__item${tab.id === activeId ? ' is-active' : ''}`}
          onClick={() => onSelect(tab.id)}
          aria-current={tab.id === activeId ? 'true' : undefined}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  )
}
