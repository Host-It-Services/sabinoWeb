"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ChevronRight, ArrowRight, CheckCircle } from "lucide-react"
import Header from "../components/Header"
import { Award, Users, Shield } from "lucide-react"



export default function Home() {
  const [hoveredCard, setHoveredCard] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }




  const values = [
    {
      title: "Commitment",
      description: "Dedication to long-term success and delivering lasting value.",
      icon: Award,
    },
    {
      title: "Client Satisfaction",
      description: "Prioritizing client needs and delivering tailored solutions.",
      icon: Users,
    },
    {
      title: "Reliability",
      description: "Delivering high-quality services across mining & medical industries.",
      icon: Shield,
    },
  ]

  return (
    <div className="bg-gray-50">
      <Header />
      {/* Hero Section */}
      <motion.section
        className="relative h-screen bg-gradient-to-r from-gray-800 to-gray-900"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ duration: 1 }}
      >

        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4"
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Innovating Industries, <br />
            Empowering Progress
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Discover how our diverse portfolio in medical supplies and construction is shaping the future of industries.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/medical-supply"
              className="bg-white text-gray-800 hover:bg-gray-200 font-bold py-3 px-6 rounded-lg transition duration-300 inline-block"
            >
              Explore Medicals
            </Link>
            <Link
              href="/sabinmo-holding"
              className="bg-white text-gray-800 hover:bg-gray-200 font-bold py-3 px-6 rounded-lg transition duration-300 inline-block"
            >
              Explore Mining
            </Link>
            <Link
              href="/construction"
              className="bg-white text-gray-800 hover:bg-gray-200 font-bold py-3 px-6 rounded-lg transition duration-300 inline-block"
            >
              Explore Construction
            </Link>
          </div>

        </motion.div>
      </motion.section>

      {/* Core Businesses Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-gray-800"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariants}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Core Businesses
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Sabino Medicals",
                description:
                  "Delivering cutting-edge medical equipment and supplies to healthcare facilities worldwide, ensuring better patient care and improved health outcomes.",
                image: "/delivering.webp",
                color: "blue",
                link: "/medical-supply",
              },
              {
                title: "Sabino Mining & construction",
                description:
                  "Pioneering sustainable solutions in mining and construction, we're building the infrastructure of tomorrow while preserving our planet's resources.",
                image: "/construction-.webp",
                color: "gray",
                link: "/sabinmo-holding",
              },
            ].map((business, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl"
                initial="hidden"
                whileInView="visible"
                variants={fadeInUpVariants}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <Image
                    src={business.image || "/placeholder.svg"}
                    alt={business.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                    priority // Preload this image
                    placeholder="blur"
                    blurDataURL={`${business.image}-blur.webp`} // Add a low-quality placeholder
                  />
                  {!isMobile && (
                    <motion.div
                      className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300"
                      animate={{ opacity: hoveredCard === business.title ? 1 : 0 }}
                    >
                      <Link
                        href={business.link}
                        className={`text-white bg-${business.color}-600 hover:bg-${business.color}-700 font-bold py-2 px-4 rounded-lg transition duration-300 inline-flex items-center`}
                      >
                        Learn More <ArrowRight className="ml-2" />
                      </Link>
                    </motion.div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className={`text-2xl font-bold mb-2 text-${business.color}-600`}>{business.title}</h3>
                  <p className="text-gray-600 mb-4">{business.description}</p>
                  <Link
                    href={business.link}
                    className={`text-${business.color}-600 hover:text-${business.color}-800 font-semibold flex items-center`}
                  >
                    Learn More
                    <ChevronRight className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-gray-800"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariants}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Values
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-lg"
                initial="hidden"
                whileInView="visible"
                variants={fadeInUpVariants}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  <value.icon className="w-12 h-12 " />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-gray-800"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariants}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Commitment
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Innovation",
                items: [
                  "Cutting-edge medical technology",
                  "Sustainable mining practices",
                  "Advanced construction techniques",
                ],
                iconColor: "text-blue-600",
              },
              {
                title: "Sustainability",
                items: [
                  "Eco-friendly product development",
                  "Responsible resource management",
                  "Community-focused initiatives",
                ],
                iconColor: "text-green-600",
              },
            ].map((commitment, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 rounded-lg p-6 shadow-lg"
                initial="hidden"
                whileInView="visible"
                variants={fadeInVariants}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{commitment.title}</h3>
                <ul className="space-y-2">
                  {commitment.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      className="flex items-center text-gray-700"
                      initial="hidden"
                      whileInView="visible"
                      variants={fadeInVariants}
                      transition={{ delay: itemIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className={`${commitment.iconColor} mr-2`} />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      {/* <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariants}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Industry?
          </motion.h2>
          <motion.p
            className="text-xl mb-8"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariants}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Join us in shaping the future of healthcare and sustainable development.
          </motion.p>
          <Link
            href="/contact"
            className="bg-white text-gray-800 hover:bg-gray-200 font-bold py-3 px-8 rounded-lg transition duration-300 inline-block"
          >
            Contact Us Today
          </Link>
        </div>
      </section> */}
    </div>
  )
}

