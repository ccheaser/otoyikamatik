import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

const Card = ({ title, totalIncome, branchId }) => {
    const navigate = useNavigate();

    const handleDetailsClick = () => {
        navigate(`/${branchId}`);
    };

    return (
        <div className="card">
            <h3>{title}</h3>
            <p>Toplam Kazanç: {totalIncome}</p>
            <button onClick={handleDetailsClick}>Detaylar</button>
        </div>
    );
}

export default Card;
