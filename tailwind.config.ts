import type { Config } from 'tailwindcss'

const config = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {}
        },
        extend: {
            colors: {
                primary: 'hsl(var(--theme-color))'
            }
        }
    },
    plugins: [require('tailwindcss-animate')]
} as Config

export default config
