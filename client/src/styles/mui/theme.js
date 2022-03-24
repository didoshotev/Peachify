import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#fff',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: 'MoonLight',
                    textTransform: 'none',
                    fontWeight: 500,
                    opacity: 1,
                    height: '35px',
                },
                outlined: {
                    borderRadius: '47px',
                },
                contained: {
                    backgroundColor: '#C8652A',
                    color: '#ECECEC',

                    '&:hover': {
                        backgroundColor: '#C8652A',
                    },
                    ':disabled': {
                        backgroundColor: '#DCDBDB',
                        color: '#fff',
                    },
                },
            },

            variants: [
                {
                    props: { variant: 'custom-contained' },
                    style: {
                        backgroundColor: '#f1f1f1',
                        color: '#ffff',
                    },
                },
            ],

            defaultProps: {
                // disableElevation: true,
                // disableFocusRipple: true,
                // disableRipple: true,
            },
        },
    },
});

export default theme;
