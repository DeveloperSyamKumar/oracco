import React from 'react';
import { Ship, Mail, Phone, MapPin, User, MessageCircle, ExternalLink } from 'lucide-react';
import { socialLinks, WhatsAppIcon, InstagramIcon, FacebookIcon, YouTubeIcon } from './SocialLinks';

const Footer = () => {
    return (
        <footer className="bg-marine-deep/60 backdrop-blur-md border-t border-white/10 pt-16 pb-8 text-xs relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-9 h-9 rounded-xl bg-marine-aqua text-marine-deep flex items-center justify-center font-bold">
                                <Ship size={20} />
                            </div>
                            <span className="text-xl font-heading font-extrabold text-white">ORACCO <span className="text-marine-aqua font-light text-sm">ENTERPRISES</span></span>
                        </div>
                        <p className="text-marine-silver/60 leading-relaxed mb-4">
                            Your Trusted Marine & Industrial Partner. Specializing in Engineering, Procurement & Construction solutions across India.
                        </p>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-marine-aqua mb-4">
                            <User size={14} />
                            <span className="font-bold">Proprietor: Pyda Vinay Kumar (B-Tech)</span>
                        </div>
                    </div>

                    {/* Quick Navigation Column */}
                    <div>
                        <h4 className="text-white font-heading font-bold mb-4 text-sm uppercase tracking-wider">Company & Services</h4>
                        <ul className="space-y-2 text-marine-silver/60">
                            <li><a href="#services" className="hover:text-marine-aqua transition-colors">Engineering & Marine Support</a></li>
                            <li><a href="#services" className="hover:text-marine-aqua transition-colors">Industrial Procurement & Sourcing</a></li>
                            <li><a href="#services" className="hover:text-marine-aqua transition-colors">Electrical & Instrumentation</a></li>
                            <li><a href="#services" className="hover:text-marine-aqua transition-colors">Maintenance, Fabrication & Welding</a></li>
                            <li><a href="#industries" className="hover:text-marine-aqua transition-colors">5-Step Procurement Process</a></li>
                            <li><a href="#business-model" className="hover:text-marine-aqua transition-colors">Business Model & Growth</a></li>
                        </ul>
                    </div>

                    {/* Contact Info Column */}
                    <div>
                        <h4 className="text-white font-heading font-bold mb-4 text-sm uppercase tracking-wider">Contact Info</h4>
                        <ul className="space-y-3 mb-4">
                            <li className="flex items-start space-x-3 text-marine-silver/70">
                                <MapPin size={16} className="text-marine-aqua shrink-0 mt-0.5" />
                                <span>Visakhapatnam, Andhra Pradesh, India</span>
                            </li>
                            <li className="flex items-center space-x-3 text-marine-silver/70">
                                <Phone size={16} className="text-marine-aqua shrink-0" />
                                <span>7989586294 &nbsp;|&nbsp; 7382384417</span>
                            </li>
                            <li className="flex items-center space-x-3 text-marine-silver/70">
                                <Mail size={16} className="text-marine-aqua shrink-0" />
                                <a href="mailto:oracco.ind@gmail.com" className="hover:text-marine-aqua transition-colors">oracco.ind@gmail.com</a>
                            </li>
                        </ul>
                        <a
                            href="https://wa.me/917382384417"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all font-bold text-xs"
                        >
                            <WhatsAppIcon size={16} />
                            Message oracco on WhatsApp
                        </a>
                    </div>

                    {/* Connect / Social Media Column */}
                    <div>
                        <h4 className="text-white font-heading font-bold mb-4 text-sm uppercase tracking-wider">Connect With Us</h4>
                        <p className="text-marine-silver/60 text-xs mb-4 leading-relaxed">
                            Follow Oracco Enterprises across our official social channels for project updates and marine engineering news:
                        </p>
                        <div className="flex flex-col space-y-2.5">
                            {socialLinks.map((social) => {
                                const IconComp = social.icon;
                                return (
                                    <a
                                        key={social.id}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-3 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-marine-silver ${social.hoverBg} transition-all duration-200 group text-xs font-medium`}
                                    >
                                        <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0" style={{ color: social.color }}>
                                            <IconComp size={16} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <span className="block font-bold text-white group-hover:text-white truncate">{social.name}</span>
                                            <span className="block text-[10px] text-marine-silver/50 group-hover:text-white/80 truncate">{social.handle}</span>
                                        </div>
                                        <ExternalLink size={12} className="opacity-40 group-hover:opacity-100 transition-opacity shrink-0" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-6 text-center text-marine-silver/40 text-xs flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p>© {new Date().getFullYear()} ORACCO ENTERPRISES. All rights reserved.</p>
                    <p className="text-marine-aqua italic font-medium">RIGHT PRODUCT. RIGHT ENGINEERING. RIGHT EXECUTION.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

