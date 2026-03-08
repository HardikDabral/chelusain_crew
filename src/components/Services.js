import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const services = [
    {
        id: '01',
        slug: 'wedding-cinema',
        title: 'Wedding Cinema',
        description: 'Preserving the raw intimacy and cinematic soul of your union.',
        image: 'wedding'
    },
    {
        id: '02',
        slug: 'luxury-bridal-artistry',
        title: 'Luxury Bridal Artistry',
        description: 'Sophisticated aesthetics curated for your once-in-a-lifetime moment.',
        image: 'makeup'
    },
    {
        id: '03',
        slug: 'editorial-archives',
        title: 'Editorial Archives',
        description: 'High-concept portraiture captured with absolute precision and depth.',
        image: 'fashion_portrait'
    },
    {
        id: '04',
        slug: 'brand-storytelling',
        title: 'Brand Storytelling',
        description: 'Elevating commercial narratives through cinematic vision and strategic direction.',
        image: 'hero'
    },
    {
        id: '05',
        slug: 'creative-direction',
        title: 'Creative Direction',
        description: 'End-to-end post-production and artistic supervision for complex visual projects.',
        image: 'wedding'
    }
];

const Services = () => {
    return (
        <section className="py-section px-5 bg-luxury-bg text-luxury-text overflow-hidden" id="services">
            <div className="max-w-[1400px] mx-auto w-full">

                {/* Header Section */}
                <div className="flex items-center gap-4 mb-10 text-caption font-medium uppercase tracking-widest text-luxury-textSoft">
                    <span className="opacity-40">04</span>
                    <span>Signature Services</span>
                </div>

                {/* Compact Header Section (Matches Unified Style) */}
                <div className="relative mb-16 w-full">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 transition-colors">
                        <div className="flex items-center gap-4 text-section-title font-heading uppercase flex-wrap">
                            <span className="text-luxury-textSoft opacity-40 tracking-widest text-sm shrink-0">Focus</span>
                            <span className="text-luxury-text">Signature Collection</span>
                        </div>
                        <p className="max-w-[500px] text-luxury-textSoft text-body-text">
                            Crafting timeless memories with a perfect blend of modern precision and cinematic depth. Our services are designed to elevate your unique story.
                        </p>
                    </div>
                </div>

                {/* Services Grid / Swiper on Mobile */}
                <div className="flex lg:grid overflow-x-auto lg:overflow-x-visible no-scrollbar -mx-5 px-5 lg:mx-0 lg:px-0 flex-nowrap lg:grid-cols-3 gap-8 md:gap-12 snap-x snap-mandatory">
                    {services.map((service) => (
                        <div key={service.id} className="group flex flex-col gap-6 md:gap-8 min-w-[280px] md:min-w-0 w-[80vw] md:w-full snap-center">
                            <Link
                                to={`/service/${service.slug}`}
                                className="aspect-square rounded-luxury overflow-hidden bg-white/5 relative cursor-pointer"
                            >
                                <img
                                    src={require(`../assets/${service.image}.png`)}
                                    alt={`chelusain Crew - ${service.title}`}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </Link>

                            {/* Minimal Info */}
                            <div className="flex flex-col items-start gap-3 md:gap-4">
                                <h3 className="text-lg md:text-card-title font-heading uppercase tracking-wide text-luxury-text">
                                    {service.id} × {service.title}
                                </h3>
                                <p className="text-luxury-textSoft text-sm md:text-body-text max-w-[320px] leading-relaxed">
                                    {service.description}
                                </p>
                                <Link
                                    to={`/service/${service.slug}`}
                                    className="flex items-center gap-2 text-xs md:text-caption uppercase tracking-[0.2em] text-luxury-text hover:text-luxury-textSoft transition-all group/btn pt-2 border-b border-luxury-text/20 pb-1"
                                >
                                    Explore <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;
