"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { Leaf, Wrench, Plug, Hammer } from "lucide-react";
import { Truck, Building, HardHat, Users, Award, ArrowRight } from "lucide-react"
import ConstructionNav from "../../components/ConstructionNav"
import { Download } from "lucide-react"


export default function Construction() {
    const shouldReduceMotion = useReducedMotion()
    const [activeTab, setActiveTab] = useState(0)
    const servicesRef = useRef(null)
    const projectsRef = useRef(null)
    const equipmentRef = useRef(null)
    const teamRef = useRef(null)

    const fadeInUpVariants = {
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
        visible: { opacity: 1, y: 0 },
    }

    const fadeInVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    const services = [
        {
            title: "Landscape & Gardening",
            description:
                "Transform your outdoor space with expert landscaping, lawn care, exterior décor, and effective pest control solutions.",
            icon: <Leaf className="w-12 h-12 text-[#f5b642]" />,
            image: "/gadering.webp",
        },
        {
            title: "Plumbing Services",
            description:
                "From swimming pool installations to leak repairs, plumbing services, and thorough cleaning & maintenance.",
            icon: <Wrench className="w-12 h-12 text-[#f5b642]" />,
            image: "/plomb.webp",
        },
        {
            title: "Electrical Services",
            description:
                "Expert electrical installations, CCTV setup, electric fencing, and motorized gate automation for your security and convenience.",
            icon: <Plug className="w-12 h-12 text-[#f5b642]" />,
            image: "/electricien.webp",
        },
        {
            title: "Construction & Maintenance",
            description:
                "Comprehensive interior and exterior décor, building maintenance, construction, painting, roofing, ceilings, and carpentry services.",
            icon: <Hammer className="w-12 h-12 text-[#f5b642]" />,
            image: "/constructions.webp",
        },
    ];


    const team = [
        {
            name: "Civil Engineers",
            description:
                "Our team of certified civil engineers ensures structural integrity and compliance with building codes.",
            icon: <Users className="w-10 h-10 text-[#f5b642]" />,
        },
        {
            name: "Project Managers",
            description: "Experienced project managers who oversee every aspect of construction from planning to completion.",
            icon: <HardHat className="w-10 h-10 text-[#f5b642]" />,
        },
        {
            name: "Safety Specialists",
            description: "Dedicated safety specialists who maintain strict safety protocols on all our construction sites.",
            icon: <Award className="w-10 h-10 text-[#f5b642]" />,
        },
    ]

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth" })
    }

    const handleDownloadProfile = () => {
        // The path is relative to the public directory
        const pdfUrl = "/sabino-consruction-Copy.pdf"
        const link = document.createElement("a")
        link.href = pdfUrl
        link.download = "sabino-consruction-Copy.pdf"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }


    return (
        <div className="bg-gray-50">
            <ConstructionNav />
            {/* Hero Section */}
            <section className="relative h-screen bg-[#253356] flex items-center justify-center text-center text-white px-4">

                <motion.div
                    className="relative z-10 max-w-4xl"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInVariants}
                    transition={{ duration: 0.5 }}
                >
                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
                        variants={fadeInUpVariants}
                        transition={{ duration: 0.5 }}
                    >
                        SABINO <span className="text-[#f5b642]">CONSTRUCTION</span>
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
                        variants={fadeInUpVariants}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Building the future with excellence, innovation, and integrity
                    </motion.p>


                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <motion.button
                            onClick={() => scrollToSection(servicesRef)}
                            className="w-full sm:w-auto bg-[#f5b642] text-[#253356] font-bold py-3 px-8 rounded-full hover:bg-white hover:text-[#f5b642] transition duration-300"
                            variants={fadeInUpVariants}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                        >
                            Our Specialties
                        </motion.button>

                        <motion.button
                            onClick={handleDownloadProfile}
                            className="w-full sm:w-auto bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-[#f5b642] transition duration-300 flex items-center justify-center"
                            variants={fadeInUpVariants}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                        >
                            <Download className="w-5 h-5 mr-2" />
                            Download Profile
                        </motion.button>
                    </div>
                </motion.div>
            </section>

            {/* About Us Section */}
            <section className="py-10 sm:py-20 bg-white" id="about-constuction">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-8 sm:mb-16"
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeInUpVariants}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-[#253356] mb-4">About Us</h2>
                        <div className="w-24 h-1 bg-[#f5b642] mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Building excellence through innovation, integrity.
                        </p>
                    </motion.div>

                    <div className="flex flex-col md:flex-row items-center gap-12">
                        {/* Image Container */}
                        <motion.div
                            className="w-full md:w-1/2"
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeInUpVariants}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative w-full h-auto md:h-[400px] rounded-xl overflow-hidden shadow-xl">
                                <Image
                                    src="/about-us.webp"
                                    alt="Construction team"
                                    width={600} // Fixed width
                                    height={400} // Fixed height
                                    className="w-full h-auto rounded-xl shadow-lg"
                                    priority // Just set the attribute, no need for {true}
                                    placeholder="blur"
                                    blurDataURL="/about-us.webp" // Use a smaller, blurred version of the image
                                />

                            </div>
                        </motion.div>

                        {/* Text Content */}
                        <motion.div
                            className="w-full md:w-1/2"
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeInUpVariants}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold text-[#253356] mb-4">Our Story</h3>
                            <p className="text-gray-600 mb-6">
                                Based in Capetown we specialize in landscape gardening, paving, construction maintenance,
                                electronics (CCTV, electric fences, gates), carpentry, roofing, painting, plumbing, and decorative services.
                                Trusted for quality and professionalism, we deliver tailored solutions for all your construction and maintenance needs.
                            </p>

                            <h3 className="text-2xl font-bold text-[#253356] mb-4">Our Mission</h3>
                            <p className="text-gray-600 mb-6">
                                To deliver exceptional construction services that exceed client expectations, while maintaining the
                                highest standards of safety, quality, and environmental responsibility.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section ref={servicesRef} className="py-10 sm:py-20 bg-white" id="Specialties-constuction">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-8 sm:mb-12"
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeInUpVariants}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-[#253356] mb-4">Our Specialties</h2>
                        <div className="w-24 h-1 bg-[#f5b642] mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We provide comprehensive construction services tailored to meet the unique needs of each project.
                        </p>
                    </motion.div>

                    {/* Mobile-friendly tabs */}
                    <div className="flex overflow-x-auto pb-2 mb-4 sm:mb-6 md:hidden">
                        {services.map((service, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`flex-shrink-0 px-4 py-2 mr-2 rounded-full text-sm font-medium transition-colors duration-300 ${activeTab === index ? "bg-[#253356] text-white" : "bg-gray-100 text-[#253356] hover:bg-gray-200"
                                    }`}
                            >
                                {service.title}
                            </button>
                        ))}
                    </div>

                    {/* Desktop layout */}
                    <div className="hidden md:flex md:flex-row">
                        <div className="md:w-1/3 mb-8 md:mb-0">
                            <div className="sticky top-24">
                                {services.map((service, index) => (
                                    <motion.div
                                        key={index}
                                        className={`p-4 mb-4 rounded-lg cursor-pointer transition-all duration-300 ${activeTab === index ? "bg-[#253356] text-white shadow-lg" : "bg-gray-100 hover:bg-gray-200"
                                            }`}
                                        onClick={() => setActiveTab(index)}
                                        initial="hidden"
                                        whileInView="visible"
                                        variants={fadeInUpVariants}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="flex items-center">
                                            <div className={`mr-4 ${activeTab === index ? "text-[#f5b642]" : ""}`}>{service.icon}</div>
                                            <div>
                                                <h3 className="font-bold text-lg">{service.title}</h3>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <div className="md:w-2/3 md:pl-12">
                            <motion.div
                                key={`desktop-${activeTab}`}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white rounded-xl shadow-xl overflow-hidden"
                            >
                                <div className="relative h-96">
                                    <Image
                                        src={services[activeTab].image}
                                        alt={services[activeTab].title}
                                        layout="fill"
                                        objectFit="cover"
                                        priority
                                        placeholder="blur"
                                        blurDataURL={services[activeTab].blurImage || "/fallback-blur-image.jpg"} // Use a fallback if blurImage is missing
                                    />


                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-[#253356] mb-4">{services[activeTab].title}</h3>
                                    <p className="text-gray-600 ">{services[activeTab].description}</p>

                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Mobile content */}
                    <motion.div
                        key={`mobile-${activeTab}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="md:hidden bg-white rounded-xl shadow-xl overflow-hidden"
                    >
                        <div className="relative h-64">

                            <Image
                                src={services[activeTab].image}
                                alt={services[activeTab].title}
                                layout="fill"
                                objectFit="cover"
                                priority // Ensures it loads ASAP
                                unoptimized={typeof services[activeTab].image === "string"} // Use only if loading from external URLs
                            />

                        </div>
                        <div className="p-6">
                            <div className="flex items-center mb-4">
                                <div className="bg-[#253356] p-3 rounded-lg mr-4">
                                    <div className="text-[#f5b642]">{services[activeTab].icon}</div>
                                </div>
                                <h3 className="text-xl font-bold text-[#253356]">{services[activeTab].title}</h3>
                            </div>
                            <p className="text-gray-600 mb-6">{services[activeTab].description}</p>
                            <button className="flex items-center text-[#f5b642] font-semibold hover:underline">
                                Learn more <ArrowRight className="ml-2 w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>




            {/* Team/Expertise Section */}
            <section ref={teamRef} className="py-20 bg-white" id="constuction-expertise">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeInUpVariants}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-[#253356] mb-4">Our Expertise</h2>
                        <div className="w-24 h-1 bg-[#f5b642] mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Our team of professionals brings decades of combined experience to every construction project.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-50 rounded-xl p-8 text-center shadow-lg border-t-4 border-[#f5b642]"
                                initial="hidden"
                                whileInView="visible"
                                variants={fadeInUpVariants}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex justify-center mb-4">{member.icon}</div>
                                <h3 className="text-xl font-bold text-[#253356] mb-3">{member.name}</h3>
                                <p className="text-gray-600">{member.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-[#f5b642] to-[#1a2540]">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-5xl mx-auto"
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeInUpVariants}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex flex-col md:flex-row items-center">
                            {/* Text Content */}
                            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                                <h2 className="text-2xl sm:text-3xl font-bold text-[#253356] mb-4">
                                    Ready to Start Your Construction Project?
                                </h2>
                                <p className="text-gray-600 mb-6 text-base sm:text-lg">
                                    Contact us today to discuss your construction needs and get a free consultation and quote.
                                </p>
                                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                    <Link href="/contact">
                                        <motion.button
                                            className="bg-[#f5b642] text-[#253356] font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition duration-300"
                                            whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                                            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                                        >
                                            Contact Us
                                        </motion.button>
                                    </Link>
                                </div>
                            </div>

                            {/* Image */}
                            <div className="md:w-1/3 w-full flex justify-center">
                                <div className="relative h-40 md:h-60 w-full">
                                    <Image
                                        src="/laptop.webp"
                                        alt="Construction project"
                                        layout="responsive"
                                        width={600}
                                        height={400}
                                        className="w-full h-auto rounded-xl shadow-lg"
                                        priority
                                        blurDataURL="/laptop.webp" // Replace with actual base64 string



                                    />

                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    )
}

