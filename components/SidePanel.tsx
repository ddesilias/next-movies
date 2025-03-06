'use client'

import React from 'react'
import { unstable_ViewTransition as ViewTransition } from 'react'

interface SidePanelProps {
  children: React.ReactNode
}

const SidePanel: React.FC<SidePanelProps> = ({ children }) => {
  return (
    <>
      <ViewTransition name="side-panel-background">
        <div className="fixed inset-0 bg-black/50 z-5 flex justify-end"></div>
      </ViewTransition>
      <ViewTransition name="side-panel">
        <div className="fixed z-10 w-1/2 right-0 top-0 h-full">{children}</div>
      </ViewTransition>
    </>
  )
}

export default SidePanel
