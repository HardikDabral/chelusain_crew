import React, { useEffect } from 'react';
import { portfolioItems } from '../data/portfolioData';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-luxury-bg min-h-screen pt-32 pb-20 px-5">
            <div className="max-w-[1400px] mx-auto w-full">

                {/* Header section with back button */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                    <div className="space-y-6">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-caption uppercase tracking-widest text-luxury-textSoft hover:text-luxury-primary transition-colors group"
                        >
                            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                            <span>Home Archive</span>
                        </Link>

                        <div className="space-y-2">
                            <div className="flex items-center gap-4 text-caption font-medium uppercase tracking-widest text-luxury-textSoft/60">
                                <span>02</span>
                                <span className="w-12 h-[1px] bg-luxury-textSoft/20"></span>
                                <span>Full Archive</span>
                            </div>
                            <h1 className="text-display font-heading uppercase tracking-tighter text-luxury-text">
                                The Final <span className="text-luxury-textSoft/40 italic">Collection</span>
                            </h1>
                        </div>
                    </div>

                    <p className="max-w-[450px] text-luxury-textSoft text-body-text leading-relaxed">
                        Explore our complete digital archive from cinematic captures to
                        contemporary abstracts. Every piece represents our pursuit
                        of visual perfection and emotional depth.
                    </p>
                </div>

                {/* Grid layout */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {portfolioItems.map((item) => (
                        <div
                            key={item.id}
                            className="break-inside-avoid group relative transition-all duration-500 hover:scale-[1.01]"
                        >
                            <div className={`relative overflow-hidden bg-luxury-bgSoft rounded-luxury ${item.aspectRatio}`}>
                                <img
                                    src={require(`../assets/${item.image}.png`)}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                                />

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-8 backdrop-blur-sm">
                                    <div className="text-center space-y-4 translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                                        <h3 className="text-h3 font-heading uppercase tracking-widest text-white">
                                            {item.title}
                                        </h3>
                                        <div className="w-12 h-[1px] bg-white/40 mx-auto"></div>
                                        <p className="text-[10px] text-white/60 uppercase tracking-[0.3em]">View Details</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioPage;
