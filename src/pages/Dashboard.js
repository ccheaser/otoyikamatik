import React from 'react';
import './Dashboard.css'; // CSS dosyasını ekle
import Header from '../components/Header';
import Sidebar from '../components/Sidebar'; // Sidebar bileşenini import et
import Card from '../components/Card'; // Card bileşenini import et

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <div className="main-content">
                <Header />
                <div className="dashboard-header">
                    <h2>Dashboard</h2>
                </div>
                <div className="dashboard-container">
                    <div className="card-container">
                        <Card title="Şube 1" totalIncome="₺10,000" branchId="sube1" />
                        <Card title="Şube 2" totalIncome="₺7,500" branchId="sube2" />
                        <Card title="Şube 3" totalIncome="₺15,200" branchId="sube3" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
