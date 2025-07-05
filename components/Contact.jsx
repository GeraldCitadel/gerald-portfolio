'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, } from 'lucide-react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

const Contact = ({ standalone = false }) => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const form = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;


        emailjs.sendForm(serviceId, templateId, form.current, {
            publicKey: publicKey,
        })
            .then(
                () => {
                    console.log('SUCCESS!');
                    toast.success("Thank you for your message! I'll get back to you soon.");
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );


        setTimeout(() => {
            setIsSubmitting(false);
            setFormSubmitted(true);
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        }, 1500);

    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const contactInfo = [
        {
            icon: Phone,
            label: 'Phone',
            value: '+234 703 100 9615',
            href: 'tel:+2347031009615',
        },
        {
            icon: Mail,
            label: 'Email',
            value: 'geraldcitadel@gmail.com',
            href: 'mailto:geraldcitadel@gmail.com',
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Port Harcourt, Nigeria',
            href: '#',
        },
    ];

    const socialLinks = [
        { icon: FaGithub, label: 'GitHub', href: 'https://github.com', color: 'hover:text-gray-900' },
        { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/geraldcitadel', color: 'hover:text-blue-600' },
        { icon: FaXTwitter, label: 'Twitter', href: 'https://twitter.com/geraldcitadel', color: 'hover:text-blue-400' },
        { icon: FaFacebook, label: 'Facebook', href: 'https://facebook.com/geraldcitadel', color: 'hover:text-blue-400' },
    ];

    return (
        <section
            id="contact"
            className={`py-20 ${standalone ? 'min-h-screen' : ''} bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">Get In Touch</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto">
                        I'm always open to discussing new opportunities and interesting projects. Let's create something amazing together!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-primary mb-6">Let's Connect</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
                                Feel free to reach out if you have any questions or just want to say hello. I'll do my best to get back to you as soon as possible!
                            </p>
                        </div>

                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={info.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center space-x-4 group"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                                        <info.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900 dark:text-white">{info.label}</p>
                                        <a href={info.href} className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                                            {info.value}
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="pt-8">
                            <h4 className="text-lg font-semibold text-primary mb-4">Follow Me</h4>
                            <div className="flex space-x-4">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.label}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 ${social.color} transition-all duration-300 hover:shadow-md`}
                                    >
                                        <social.icon className="w-6 h-6" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl"
                    >
                        {formSubmitted ? (
                            <div className="text-center py-8">
                                <svg className="mx-auto h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h3 className="mt-4 text-xl font-semibold text-primary">Thank You!</h3>
                                <p className="mt-2 text-gray-700 dark:text-white">
                                    Your message has been successfully sent. I'll contact you very soon!
                                </p>
                                <button
                                    onClick={() => setFormSubmitted(false)}
                                    className="mt-6 bg-primary text-white rounded font-medium hover:opacity-90 py-2 px-3 cursor-pointer"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                                        placeholder="Your Name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="subject"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                                        placeholder="Subject"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${isSubmitting
                                            ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
                                            : 'bg-gradient-to-r from-primary to-secondary hover:shadow-lg cursor-pointer'
                                        } text-white`}
                                >
                                    {isSubmitting ? (
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    ) : (
                                        <Send className="w-5 h-5" />
                                    )}
                                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                                </motion.button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
