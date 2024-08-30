import React from 'react';
import './BranchCard.css'; // Kartın stilini buraya ekleyebilirsiniz

const BranchCard = ({ branchName }) => {
    return (
        <div className="branch-card">
            <h3>{branchName}</h3>
            <div className="data-status">
                <div className="data-item">
                    <p>Nakit para: ...</p>
                    <div className="status-circle">F1</div>
                </div>
                <div className="data-item">
                    <p>Kağıt para: ...</p>
                    <div className="status-circle">F2</div>
                </div>
                <div className="data-item">
                    <p>Kart: ...</p>
                    <div className="status-circle">F3</div>
                </div>
                <div className="data-item">
                    <p>QR Kod: ...</p>
                    <div className="status-circle">F4</div>
                </div>
                <div className="data-item">
                    <p>Fonksiyon 1: ...</p>
                    <div className="status-circle">F5</div>
                </div>
                <div className="data-item">
                    <p>Fonksiyon 2: ...</p>
                    <div className="status-circle">F6</div>
                </div>
                <div className="data-item">
                    <p>Fonksiyon 3: ...</p>
                    <div className="status-circle">F7</div>
                </div>
                <div className="data-item">
                    <p>Fonksiyon 4: ...</p>
                    <div className="status-circle">F8</div>
                </div>
            </div>
        </div>
    );
}

export default BranchCard;
