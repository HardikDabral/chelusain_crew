import React from 'react';

const CountUpNumber = ({ end, duration = 2000 }) => {
    const [count, setCount] = React.useState(0);
    const [isVisible, setIsVisible] = React.useState(false);
    const elementRef = React.useRef(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, []);

    React.useEffect(() => {
        if (!isVisible) return;

        let startTime;
        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Easing function for smoother finish
            const easeOutQuad = (t) => t * (2 - t);
            const currentCount = Math.floor(easeOutQuad(percentage) * end);

            setCount(currentCount);

            if (percentage < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return <span ref={elementRef}>{count}</span>;
};

const WhyUs = () => {
    const [activeQuestion, setActiveQuestion] = React.useState(0);

    const questions = [
        {
            tag: 'Why chelusain?',
            answer: "Because we transcend traditional photography. We are architects of emotion, curating atmospheres that turn fleeting moments into enduring legacies. Our approach is rooted in the belief that every story deserves to be told with cinematic soul, combining elite technical mastery with a deep understanding of human connection. We don't just record; we preserve the raw truth of your most significant chapters with intentionality and artistic depth."
        },
        {
            tag: 'The Difference',
            answer: "While others stop at recording, we specialize in comprehensive creative direction. From concept development and location scouting in the toughest terrains to advanced sound engineering and color grading, we own the entire narrative arc. Our independence from tradition allows us to bypass the predictable, ensuring your story feels personal, therapeutic, and entirely real—free from visual clichés and 'watered-down' aesthetics."
        },
        {
            tag: 'Elite Benefits',
            answer: "When you book chelusain Crew, you gain access to the highest tier of 4K cinematic production and a seamless, full-service integration. You get a single point of contact for high-end results across multiple disciplines—be it film, photography, or creative supervision. Benefit from our decade of experience in the Himalayas, ensuring your project is handled with meticulous delivery, transparent communication, and a world-class aesthetic."
        },
        {
            tag: 'The Process',
            answer: "Our process is a systematic journey from strategy to soul. We begin with a deep exploration of your vision, moving into intentional planning and technical preparation. During production, we work with a 'stealth-cinema' approach—capturing raw energy without intruding on the moment. In post-production, our specialist colorists and editors meticulously refine every frame and sound layer to ensure the final output is nothing short of a cinematic masterpiece."
        },
        {
            tag: 'Our Standards',
            answer: "We hold ourselves to an uncompromising standard of technical and artistic truth. This means using industry-leading optics, 10-bit color pipelines, and high-fidelity audio capture to ensure your legacy is future-proof. Beyond the gear, our collective of 5+ specialist artists brings a multidisciplinary perspective to every project, ensuring that whether it's a brand story or a wedding film, the output meets the elite chelusain standard of excellence."
        }
    ];

    const stats = [
        {
            value: 37,
            label: "SUCCESSFUL CASES",
            suffix: null
        },
        {
            value: 60,
            label: "APPLICATIONS FROM CUSTOMERS",
            suffix: "%"
        },
        {
            value: 94,
            label: "COVERAGE OF ADS",
            suffix: "%"
        }
    ];

    return (
        <section className="py-12 md:py-24 px-5 bg-luxury-bg text-luxury-text overflow-hidden" id="why-us">
            <div className="max-w-[1400px] mx-auto w-full">

                {/* Unified Header */}
                <div className="flex items-center gap-4 mb-20 text-caption font-medium uppercase tracking-widest text-luxury-textSoft">
                    <span className="opacity-40">03</span>
                    <span>The chelusain Edge × Why Us</span>
                </div>

                {/* Signature Header Block - Dynamic Interactive Mode */}
                <div className="relative mb-24 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start lg:items-center">
                        {/* Large Headline on the left */}
                        <div className="lg:col-span-8">
                            <h2 className="text-section-title font-heading w-full text-luxury-text uppercase leading-tight">
                                CHELUSAIN CREW IS A FULL-SERVICE <br className="hidden lg:block" />
                                CREATIVE STUDIO THAT CURATES <br className="hidden lg:block" />
                                LEGACIES AND ARTISTIC TRUTH.
                            </h2>
                        </div>

                        {/* Interactive Question Tags on the right - Slider on Mobile */}
                        <div className="lg:col-span-4 flex overflow-x-auto lg:overflow-x-visible no-scrollbar pb-4 lg:pb-0 -mx-5 px-5 lg:mx-0 lg:px-0 flex-nowrap lg:flex-wrap gap-3 lg:justify-end items-center snap-x snap-mandatory">
                            {questions.map((q, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveQuestion(i)}
                                    className={`px-5 py-2.5 rounded-full border transition-all duration-300 text-[10px] uppercase tracking-widest font-bold shadow-sm whitespace-nowrap shrink-0 snap-center ${activeQuestion === i
                                        ? 'bg-luxury-primary text-white border-luxury-primary'
                                        : 'bg-white/50 border-luxury-primary/10 text-luxury-text hover:bg-white/80'
                                        }`}
                                >
                                    {q.tag}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Signature Strength Bar - Dynamic Answer */}
                    <div className="flex flex-col mt-12 md:mt-16">
                        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8 w-full">
                            <div className="flex flex-wrap items-center gap-4 md:gap-6 shrink-0 w-full lg:w-auto">
                                <span className="text-luxury-textSoft opacity-40 uppercase tracking-widest text-[10px] md:text-xs font-bold leading-none">The Response</span>
                                <span className="text-luxury-primary font-bold uppercase tracking-wide text-xs md:text-sm leading-none whitespace-nowrap">Studio × Insight</span>
                            </div>
                            <p className="text-luxury-textSoft text-sm md:text-base leading-relaxed w-full animate-slide-up" key={activeQuestion}>
                                {questions[activeQuestion].answer}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Simple Numbers Section Header */}
                <div className="flex flex-col items-center justify-center mb-12 text-center">
                    <p className="text-[10px] uppercase tracking-[0.4em] text-luxury-primary/40 font-bold mb-3">Metric Insights</p>
                    <h3 className="text-lg md:text-xl font-heading text-luxury-textSoft">content and numbers that matter.</h3>
                </div>

                {/* Simplified Stats Grid - Row on Mobile, Reduced Size */}
                <div className="grid grid-cols-3 gap-2 md:gap-8 mt-12 items-start">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center group">
                            <div className="flex items-start justify-center">
                                <span className="text-[35px] sm:text-[45px] md:text-[100px] lg:text-[120px] font-heading font-extrabold text-luxury-primary leading-none tracking-tighter transition-transform duration-500 group-hover:scale-105">
                                    <CountUpNumber end={stat.value} />
                                </span>
                                {stat.suffix && (
                                    <span className="text-sm md:text-4xl lg:text-5xl font-bold text-luxury-primary pt-1 md:pt-4 opacity-70">
                                        {stat.suffix}
                                    </span>
                                )}
                            </div>
                            <div className="mt-2 md:mt-4">
                                <p className="text-[6px] sm:text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] text-luxury-textSoft leading-tight md:leading-relaxed max-w-full md:max-w-[200px]">
                                    {stat.label}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhyUs;
