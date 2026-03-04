import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Journey from '../components/Journey';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, { threshold: 0.1 });

        const targets = document.querySelectorAll('section, footer');
        targets.forEach(target => {
            observer.observe(target);
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (location.state && location.state.scrollTo) {
            const id = location.state.scrollTo;
            // Delay slightly to ensure content is rendered
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    const offset = 80;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = element.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 100);
            // Clear state to avoid scrolling again on back navigation
            window.history.replaceState({}, document.title);
        }
    }, [location]);

    return (
        <div className="reveal-container">
            <Hero />
            <Journey />
            <Portfolio />
            <Services />
            <Testimonials />
        </div>
    );
};

export default Home;

