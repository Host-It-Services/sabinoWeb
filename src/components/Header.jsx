"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";


const HomeNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false); // Close the menu when a link is clicked
    };

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 text-white transition-shadow shadow-md bg-black bg-opacity-30 backdrop-blur-md transform-none"
            style={{ willChange: "transform" }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0">
                            <Image
                                src="/sabino logo.png"
                                alt="Medical Supply Logo"
                                width={150} // Adjust based on your logo's aspect ratio
                                height={40} // Adjust based on your logo's aspect ratio
                                className="h-10 w-auto" // Ensure the image scales properly
                                priority // Preload this image since it's above the fold
                            />                        
                            </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link
                                href="/"
                                className="hover:backdrop-blur px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Home
                            </Link>
                            <Link
                                href="/medical-supply"
                                className="hover:backdrop-blur px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Medicals
                            </Link>
                            <Link
                                href="/sabinmo-holding"
                                className="hover:backdrop-blur px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Mining
                            </Link>
                            <Link
                                href="/construction"
                                className="hover:backdrop-blur px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Construction
                            </Link>
                            <Link
                                href="/contact"
                                className="hover:backdrop-blur px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:backdrop-blur focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        >
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link
                                href="/"
                                onClick={handleLinkClick}
                                className="hover:backdrop-blur block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Home
                            </Link>
                            <Link
                                href="/medical-supply"
                                onClick={handleLinkClick}
                                className="hover:backdrop-blur block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Medicals
                            </Link>
                            <Link
                                href="/sabinmo-holding"
                                onClick={handleLinkClick}
                                className="hover:backdrop-blur block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Mining
                            </Link>
                            <Link
                                href="/construction"
                                onClick={handleLinkClick}
                                className="hover:backdrop-blur block px-3 py-2 rounded-md text-base font-medium"
                            >
                                construction
                            </Link>
                            <Link
                                href="/contact" 
                                onClick={handleLinkClick}
                                className="hover:backdrop-blur block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default HomeNav;