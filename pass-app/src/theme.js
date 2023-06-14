import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
        custom: {
            darkGrey: '#24232c',
            grey: '#817d92',
            lightGrey: '#e6e5ea',
            background: '#18171f',
            green: '#a4ffaf',
            red: '#f64a4a',
            orange: '#fb7c58',
            yellow: '#f8cd65'
        }
    },
    typography: {
        fontFamily: 'JetBrains Mono',
        fontSize: 16
    }
})