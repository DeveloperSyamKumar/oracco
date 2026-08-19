import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Eye, Target, CheckCircle2, Cpu, Clock, HeartHandshake } from 'lucide-react';

const About = () => {
    const coreValues = [
        {
            icon: ShieldCheck,
            title: "Reliability",
            desc: "Dependable execution backed by clear commitments."
        },
        {
            icon: Award,
            title: "Quality",
            desc: "Suitable products and work aligned with required specifications."
        },
        {
            icon: HeartHandshake,
            title: "Integrity",
            desc: "Transparent communication and ethical business practices."
        },
        {
            icon: Cpu,
            title: "Engineering Excellence",
            desc: "Technical understanding before recommending a product or solution."
        },
        {
            icon: Target,
            title: "Customer Focus",
            desc: "Understand the requirement first, then work toward the most practical solution."
        },
        {
            icon: Clock,
            title: "Timely Execution",
            desc: "Procurement and execution that respect industrial project schedules."
        }
    ];

    const missionPoints = [
        "Deliver reliable products and engineering services.",
        "Provide efficient procurement and sourcing solutions.",
        "Support marine and industrial projects with practical technical expertise.",
        "Maintain transparency in commercial dealings.",
        "Deliver materials and services within committed timelines.",
        "Build long-term relationships with customers, suppliers and project partners."
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-marine-aqua/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-marine-aqua font-bold text-xs uppercase tracking-widest bg-marine-aqua/10 px-4 py-1.5 rounded-full border border-marine-aqua/20">
                            Single-Point Partner
                        </span>
                        <h2 className="text-4xl md:text-5xl font-heading font-black text-white mt-4 mb-3">
                            COMPANY <span className="text-marine-aqua">OVERVIEW</span>
                        </h2>
                        <p className="text-lg italic text-marine-silver/80 font-medium max-w-2xl mx-auto">
                            Engineering understanding. Reliable sourcing. Practical execution.
                        </p>
                        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-marine-aqua to-transparent mx-auto mt-4 rounded-full" />
                    </motion.div>
                </div>

                {/* Company Overview & Vision/Mission Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
                    {/* Left Column: Company Overview & Vision */}
                    <motion.div
                        className="lg:col-span-6 space-y-8"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="glass-morphism p-8 rounded-3xl border border-white/10 relative">
                            <h3 className="text-2xl font-heading font-extrabold text-white mb-4 flex items-center gap-3">
                                <span className="w-3 h-8 bg-marine-aqua rounded-full inline-block" />
                                Single-Point Marine & Industrial Solutions
                            </h3>
                            <p className="text-marine-silver/70 text-base leading-relaxed mb-4">
                                Oracco Enterprises is positioned as a single-point partner for marine and industrial requirements - from individual components and equipment to project-level material, manpower and engineering support.
                            </p>
                            <p className="text-marine-silver/70 text-base leading-relaxed">
                                Our approach combines technical understanding, dependable sourcing, responsive service and execution discipline to help customers complete requirements efficiently and within committed timelines.
                            </p>
                        </div>

                        {/* Vision Card */}
                        <div className="glass-morphism p-8 rounded-3xl border border-marine-aqua/20 bg-marine-aqua/5 relative">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-marine-aqua/20 flex items-center justify-center text-marine-aqua">
                                    <Eye size={22} />
                                </div>
                                <h3 className="text-xl font-heading font-extrabold text-white">Our Vision</h3>
                            </div>
                            <p className="text-marine-silver/80 text-sm leading-relaxed">
                                To build Oracco Enterprises into a trusted and professionally managed Marine & Industrial solutions company recognized for reliability, engineering capability, quality and customer-focused service. The long-term ambition is to expand into larger engineering, procurement, contracting and turnkey projects across India.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column: Mission Card */}
                    <motion.div
                        className="lg:col-span-6"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="glass-morphism p-8 rounded-3xl border border-white/10 h-full">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-marine-aqua/20 flex items-center justify-center text-marine-aqua">
                                    <Target size={22} />
                                </div>
                                <h3 className="text-xl font-heading font-extrabold text-white">Our Mission</h3>
                            </div>

                            <ul className="space-y-4">
                                {missionPoints.map((point, index) => (
                                    <li key={index} className="flex items-start space-x-3 text-marine-silver/80 text-sm leading-snug">
                                        <CheckCircle2 className="w-5 h-5 text-marine-aqua shrink-0 mt-0.5" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>

                {/* Core Values Section */}
                <div>
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-heading font-extrabold text-white">
                            Core <span className="text-marine-aqua">Values</span>
                        </h3>
                        <p className="text-marine-silver/60 text-sm mt-2">Guided by principles of integrity, engineering excellence, and customer trust.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {coreValues.map((value, idx) => {
                            const IconComp = value.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                                    className="glass-morphism p-6 rounded-2xl border border-white/5 hover:border-marine-aqua/40 transition-all duration-300 transform hover:-translate-y-1.5"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-marine-aqua/10 flex items-center justify-center text-marine-aqua mb-4">
                                        <IconComp size={24} />
                                    </div>
                                    <h4 className="text-lg font-heading font-bold text-white mb-2">{value.title}</h4>
                                    <p className="text-marine-silver/70 text-xs leading-relaxed">{value.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

