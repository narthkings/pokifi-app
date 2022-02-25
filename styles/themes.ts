import { extendTheme } from "@chakra-ui/react"

export const customTheme = extendTheme({
    colors: {
        gray: {
            100: '#3B3E46',
            200: '#2D2F36',
            'deemed-gray': '#3F414B',
        },
        yellow: {
            100: '#F2C94C'
        }
    },
    fonts: {
        body: '"Open Sans", sans-serif',
    },
    breakpoints: {
        sm: "320px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        '2xl': '1536px',
    },

})