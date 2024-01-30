module.exports = (ctx) => (
    {
        map: ctx.options.map,
        plugins: {
            "postcss-import": {},
            "postcss-url": {},
            "postcss-custom-properties": {},
            "postcss-nested": {},
            "tailwindcss/nesting": {},
            "tailwindcss": {},
            ...(process.env.NODE_ENV === 'production' ? { "cssnano": {preset: "default"} } : {})
        },
    }
)