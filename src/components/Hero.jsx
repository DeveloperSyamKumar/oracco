import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, UserCheck, Wrench, Package, Building2 } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16">
            {/* Hero Ambient Glow Overlays */}

            {/* Glowing Accent Orbs */}
            <div className="absolute top-1/4 left-10 w-96 h-96 bg-marine-aqua/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Main Hero Content */}
                <motion.div
                    className="lg:col-span-7 text-center sm:text-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Badge */}
                    <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-marine-aqua/10 border border-marine-aqua/30 text-marine-aqua mb-6 shadow-lg shadow-marine-aqua/10">
                        <ShieldCheck size={16} />
                        <span className="text-xs font-extrabold tracking-widest uppercase">Single-Point Marine & Industrial Partner</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black leading-tight mb-6 text-white tracking-tight">
                        ORACCO <br />
                        <span className="text-gradient">ENTERPRISES</span>
                    </h1>

                    <p className="text-xl md:text-2xl font-medium text-marine-aqua mb-4 tracking-wide">
                        Your Trusted Marine & Industrial Partner
                    </p>

                    {/* 3 Scope Pillars from PDF Page 1 */}
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mb-8">
                        <span className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white font-semibold text-xs sm:text-sm flex items-center gap-1.5">
                            <Wrench size={14} className="text-marine-aqua" /> Engineering
                        </span>
                        <span className="text-marine-silver/40 font-bold">•</span>
                        <span className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white font-semibold text-xs sm:text-sm flex items-center gap-1.5">
                            <Package size={14} className="text-marine-aqua" /> Procurement
                        </span>
                        <span className="text-marine-silver/40 font-bold">•</span>
                        <span className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white font-semibold text-xs sm:text-sm flex items-center gap-1.5">
                            <Building2 size={14} className="text-marine-aqua" /> Construction
                        </span>
                    </div>

                    {/* Proprietor Badge from PDF Page 1 */}
                    <div className="mb-10 inline-flex items-center gap-3 p-3.5 rounded-2xl glass-morphism border border-marine-aqua/20 bg-marine-aqua/5 max-w-md">
                        <div className="w-10 h-10 rounded-xl bg-marine-aqua text-marine-deep flex items-center justify-center shrink-0 shadow-md">
                            <UserCheck size={20} className="font-bold" />
                        </div>
                        <div className="text-left">
                            <div className="text-[11px] font-bold text-marine-aqua uppercase tracking-widest">Proprietor</div>
                            <div className="text-white font-bold text-base leading-tight">PYDA VINAY KUMAR <span className="text-xs font-normal text-marine-silver/70">(B-TECH)</span></div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
                        <a
                            href="#services"
                            className="bg-marine-aqua hover:bg-white text-marine-deep px-8 py-4 rounded-full font-black text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-xl shadow-marine-aqua/20"
                        >
                            EXPLORE SERVICES <ArrowRight size={18} />
                        </a>
                        <a
                            href="#contact"
                            className="border border-white/20 hover:border-marine-aqua text-white hover:text-marine-aqua px-8 py-4 rounded-full font-black text-sm tracking-wider uppercase transition-all flex items-center justify-center gap-2 glass-morphism"
                        >
                            GET IN TOUCH
                        </a>
                    </div>
                </motion.div>

                {/* Right Side Visual Showcase */}
                <motion.div
                    className="lg:col-span-5 relative"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <div className="relative z-10 rounded-3xl overflow-hidden glass-morphism p-3 border border-white/10 shadow-2xl">
                        <img
                            src="/logo.png"
                            alt="Marine Engineering and Sourcing"
                            className="rounded-2xl w-full h-[400px] object-cover"
                        />

                        {/* Floating Highlight Card */}
                        {/* <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-morphism border border-white/15 backdrop-blur-xl bg-marine-deep/90">
                            <p className="text-xs text-marine-silver/80 italic font-medium leading-relaxed">
                                "Engineering understanding. Reliable sourcing. Practical execution."
                            </p>
                        </div> */}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

