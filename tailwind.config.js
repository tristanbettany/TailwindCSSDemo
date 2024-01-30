const colors = require('tailwindcss/colors')

module.exports = {
    content: ["./wwwroot/**/*.{html,cshtml,js,ts,jsx,tsx}"],
    theme: {
        extend: { },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: colors.white,
            slate: colors.slate,
            purple: colors.purple
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}