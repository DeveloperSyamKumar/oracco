import React, { useState, useEffect } from 'react';
import { Menu, X, Anchor, PhoneCall } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Industries & Process', href: '#industries' },
        { name: 'Business Model', href: '#business-model' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-morphism py-3 shadow-2xl' : 'bg-marine-deep/80 backdrop-blur-md py-4'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Brand Logo & Name */}
                    <a href="#home" className="flex items-center space-x-3 group">
                        <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-marine-aqua/30 shadow-md group-hover:scale-105 transition-transform bg-marine-deep flex items-center justify-center">
                            <img
                                src="/logo.png"
                                alt="ORACCO Logo"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <span className="text-xl md:text-2xl font-heading font-extrabold tracking-tight text-white flex items-center gap-1">
                                ORACCO <span className="text-marine-aqua font-light text-base md:text-lg">ENTERPRISES</span>
                            </span>
                            <span className="block text-[10px] text-marine-silver/70 tracking-wider font-semibold uppercase -mt-1">
                                Marine & Industrial Partner
                            </span>
                        </div>
                    </a>

                    {/* Desktop Navigation Links */}
                    <div className="hidden lg:flex space-x-6 items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-marine-silver/90 hover:text-marine-aqua transition-colors font-medium text-xs uppercase tracking-widest hover:scale-105 transform"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="bg-marine-aqua hover:bg-white text-marine-deep px-5 py-2.5 rounded-full font-extrabold text-xs tracking-wider uppercase transition-all transform hover:scale-105 shadow-md hover:shadow-marine-aqua/30 flex items-center gap-2"
                        >
                            <PhoneCall size={14} />
                            Contact Us
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2 focus:outline-none">
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            {isMenuOpen && (
                <div className="lg:hidden glass-morphism absolute top-full left-0 w-full py-6 flex flex-col items-center space-y-5 animate-in slide-in-from-top duration-300 border-b border-white/10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-marine-silver hover:text-marine-aqua transition-colors font-medium text-base uppercase tracking-widest"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setIsMenuOpen(false)}
                        className="bg-marine-aqua text-marine-deep px-8 py-3 rounded-full font-bold text-sm tracking-wider uppercase w-4/5 text-center shadow-lg"
                    >
                        GET IN TOUCH
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

