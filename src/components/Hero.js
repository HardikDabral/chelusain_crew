import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-[700px] lg:h-[800px] w-full relative overflow-hidden flex flex-col justify-center hero bg-luxury-bg pt-10" id="hero">

            <div className="absolute top-0 left-0 w-full h-full z-0">
                <img
                    src={require('../assets/herosection.jpg')}
                    alt="Photographer"
                    className="w-full h-full object-cover object-center animate-slow-zoom"
                />
            </div>

            <div className="relative z-[2] max-w-[1440px] mx-auto px-5 lg:-mt-[100px] w-full pt-32 lg:pt-0">
                <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 lg:gap-0 px-4 md:px-12 lg:px-20">
                    <div className="flex-1.5 animate-slide-up [animation-delay:0.2s] w-full lg:max-w-[750px]">
                        <h1 className="text-hero-title font-heading mb-0 text-luxury-text leading-[1.05]">
                            Crafting <span className="opacity-40">Timeless</span> <br className="hidden lg:block" />
                            Legacies in the <br className="hidden lg:block" />
                            Himalayan Wild
                        </h1>
                    </div>

                    <div className="flex-1 max-w-[450px] animate-slide-up [animation-delay:0.4s] lg:mb-4">
                        <p className="text-hero-subtitle text-white lg:text-luxury-textSoft mb-10 leading-relaxed">
                            Chaulisan Crew is a creative storytelling studio dedicated
                            to preserving the raw, emotional essence of your most
                            intimate moments through high-end cinematography and artistry.
                        </p>
                        <button className="w-full sm:w-auto flex items-center justify-center gap-[15px] bg-luxury-primary hover:bg-luxury-primaryHover text-luxury-white px-[32px] py-[16px] rounded-luxury font-medium text-[16px] cursor-pointer transition-all duration-500 shadow-luxury-2xl">
                            View Archive
                            <ArrowUpRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>


            <div className="absolute top-[90%] lg:top-[70%] left-0 w-full z-[1] pointer-events-none flex justify-center overflow-hidden">
                <h2 className="text-[20vw] lg:text-[21.5vw] font-heading font-extrabold m-0 opacity-[0.9] whitespace-nowrap text-center block tracking-[-0.07em] animate-branding-up [animation-delay:0.6s] text-white leading-none">
                    Chaulisan
                </h2>
            </div>



        </section>
    );
};

export default Hero;
