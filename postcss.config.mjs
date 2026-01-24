/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // <--- This is the new v4 adapter
    autoprefixer: {},
  },
};

export default config;