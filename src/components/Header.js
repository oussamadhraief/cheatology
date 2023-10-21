import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

export default function Header() {
  return (
    <header className="imported-background min-h-screen h-fit flex items-center justify-center pt-24">
        <Navbar />
        <Hero />
    </header>
  )
}
