import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Waves } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-marine-deep/80 z-10" />
                <img
                    src="https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&q=80&w=2070"
                    alt="Container Ship"
                    className="w-full h-full object-cover scale-105 animate-slow-pulse"
                />
            </div>

            {/* Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-marine-aqua/10 border border-marine-aqua/20 text-marine-aqua mb-6">
                        <Waves size={16} />
                        <span className="text-xs font-bold tracking-widest uppercase">Maritime & Industrial Excellence</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-heading font-extrabold leading-tight mb-6">
                        Pioneering the <br />
                        <span className="text-gradient">Future of Marine</span> <br />
                        Engineering.
                    </h1>
                    <p className="text-lg md:text-xl text-marine-silver/70 max-w-xl mb-10 leading-relaxed">
                        From shipbuilding and repairs to oil & gas industrial works, ORACCO delivers unmatched expertise and reliability in every contract.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-marine-aqua hover:bg-white text-marine-deep px-8 py-4 rounded-full font-extrabold flex items-center justify-center gap-2 transition-all transform hover:scale-105">
                            EXPLORE SERVICES <ArrowRight size={20} />
                        </button>
                        <button className="border border-white/20 hover:border-marine-aqua text-white px-8 py-4 rounded-full font-extrabold transition-all group overflow-hidden relative">
                            <span className="relative z-10">LEARN MORE</span>
                            <div className="absolute inset-0 bg-marine-aqua translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    className="hidden lg:block relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <div className="relative z-10 rounded-2xl overflow-hidden glass-morphism p-4 border border-white/10">
                        <img
                            src="https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80&w=1974"
                            alt="Industrial Engineering"
                            className="rounded-xl"
                        />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-marine-aqua/20 rounded-full blur-3xl" />
                    <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-marine-aqua/10 rounded-full blur-3xl" />
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
                    <div className="w-1 h-3 bg-marine-aqua rounded-full" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
