'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Globe, Database, Hospital, ShoppingCart, Package, CloudRain, Layers, CreditCard, HardDriveUpload, Scissors } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


const Projects = ({ standalone = false }) => {

    const projects = [
        {
            id: 1,
            title: 'Hyperplane - Collaborative Engineering Workspace',
            description:
                'A real-time Kanban workspace engineered for distributed teams. Features optimistic UI updates with automatic failure rollback, multi-user presence indicators, and integrated sprint velocity analytics.',
            image: '/hyperplane.png',
            technologies: ['React Router v7', 'Tailwind CSS v4', 'PostgreSQL', 'Framer Motion', 'Recharts'],
            github: 'https://github.com/GeraldCitadel/kanban-workspace',
            demo: 'https://kanban-workspace-dun.vercel.app',
            icon: Layers,
            gradient: 'from-cyan-500 to-blue-600',
        },
        {
            id: 2,
            title: 'SaaS Micro-Subscription & Billing Platform',
            description:
                'A production billing engine featuring tiered subscription plans, Stripe webhook processing with idempotency guards, role-based access control (RBAC), and automated usage-based quota enforcement.',
            image: '/saas-micro.png',
            technologies: ['React Router v7', 'Stripe API', 'PostgreSQL', 'Tailwind CSS v4', 'Prisma'],
            github: 'https://github.com/GeraldCitadel/saas-micro-sub',
            demo: 'https://saas-micro-sub.vercel.app',
            icon: CreditCard,
            gradient: 'from-emerald-500 to-teal-600',
        },
        {
            id: 3,
            title: 'OutNext - Tailoring Business Management',
            description:
                'Modern accounting and inventory management software for tailoring businesses. Track customers, orders, inventory, and finances.',
            image: '/outnext.png',
            technologies: ['React Router v8', 'Tailwind CSS v4', 'Framer Motion'],
            github: 'https://github.com/GeraldCitadel/out-next-inventory',
            demo: 'https://out-next-inventory.vercel.app/',
            icon: Scissors,
            gradient: 'from-emerald-200 to-emerald-600',
        },
        {
            id: 4,
            title: 'CloudFlow - Resumable Media Processing Engine',
            description:
                'High-performance storage engine featuring chunked resumable file uploads (network drop recovery), Cloudflare R2 presigned storage, and asynchronous background queue processing for media transformations.',
            image: '/cloudflow.png',
            technologies: ['React Router v7', 'Cloudflare R2', 'PostgreSQL', 'Tailwind CSS v4', 'Recharts'],
            github: 'https://github.com/GeraldCitadel/cloudflow-engine',
            demo: 'https://cloudflow-engine.vercel.app/',
            icon: HardDriveUpload,
            gradient: 'from-purple-600 to-indigo-600',
        },
        {
            id: 5,
            title: 'Social Media Dashboard',
            description:
                'Analytics dashboard for social media management with data visualization, scheduling features, and performance metrics.',
            image: '/media.webp',
            technologies: ['React Router v8', 'ReChart.js', 'Tailwind CSS v4'],
            github: 'https://github.com/GeraldCitadel/social-dashboard',
            demo: 'https://social-dashboard-kappa-tan.vercel.app/',
            icon: Globe,
            gradient: 'from-orange-500 to-red-500',
        },
        {
            id: 6,
            title: 'Healthcare Appointment Booking Platform',
            description:
                'Enables users to seamlessly schedule appointments with doctors. It features user authentication, and secure booking workflows.',
            image: '/physionet.png',
            technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS v4'],
            github: 'https://github.com/GeraldCitadel',
            demo: 'https://physionet-frontend.vercel.app/',
            icon: Hospital,
            gradient: 'from-blue-500 to-purple-600',
        },
        {
            id: 7,
            title: 'E-Commerce Platform',
            description:
                'A full-stack e-commerce solution that features include user authentication, payment processing, and admin dashboard.',
            image: '/commerce.webp',
            technologies: ['Next.js', 'Node.js', 'MongoDB', 'Clerk', 'Paystack'],
            github: 'https://github.com/GeraldCitadel',
            demo: 'https://erezmal.vercel.app/',
            icon: ShoppingCart,
            gradient: 'from-purple-500 to-pink-500',
        },
        {
            id: 8,
            title: 'Parcel Tracking Web Application',
            description:
                'Developed with React, this platform allows users to track the real-time status and location of their parcels using a unique tracking number.',
            image: '/tracking.png',
            technologies: ['Next.js', 'Node.js', 'Express.js', 'Firebase'],
            github: 'https://github.com/GeraldCitadel/Tracking-frontend',
            demo: 'https://tracking-website-frontend-beta.vercel.app/',
            icon: Package,
            gradient: 'from-red-500 to-orange-500',
        },
        {
            id: 9,
            title: 'Weather App',
            description:
                'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
            image: '/weather.webp',
            technologies: ['React Router v8', 'OpenWeatherMap API', 'Tailwind CSS v4'],
            github: 'https://github.com/GeraldCitadel/weather-dashboard',
            demo: 'https://weather-dashboard-omega-drab.vercel.app/',
            icon: CloudRain,
            gradient: 'from-green-500 to-emerald-500',
        },
        // {
        //     id: 10,
        //     title: 'Task Management App',
        //     description:
        //         'A collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.',
        //     image: '/task.webp',
        //     technologies: ['React', 'Firebase', 'Socket.io'],
        //     github: 'https://github.com/GeraldCitadel',
        //     demo: 'https://github.com/GeraldCitadel',
        //     icon: Database,
        //     gradient: 'from-blue-500 to-cyan-500',
        // },
    ];

    return (
        <section
            id="projects"
            className={`py-20 ${standalone ? 'min-h-screen' : ''} bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
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
