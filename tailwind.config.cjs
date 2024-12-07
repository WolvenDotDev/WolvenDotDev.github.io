/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'black-1': '#020001',
                'white-1': '#FAFAFA',
                'light-1': '#C2E0F9',
                'light-2': '#97CDFE',
                'navy-bg': '#161A24',
                'navy-1': '#0D172E',
                'navy-2': '#102762',
                'navy-3': '#072B86',
                'neutral-1': '#B4B4B4',
                'accent-1': '#FF9B71',
            },
            screens: {
                'xs': '320px',
                
                'sm': '640px',
                // => @media (min-width: 640px) { ... }

                'md': '768px',
                // => @media (min-width: 768px) { ... }

                'lg': '1024px',
                // => @media (min-width: 1024px) { ... }

                'xl': '1280px',
                // => @media (min-width: 1280px) { ... }

                '2xl': '1536px',
                // => @media (min-width: 1536px) { ... }
            },
            fontFamily: {
                serif: ['Inter', 'serif'],
                mono: ['Roboto Mono', 'mono']
            }
        },
    },
    plugins: [],
}
