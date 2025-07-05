'use client';

import { motion } from 'framer-motion';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter, FaArrowRightLong } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import meshBg from '@/public/mesh.png'; 

const socialLinks = [
  {
    icon: <FaGithub />,
    bg: '#333',
    href: 'https://github.com/GeraldCitadel',
  },
  {
    icon: <FaLinkedin />,
    bg: '#0A66C2',
    href: 'https://www.linkedin.com/in/geraldcitadel',
  },
  {
    icon: <FaXTwitter />,
    bg: '#000',
    href: 'https://www.twitter.com/geraldcitadel',
  },
  {
    icon: <FaFacebook />,
    bg: '#1877F2',
    href: 'https://www.facebook.com/geraldcitadel',
  },
];

export default function Hero() {
  return (
    <section className="min-h-[70vh] md:min-h-screen flex items-center justify-between px-6 md:px-20 py-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300" id='home'>
      {/* Left Section */}
      <div className="flex-1 space-y-4">
        <h1 className="text-xl font-semibold text-white bg-primary rounded-full py-0 px-2 w-40">Gerald Citadel</h1>
        <h2 className="text-4xl md:text-5xl font-bold">HEY! I'M GERALD</h2>
        <div className="text-2xl md:text-3xl font-semibold text-secondary">
          <TypeAnimation
            sequence={[
              "I'M A FULLSTACK DEVELOPER",
              2000,
              "I'M A BRAND STRATEGIST",
              2000,
              "I'M A CREATIVE DESIGNER",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </div>
        <p className="max-w-md text-sm md:text-base text-gray-600 dark:text-gray-300">
          I build modern web applications with performance, accessibility and beautiful design in mind.
        </p>

        {/* Button and Socials */}
        <div className="flex items-center gap-4 flex-wrap mt-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-full text-sm font-medium hover:bg-opacity-80 transition"
          >
            Get in Touch <FaArrowRightLong />
          </a>

          {/* Social Icons */}
          <div className="flex gap-3 mt-2 md:mt-0">
            {socialLinks.map(({ icon, bg, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="w-10 h-10 rounded-full flex items-center justify-center border border-white"
                style={{ backgroundColor: bg, color: 'white' }}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative flex-1 hidden md:flex justify-center items-center">
        {/* Mesh background */}
        <Image
          src={meshBg}
          alt="mesh background"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-30 dark:opacity-20"
        />

        {/* Profile Image */}
        <div className="relative z-10">
          <Image
            src="/gerald1.png" 
            alt="Gerald Citadel"
            width={300}
            height={300}
            className="rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
          />
        </div>

        {/* Swinging Shapes */}
        <motion.div
          className="w-16 h-16 rounded-full bg-secondary absolute top-0 left-0"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="w-24 h-24 rounded-full bg-primary absolute bottom-0 right-0"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>
    </section>
  );
}
