import React from 'react';
import { Ship, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-marine-deep border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center space-x-2 mb-6">
                            <Ship className="w-8 h-8 text-marine-aqua" />
                            <span className="text-2xl font-heading font-bold text-white">ORACCO</span>
                        </div>
                        <p className="text-marine-silver/60 leading-relaxed mb-6">
                            Empowering the maritime and industrial world with excellence in engineering and services since inception.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-marine-aqua hover:text-marine-deep transition-all duration-300 group">
                                    <Icon size={18} className="group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-heading font-bold mb-6 text-lg uppercase tracking-wider">Services</h4>
                        <ul className="space-y-4 text-marine-silver/60">
                            {['Engineering & Hull', 'Electrical Works', 'Ship Repairs', 'Oil & Gas Works', 'Material Supply'].map((item) => (
                                <li key={item}><a href="#" className="hover:text-marine-aqua transition-colors">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-heading font-bold mb-6 text-lg uppercase tracking-wider">Company</h4>
                        <ul className="space-y-4 text-marine-silver/60">
                            {['About Us', 'Careers', 'Project Portfolio', 'Safety Standards', 'Contact Us'].map((item) => (
                                <li key={item}><a href="#" className="hover:text-marine-aqua transition-colors">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-heading font-bold mb-6 text-lg uppercase tracking-wider">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-marine-silver/60">
                                <MapPin size={20} className="text-marine-aqua shrink-0 mt-1" />
                                <span>123 Marine Drive, Industrial Zone, Coastal City, Port 456</span>
                            </li>
                            <li className="flex items-center space-x-3 text-marine-silver/60">
                                <Phone size={20} className="text-marine-aqua shrink-0" />
                                <span>+1 (234) 567-890</span>
                            </li>
                            <li className="flex items-center space-x-3 text-marine-silver/60">
                                <Mail size={20} className="text-marine-aqua shrink-0" />
                                <span>contact@oracco.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-marine-silver/40 text-sm">
                    <p>© {new Date().getFullYear()} ORACCO. All rights reserved. Maritime Industrial Excellence.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
