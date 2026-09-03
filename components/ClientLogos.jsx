'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

// Map each logo with custom width constraints (in pixels)
const logos = [
  { src: '/vitality.png', name: 'Vitality', width: 120 },
  { src: '/saints.png', name: 'Saints', width: 50 },
  { src: '/erezmal.png', name: 'Erezmal', width: 150 },
  { src: '/vmls.png', name: 'VMLS', width: 35 },
  { src: '/faith.png', name: 'Faith', width: 100 },
  { src: '/investora.png', name: 'Investora', width: 130 },
  { src: '/physio.png', name: 'Physio', width: 120 },
  { src: '/imprompto.png', name: 'Imprompto', width: 120 },
]

export default function ClientLogos() {
  return (
    <section className="bg-gray-50 dark:bg-gradient-to-r from-gray-900 to-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <h2 className="text-4xl md:text-5xl font-bold text-primary text-center">Clients</h2>
      <div className="overflow-hidden py-16 px-12 m-auto">
        <motion.div
          className="flex items-center gap-12 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear',
          }}
        >
          {/* Duplicate logos array to guarantee seamless looping */}
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="relative h-12 flex items-center justify-center shrink-0"
              style={{ width: `${logo.width}px` }}
            >
              <Image
                src={logo.src}
                alt={`${logo.name} logo`}
                fill
                sizes="(max-width: 768px) 100px, 150px"
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}