module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                grayLight: "rgb(229, 233, 240)",
                marzipan: "#f8d3a0",
                tangelo: "#fd5200",
            },
            backgroundImage: {
                "bg-texture": "url('/images/bg_texture.jpg')",
            },
        },
    },
    plugins: [],
};
