"use client"


import { useState } from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"
import Header from "../../components/Header"

export default function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const { scrollYProgress } = useViewportScroll()
    const backgroundColor = useTransform(scrollYProgress, [0, 0.1], ["#151c2b", "#aebc8d"])

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission logic here
        console.log("Form submitted:", { name, email, message })
        // Reset form fields
        setName("")
        setEmail("")
        setMessage("")
    }

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    }

    return (
        <div className="min-h-screen">
            <Header />
            <motion.div className="min-h-screen pt-24" style={{ backgroundColor }}>
                <main className="container mx-auto px-4 py-9">
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold text-center text-white mb-12"
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                    >
                        Contact Us
                    </motion.h1>
                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div
                            className="bg-white rounded-lg shadow-xl p-8"
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="text-2xl font-semibold text-[#7c816f] mb-6">Get in Touch</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-[#7c816f] mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full px-3 py-2 border border-[#aebc8d] rounded-md focus:outline-none focus:ring-2 focus:ring-[#7c816f]"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-[#7c816f] mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-3 py-2 border border-[#aebc8d] rounded-md focus:outline-none focus:ring-2 focus:ring-[#7c816f]"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-[#7c816f] mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="w-full px-3 py-2 border border-[#aebc8d] rounded-md focus:outline-none focus:ring-2 focus:ring-[#7c816f] h-32"
                                        required
                                    ></textarea>
                                </div>
                                <motion.button
                                    type="submit"
                                    className=" text-white px-6 py-2 rounded-md transition-colors duration-300"
                                    style={{ backgroundColor }}
                                >
                                    Send Message
                                </motion.button>
                            </form>
                        </motion.div>
                        <motion.div
                            className="bg-white rounded-lg shadow-xl p-8"
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            transition={{ delay: 0.4 }}
                        >
                            <h2 className="text-2xl font-semibold text-[#7c816f] mb-6">Contact Information</h2>
                            <div className="space-y-4">
                                <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
                                    <Mail className="text-[#7c816f] mr-4" />
                                    <p className="text-[#7c816f]">sales@sabinoholdings.com</p>
                                </motion.div>
                                <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
                                    <Phone className="text-[#7c816f] mr-4" />
                                    <p className="text-[#7c816f]">+27 76 653 8748</p>
                                </motion.div>
                                <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
                                    <MapPin className="text-[#7c816f] mr-4" />
                                    <p className="text-[#7c816f]">
                                        Willow Wood Office Park, Cnr 3rd Avenue & Cedar Road, Broadacres Johannesburg 2021
                                    </p>
                                </motion.div>
                            </div>
                            <div className="mt-8">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.6876614604493!2d28.010533015015287!3d-26.02229898352121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9576a69c1a0067%3A0x4c4c7c5c89b42dde!2sWillow%20Wood%20Office%20Park!5e0!3m2!1sen!2sus!4v1624291701934!5m2!1sen!2sus"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen={false}
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </motion.div>
                    </div>
                </main>
            </motion.div>
        </div>
    )
}

