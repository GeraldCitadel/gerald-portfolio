'use client';

import { motion } from 'framer-motion';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import ScrollToTop from './ScrollToTop';


const Footer = () => {
    const currentYear = new Date().getFullYear();

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


    return (
        <footer className="bg-gray-800 text-white pt-12 pb-8 px-11 overflow-hidden">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        {/* <Image src={'/logo.png'} width={48} height={56} alt='logo' className="mb-4" /> */}
                        <h2 className='text-xl font-bold mb-4'>Gerald Citadel</h2>
                        <p className="text-gray-300 mb-4">
                            Full Stack Developer passionate about creating amazing digital experiences.
                        </p>
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

                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
                            <li><a href="#about" className="text-gray-300 hover:text-white">About</a></li>
                            <li><a href="#projects" className="text-gray-300 hover:text-white">Projects</a></li>
                            <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li><p className="text-gray-300 hover:text-white">Web Development</p></li>
                            <li><p className="text-gray-300 hover:text-white">Mobile Apps</p></li>
                            <li><p className="text-gray-300 hover:text-white">Consulting</p></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                        <address className="not-italic text-gray-300">
                            <p className="mb-2">Email: <a href="mailto:geraldcitadel@gmail.com">geraldcitadel@gmail.com</a></p>
                            <p className="mb-2">Phone: <a href="tel:+2347031009615">+234 703 100 9615</a></p>
                            <p className="mb-2">Port Harcourt, Nigeria</p>
                        </address>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
                    <p>&copy; {currentYear} Gerald Citadel. All rights reserved.</p>
                </div>
            </div>
            <ScrollToTop />
        </footer>
    );
};

export default Footer;