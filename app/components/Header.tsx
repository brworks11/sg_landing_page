'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-max">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-lg">SG</span>
            </div>
            <span className="text-xl font-bold text-secondary-800">StarGrove Distribution</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-secondary-600 hover:text-primary-600 transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-secondary-600 hover:text-primary-600 transition-colors duration-200"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('why-choose-us')}
              className="text-secondary-600 hover:text-primary-600 transition-colors duration-200"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-secondary-200">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-secondary-600 hover:text-primary-600 transition-colors duration-200 text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-secondary-600 hover:text-primary-600 transition-colors duration-200 text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('why-choose-us')}
                className="text-secondary-600 hover:text-primary-600 transition-colors duration-200 text-left"
              >
                Why Choose Us
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary w-full text-center"
              >
                Contact Us
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
} 