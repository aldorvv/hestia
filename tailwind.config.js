module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: {
                DEFAULT: '#e8e6ea',
            },
            green: {
                DEFAULT: '#8cb27f',
                dark: '#55725d'
            },
            blue: {
                DEFAULT: '#073f5a'
            },
            primary: {
                DEFAULT: '#1f1c17',
            },
            warning: {
                DEFAULT: '#D1711C',
            }
        },
        extend: {
            boxShadow: {
                default: '0px 10px 20px rgba(150, 150, 187, 0.1)',
            },
            fontSize: {
                '2rem': '2rem',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
