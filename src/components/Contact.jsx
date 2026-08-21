import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Loader2, Wrench, ShoppingCart, ShieldCheck, Layers, Award, Sparkles, ExternalLink } from 'lucide-react';
import axios from 'axios';
import { socialLinks, WhatsAppIcon } from './SocialLinks';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: 'Engineering Support',
        message: ''
    });
    const [status, setStatus] = useState('idle');

    const businessAreas = [
        {
            title: 'Engineering',
            desc: 'Technical support and execution.',
            icon: Wrench
        },
        {
            title: 'Procurement',
            desc: 'Sourcing and supply of industrial and marine products.',
            icon: ShoppingCart
        },
        {
            title: 'Contracting',
            desc: 'Project-based engineering, maintenance, fabrication and manpower support.',
            icon: Layers
        },
        {
            title: 'Project Support',
            desc: 'Coordination of materials, manpower, equipment and services required for project execution.',
            icon: ShieldCheck
        }
    ];

    const qualityPoints = [
        'Product specification compliance',
        'Supplier evaluation and appropriate documentation',
        'Traceability wherever applicable',
        'Safe working practices and project requirements',
        'Customer specifications and applicable statutory/industry requirements'
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            await axios.post('http://localhost:5000/api/inquiry', formData);
            setStatus('success');
            setFormData({ name: '', email: '', service: 'Engineering Support', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error(error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="business-model" className="py-24 relative overflow-hidden">
            {/* Background decoration */}
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
                            Business Strategy & Growth
                        </span>
                        <h2 className="text-3xl md:text-5xl font-heading font-black text-white mt-4 mb-3">
                            BUSINESS MODEL, GROWTH & <span className="text-marine-aqua">CONTACT</span>
                        </h2>
                        <p className="text-marine-silver/80 italic text-base max-w-2xl mx-auto">
                            Built around the promise: Right Product. Right Engineering. Right Execution.
                        </p>
                        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-marine-aqua to-transparent mx-auto mt-4 rounded-full" />
                    </motion.div>
                </div>

                {/* Four Key Business Areas Grid */}
                <div className="mb-20">
                    <h3 className="text-2xl font-heading font-extrabold text-white mb-8 flex items-center gap-3">
                        <span className="w-3 h-7 bg-marine-aqua rounded-full inline-block" />
                        Four Key Business Areas
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {businessAreas.map((area, idx) => {
                            const IconC = area.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                                    className="glass-morphism p-6 rounded-2xl border border-white/10 hover:border-marine-aqua/40 transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-marine-aqua/10 text-marine-aqua flex items-center justify-center mb-4">
                                        <IconC size={24} />
                                    </div>
                                    <h4 className="text-lg font-heading font-bold text-white mb-2">{area.title}</h4>
                                    <p className="text-marine-silver/70 text-xs leading-relaxed">{area.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Quality Focus & Future Direction Dual Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
                    {/* Quality & Compliance */}
                    <div className="lg:col-span-6 glass-morphism p-8 rounded-3xl border border-white/10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-marine-aqua/20 text-marine-aqua flex items-center justify-center">
                                <Award size={22} />
                            </div>
                            <h3 className="text-xl font-heading font-extrabold text-white">Quality & Compliance Focus</h3>
                        </div>
                        <ul className="space-y-3">
                            {qualityPoints.map((qp, idx) => (
                                <li key={idx} className="flex items-start space-x-3 text-marine-silver/80 text-xs leading-relaxed">
                                    <span className="w-1.5 h-1.5 rounded-full bg-marine-aqua shrink-0 mt-1.5" />
                                    <span>{qp}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Future Direction */}
                    <div className="lg:col-span-6 glass-morphism p-8 rounded-3xl border border-marine-aqua/20 bg-marine-aqua/5">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-marine-aqua/20 text-marine-aqua flex items-center justify-center">
                                <Sparkles size={22} />
                            </div>
                            <h3 className="text-xl font-heading font-extrabold text-white">Future Direction</h3>
                        </div>
                        <p className="text-marine-silver/80 text-xs leading-relaxed">
                            Oracco Enterprises is being developed toward a comprehensive Marine & Industrial EPC and project-solutions organization, with future growth focused on marine engineering contracts, ship repair and maintenance, industrial maintenance, EPC support, industrial and marine equipment distribution, engineering consultancy, turnkey execution, pan-India supply, strategic OEM partnerships, import/export and digital procurement solutions.
                        </p>
                    </div>
                </div>

                {/* Our Promise Banner */}
                <div className="mb-20 text-center py-10 px-6 rounded-3xl glass-morphism border border-marine-aqua/30 bg-gradient-to-r from-marine-aqua/10 via-blue-600/10 to-marine-aqua/10">
                    <span className="text-xs uppercase tracking-widest font-extrabold text-marine-aqua">Our Promise</span>
                    <h3 className="text-2xl md:text-4xl font-heading font-black text-white mt-2">
                        RIGHT PRODUCT. &nbsp; RIGHT ENGINEERING. &nbsp; RIGHT EXECUTION.
                    </h3>
                </div>

                {/* Contact Section */}
                <div id="contact" className="pt-8">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Official Contact Info Card */}
                        <div className="lg:w-1/3">
                            <div className="glass-morphism p-8 rounded-3xl border border-white/10 h-full flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl font-heading font-extrabold text-white mb-6 pb-3 border-b border-white/10">
                                        Contact Information
                                    </h3>
                                    <div className="space-y-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-10 h-10 rounded-xl bg-marine-aqua/10 flex items-center justify-center text-marine-aqua shrink-0">
                                                <MapPin size={20} />
                                            </div>
                                            <div>
                                                <div className="text-marine-silver/50 text-[11px] font-bold uppercase tracking-wider">Location</div>
                                                <div className="text-white font-bold text-sm">Visakhapatnam, Andhra Pradesh, India</div>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4">
                                            <div className="w-10 h-10 rounded-xl bg-marine-aqua/10 flex items-center justify-center text-marine-aqua shrink-0">
                                                <Mail size={20} />
                                            </div>
                                            <div>
                                                <div className="text-marine-silver/50 text-[11px] font-bold uppercase tracking-wider">Email Address</div>
                                                <a href="mailto:oracco.ind@gmail.com" className="text-marine-aqua font-bold text-sm hover:underline">
                                                    oracco.ind@gmail.com
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4">
                                            <div className="w-10 h-10 rounded-xl bg-marine-aqua/10 flex items-center justify-center text-marine-aqua shrink-0">
                                                <Phone size={20} />
                                            </div>
                                            <div>
                                                <div className="text-marine-silver/50 text-[11px] font-bold uppercase tracking-wider">Phone Numbers</div>
                                                <div className="text-white font-bold text-sm">
                                                    7989586294 &nbsp;|&nbsp; 7382384417
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Direct WhatsApp Quick Contact Box */}
                                    <div className="mt-8 p-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center font-bold shrink-0">
                                                <WhatsAppIcon size={18} />
                                            </div>
                                            <div>
                                                <span className="text-xs font-bold text-white block">Fast WhatsApp Inquiry</span>
                                                <span className="text-[10px] text-[#25D366] font-semibold block">+91 7382384417</span>
                                            </div>
                                        </div>
                                        <a
                                            href="https://wa.me/917382384417"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] shadow-md"
                                        >
                                            <WhatsAppIcon size={16} />
                                            Message oracco on WhatsApp
                                        </a>
                                    </div>

                                    {/* Social Channels Quick Grid */}
                                    <div className="mt-6">
                                        <span className="text-[11px] font-bold text-marine-silver/50 uppercase tracking-wider block mb-3">Official Social Media</span>
                                        <div className="grid grid-cols-3 gap-2">
                                            {socialLinks.filter(s => s.id !== 'whatsapp').map((social) => {
                                                const IconComp = social.icon;
                                                return (
                                                    <a
                                                        key={social.id}
                                                        href={social.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex flex-col items-center justify-center p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-marine-silver hover:text-white transition-all text-[10px] font-semibold gap-1 group"
                                                        title={social.actionText}
                                                    >
                                                        <IconComp size={18} style={{ color: social.color }} className="group-hover:scale-110 transition-transform" />
                                                        <span>{social.name}</span>
                                                    </a>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                                    <p className="text-xs text-marine-aqua italic font-medium">
                                        "Engineering Solutions. Reliable Supply. Trusted Partnership."
                                    </p>
                                </div>
                            </div>
                        </div>


                        {/* Interactive Inquiry Form */}
                        <div className="lg:w-2/3">
                            <div className="glass-morphism p-8 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
                                <h3 className="text-2xl font-heading font-extrabold text-white mb-2">Send an Inquiry</h3>
                                <p className="text-marine-silver/60 text-xs mb-6">Fill out your project or sourcing requirements below and our engineering team will get back to you.</p>

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-xs font-bold text-marine-silver/70 mb-2 uppercase tracking-widest">Your Name / Organization</label>
                                            <input
                                                required
                                                type="text"
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-marine-aqua outline-none text-sm transition-colors"
                                                placeholder="Enter your name here"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-marine-silver/70 mb-2 uppercase tracking-widest">Email Address</label>
                                            <input
                                                required
                                                type="email"
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-marine-aqua outline-none text-sm transition-colors"
                                                placeholder="name@company.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-marine-silver/70 mb-2 uppercase tracking-widest">Scope of Requirement</label>
                                        <select
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-marine-aqua outline-none text-sm transition-colors appearance-none"
                                            value={formData.service}
                                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                        >
                                            <option className="bg-marine-deep text-white">Engineering & Marine Support</option>
                                            <option className="bg-marine-deep text-white">Industrial Procurement & Material Supply</option>
                                            <option className="bg-marine-deep text-white">Electrical, Instrumentation & Industrial Works</option>
                                            <option className="bg-marine-deep text-white">Maintenance, Fabrication & Welding</option>
                                            <option className="bg-marine-deep text-white">Manpower & Project Support</option>
                                            <option className="bg-marine-deep text-white">others</option>

                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-marine-silver/70 mb-2 uppercase tracking-widest">Requirement Details</label>
                                        <textarea
                                            required
                                            rows="4"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-marine-aqua outline-none text-sm transition-colors resize-none"
                                            placeholder="Specify equipment, quantities, project timelines, or service requirements..."
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        ></textarea>
                                    </div>

                                    <button
                                        disabled={status === 'loading'}
                                        className="w-full bg-marine-aqua hover:bg-white text-marine-deep font-extrabold py-4 rounded-xl flex items-center justify-center gap-3 transition-all transform hover:scale-[1.01] shadow-lg shadow-marine-aqua/20 disabled:opacity-50"
                                    >
                                        {status === 'loading' ? (
                                            <Loader2 className="animate-spin" />
                                        ) : (
                                            <>SUBMIT INQUIRY <Send size={18} /></>
                                        )}
                                    </button>

                                    {status === 'success' && (
                                        <p className="text-green-400 text-center text-xs font-bold animate-pulse">Your inquiry has been submitted successfully to Oracco Enterprises!</p>
                                    )}
                                    {status === 'error' && (
                                        <p className="text-red-400 text-center text-xs font-bold">Could not send inquiry. Please try emailing directly to oracco.ind@gmail.com.</p>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

