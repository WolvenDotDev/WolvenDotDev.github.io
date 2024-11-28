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
                'light-1': '#E1EDFF',
                'light-2': '#BAD6FF',
                'navy-1': '#0D172E',
                'neutral-1': '#BDBDBD',
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
