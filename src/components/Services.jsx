import React from 'react';
import { motion } from 'framer-motion';
import {
    Wrench, Anchor, Zap, HardHat, Droplets,
    Settings, Truck, Users, PaintBucket, Hammer
} from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="group p-8 rounded-2xl glass-morphism border border-white/5 hover:border-marine-aqua/50 transition-all duration-300 transform hover:-translate-y-2"
    >
        <div className="w-14 h-14 rounded-xl bg-marine-aqua/10 flex items-center justify-center text-marine-aqua mb-6 group-hover:bg-marine-aqua group-hover:text-marine-deep transition-colors duration-300">
            <Icon size={28} />
        </div>
        <h3 className="text-xl font-heading font-bold mb-4 text-white group-hover:text-marine-aqua transition-colors">{title}</h3>
        <p className="text-marine-silver/60 leading-relaxed text-sm">{description}</p>
    </motion.div>
);

const Services = () => {
    const services = [
        {
            icon: Settings,
            title: "Marine Engineering",
            description: "Comprehensive technical solutions including engine maintenance, system overhauls, and propulsion optimization.",
            delay: 0.1
        },
        {
            icon: Anchor,
            title: "Hull Maintenance",
            description: "Structural inspections, cleaning, and repairs to ensure hull integrity and fuel efficiency for all vessel types.",
            delay: 0.2
        },
        {
            icon: Zap,
            title: "Electrical Works",
            description: "Specialized electrical installation, repair, and automation for marine and industrial applications.",
            delay: 0.3
        },
        {
            icon: Hammer,
            title: "Ship Building",
            description: "State-of-the-art vessel construction from initial design to final launch, adhering to global standards.",
            delay: 0.4
        },
        {
            icon: Wrench,
            title: "Ship Repairs",
            description: "Rapid-response emergency and planned repairs in dock or at sea to minimize operational downtime.",
            delay: 0.5
        },
        {
            icon: Droplets,
            title: "Oil & Gas Industrial",
            description: "Specialized infrastructure support and maintenance for offshore and onshore oil & gas facilities.",
            delay: 0.6
        },
        {
            icon: Truck,
            title: "Material Supply",
            description: "High-quality marine and industrial components sourced from reliable manufacturers worldwide.",
            delay: 0.7
        },
        {
            icon: Users,
            title: "Man Power Supply",
            description: "Highly skilled technicians, engineers, and support staff for short-term and long-term contracts.",
            delay: 0.8
        },
        {
            icon: PaintBucket,
            title: "Painting & Coating",
            description: "Professional industrial painting and anti-corrosive coating for ships and coastal structures.",
            delay: 0.9
        }
    ];

    return (
        <section id="services" className="py-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-marine-aqua/5 rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-extrabold mb-4"
                    >
                        Our <span className="text-marine-aqua">Services</span>
                    </motion.h2>
                    <div className="w-20 h-1.5 bg-marine-aqua mx-auto rounded-full mb-6" />
                    <p className="text-marine-silver/60 max-w-2xl mx-auto text-lg">
                        We offer a complete range of work contracts tailored to the maritime and industrial sectors.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
