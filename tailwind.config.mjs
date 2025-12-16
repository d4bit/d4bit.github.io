/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: { 
                sans: ['Inter', 'sans-serif'] 
            },
            animation: {
                'marquee': 'marquee 25s linear infinite',
                'vertical-scroll': 'verticalScroll 7s linear infinite',
                'float-slow': 'float 6s ease-in-out infinite',
                'float-medium': 'float 5s ease-in-out infinite',
                'float-fast': 'float 4s ease-in-out infinite',
            },
            keyframes: {
                marquee: { 
                    '0%': { transform: 'translateX(0%)' }, 
                    '100%': { transform: 'translateX(-50%)' } 
                },
                verticalScroll: { 
                    '0%': { transform: 'translateY(0%)' }, 
                    '100%': { transform: 'translateY(-50%)' } 
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        },
    },
    plugins: [],
}