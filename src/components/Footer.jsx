"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { useState } from "react"

const Footer = () => {
  const pathname = usePathname();

  // Define color schemes for different pages
  const colorSchemes = {
    "/": {
      bg: "bg-[#1f2937]",
      text: "text-white",
      hover: "hover:text-gray-300",
      border: "border-gray-700",
    },
    "/medical-supply": {
      bg: "bg-[#4257eb]",
      text: "text-white",
      hover: "hover:text-gray-200",
      border: "border-blue-700",
    },
    "/sabinmo-holding": {
      bg: "bg-[#aebc8d]",
      text: "text-[#000000]",
      hover: "hover:text-[#5a5f4f]",
      border: "border-[#7c816f]",
    },
    "/construction": {
      bg: "bg-[#253356]",
      text: "text-white",
      hover: "hover:text-[#5a5f4f]",
      border: "border-[#f5b64]",
    },
  };

  // Get the color scheme based on the current route
  const currentScheme = colorSchemes[pathname] || colorSchemes["/"];

  return (
    <footer className={`${currentScheme.bg} ${currentScheme.text} py-16`} id="contact">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h4 className="text-xl font-semibold mb-6">About Us</h4>
            <p className={`${currentScheme.text} opacity-80 leading-relaxed`}>
              We are a diverse business group committed to innovation and excellence in medical supplies, mining equipment, and sustainable
              construction. Our mission is to provide top-quality products and services that improve lives and build a
              better future.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/medical-supply", label: "Medicals" },
                { href: "/sabinmo-holding", label: "Mining" },
                { href: "construction", label: "Construction" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`${currentScheme.text} opacity-80 hover:opacity-100 transition-opacity duration-300 ${currentScheme.hover}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-6">Connect With Us</h4>
            <div className="space-y-3">
              <div className="flex space-x-4 mt-2">


                <Link href={process.env.NEXT_PUBLIC_FACEBOOK_URL || '#'} target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
                  <Facebook className="w-6 h-6 hover:text-brown-600" />
                </Link>

                <Link href={process.env.NEXT_PUBLIC_LINKEDIN_URL || '#'} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6" />
                </Link>

                <Link href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#'} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-6 w-6" />
                </Link>

              </div>
            </div>
          </div>
        </div>
        <div className={`mt-12 pt-8 border-t ${currentScheme.border} text-center ${currentScheme.text} opacity-70`}>
          <p>&copy; {new Date().getFullYear()} Sabino Holdings. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;