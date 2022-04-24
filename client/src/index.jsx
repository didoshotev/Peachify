import { ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Web3ContextProvider } from './context/Web3Context/Web3ContextProvider';
import './styles/index.css';
import theme from './styles/mui/theme';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Web3ContextProvider>
                <App />
            </Web3ContextProvider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
