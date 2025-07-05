"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import Stack from "./Stack";
import Contact from "./Contact";
import ClientLogos from "./ClientLogos";
import HomeLoader from "./HomeLoader";

const Homepage = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <main className="overflow-x-hidden">
            <HomeLoader />
            <Navbar />
            <Hero />
            <About />
            <Stack />
            <Projects />
            <Experience />
            <ClientLogos />
            <Contact />
            <Footer />
        </main>
    );
};

export default Homepage;
