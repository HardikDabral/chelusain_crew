import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioItems } from '../data/portfolioData';

const Portfolio = () => {
    // Show only first 5 items in the preview
    const previewItems = portfolioItems.slice(0, 5);

    return (
        <section className="py-section px-5 bg-luxury-bg text-luxury-text overflow-hidden" id="portfolio">
            <div className="max-w-[1400px] mx-auto w-full">

                {/* Unified Header Section */}
                <div className="flex items-center gap-4 mb-10 text-caption font-medium uppercase tracking-widest text-luxury-textSoft">
                    <span className="opacity-40">03</span>
                    <span>Portfolio × Archive</span>
                </div>

                <div className="relative mb-20 w-full pt-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 transition-colors">
                        <div className="flex items-center gap-4 text-section-title font-heading uppercase flex-wrap">
                            <span className="text-luxury-textSoft opacity-40 tracking-widest text-sm shrink-0">Focus</span>
                            <span className="text-luxury-text">The Final Archive</span>
                        </div>
                        <p className="max-w-[500px] text-luxury-textSoft text-body-text leading-relaxed">
                            A curated selection of stories that endure.
                            Focused on the raw emotion and cinematic depth of the human experience.
                        </p>
                    </div>
                </div>


                {/* Large Masonry Grid - Preview only */}
                <div className="relative mb-20">
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        {previewItems.map((item) => (
                            <div
                                key={item.id}
                                className="break-inside-avoid group relative transition-all duration-500"
                            >
                                <div className={`relative overflow-hidden bg-luxury-bgSoft transition-all duration-500 group-hover:scale-[0.99] rounded-luxury ${item.aspectRatio}`}>
                                    <img
                                        src={require(`../assets/${item.image}.png`)}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                                    />

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-8 backdrop-blur-sm">
                                        <h3 className="text-h3 font-heading uppercase tracking-widest text-white text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-luxury-bg via-luxury-bg/80 to-transparent z-10 pointer-events-none"></div>
                </div>

                <div className="flex justify-center relative z-20 -mt-24">
                    <Link
                        to="/portfolio"
                        className="px-10 py-4 bg-luxury-text text-white rounded-luxury text-caption font-medium uppercase tracking-[0.3em] hover:bg-luxury-primary transition-all shadow-luxury-soft"
                    >
                        Explore Full Archive
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;

