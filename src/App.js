import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import BranchDetail from './pages/BranchDetail';
import Login from './pages/Login';
import Register from './pages/Signup';
import Settings from './pages/Settings';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/:branchId" element={<BranchDetail />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Settings" element={<Settings />} />
            </Routes>
        </Router>
    );
}

export default App;
