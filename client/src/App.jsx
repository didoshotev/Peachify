import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Overview from './pages/Overview/Overview';
import Dashboard from './pages/Dashboard/Dashboard';
import Tables from './pages/Tables/Tables';
import Casino from './pages/Casino/Casino';
import Swap from './pages/Swap/Swap';
import MyNFT from './pages/MyNFT/MyNFT';

function App() {
    return (
        <div className="App">
            <CssBaseline />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="overview" element={<Overview />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="tables" element={<Tables />} />
                    <Route path="casino" element={<Casino />} />
                    <Route path="swap" element={<Swap />} />
                    <Route path="myNFT" element={<MyNFT />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
