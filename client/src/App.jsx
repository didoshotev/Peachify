/* eslint-disable */
import CssBaseline from '@mui/material/CssBaseline';
import { PeachifyContextProvider } from './context/PeachifyProvider/PeachifyContextProvider';
import { Router } from './Router';

function App() {
    return (
        <div className="App">
            <CssBaseline />
            <PeachifyContextProvider>
                <Router />
            </PeachifyContextProvider>
        </div>
    );
}

export default App;
