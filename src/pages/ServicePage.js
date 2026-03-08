import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

const serviceDetails = {
    'wedding-cinema': {
        title: 'Wedding Cinema',
        subtitle: 'Preserving the raw intimacy and cinematic soul of your union.',
        image: 'wedding',
        content: `Our wedding cinema is more than just a video; it's a cinematic experience that captures the essence of your love story. We focus on raw emotions, natural light, and the subtle moments that make your day unique. Our team of directors and cinematographers work discreetly to ensure every laugh, tear, and whisper is preserved with the highest artistic precision.`,
        features: [
            'Cinematic Storytelling',
            '4K Ultra HD Delivery',
            'Professional Sound Engineering',
            'Artistic Color Grading',
            'Emotional Narrative Focus'
        ]
    },
    'luxury-bridal-artistry': {
        title: 'Luxury Bridal Artistry',
        subtitle: 'Sophisticated aesthetics curated for your once-in-a-lifetime moment.',
        image: 'makeup',
        content: `Bridal artistry is about enhancing your natural beauty while reflecting your personal style. We provide a luxury experience that begins long before the wedding day, with detailed consultations and trials. Our approach is rooted in timeless elegance, ensuring you look and feel like the most refined version of yourself as you step into your new beginning.`,
        features: [
            'Personalized Consultations',
            'Timeless Aesthetic Design',
            'Premium Product Selection',
            'On-location Artistry',
            'Complete Bridal Styling'
        ]
    },
    'editorial-archives': {
        title: 'Editorial Archives',
        subtitle: 'High-concept portraiture captured with absolute precision and depth.',
        image: 'fashion_portrait',
        content: `Our editorial archives are designed for those who seek high-concept visual storytelling. Whether for personal branding, fashion, or artistic expression, we bring a cinematic depth to every portrait. We play with light, shadow, and environment to create images that don't just show what you look like, but tell the world who you are.`,
        features: [
            'Creative Direction',
            'Concept Development',
            'High-End Retouching',
            'Studio & Location Options',
            'Bespoke Visual Framing'
        ]
    }
};

const ServicePage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const service = serviceDetails[slug];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-luxury-bg">
                <div className="text-center">
                    <h1 className="text-display text-luxury-primary mb-8">404</h1>
                    <p className="text-luxury-textSoft mb-8">Service not found.</p>
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 mx-auto text-luxury-primary font-bold uppercase tracking-widest"
                    >
                        <ArrowLeft size={20} /> Back to Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-luxury-bg pt-32 pb-20 px-5">
            <div className="max-w-[1200px] mx-auto">
                {/* Back Button */}
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-luxury-textSoft hover:text-luxury-primary transition-colors mb-12 uppercase tracking-[0.2em] text-[10px] font-bold"
                >
                    <ArrowLeft size={16} /> Back to Services
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Content Column */}
                    <div className="animate-slide-up">
                        <div className="flex items-center gap-4 mb-6 text-caption font-medium uppercase tracking-widest text-luxury-primary opacity-60">
                            <span>Service</span>
                            <span className="w-8 h-[1px] bg-luxury-primary/30"></span>
                            <span>{service.title}</span>
                        </div>

                        <h1 className="text-hero-title font-heading text-luxury-text mb-8 leading-tight">
                            {service.title}
                        </h1>

                        <p className="text-xl text-luxury-primary/80 font-medium mb-10 leading-relaxed italic">
                            "{service.subtitle}"
                        </p>

                        <div className="prose prose-luxury lg:prose-lg text-luxury-textSoft mb-12 leading-relaxed">
                            {service.content}
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-caption font-bold uppercase tracking-[0.2em] text-luxury-text mb-6">What's Included</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {service.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3 text-luxury-textSoft">
                                        <CheckCircle2 size={18} className="text-luxury-primary opacity-60" />
                                        <span className="text-sm font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button className="mt-16 w-full md:w-auto px-10 py-5 bg-luxury-primary text-white rounded-luxury font-bold uppercase tracking-[0.2em] text-xs hover:bg-luxury-primaryHover transition-all shadow-luxury-2xl flex items-center justify-center gap-3">
                            Enquire About This Service
                        </button>
                    </div>

                    {/* Image Column */}
                    <div className="relative rounded-luxury overflow-hidden animate-slide-up [animation-delay:0.2s]">
                        <img
                            src={require(`../assets/${service.image}.png`)}
                            alt={service.title}
                            className="w-full aspect-[4/5] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-luxury-primary/20 to-transparent"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicePage;
