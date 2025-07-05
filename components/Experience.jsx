'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const experiences = [
    {
  company: 'Aptiw Technologies',
  role: 'Fullstack Developer',
  period: 'On-site | Jan 2025 - Present',
  description:
    'Building and maintaining modern software solutions for clients across diverse industries.',
  url: 'https://aptiw.com',
    },
  {
    company: 'Vitality Investment Limited',
    role: 'Fullstack Developer',
    period: 'Remote | 2025',
    description:
      'Developed a responsive laundry and cleaning service website for Vitality Investment Limited using React, Node.js, and MongoDB.',
    url: 'https://vitality.ng',
  },
  {
    company: 'The Saints Online Memorial',
    role: 'Fullstack Developer',
    period: 'Remote | 2025',
    description:
      'Built a memorial website allowing users to honor lost loved ones with tributes, images, and messages of remembrance.',
    url: 'https://thesaints.online',
  },
  {
    company: 'Volunteer Medical Laboratory Scientists (VMLS)',
    role: 'Fullstack Developer',
    period: 'Remote | 2025',
    description:
      'Built an NGO platform connecting healthcare professionals for volunteering, outreach, and community service across Nigeria.',
    url: 'https://vmls.vercel.app',
  },
  {
    company: 'Erezmal Global Ventures',
    role: 'Fullstack Developer',
    period: 'Remote | 2024',
    description:
      'Developed an ecommerce website for communication devices and accessories with secure checkout and admin management.',
    url: 'https://erezmal.vercel.app',
  },
  {
    company: 'Faith of God TV',
    role: 'Fullstack Developer',
    period: 'Remote | 2025',
    description:
      'Built a dynamic website for a Christian organization featuring events, broadcasts, and donation integration.',
    url: 'https://faithofgodtv.vercel.app',
  },
];


export default function Experience() {
    return (
        <section
            id="experience"
            className="py-20 bg-gray-50 dark:bg-gradient-to-r from-gray-900 to-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-300"
        >
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-primary">Work Experience</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-3xl mx-auto">
                        A few highlights from my work with clients and agencies around the world.
                    </p>
                </motion.div>

                <Swiper
                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                        // bulletClass: 'swiper-pagination-bullet !bg-gray-400 dark:!bg-gray-600',
                        // bulletActiveClass: '!w-6 !bg-primary',
                    }}
                    spaceBetween={30}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                    }}
                    className="!pb-12"
                >
                    {experiences.map((exp, i) => (
                        <SwiperSlide key={i}>
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm border-l-4 border-primary"
                            >
                                
                                <div className="flex justify-between items-center ">
                                    <h3 className="text-xl font-semibold text-primary">{exp.role}</h3>
                                    <Link href={exp.url} target='_blank' className='inline-flex items-center gap-1 text-primary font-semibold'>Visit <ExternalLink className='h-5 w-5' /></Link>
                                </div>
                                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                                    <span>{exp.company}</span>
                                    <span>{exp.period}</span>
                                </div>
                                <p className="mt-3 text-gray-700 dark:text-gray-200 leading-relaxed">
                                    {exp.description}
                                </p>
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
}
