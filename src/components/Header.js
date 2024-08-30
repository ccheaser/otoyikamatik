import React from 'react';
import './Header.css'; // CSS dosyasını ekle

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Site Logo</h1>
            </div>
            <nav className="nav">
                <ul>
                    <li><a href="#dashboard">Dashboard</a></li>
                    <li><a href="#reports">Reports</a></li>
                    <li><a href="#settings">Settings</a></li>
                </ul>
            </nav>
            <div className="profile">
                <img src="profile-pic.jpg" alt="Profile" />
            </div>
        </header>
    );
}

export default Header;
