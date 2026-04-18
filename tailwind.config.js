import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                headline: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
                body: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                "surface": "#f9f9f9",
                "on-surface": "#1a1c1c",
                "on-surface-variant": "#434937",
                "surface-container": "#eeeeee",
                "surface-container-low": "#f3f3f3",
                "surface-container-lowest": "#ffffff",
                "surface-container-highest": "#e2e2e2",
                "primary": "#496800",
                "on-primary": "#ffffff",
                "primary-container": "#9acd32",
                "on-primary-container": "#3a5400",
                "secondary": "#5f5e5e",
                "outline-variant": "#c3c9b1",
                "tertiary-container": "#bebcbc",
                "error": "#ba1a1a"
            }
        },
    },

    plugins: [forms],
};
