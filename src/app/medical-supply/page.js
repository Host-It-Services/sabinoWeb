"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, useReducedMotion, AnimatePresence } from "framer-motion"
import { Check } from "lucide-react"
import MedicalSupplyNav from "../../components/MedicalSupplyNav"
import { Download } from "lucide-react"
import { Link } from "react-scroll";





export default function MedicalSupply() {
    const [activeCategory, setActiveCategory] = useState(0)
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

    const categories = [
        {
            title: "Dressings Tools",
            items: [
                "Vaccine Syringes",
                "Hypodermic Needles",
                "Paediatric Urine Bags",
                "Suction Catheters/Tubes",
                "Mucus Extractors",
                "Yankauers (Adult and Paediatric)",
                "Breathing Filter Circuits (Adult and Paediatric)",
                "Feeding Tubes (size 6 and 8)",
                "Nelaton Catheters",
                "IV Sets (Burrete)",
                "Insulin Syringes",
                "Spinal Needles",
                "IV cannulas",
                "Infusion Sets",
                "Foley Caths",
                "Tongue Depressors",
            ],
        },
        {
            title: "Medical Equipment",
            items: [
                "Ventilators",
                "Oxygen Concentrators",
                "Syringe Pumps",
                "Operation Tables",
                "Infant Incubators",
                "Operation Lamps",
                "ECG Machines",
                "Radiography Systems",
                "Blood Analysers",
                "Urine Analysers",
                "Biochemistry Analysers",
            ],
        },
        {
            title: "PPE",
            items: [
                "Face Masks",
                "Bouffant Caps",
                "Nitrite Gloves",
                "Shoe Covers",
                "Isolation Gowns",
                "Urine Caps",
                "Latex Gloves",
                "Surgical Gloves",
                "Cover Alls",
                "Surgical Caps",
                "Clip Caps",
            ],
        },
        {
            title: "Surgical Dressings",
            items: [
                "Eye Pads",
                "Gauze Swabs",
                "Cotton Wool Balls",
                "Urine Bags",
                "Surgical Gloves",
                "Cotton Rolls",
                "Cotton Wool Pleats",
                "Gauze Rolls",
                "Lap Sponges",
                "Alcohol Pads",
                "Cotton Tipped Applicators",
                "Non-Woven Swabs",
                "Dental Cotton Rol",
            ],
        },
        {
            title: "Laboratory Products",
            items: [
                "Blood Counting Chamber",
                "Cover Glass",
                "Microscope Slide",
                "Petri Dish",
                "Centrifuge Tube",
                "Test Tube",
                "Urine Cup",
                "Pipette Tip",
                "Stool Cup",
            ],
        },
    ]

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
        const pdfUrl = "/SABINO Medical Supply Profile (2).pdf"
        const link = document.createElement("a")
        link.href = pdfUrl
        link.download = "Sabino-Medicals-Profile.pdf"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <div className="bg-gray-50">
            <MedicalSupplyNav />
            {/* Hero Section */}
            <section className="relative h-screen bg-gradient-to-br from-[#052659] to-[#1E3A8A] flex items-center justify-center text-center text-white px-4">
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
                        SABINO MEDICALS
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl lg:text-2xl mb-8"
                        variants={fadeInUpVariants}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Your partner of choice for all your medical supplies
                    </motion.p>

                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <Link href="products" className="w-full sm:w-auto">
                            <motion.button
                                className="w-full sm:w-auto bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300"
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
                            className="w-full sm:w-auto bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-blue-600 transition duration-300 flex items-center justify-center"
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



            {/* About Section */}
            <section className="py-16 md:py-20 bg-white" id="about">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                    <motion.div
                        className="md:w-1/2 mb-8 md:mb-0 w-full" // Ensure full width on mobile
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeInVariants}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        {/* Add a border for debugging */}
                        <div className="relative w-full h-0 pb-[50%] md:pb-[75%]  ">
                            <Image
                                src="/3700473.webp"
                                alt="About Duex Medicals"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-xl shadow-lg"
                                priority // Preload this image
                                placeholder="blur"
                                blurDataURL="/3700473-blur.webp" // Add a low-quality placeholder
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        className="md:w-1/2 md:pl-12"
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeInVariants}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">A Little About Us</h2>
                        <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed">
                            Sabino Medicals is your partner of choice for all your medical Supplies. With a network of many
                            manufacturers around the world, Sabino is able to supply a wide range of Medical Tools, Dressings, Lab
                            Equipment, Protective Clothing etc.
                        </p>
                        <p className="text-gray-700 font-semibold text-base md:text-lg">
                            At Sabino we value Quality, Timely Delivery and Affordable Products.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Product Categories */}
            <section className="py-16 md:py-20 bg-gray-100" id="products">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10 md:mb-14">
                        Our Products Categories
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={`px-4 md:px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${activeCategory === index ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-blue-100"
                                    }`}
                                onClick={() => setActiveCategory(index)}
                            >
                                {category.title}
                            </button>
                        ))}
                    </div>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            className="bg-white rounded-lg shadow-lg p-6 md:p-8"
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={fadeInVariants}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
                                {categories[activeCategory].title}
                            </h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {categories[activeCategory].items.map((item, itemIndex) => (
                                    <motion.li
                                        key={itemIndex}
                                        className="flex items-center text-gray-600 text-sm"
                                        variants={fadeInVariants}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{ delay: itemIndex * 0.05 }}
                                    >
                                        <Check className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0" />
                                        <span>{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12 text-blue-600">Featured Products</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Reclining high back wheelchair",
                                description:
                                    "Whether you are mobile enough to maneuver a manual wheelchair on your own, or you need a caregiver transport chair or an electric power wheelchair, we're here to help you find the perfect fit in no time.",
                                image: "/wheelchair.webp",
                            },
                            {
                                name: "Alloy Adjustable Elbow Forearm Crutch",
                                description:
                                    "If you are having a lot of pain, weakness, or problems with balance. A walker may be a better option for you than crutches.",
                                image: "/mage.webp",
                            },
                            {
                                name: "Plastic Aprons",
                                description:
                                    "Flat Pack of 100 white disposable polythene aprons 80 Gauge thickness. Pack can be hung on wall or stored flat. Ideal for use in the home, clinical environment.",
                                image: "/preview.webp",
                            },
                        ].map((product, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-50 rounded-lg shadow-lg overflow-hidden"
                                initial="hidden"
                                whileInView="visible"
                                variants={fadeInUpVariants}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Image
                                    src={product.image || "/placeholder.svg"}
                                    alt={product.name}
                                    width={400}
                                    height={300}
                                    className="w-full h-56 object-cover"
                                    priority={index === 0} // Preload the first image
                                    placeholder="blur"
                                    blurDataURL={`${product.image}-blur.webp`} // Add a low-quality placeholder
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-3 text-blue-600">{product.name}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

