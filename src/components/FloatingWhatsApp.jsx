import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, ExternalLink } from 'lucide-react';
import { socialLinks, WhatsAppIcon } from './SocialLinks';

const FloatingWhatsApp = () => {
    const [isOpen, setIsOpen] = useState(false);

    const whatsappLink = socialLinks.find(s => s.id === 'whatsapp');

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="mb-4 w-72 sm:w-80 glass-morphism rounded-2xl p-5 border border-white/15 shadow-2xl bg-marine-deep/95 backdrop-blur-xl"
                    >
                        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                            <div className="flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center font-bold shadow-md">
                                    <WhatsAppIcon size={18} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-heading font-extrabold text-white">ORACCO ENTERPRISES</h4>
                                    <span className="text-[10px] text-[#25D366] font-semibold flex items-center gap-1">
                                        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping inline-block" />
                                        Online on WhatsApp
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-marine-silver/60 hover:text-white transition-colors p-1"
                                aria-label="Close social menu"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <p className="text-xs text-marine-silver/80 mb-4 leading-relaxed">
                            Need fast marine & industrial support? Reach out directly to our engineering team on WhatsApp or connect on social media:
                        </p>

                        {/* WhatsApp Direct Action Button */}
                        <a
                            href={whatsappLink.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] shadow-lg shadow-[#25D366]/20 mb-4"
                        >
                            <WhatsAppIcon size={18} />
                            <span>Message oracco on WhatsApp</span>
                            <ExternalLink size={14} className="ml-auto opacity-80" />
                        </a>

                        {/* Other Social Media Links */}
                        <div className="pt-3 border-t border-white/10">
                            <span className="text-[10px] uppercase tracking-wider text-marine-silver/60 font-bold block mb-2">Connect on Social Media</span>
                            <div className="grid grid-cols-3 gap-2">
                                {socialLinks.filter(s => s.id !== 'whatsapp').map((social) => {
                                    const IconComp = social.icon;
                                    return (
                                        <a
                                            key={social.id}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex flex-col items-center justify-center p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-marine-silver hover:text-white transition-all text-[10px] font-semibold gap-1"
                                            title={social.actionText}
                                        >
                                            <IconComp size={16} style={{ color: social.color }} />
                                            <span>{social.name}</span>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Floating Trigger Button */}
            <div className="relative group">
                <a
                    href={whatsappLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-4 sm:px-5 rounded-full shadow-2xl shadow-[#25D366]/40 transition-all transform hover:scale-105 border border-white/20 font-heading font-extrabold text-xs"
                    title="Message oracco on WhatsApp (+91 7382384417)"
                >
                    <WhatsAppIcon size={22} className="animate-pulse" />
                    <span className="hidden sm:inline">Message oracco on WhatsApp</span>
                    <span className="sm:hidden">WhatsApp</span>
                </a>

                {/* Toggle menu trigger */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-marine-deep text-marine-aqua border border-marine-aqua/40 flex items-center justify-center text-[10px] font-extrabold shadow-md hover:scale-110 transition-transform"
                    title="More social links"
                >
                    {isOpen ? '✕' : '+'}
                </button>
            </div>
        </div>
    );
};

export default FloatingWhatsApp;
