// tailwind.config.js
module.exports = {
    mode: "jit",
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html" ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        // extend: {},
        screens: {
            'md': '650px',
            'lg': '1000px',
        },
    },
    variants: {},
    plugins: []
}
