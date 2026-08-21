import React from 'react';

export const WhatsAppIcon = ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.554 4.108 1.523 5.834L0 24l6.326-1.492C8.016 23.475 9.957 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.802 0-3.553-.478-5.09-1.385l-.365-.216-3.75.884.898-3.655-.237-.377C2.476 15.65 2 13.867 2 12 2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
    </svg>
);

export const InstagramIcon = ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
);

export const FacebookIcon = ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
);

export const YouTubeIcon = ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
);

export const socialLinks = [
    {
        id: 'whatsapp',
        name: 'WhatsApp',
        handle: '+91 7382384417',
        url: 'https://wa.me/917382384417',
        actionText: 'Message oracco on WhatsApp',
        color: '#25D366',
        badgeBg: 'bg-[#25D366]/10 text-[#25D366] border-[#25D366]/30',
        hoverBg: 'hover:bg-[#25D366] hover:text-white hover:border-[#25D366]',
        icon: WhatsAppIcon
    },
    {
        id: 'instagram',
        name: 'Instagram',
        handle: '@oracco.in',
        url: 'https://www.instagram.com/oracco.in?utm_source=qr&igsi=bTVpYTIybGZjem0y',
        actionText: 'Follow @oracco.in on Instagram',
        color: '#E4405F',
        badgeBg: 'bg-[#E4405F]/10 text-[#E4405F] border-[#E4405F]/30',
        hoverBg: 'hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F]',
        icon: InstagramIcon
    },
    {
        id: 'facebook',
        name: 'Facebook',
        handle: 'Oracco Page',
        url: 'https://www.facebook.com/share/1DqdVkCn1o/',
        actionText: 'Visit oracco on Facebook',
        color: '#1877F2',
        badgeBg: 'bg-[#1877F2]/10 text-[#1877F2] border-[#1877F2]/30',
        hoverBg: 'hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]',
        icon: FacebookIcon
    },
    {
        id: 'youtube',
        name: 'YouTube',
        handle: '@oracco.23',
        url: 'https://youtube.com/@oracco.23?si=uRQVM6qlzKDCFsNK',
        actionText: 'Subscribe to @oracco.23 on YouTube',
        color: '#FF0000',
        badgeBg: 'bg-[#FF0000]/10 text-[#FF0000] border-[#FF0000]/30',
        hoverBg: 'hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000]',
        icon: YouTubeIcon
    }
];

export const SocialIconBar = ({ size = 20, className = "", variant = "default" }) => {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            {socialLinks.map((item) => {
                const IconComponent = item.icon;
                return (
                    <a
                        key={item.id}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={item.actionText}
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all transform hover:scale-110 shadow-md ${
                            variant === "pills"
                                ? `bg-white/5 border border-white/10 text-white ${item.hoverBg}`
                                : `bg-white/5 border border-white/10 text-marine-silver hover:text-white ${item.hoverBg}`
                        }`}
                    >
                        <IconComponent size={size} />
                    </a>
                );
            })}
        </div>
    );
};
