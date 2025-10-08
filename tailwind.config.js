module.exports = {
    content: ["./pages/*.{html,js}", "./index2.html", "./*.html"],
    theme: {
      extend: {
        colors: {
          primary: {
            50: "#f0f1ff",
            100: "#e1e4ff", 
            200: "#c7cdff",
            300: "#a5b0ff",
            400: "#818cff",
            500: "#6366f1",
            600: "#4f46e5",
            700: "#4338ca",
            800: "#3730a3",
            900: "#312e81",
            950: "#000b54", // navy-950
            DEFAULT: "#000b54", // navy-950
          },
          secondary: {
            50: "#eff6ff",
            100: "#dbeafe",
            200: "#bfdbfe", 
            300: "#93c5fd",
            400: "#60a5fa",
            500: "#3b82f6",
            600: "#2563eb",
            700: "#2536a6", // blue-700
            800: "#1e40af",
            900: "#1e3a8a",
            DEFAULT: "#2536a6", // blue-700
          },
          accent: {
            50: "#ecfdf5",
            100: "#d1fae5",
            200: "#a7f3d0",
            300: "#6ee7b7",
            400: "#36d698", // emerald-400
            500: "#10b981",
            600: "#059669",
            700: "#047857",
            800: "#065f46",
            900: "#064e3b",
            DEFAULT: "#36d698", // emerald-400
          },
          success: {
            50: "#f0fdf4",
            100: "#dcfce7",
            200: "#bbf7d0",
            300: "#58ffbe", // emerald-300
            400: "#4ade80",
            500: "#22c55e",
            600: "#16a34a",
            700: "#15803d",
            800: "#166534",
            900: "#14532d",
            DEFAULT: "#58ffbe", // emerald-300
          },
          warning: {
            50: "#fff7ed",
            100: "#ffedd5",
            200: "#fed7aa",
            300: "#fdba74",
            400: "#fb923c",
            500: "#ff6b35", // orange-500
            600: "#ea580c",
            700: "#c2410c",
            800: "#9a3412",
            900: "#7c2d12",
            DEFAULT: "#ff6b35", // orange-500
          },
          error: {
            50: "#fef2f2",
            100: "#fee2e2",
            200: "#fecaca",
            300: "#fca5a5",
            400: "#f87171",
            500: "#ef4444",
            600: "#dc2626", // red-600
            700: "#b91c1c",
            800: "#991b1b",
            900: "#7f1d1d",
            DEFAULT: "#dc2626", // red-600
          },
          background: "#ffffff", // white
          surface: "#f7f7f7", // gray-50
          "text-primary": "#1a1a1a", // gray-900
          "text-secondary": "#666666", // gray-500
        },
        fontFamily: {
          sans: ['Poppins', 'sans-serif'],
          poppins: ['Poppins', 'sans-serif'],
        },
        fontWeight: {
          light: '300',
          normal: '400',
          medium: '500',
          semibold: '600',
          bold: '700',
        },
        boxShadow: {
          'premium': '0 4px 20px rgba(0, 11, 84, 0.1)',
          'premium-hover': '0 8px 30px rgba(0, 11, 84, 0.15)',
          'card': '0 2px 10px rgba(0, 0, 0, 0.05)',
        },
        borderColor: {
          'premium': 'rgba(88, 255, 190, 0.2)',
        },
        transitionDuration: {
          '250': '250ms',
          '300': '300ms',
        },
        transitionTimingFunction: {
          'in-out': 'ease-in-out',
        },
        animation: {
          'fade-in': 'fadeIn 0.5s ease-in-out',
          'slide-up': 'slideUp 0.6s ease-out',
          'bounce-subtle': 'bounceSubtle 2s infinite',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          slideUp: {
            '0%': { transform: 'translateY(20px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
          bounceSubtle: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-5px)' },
          },
        },
      },
    },
    plugins: [],
  }