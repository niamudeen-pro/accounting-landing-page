/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                white: "#fff",
                "neutral-black": "#263238",
                "text-gray-300": "#d9dbe1",
                "neutral-silver": "#f5f7fa",
                forestgreen: "#4caf4f",
                "neutral-grey": "#717171",
                "neutral-d-grey": "#4d4d4d",
                gray: "#18191f",
            },
            animation: {
                scroll: "scroll 40s linear infinite",
            },
            keyframes: {
                scroll: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
        },
        // screens: {
        //     lg: {
        //         max: "1200px",
        //     },
        //     md: {
        //         max: "960px",
        //     },
        //     sm: {
        //         max: "420px",
        //     },
        // },
    },
    plugins: [],
};
