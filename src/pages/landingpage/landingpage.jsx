import {TopBar, BottomBar} from '@/widgets/layout'
import {Mid} from '@/widgets/landing-page-components'
import React from 'react'

export function Landingpage() {
  return (
  <>
    <div className="">
    <img
        src="https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <TopBar />
      <Mid />
      <BottomBar />
    </ div>
    </>
  )
}

export default Landingpage