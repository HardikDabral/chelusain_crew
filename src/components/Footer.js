import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Instagram, Facebook, Twitter, ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const scrollToSection = (id) => {
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: id } });
            return;
        }

        const element = document.getElementById(id);
        if (element) {
            const offset = 0; // Adjust this value if you have a fixed header
            const offsetPosition = element.offsetTop - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }

    return (
        <footer className="py-section px-5 bg-luxury-bg text-luxury-textSoft" id="footer">
            <div className="max-w-[1400px] mx-auto w-full">

                {/* Links Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 transition-colors">
                    {/* Brand Meta */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                                <div className="w-4 h-4 bg-white rounded-sm rotate-45"></div>
                            </div>
                            <span className="text-2xl font-heading tracking-tight uppercase whitespace-nowrap text-luxury-text">
                                Chaulisan <span className="text-luxury-primary">Crew</span>
                            </span>
                        </div>
                        <p className="mt-6 text-luxury-textSoft text-caption leading-relaxed max-w-[300px]">
                            A creative storytelling studio dedicated to
                            preserving the raw, emotional essence of human
                            connection through cinematic precision.
                        </p>
                    </div>

                    {/* Columns */}
                    <div className="space-y-6">
                        <h4 className="text-caption font-medium uppercase tracking-[0.3em] text-luxury-text">Navigation</h4>
                        <div className="flex flex-col space-y-4">
                            {[
                                { id: 'journey', label: 'Journey' },
                                { id: 'portfolio', label: 'Work' },
                                { id: 'services', label: 'Services' },
                                { id: 'testimonials', label: 'Stories' }
                            ].map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className="text-luxury-textSoft hover:text-luxury-primary transition-colors duration-500 text-caption font-medium uppercase tracking-widest text-left"
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-caption font-bold uppercase tracking-[0.3em] text-luxury-charcoal">Studio</h4>
                        <div className="flex flex-col gap-4">
                            <a href="tel:+1234567890" className="flex items-center gap-3 text-luxury-textSoft hover:text-luxury-primary transition-colors duration-500 text-caption">
                                <Phone className="w-4 h-4 text-luxury-primary" />
                                <span className="font-medium">+91 98765 43210</span>
                            </a>
                            <div className="flex items-center gap-3 text-luxury-textSoft hover:text-luxury-primary transition-colors text-caption">
                                <MapPin className="w-4 h-4 text-luxury-primary" />
                                <span className="font-medium">Leh, Ladakh, Himalayas</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-caption font-bold uppercase tracking-[0.3em] text-luxury-charcoal">Social</h4>
                        <div className="flex items-center gap-4">
                            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full border border-luxury-text/10 flex items-center justify-center text-luxury-textSoft hover:bg-luxury-primary hover:border-luxury-primary hover:text-white transition-all duration-500"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-luxury-text/10 text-caption font-medium uppercase tracking-[0.3em] text-luxury-textSoft/40 transition-colors">
                    <p>© 2024 Chaulisan Crew. All rights reserved.</p>
                    <button
                        onClick={() => {
                            if (location.pathname === '/') {
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            } else {
                                navigate('/');
                            }
                        }}
                        className="flex items-center gap-2 hover:text-luxury-text transition-colors"
                    >
                        Back to Top <ArrowUpRight className="w-3 h-3" />
                    </button>
                    <p>Designed Specially for You</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

