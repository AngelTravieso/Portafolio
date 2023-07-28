/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                'black-color': '#181a1d',
                'black-color-1': '#212428',
            },
        }
    },
    plugins: [],
}