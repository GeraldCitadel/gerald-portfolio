'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const logos = [
    '/vitality.png',
    '/saints.png',
    '/erezmal.png',
    '/vmls.png',
    '/faith.png',
    '/investora.png',
    '/physio.png',

]

export default function ClientLogos() {
    return (
        <section className='bg-gray-50 dark:bg-gradient-to-r from-gray-900 to-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-300'>
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-center ">Clients</h2>
            <div className="overflow-hidden py-16 px-12  m-auto">
                <motion.div
                    className="flex gap-12 w-max"
                    animate={{ x: ['0%', '-40%'] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: 'loop',
                        duration: 20,
                        ease: 'linear',
                    }}
                >
                    {/* Duplicate logos to ensure smooth loop */}
                    {[...logos, ...logos].map((src, index) => (
                        <Image
                            key={index}
                            src={src}
                            alt={`partner-${index}`}
                            width={100}
                            height={50}
                            className="object-contain"
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
