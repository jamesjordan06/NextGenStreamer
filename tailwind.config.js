/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Professional Palette
        'brand-dark': '#1A202C', // Very dark charcoal (almost black)
        'brand-light': '#FFFFFF', // White
        'brand-bg': '#F7FAFC', // Off-white/light gray background
        'brand-primary': '#2563EB', // Professional Blue (example: Tailwind's blue-600)
        'brand-primary-hover': '#1D4ED8', // Darker blue for hover (example: blue-700)
        'brand-secondary': '#60A5FA', // Lighter blue (example: blue-400)
        'brand-accent': '#10B981', // Professional Teal/Green (example: emerald-500)
        'brand-accent-hover': '#059669', // Darker Teal/Green for hover (example: emerald-600)

        'text-primary': '#2D3748',   // Dark gray for text on light backgrounds
        'text-secondary': '#4A5568', // Medium gray for secondary text
        'text-on-dark': '#E2E8F0',   // Light gray for text on dark backgrounds

        'border-neutral': '#CBD5E0', // Light gray for borders
        'border-neutral-light': '#E2E8F0', // Lighter gray for subtle borders

        // Keep Amazon colors if specifically needed for Amazon buttons
        amazon: {
          yellow: '#FF9900',
          blue: '#232F3E', // This is a good dark color too
          orange: '#FF9900'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'], // Explicitly define heading font family
      },
    },
  },
  plugins: [],
};