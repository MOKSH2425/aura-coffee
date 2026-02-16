// js/config.js
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "aura-gold": "#E08E00",      /* The Signature Brand Color */
                "aura-dark": "#120C08",      /* Deepest Black/Brown Background */
                "aura-card": "#1E1915",      /* Slightly lighter for cards */
                "aura-input": "#2A2521",     /* Input fields */
                "aura-gray": "#9CA3AF",      /* Standard text gray */
            },
            fontFamily: {
                "display": ["Plus Jakarta Sans", "sans-serif"]
            },
            backgroundImage: {
                'hero-pattern': "linear-gradient(to bottom, rgba(18, 12, 8, 0.3), rgba(18, 12, 8, 1))",
            }
        },
    },
}