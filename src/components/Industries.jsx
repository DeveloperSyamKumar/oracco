import React from 'react';
import { motion } from 'framer-motion';
import {
    Anchor, Factory, Flame, Zap, Building, Wrench, Shield, CheckCircle2,
    Search, Filter, CheckSquare, Truck, Headset
} from 'lucide-react';

const Industries = () => {
    const industries = [
        {
            icon: Anchor,
            name: 'Marine & Shipbuilding',
            desc: 'Shipyards, vessel operators, marine contractors and ship-repair organizations.'
        },
        {
            icon: Factory,
            name: 'Manufacturing',
            desc: 'Manufacturing plants and engineering industries.'
        },
        {
            icon: Flame,
            name: 'Oil & Gas',
            desc: 'Industrial plants, contractors and project organizations.'
        },
        {
            icon: Zap,
            name: 'Power & Electrical',
            desc: 'Electrical and industrial infrastructure projects.'
        },
        {
            icon: Building,
            name: 'Infrastructure & Construction',
            desc: 'Construction contractors and infrastructure projects.'
        },
        {
            icon: Wrench,
            name: 'Engineering & Maintenance',
            desc: 'Industrial maintenance contractors and engineering organizations.'
        },
        {
            icon: Shield,
            name: 'Defence & Maritime Support',
            desc: 'Eligible projects subject to applicable registrations, approvals and tender requirements.'
        }
    ];

    const procurementSteps = [
        {
            step: '01',
            title: 'Understand',
            icon: Search,
            desc: 'Customer requirement, application and technical specifications.'
        },
        {
            step: '02',
            title: 'Identify',
            icon: Filter,
            desc: 'Suitable manufacturers, authorized suppliers or technically appropriate sources.'
        },
        {
            step: '03',
            title: 'Evaluate',
            icon: CheckSquare,
            desc: 'Technical fit, commercial terms, delivery schedules and documentation.'
        },
        {
            step: '04',
            title: 'Supply',
            icon: Truck,
            desc: 'Procurement, inspection and delivery to the agreed requirement.'
        },
        {
            step: '05',
            title: 'Support',
            icon: Headset,
            desc: 'Documentation, technical coordination and after-sales assistance where applicable.'
        }
    ];

    const whyChooseUs = [
        'One point of contact for engineering, procurement and project support',
        'Technical understanding before recommending products or solutions',
        'Responsive sourcing and competitive quotations based on requirement',
        'Project-oriented coordination of materials, manpower, equipment and services',
        'Flexible support from individual material requirements to larger project packages',
        'Long-term partnership mindset focused on repeat business and dependable service'
    ];

    return (
        <section id="industries" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-marine-aqua font-bold text-xs uppercase tracking-widest bg-marine-aqua/10 px-4 py-1.5 rounded-full border border-marine-aqua/20">
                            Execution & Sectors
                        </span>
                        <h2 className="text-3xl md:text-5xl font-heading font-black text-white mt-4 mb-3 leading-tight">
                            INDUSTRIES, PROCUREMENT & <br className="hidden sm:block" />
                            <span className="text-marine-aqua">PROJECT EXECUTION</span>
                        </h2>
                        <p className="text-marine-silver/80 italic text-sm md:text-base max-w-2xl mx-auto">
                            One coordinated interface for products, technical support, manpower and site execution.
                        </p>
                        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-marine-aqua to-transparent mx-auto mt-4 rounded-full" />
                    </motion.div>
                </div>

                {/* Industries Grid */}
                <div className="mb-20">
                    <h3 className="text-2xl font-heading font-extrabold text-white mb-8 flex items-center gap-3">
                        <span className="w-3 h-7 bg-marine-aqua rounded-full inline-block" />
                        Industries We Aim to Serve
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {industries.map((ind, idx) => {
                            const IconComp = ind.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                                    className="glass-morphism p-6 rounded-2xl border border-white/10 hover:border-marine-aqua/40 transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-marine-aqua/10 text-marine-aqua flex items-center justify-center mb-4">
                                        <IconComp size={24} />
                                    </div>
                                    <h4 className="text-lg font-heading font-bold text-white mb-2">{ind.name}</h4>
                                    <p className="text-marine-silver/70 text-xs leading-relaxed">{ind.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* 5-Step Procurement Process */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-heading font-extrabold text-white">
                            Procurement <span className="text-marine-aqua">Approach</span>
                        </h3>
                        <p className="text-marine-silver/60 text-xs mt-2">A structured 5-step workflow for reliable delivery and technical accuracy.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative">
                        {procurementSteps.map((pStep, idx) => {
                            const StepIcon = pStep.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                                    className="glass-morphism p-5 rounded-2xl border border-white/10 relative text-center flex flex-col justify-between group hover:border-marine-aqua/50"
                                >
                                    <div className="text-3xl font-heading font-black text-marine-aqua/30 group-hover:text-marine-aqua transition-colors mb-2">
                                        {pStep.step}
                                    </div>
                                    <div className="w-10 h-10 rounded-xl bg-marine-aqua/10 text-marine-aqua mx-auto flex items-center justify-center mb-3">
                                        <StepIcon size={20} />
                                    </div>
                                    <h4 className="text-base font-heading font-bold text-white mb-2">{pStep.title}</h4>
                                    <p className="text-marine-silver/70 text-[11px] leading-relaxed">{pStep.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Why Choose Oracco Enterprises */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass-morphism p-8 md:p-10 rounded-3xl border border-marine-aqua/30 bg-marine-aqua/5"
                >
                    <h3 className="text-2xl md:text-3xl font-heading font-black text-white mb-8 text-center">
                        Why Choose <span className="text-marine-aqua">Oracco Enterprises</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {whyChooseUs.map((reason, idx) => (
                            <div key={idx} className="flex items-start space-x-3">
                                <CheckCircle2 className="w-5 h-5 text-marine-aqua shrink-0 mt-0.5" />
                                <span className="text-marine-silver/90 text-sm font-medium leading-snug">{reason}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Industries;
