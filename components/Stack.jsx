"use client"

import { motion } from 'framer-motion';

const Stack = () => {

 const technologies = [
    'React', 'JavaScript', 'Next.js', 'Node.js', 'MySQL',
    'MongoDB', 'Cloudinary', 'Git', 'GitHub', 'VS Code', 'Figma', 'Tailwind CSS', 'Bootsrap',
  ];


    return (
        <div className="space-y-4 px-6 md:px-20 py-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
            <h4 className="text-xl font-semibold text-primary">
                Technologies I Work With
            </h4>
            <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                    <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-gradient-to-r from-primary to-secondary text-white text-sm rounded-full font-medium cursor-default"
                    >
                        {tech}
                    </motion.span>
                ))}
            </div>
        </div>
    )
}

export default Stack