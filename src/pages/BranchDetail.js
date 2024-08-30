import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import BranchCard from '../components/BranchCard'; // Kart bileşenini import ediyoruz
import './BranchDetail.css'; // Bu dosyayı sayfanın stilini düzenlemek için oluşturun

const BranchDetail = () => {
    const { branchId } = useParams();

    return (
        <div className="branch-detail">
            <Sidebar />
            <div className="main-content">
                <Header className="header" />
                <div className="branch-detail-container">
                    <h1>Şube Detayları: {branchId}</h1>
                    <p>Bu sayfada {branchId} ile ilgili bilgiler yer alacak.</p>
                    {/* Şube detay kartları */}
                    <div className="branch-cards">
                        <BranchCard branchName={branchId} />
                        {/* İsterseniz daha fazla kart ekleyebilirsiniz */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BranchDetail;
