import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Casino from './pages/Casino/Casino';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import MyNFT from './pages/MyNFT/MyNFT';
import Overview from './pages/Overview/Overview';
import Swap from './pages/Swap/Swap';
import Tables from './pages/Tables/Tables';

export function Router() {
    return (
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
    );
}
