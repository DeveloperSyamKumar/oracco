import React, { useState, useEffect } from 'react';
import { Ship, Menu, X, Anchor } from 'lucide-react';

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
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-morphism py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <Ship className="w-8 h-8 text-marine-aqua" />
                        <span className="text-2xl font-heading font-bold tracking-tighter text-white">ORACCO</span>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-marine-silver hover:text-marine-aqua transition-colors font-medium text-sm uppercase tracking-widest"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button className="bg-marine-aqua hover:bg-white text-marine-deep px-5 py-2 rounded-full font-bold transition-all transform hover:scale-105 flex items-center gap-2">
                            <Anchor size={18} />
                            GET A QUOTE
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden glass-morphism absolute top-full left-0 w-full py-6 flex flex-col items-center space-y-6 animate-in slide-in-from-top duration-300">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-marine-silver hover:text-marine-aqua transition-colors font-medium text-lg uppercase tracking-widest"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="bg-marine-aqua text-marine-deep px-8 py-3 rounded-full font-bold w-4/5">
                        GET A QUOTE
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
