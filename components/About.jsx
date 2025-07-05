'use client';

import { FaArrowRightLong } from "react-icons/fa6";
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <section
            id="about"
            className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-gray-50 dark:bg-gradient-to-r from-gray-900 to-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-300"
        >
            {/* Left: Picture */}
            <div className="relative w-full md:w-1/2 flex justify-center md:justify-start mb-10 md:mb-0">
                <Image
                    src="/gerald.png"
                    alt="Gerald Citade;"
                    width={300}
                    height={300}
                    className="rounded-xl shadow-lg border-4 border-primary dark:border-gray-700"
                />

                {/* Swinging Shapes */}
                <motion.div
                    className="w-24 h-24 rounded-full bg-primary absolute bottom-0 right-50"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />

                <motion.div
                    className="w-16 h-16 rounded-full bg-secondary absolute top-0 left-0"
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                />
            </div>

            {/* Right: Text and Button */}
            <motion.div
                className="w-full md:w-1/2 space-y-6"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">About Me</h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                    I'm a passionate fullstack developer and designer with a love for crafting modern web experiences.
                    With a deep understanding of both frontend and backend technologies, I focus on building performant, responsive, and user-friendly applications that stand out.
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                    Whether it's designing a sleek UI or architecting efficient APIs, I strive to deliver high-quality solutions that align with user needs and business goals.
                </p>

                <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-full text-sm font-medium hover:bg-opacity-80 transition w-fit"
                >
                    Get in Touch <FaArrowRightLong size={16} />
                </a>
            </motion.div>
        </section>
    );
}
