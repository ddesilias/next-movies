'use client'

import React from 'react'

interface SidePanelProps {
  children: React.ReactNode
}

const SidePanel: React.FC<SidePanelProps> = ({ children }) => {
  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex justify-end"
      style={{
        viewTransitionName: 'side-panel',
      }}
    >
      <div className="p-4 w-1/2 right-0">{children}</div>
    </div>
  )
}

export default SidePanel
