import React, { useState } from 'react';
import { X, Instagram } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        quote: "The visual storytelling by Chaulisan Crew is absolutely pure! I can see the difference — it's fresh, cinematic, and professional. My brand feels like a masterpiece now.",
        author: {
            name: "Priya Sharma",
            location: "MUMBAI",
            avatar: "user1"
        },
        date: "DEC 5, 2024",
        platform: "instagram",
    },
    {
        id: 2,
        quote: "I've worked with many production houses, but Chaulisan's creative direction is on another level. The lighting is natural, soothing, and perfectly captured. Perfect for my editorial shoots.",
        author: {
            name: "Rajesh Kumar",
            location: "NEW DELHI",
            avatar: "user2"
        },
        date: "NOV 18, 2024",
        platform: "x",
    },
    {
        id: 3,
        quote: "Knowing that they handle everything from pre-production to final edits in-house makes all the difference. It's seamless, creative, and you can feel the quality in every frame.",
        author: {
            name: "Anita Desai",
            location: "BANGALORE",
            avatar: "user3"
        },
        date: "OCT 22, 2024",
    },
    {
        id: 4,
        quote: "The final portfolio they delivered is my favorite! It instantly elevated my professional presence with a clean, high-end aesthetic. No gimmicks, just pure artistry.",
        author: {
            name: "Meera Patel",
            location: "MANALI",
            avatar: "user4"
        },
        date: "NOV 30, 2024",
    },
    {
        id: 5,
        quote: "Chaulisan's work has transformed our digital campaign. The cinematography is therapeutic to watch, the editing creates the perfect rhythm, and everything is 100% professional.",
        author: {
            name: "Vikram Singh",
            location: "CHANDIGARH",
            avatar: "user5"
        },
        date: "DEC 1, 2024",
        platform: "instagram",
    },
    {
        id: 6,
        quote: "From the initial consultation to the final delivery, Chaulisan Crew truly cares about vision and impact. Their work is pure, effective, and visually stunning.",
        author: {
            name: "Kavita Reddy",
            location: "HYDERABAD",
            avatar: "user6"
        },
        date: "NOV 25, 2024",
    },
];

const Testimonials = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <section className="py-24 px-5 bg-luxury-bg text-luxury-text overflow-hidden" id="testimonials">
            <div className="max-w-[1400px] mx-auto w-full">

                {/* Unified Header */}
                <div className="flex items-center gap-4 mb-10 text-caption font-medium uppercase tracking-widest text-luxury-textSoft">
                    <span className="opacity-40">04</span>
                    <span>Testimonials × Kind Words</span>
                </div>

                {/* Compact Header Section */}
                <div className="relative mb-16 w-full">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 transition-colors">
                        <div className="flex items-center gap-4 text-section-title font-heading uppercase flex-wrap">
                            <span className="text-luxury-textSoft opacity-40 tracking-widest text-sm shrink-0">Voice</span>
                            <span className="text-luxury-text">What They Say</span>
                        </div>
                        <p className="max-w-[500px] text-luxury-textSoft text-body-text">
                            Trust is the foundation of our work. Hear from those who have shared their stories with us.
                        </p>
                    </div>
                </div>

                {/* Grid Container */}
                <div className="relative">
                    <div
                        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out ${!showMore ? 'max-h-[500px] overflow-hidden' : 'max-h-[4000px]'}`}
                    >
                        {testimonials.map((testimonial, index) => {
                            const isFading = !showMore && index >= 3;

                            return (
                                <div
                                    key={testimonial.id}
                                    className={`relative rounded-luxury p-5 bg-white/40 backdrop-blur-sm border border-white/20 transition-all duration-500 group ${isFading ? 'opacity-20 blur-[2px]' : 'opacity-100 hover:bg-white/60 shadow-luxury-soft'}`}
                                >
                                    {/* Minimal Info Row */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-full overflow-hidden bg-luxury-bg">
                                            <img
                                                src={require(`../assets/${testimonial.author.avatar}.png`)}
                                                alt={testimonial.author.name}
                                                className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <h4 className="text-[12px] font-bold uppercase tracking-wider text-luxury-text leading-tight">
                                                {testimonial.author.name}
                                            </h4>
                                            <span className="text-[9px] font-medium tracking-[0.2em] text-luxury-textSoft opacity-60">
                                                {testimonial.author.location}
                                            </span>
                                        </div>

                                        {/* Platform Link - Pure Visual */}
                                        {testimonial.platform && (
                                            <div className="ml-auto opacity-10 group-hover:opacity-30 transition-opacity">
                                                {testimonial.platform === 'x' ? <X className="w-3 h-3" /> : <Instagram className="w-3 h-3" />}
                                            </div>
                                        )}
                                    </div>

                                    {/* Clean Quote Text */}
                                    <p className="text-[14px] leading-[1.6] text-luxury-textSoft font-medium">
                                        {testimonial.quote}
                                    </p>

                                    {/* Date - Tiny Tag */}
                                    <div className="mt-4 pt-4 border-t border-black/5 flex justify-between items-center">
                                        <span className="text-[8px] font-bold uppercase tracking-[0.3em] opacity-20">Verified Story</span>
                                        <span className="text-[8px] font-bold uppercase tracking-[0.3em] opacity-20">{testimonial.date}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {!showMore && (
                        <div className="absolute bottom-0 left-0 right-0 h-[250px] bg-gradient-to-t from-luxury-bg via-luxury-bg/95 to-transparent z-10 pointer-events-none"></div>
                    )}
                </div>

                <div className={`flex justify-center transition-all duration-500 relative z-20 ${!showMore ? '-mt-20' : 'mt-12'}`}>
                    <button
                        onClick={() => setShowMore(!showMore)}
                        className="px-10 py-3.5 bg-luxury-text text-white rounded-luxury text-caption font-medium uppercase tracking-[0.3em] hover:bg-luxury-primary transition-all shadow-luxury-soft"
                    >
                        {showMore ? 'Show Less' : 'View All Words'}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
