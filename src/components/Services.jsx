import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, ShoppingBag, Zap, Flame, CheckCircle } from 'lucide-react';

const Services = () => {
    const serviceCategories = [
        {
            id: 'engineering',
            title: 'Engineering & Marine Support',
            icon: Anchor,
            description: 'Comprehensive technical and engineering assistance for marine vessels, dry docks, and shipyard operations.',
            items: [
                'Mechanical engineering and technical support',
                'Equipment installation, fitment and alignment',
                'Mechanical maintenance and repair/modification works',
                'Piping, pipeline and valve installation/maintenance',
                'Pump-related works and hydraulic/pneumatic system support',
                'Inspection, testing and pressure-testing support',
                'Ship repair support, marine equipment installation and shipyard manpower support'
            ]
        },
        {
            id: 'procurement',
            title: 'Industrial Procurement & Material Supply',
            icon: ShoppingBag,
            description: 'End-to-end material sourcing, quality specification review, and timely supply for industrial and maritime needs.',
            items: [
                'Mechanical equipment, valves, pipes and fittings',
                'Pressure gauges, differential pressure gauges and measuring instruments',
                'Electrical equipment and industrial automation components',
                'Hydraulic and pneumatic components',
                'Fasteners, hardware, welding consumables and safety/industrial consumables',
                'Maintenance materials, marine equipment, spares and special-purpose engineering items'
            ]
        },
        {
            id: 'electrical',
            title: 'Electrical, Instrumentation & Industrial Works',
            icon: Zap,
            description: 'Expert electrical systems installation, instrument calibration, control panel wiring, and troubleshooting support.',
            items: [
                'Industrial electrical works and equipment supply',
                'Cables, accessories and control-panel-related requirements',
                'Industrial instrumentation and troubleshooting support',
                'Testing and maintenance support',
                'Calibration coordination, certificates, instrument repair and replacement support'
            ]
        },
        {
            id: 'fabrication',
            title: 'Maintenance, Fabrication & Welding',
            icon: Flame,
            description: 'High-precision structural fabrication, certified pipe welding, and preventive or breakdown maintenance works.',
            items: [
                'Preventive, corrective and breakdown maintenance',
                'Pumps, valves, piping, hydraulic/pneumatic equipment and industrial machinery',
                'Structural and pipe fabrication, platforms, brackets and equipment supports',
                'Marine fabrication, repair fabrication, modifications and on-site welding support'
            ]
        }
    ];

    return (
        <section id="services" className="py-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-marine-aqua/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-marine-aqua font-bold text-xs uppercase tracking-widest bg-marine-aqua/10 px-4 py-1.5 rounded-full border border-marine-aqua/20">
                            Service Portfolio
                        </span>
                        <h2 className="text-4xl md:text-5xl font-heading font-black text-white mt-4 mb-3">
                            SERVICES & <span className="text-marine-aqua">CAPABILITIES</span>
                        </h2>
                        <p className="text-marine-silver/70 max-w-2xl mx-auto text-base">
                            A practical service portfolio for marine, industrial and project-driven organizations.
                        </p>
                        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-marine-aqua to-transparent mx-auto mt-4 rounded-full" />
                    </motion.div>
                </div>

                {/* 4 Main Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {serviceCategories.map((category, idx) => {
                        const IconComponent = category.icon;
                        return (
                            <motion.div
                                key={category.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="glass-morphism p-8 rounded-3xl border border-white/10 hover:border-marine-aqua/40 transition-all duration-300 flex flex-col justify-between group"
                            >
                                <div>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-14 h-14 rounded-2xl bg-marine-aqua/10 text-marine-aqua flex items-center justify-center group-hover:bg-marine-aqua group-hover:text-marine-deep transition-all duration-300 shadow-md">
                                            <IconComponent size={28} />
                                        </div>
                                        <div>
                                            <span className="text-[10px] text-marine-aqua uppercase font-bold tracking-widest">Category 0{idx + 1}</span>
                                            <h3 className="text-xl font-heading font-extrabold text-white group-hover:text-marine-aqua transition-colors">{category.title}</h3>
                                        </div>
                                    </div>

                                    <p className="text-marine-silver/70 text-xs mb-6 italic leading-relaxed border-b border-white/10 pb-4">
                                        {category.description}
                                    </p>

                                    <ul className="space-y-3">
                                        {category.items.map((item, itemIdx) => (
                                            <li key={itemIdx} className="flex items-start space-x-2.5 text-xs text-marine-silver/90 leading-normal">
                                                <CheckCircle className="w-4 h-4 text-marine-aqua shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-marine-aqua uppercase tracking-wider">
                                    <span>Specialized Services</span>
                                    <a href="#contact" className="hover:underline flex items-center gap-1">Inquire Now &rarr;</a>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;

