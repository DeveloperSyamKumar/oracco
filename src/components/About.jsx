import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Shield, Target, Award } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-marine-deep/50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Text Content */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-6">
                                Redefining Marine <br />
                                <span className="text-marine-aqua">Service Standards</span>
                            </h2>
                            <p className="text-marine-silver/70 text-lg leading-relaxed mb-8">
                                With decades of collective experience, ORACCO has established itself as a leader in maritime and industrial contracts. Our commitment to safety, innovation, and technical excellence drives every project we undertake.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                                {[
                                    { icon: Shield, text: "Uncompromising Safety" },
                                    { icon: Target, text: "Precision Engineering" },
                                    { icon: Award, text: "Certified Excellence" },
                                    { icon: CheckCircle2, text: "Global Standards" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center space-x-3">
                                        <item.icon className="text-marine-aqua w-6 h-6" />
                                        <span className="text-white font-medium">{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="p-6 rounded-2xl bg-marine-aqua/5 border border-marine-aqua/20 items-center gap-4 flex">
                                <div className="text-4xl font-heading font-bold text-marine-aqua">25+</div>
                                <div className="text-marine-silver/60 text-sm font-bold uppercase tracking-widest leading-tight">
                                    Years of Combined <br /> Maritime Experience
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Visuals */}
                    <div className="lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="rounded-2xl overflow-hidden border-8 border-white/5 relative z-10">
                                <img
                                    src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&q=80&w=2074"
                                    alt="Marine Team"
                                    className="w-full"
                                />
                            </div>

                            {/* Floating Stat */}
                            <div className="absolute -bottom-6 -right-6 glass-morphism p-6 rounded-xl border border-white/10 z-20 animate-bounce-slow">
                                <div className="text-green-400 font-bold mb-1">Success Rate</div>
                                <div className="text-3xl font-heading font-extrabold text-white">99.8%</div>
                            </div>

                            <div className="absolute -top-10 -left-10 w-32 h-32 bg-marine-aqua/30 rounded-full blur-[80px]" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
