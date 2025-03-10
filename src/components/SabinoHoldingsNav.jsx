"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const SabinoHoldingNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = () => {
    setIsOpen(false) // Close the menu when a link is clicked
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 text-white transition-shadow shadow-md bg-black bg-opacity-30 backdrop-blur-md transform-none"
      style={{ willChange: "transform" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/sabinmo-holding" className="flex-shrink-0">
              <img 
               src="/sabino logo.png"
                alt="Medical Supply Logo"
                width={150} // Adjust based on your logo's aspect ratio
               height={40} // Adjust based on your logo's aspect ratio
              className="h-10 w-auto" // Ensure the image scales properly
              priority // Preload this image since it's above the fold
                 />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="hover:backdrop-blur px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="#strategy"
                className="hover:backdrop-blur px-3 py-2 rounded-md text-sm font-medium"
              >
                Strategy
              </Link>
              <Link
                href="#productssabino"
                className="hover:backdrop-blur px-3 py-2 rounded-md text-sm font-medium"
              >
                Products
              </Link>
              <Link href="#mining" className="hover:backdrop-blur px-3 py-2 rounded-md text-sm font-medium">
              Mining
              </Link>
              <Link
               href="/contact"
                className="hover:backdrop-blur px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:backdrop-blur focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              onClick={handleLinkClick} // Close the menu when clicked
              className="hover:backdrop-blur px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="#strategy"
              onClick={handleLinkClick} // Close the menu when clicked
              className="hover:backdrop-blur block px-3 py-2 rounded-md text-base font-medium"
            >
              Strategy
            </Link>
            <Link
              href="#productssabino"
              onClick={handleLinkClick} // Close the menu when clicked
              className="hover:backdrop-blur block px-3 py-2 rounded-md text-base font-medium"
            >
              Products
            </Link>
            <Link
              href="#mining"
              onClick={handleLinkClick} // Close the menu when clicked
              className="hover:backdrop-blur block px-3 py-2 rounded-md text-base font-medium"
            >
              Mining
            </Link>
            <Link
                href="/contact"
              onClick={handleLinkClick} // Close the menu when clicked
              className="hover:backdrop-blur block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default SabinoHoldingNav
