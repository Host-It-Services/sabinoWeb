"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import SabinoHoldingsNav from "../../components/SabinoHoldingsNav"
import { Download } from "lucide-react"
import { Link } from "react-scroll";


export default function SabinoHoldings() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null); // Reference for the carousel container
    const shouldReduceMotion = useReducedMotion();
    const productminigref = useRef(null)

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth" })
    }


    const products = [
        {
            name: "Mining Equipment",
            description: "State-of-the-art mining equipment for efficient and safe operations.",
            image: "/engineering.webp",
        },
        {
            name: "Construction Tools",
            description: "High-quality construction tools for all your project needs.",
            image: "/repair-tools.webp",
        },
        {
            name: "Safety Gear",
            description: "Advanced safety gear to protect your workforce in hazardous environments.",
            image: "/headphones.webp",
        },
    ];

    // Go to the next product
    const nextProduct = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    };

    // Go to the previous product
    const prevProduct = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    };

    // Scroll to the current product when `currentIndex` changes
    useEffect(() => {
        if (carouselRef.current) {
            const scrollWidth = carouselRef.current.offsetWidth; // Get the width of the carousel container
            carouselRef.current.scrollTo({
                left: currentIndex * scrollWidth, // Scroll to the correct position
                behavior: "smooth",
            });
        }
    }, [currentIndex]);

    const fadeInUpVariants = {
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
        visible: { opacity: 1, y: 0 },
    }

    const fadeInVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    const handleDownloadProfile = () => {
        // The path is relative to the public directory
        const pdfUrl = "/SABINO-PROFILE-2025.pdf"
        const link = document.createElement("a")
        link.href = pdfUrl
        link.download = "SABINO-PROFILE-2025.pdf"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <div className="bg-[#aebc8d]">
            <SabinoHoldingsNav />
            {/* Hero Section */}
            <section className="relative h-screen bg-gradient-to-r from-[#21211f] to-[#aebc8d] flex items-center justify-center text-center text-white px-4">
                <motion.div
                    className="relative z-10 max-w-2xl"
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
                        SABINO MINING
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl mb-8 max-w-2xl"
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUpVariants}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        Mining Equipment, Tools and Services
                    </motion.p>
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <Link href="products" className="w-full sm:w-auto">

                            <motion.button
                                onClick={() => scrollToSection(productminigref)}
                                className="w-full sm:w-auto bg-white text-[#7c816f] font-bold py-3 px-8 rounded-full hover:bg-[#aebc8d] hover:text-white transition duration-300"
                                variants={fadeInUpVariants}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                                whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                            >
                                Explore Products
                            </motion.button>
                        </Link>

                        <motion.button
                            onClick={handleDownloadProfile}
                            className="w-full sm:w-auto bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-[#aebc8d] hover:text-white transition duration-300 flex items-center justify-center"
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

            {/* Strategy Section */}
            <section className="py-20 bg-white" id="strategy">
                <div className="container mx-auto px-4">
                    <motion.h2
                        className="text-4xl font-bold text-center mb-12 text-[#7c816f]"
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeInUpVariants}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Our Strategy
                    </motion.h2>
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <motion.div
                            className="md:w-1/2 mb-8 md:mb-0 md:pr-8"
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeInUpVariants}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-lg text-[#7c816f] mb-6">
                                To provide specialist mining supplies services to the mining industry.
                            </p>
                            <h3 className="text-2xl font-bold mb-4 text-[#7c816f]">Vision & Commitment</h3>
                            <p className="text-lg text-[#7c816f] mb-6">
                                Sabino Holdings Mining Supplies has a vision of becoming one of the foremost mining equipment suppliers
                                in South Africa. Our executives are committed to this vision and are actively seeking company
                                accreditation.
                            </p>
                        </motion.div>
                        <motion.div
                            className="md:w-1/2 w-full" // Ensure full width on mobile
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeInUpVariants}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            {/* Adjust padding-bottom for mobile and desktop */}
                            <div className="relative w-full h-0 pb-[50%] md:pb-[75%]">
                                <Image
                                    src="/5118031.webp"
                                    alt="Mining Equipment"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-xl shadow-lg"
                                    priority // Preload this image
                                    placeholder="blur"
                                    blurDataURL="/5118031-blur.webp" // Add a low-quality placeholder
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section ref={productminigref} className="py-20 bg-[#aebc8d]" id="productssabino">
                <div className="container mx-auto px-4">
                    <motion.h2
                        className="text-4xl font-bold text-center mb-12 text-white"
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeInUpVariants}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Our Products
                    </motion.h2>
                    <div className="relative">
                        {/* Carousel Container */}
                        <motion.div
                            ref={carouselRef}
                            className="flex overflow-x-hidden" // Hide scrollbar
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            {products.map((product, index) => (
                                <motion.div
                                    key={index}
                                    className="flex-none w-full" // Each product takes full width
                                    initial="hidden"
                                    animate="visible"
                                    variants={fadeInUpVariants}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="bg-white rounded-lg shadow-xl p-6 m-4 flex flex-col md:flex-row items-center">
                                        <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
                                            <Image
                                                src={product.image || "/placeholder.svg"}
                                                alt={product.name}
                                                width={600}
                                                height={400}
                                                className="rounded-lg object-cover w-full h-64"
                                                priority={index === 0} // Preload the first image
                                                placeholder="blur"
                                                blurDataURL={`${product.image}-blur.webp`} // Add a low-quality placeholder
                                            />
                                        </div>
                                        <div className="md:w-1/2">
                                            <h3 className="text-2xl font-semibold text-[#7c816f] mb-2">{product.name}</h3>
                                            <p className="text-[#7c816f]">{product.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevProduct}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-[#7c816f] hover:text-white transition-colors duration-300"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextProduct}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-[#7c816f] hover:text-white transition-colors duration-300"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center mt-6">
                        {products.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full mx-1 ${currentIndex === index ? "bg-[#7c816f]" : "bg-white"}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions Section */}
            <section className="py-20 bg-white text-[#7c816f]" id="mining">
                <div className="container mx-auto px-4">
                    <motion.h2
                        className="text-4xl font-bold text-center mb-12 text-[#7c816f]"
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeInUpVariants}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Revolutionizing the Mining Industry
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeInUpVariants}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold mb-6 text-[#7c816f]">Our Solutions Are:</h3>
                            <ul className="space-y-2 text-lg">
                                {[
                                    "Resistant to abrasion and chemicals",
                                    "Corrosion- and maintenance free",
                                    "Short lead-times and quick to install",
                                    "Flexible and light weight",
                                    "Reusable",
                                    "Low cost",
                                ].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        className="flex items-center"
                                        initial="hidden"
                                        whileInView="visible"
                                        variants={fadeInUpVariants}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <ChevronRight className="mr-2 text-[#aebc8d]" />
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeInUpVariants}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold mb-6 text-[#7c816f]">Employee Impairment and Fatigue Prevention</h3>
                            <p className="text-lg mb-4">
                                We encourage organizations to prioritize fatigue management and alertness testing. The benefits include:
                            </p>
                            <ul className="space-y-2 text-lg">
                                {[
                                    "Reduced employee turnover",
                                    "Improved productivity",
                                    "Improved night shift attendance",
                                    "Reduced accidents",
                                    "Reduced workers' compensation claims",
                                    "Greater visibility on employees' well-being",
                                    "Improved culture of safety",
                                ].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        className="flex items-center"
                                        initial="hidden"
                                        whileInView="visible"
                                        variants={fadeInUpVariants}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <ChevronRight className="mr-2 text-[#aebc8d]" />
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}

