import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const steps = [
    {
        number: '01',
        title: 'Initial Consultation',
        description: 'We meet to understand your vision, preferences, and the unique story you want to tell. This is where we define the aesthetic roadmap for your project.',
        image: 'wedding'
    },
    {
        number: '02',
        title: 'Planning & Curation',
        description: 'Our team meticulously plans every detail, from locations to lighting and aesthetics, ensuring that every frame aligns with your desired mood.',
        image: 'hero'
    },
    {
        number: '03',
        title: 'The Session',
        description: 'Experience a relaxed and professional shoot where we capture moments naturally and beautifully, focusing on raw emotions and timeless composition.',
        image: 'makeup'
    }
];

const Journey = () => {
    return (
        <section className="bg-luxury-bg text-luxury-textSoft overflow-hidden" id="journey">
            <div className="max-w-[1400px] mx-auto w-full px-5">
                {/* Header Section */}
                <div className="flex items-center gap-4 mb-20 text-caption font-medium uppercase tracking-widest text-luxury-textSoft">
                    <span className="opacity-40">01</span>
                    <span>Studio × Philosophy</span>
                </div>

                {/* Main Headline - Full Width Layout */}
                <div className="relative mb-16 w-full">
                    <h2 className="text-section-title font-heading w-full text-luxury-text uppercase">
                        PERFECTING THE ART OF <br className="hidden lg:block" />
                        VISUAL STORYTELLING <br className="hidden lg:block" />
                        FOR A DECADE IN THE HIMALAYAS.
                    </h2>

                    <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
                        <div className="flex items-center gap-4 text-card-title">
                            <span className="text-luxury-textSoft opacity-40 uppercase tracking-widest text-sm">Our Strength</span>
                            <span className="text-luxury-primary font-semibold uppercase">A TEAM OF 5+ EXPERTS</span>
                        </div>
                        <div className="flex-1 max-w-[400px] animate-slide-up [animation-delay:0.3s]">
                            <p className="max-w-[500px] text-luxury-textSoft text-body-text">
                                We don't just capture images; we preserve the soul of your story.
                                Our collective of artists and directors bring a cinematic
                                perspective that transcends the traditional.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Grid Layout - Image Centric */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-start">

                    {/* Step 1 */}
                    <div className="flex flex-col gap-8 group">
                        <div className="h-[400px] rounded-luxury relative overflow-hidden transition-transform duration-700 group-hover:scale-[0.98] bg-luxury-bgSoft">
                            <img
                                src={require(`../assets/${steps[0].image}.png`)}
                                alt={steps[0].title}
                                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute bottom-8 left-8 right-8">
                                <h3 className="text-card-title font-body mb-4 text-white uppercase">{steps[0].title}</h3>
                            </div>
                        </div>
                        <p className="text-luxury-textSoft text-body-text px-2">
                            {steps[0].description}
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col gap-10">
                        <div className="h-[100px] rounded-luxury bg-luxury-primary relative flex items-center justify-between px-10 group overflow-hidden transition-all duration-300">
                            <div className="flex flex-col">
                                <span className="text-caption font-medium tracking-[0.3em] text-white">SHARE THE VISION</span>
                                <span className="text-[20px] font-semibold text-white">START NOW</span>
                            </div>
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center transition-transform duration-500 group-hover:rotate-45">
                                <ArrowUpRight className="w-6 h-6 text-luxury-primary" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-8 group">
                            <div className="h-[400px] rounded-luxury relative overflow-hidden transition-transform duration-700 group-hover:scale-[0.98] bg-luxury-bgSoft">
                                <img
                                    src={require(`../assets/${steps[1].image}.png`)}
                                    alt={steps[1].title}
                                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute bottom-8 left-8 right-8">
                                    <h3 className="text-card-title font-body mb-4 text-white uppercase">{steps[1].title}</h3>
                                </div>
                            </div>
                            <p className="text-luxury-textSoft text-body-text px-2 text-center">
                                {steps[1].description}
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col gap-8 group">
                        <div className="h-[400px] rounded-luxury relative overflow-hidden transition-transform duration-700 group-hover:scale-[0.98] bg-luxury-bgSoft">
                            <img
                                src={require(`../assets/${steps[2].image}.png`)}
                                alt={steps[2].title}
                                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute bottom-8 left-8 right-8">
                                <h3 className="text-card-title font-body mb-4 text-white uppercase">{steps[2].title}</h3>
                            </div>
                        </div>
                        <p className="text-luxury-textSoft text-body-text px-2">
                            {steps[2].description}
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Journey;
