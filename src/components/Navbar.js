import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        // Ensure light theme is default
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        setIsMobileMenuOpen(false);
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: id } });
            return;
        }

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
    };

    const handleBrandingClick = () => {
        setIsMobileMenuOpen(false);
        if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate('/');
        }
    };

    const navItems = [
        { id: 'portfolio', label: 'Work' },
        { id: 'services', label: 'Services' },
        { id: 'journey', label: 'About' },
        { id: 'footer', label: 'Contact' }
    ];

    return (
        <>
            <nav className={`fixed left-0 right-0 z-[1000] px-5 transition-all duration-500 ${scrolled ? 'top-4' : 'top-8'}`}>
                <div className="max-w-[1440px] mx-auto">
                    <div className={`flex items-center justify-between px-6 md:px-8 py-3 rounded-full border transition-all duration-500 ${scrolled || isMobileMenuOpen
                        ? 'bg-white/90 backdrop-blur-md border-luxury-text/10 shadow-luxury-soft'
                        : 'bg-transparent border-transparent'
                        }`}>

                        {/* Branding - All Dark Green */}
                        <div
                            onClick={handleBrandingClick}
                            className="flex items-center gap-2 cursor-pointer group z-[1001]"
                        >
                            <span className="text-lg md:text-xl font-heading tracking-tight uppercase whitespace-nowrap text-luxury-primary font-bold">
                                chelusain Crew
                            </span>
                        </div>

                        {/* Navigation Links - Desktop View */}
                        <div className="hidden md:flex items-center gap-10">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="text-[10px] font-medium uppercase tracking-[0.4em] text-luxury-text hover:text-luxury-primary transition-all duration-500 whitespace-nowrap"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>

                        {/* Hamburger Button - Mobile View */}
                        <button
                            className="md:hidden p-2 text-luxury-text z-[1001]"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>

                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-[999] bg-luxury-bg/95 backdrop-blur-xl transition-all duration-500 flex flex-col items-center justify-center gap-8 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col items-center gap-10">
                    {navItems.map((item, index) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`text-2xl font-heading font-bold uppercase tracking-widest text-luxury-text hover:text-luxury-primary transition-all duration-500 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Navbar;


