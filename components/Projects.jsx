'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Globe, Database, Hospital, ShoppingCart, Package, CloudRain } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Projects = ({ standalone = false }) => {
    const projects = [
        {
            id: 1,
            title: 'Healthcare Appointment Booking Platform',
            description:
                'Enables users to seamlessly schedule appointments with doctors. It features user authentication, and secure booking workflows.',
            image:
                '/physionet.png',
            technologies: ['React', 'Node.js', 'MongoDB', "Express.js"],
            github: 'https://github.com/GeraldCitadel',
            demo: 'https://physionet-frontend.vercel.app/',
            icon: Hospital,
            gradient: 'from-blue-500 to-purple-600',
        },
        {
            id: 2,
            title: 'E-Commerce Platform',
            description:
                'A full-stack e-commerce solution that features include user authentication, payment processing, and admin dashboard.',
            image:
                '/commerce.webp',
            technologies: ['Next.js', 'Node.js', 'MongoDB', 'Clerk', 'Paystack'],
            github: 'https://github.com/GeraldCitadel',
            demo: 'https://erezmal.vercel.app/',
            icon: ShoppingCart,
            gradient: 'from-purple-500 to-pink-500',
        },
        {
            id: 3,
            title: 'Parcel Tracking Web Application',
            description:
                'Developed with React, this platform allows users to track the real-time status and location of their parcels using a unique tracking number.',
            image:
                '/tracking.png',
            technologies: ['Next.js', 'Node.js', "Express.js", 'Firebase',],
            github: 'https://github.com/GeraldCitadel/Tracking-frontend',
            demo: 'https://tracking-website-frontend-beta.vercel.app/',
            icon: Package,
            gradient: 'from-red-500 to-orange-500',
        },
        {
            id: 4,
            title: 'Weather App',
            description:
                'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
            image: '/weather.webp',
            technologies: ['React', 'OpenWeatherMap API',],
            github: 'https://github.com/GeraldCitadel/Weather-App-with-React',
            demo: 'https://weather-app-mu-five-37.vercel.app/',
            icon: CloudRain,
            gradient: 'from-green-500 to-emerald-500',
        },
        {
            id: 5,
            title: 'Task Management App',
            description:
                'A collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.',
            image:
                '/task.webp',
            technologies: ['React', 'Firebase', 'Socket.io'],
            github: 'https://github.com/GeraldCitadel',
            demo: 'https://github.com/GeraldCitadel',
            icon: Database,
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            id: 6,
            title: 'Social Media Dashboard',
            description:
                'Analytics dashboard for social media management with data visualization, scheduling features, and performance metrics.',
            image: "/media.webp",
            technologies: ['React', 'Chart.js', 'Express.js', 'MongoDB'],
            github: 'https://github.com/GeraldCitadel',
            demo: 'https://github.com/GeraldCitadel',
            icon: Globe,
            gradient: 'from-orange-500 to-red-500',
        },
    ];

    return (
        <section
            id="projects"
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
                    <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
                        Featured Projects
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto">
                        Here are some of my recent projects that showcase my skills and passion for development.
                    </p>
                </motion.div>

                <Swiper
                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                        // bulletClass: 'swiper-pagination-bullet !bg-white',
                        // bulletActiveClass: '!w-6 !bg-primary !text-primary !rounded',
                    }}
                    spaceBetween={30}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 3 },
                    }}
                    className="!pb-12"
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={project.id}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                                    />
                                    <div
                                        className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-full flex items-center justify-center`}
                                    >
                                        <project.icon className="w-6 h-6 text-white" />
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-100 text-sm rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex space-x-4">
                                        <motion.a
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                                        >
                                            <Github className="w-5 h-5" />
                                            <span>Code</span>
                                        </motion.a>
                                        <motion.a
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-2 text-primary hover:text-secondary transition-colors"
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                            <span>Live Demo</span>
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                    {/* Custom pagination styling */}
                    <div className="swiper-pagination mt-8 !relative !bottom-0 flex justify-center gap-2" />
                </Swiper>
            </div>

            <style jsx global>{`
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background-color: #3b82f6;
          border-radius: 9999px;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          width: 24px;
          background-color: #3b82f6;
        }
      `}</style>
        </section>
    );
};

export default Projects;
