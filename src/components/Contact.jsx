import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Loader2 } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: 'Marine Engineering',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            await axios.post('http://localhost:5000/api/inquiry', formData);
            setStatus('success');
            setFormData({ name: '', email: '', service: 'Marine Engineering', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error(error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">Get In <span className="text-marine-aqua">Touch</span></h2>
                    <div className="w-20 h-1.5 bg-marine-aqua mx-auto rounded-full mb-6" />
                    <p className="text-marine-silver/60 max-w-2xl mx-auto">
                        Ready to discuss your next project? Contact our team for a detailed consultation and quote.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Contact Info */}
                    <div className="lg:w-1/3 space-y-8">
                        <div className="glass-morphism p-8 rounded-2xl border border-white/5">
                            <h3 className="text-xl font-heading font-bold mb-6 text-white">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 rounded-xl bg-marine-aqua/10 flex items-center justify-center text-marine-aqua shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <div className="text-white font-bold mb-1">Our Office</div>
                                        <div className="text-marine-silver/60 text-sm">123 Marine Drive, Industrial Zone, Coastal City, Port 456</div>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 rounded-xl bg-marine-aqua/10 flex items-center justify-center text-marine-aqua shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <div className="text-white font-bold mb-1">Call Us</div>
                                        <div className="text-marine-silver/60 text-sm">+1 (234) 567-890</div>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 rounded-xl bg-marine-aqua/10 flex items-center justify-center text-marine-aqua shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <div className="text-white font-bold mb-1">Email Support</div>
                                        <div className="text-marine-silver/60 text-sm">contact@oracco.com</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:w-2/3">
                        <div className="glass-morphism p-8 md:p-12 rounded-2xl border border-white/5 relative overflow-hidden">
                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-marine-silver/70 mb-2 uppercase tracking-widest">Full Name</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-marine-aqua outline-none transition-colors"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-marine-silver/70 mb-2 uppercase tracking-widest">Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-marine-aqua outline-none transition-colors"
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-marine-silver/70 mb-2 uppercase tracking-widest">Interested Service</label>
                                    <select
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-marine-aqua outline-none transition-colors appearance-none"
                                        value={formData.service}
                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                    >
                                        <option className="bg-marine-deep">Marine Engineering</option>
                                        <option className="bg-marine-deep">Hull Maintenance</option>
                                        <option className="bg-marine-deep">Electrical Works</option>
                                        <option className="bg-marine-deep">Ship Building</option>
                                        <option className="bg-marine-deep">Oil & Gas Industrial</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-marine-silver/70 mb-2 uppercase tracking-widest">Your Message</label>
                                    <textarea
                                        required
                                        rows="5"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-marine-aqua outline-none transition-colors resize-none"
                                        placeholder="Tell us about your project requirements..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    ></textarea>
                                </div>

                                <button
                                    disabled={status === 'loading'}
                                    className="w-full bg-marine-aqua hover:bg-white text-marine-deep font-extrabold py-4 rounded-xl flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:scale-100"
                                >
                                    {status === 'loading' ? (
                                        <Loader2 className="animate-spin" />
                                    ) : (
                                        <>SEND INQUIRY <Send size={18} /></>
                                    )}
                                </button>

                                {status === 'success' && (
                                    <p className="text-green-400 text-center font-bold animate-pulse">Your message has been sent successfully! We'll get back to you soon.</p>
                                )}
                                {status === 'error' && (
                                    <p className="text-red-400 text-center font-bold">Something went wrong. Please try again later.</p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
