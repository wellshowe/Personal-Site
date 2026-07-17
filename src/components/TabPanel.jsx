export default function TabPanel({ tabs, activeIndex, activeId }) {
  const { Component } = tabs[activeIndex]

  return (
    <div className="tab-viewport">
      {/* key forces a remount on tab change, which retriggers the CSS entry animation */}
      <div className="tab-slide" key={activeId}>
        <Component />
      </div>
    </div>
  )
}
