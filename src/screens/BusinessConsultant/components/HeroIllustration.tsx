interface HeroIllustrationProps {
    className?: string;
}

export const HeroIllustration = ({ className = "" }: HeroIllustrationProps): JSX.Element => {
    return (
        <svg
            viewBox="0 0 550 550"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#fbbf24" />
                </linearGradient>
                <linearGradient id="darkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1f1f1f" />
                    <stop offset="100%" stopColor="#0f0f0f" />
                </linearGradient>
                <linearGradient id="chartGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.4" />
                </linearGradient>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            <circle cx="275" cy="275" r="260" fill="url(#darkGradient)" stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.3" />
            <circle cx="275" cy="275" r="220" fill="none" stroke="#f59e0b" strokeWidth="0.3" strokeOpacity="0.15" strokeDasharray="4 8" />
            <circle cx="275" cy="275" r="180" fill="none" stroke="#f59e0b" strokeWidth="0.3" strokeOpacity="0.1" />

            <g className="animate-pulse" style={{ animationDuration: "4s" }}>
                <path
                    d="M90 350 L150 320 L210 280 L270 220 L330 180 L390 120 L450 80"
                    stroke="url(#goldGradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#glow)"
                />
                <path
                    d="M90 350 L150 320 L210 280 L270 220 L330 180 L390 120 L450 80 L450 400 L90 400 Z"
                    fill="url(#chartGradient)"
                />
            </g>

            <g opacity="0.6">
                <path d="M90 380 L150 360 L210 340 L270 310 L330 290 L390 260 L450 240" stroke="#64748b" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeDasharray="6 4" />
            </g>

            <g filter="url(#softGlow)">
                <circle cx="90" cy="350" r="6" fill="#f59e0b" />
                <circle cx="150" cy="320" r="6" fill="#f59e0b" />
                <circle cx="210" cy="280" r="6" fill="#f59e0b" />
                <circle cx="270" cy="220" r="8" fill="#f59e0b" />
                <circle cx="330" cy="180" r="6" fill="#f59e0b" />
                <circle cx="390" cy="120" r="6" fill="#f59e0b" />
                <circle cx="450" cy="80" r="10" fill="#f59e0b">
                    <animate attributeName="r" values="10;12;10" dur="2s" repeatCount="indefinite" />
                </circle>
            </g>

            <g>
                <rect x="100" y="400" width="40" height="60" fill="#f59e0b" fillOpacity="0.2" rx="4" />
                <rect x="160" y="380" width="40" height="80" fill="#f59e0b" fillOpacity="0.25" rx="4" />
                <rect x="220" y="350" width="40" height="110" fill="#f59e0b" fillOpacity="0.3" rx="4" />
                <rect x="280" y="310" width="40" height="150" fill="#f59e0b" fillOpacity="0.35" rx="4" />
                <rect x="340" y="260" width="40" height="200" fill="#f59e0b" fillOpacity="0.4" rx="4" />
                <rect x="400" y="200" width="40" height="260" fill="url(#goldGradient)" fillOpacity="0.5" rx="4" />
            </g>

            <g transform="translate(380, 60)">
                <polygon points="30,0 60,50 0,50" fill="url(#goldGradient)" filter="url(#softGlow)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        values="0,0;0,-5;0,0"
                        dur="3s"
                        repeatCount="indefinite"
                    />
                </polygon>
                <line x1="30" y1="50" x2="30" y2="80" stroke="#f59e0b" strokeWidth="2" strokeOpacity="0.5" />
            </g>

            <g transform="translate(60, 150)">
                <circle cx="40" cy="40" r="35" fill="#1a1a1a" stroke="#f59e0b" strokeWidth="1" />
                <path d="M25 40 L35 50 L55 30" stroke="#f59e0b" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </g>

            <g transform="translate(440, 300)">
                <rect x="0" y="0" width="70" height="50" rx="6" fill="#1a1a1a" stroke="#f59e0b" strokeWidth="1" />
                <text x="35" y="22" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="600">+85%</text>
                <text x="35" y="38" textAnchor="middle" fill="#64748b" fontSize="8">GROWTH</text>
            </g>

            <g transform="translate(50, 280)">
                <rect x="0" y="0" width="70" height="50" rx="6" fill="#1a1a1a" stroke="#64748b" strokeWidth="0.5" />
                <text x="35" y="22" textAnchor="middle" fill="#64748b" fontSize="10" fontWeight="600">START</text>
                <text x="35" y="38" textAnchor="middle" fill="#64748b" fontSize="8">BASELINE</text>
            </g>

            <g opacity="0.3">
                <circle cx="480" cy="180" r="3" fill="#f59e0b">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="120" cy="100" r="2" fill="#f59e0b">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="500" cy="400" r="2" fill="#f59e0b">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="70" cy="420" r="3" fill="#f59e0b">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="2.2s" repeatCount="indefinite" />
                </circle>
            </g>

            <g transform="translate(200, 120)" opacity="0.15">
                <line x1="0" y1="0" x2="40" y2="0" stroke="#f59e0b" strokeWidth="1" />
                <line x1="40" y1="0" x2="40" y2="40" stroke="#f59e0b" strokeWidth="1" />
                <line x1="40" y1="40" x2="0" y2="40" stroke="#f59e0b" strokeWidth="1" />
                <line x1="0" y1="40" x2="0" y2="0" stroke="#f59e0b" strokeWidth="1" />
                <line x1="0" y1="0" x2="40" y2="40" stroke="#f59e0b" strokeWidth="0.5" />
            </g>

            <g transform="translate(350, 380)" opacity="0.15">
                <polygon points="25,0 50,43 0,43" fill="none" stroke="#f59e0b" strokeWidth="1" />
            </g>
        </svg>
    );
};
