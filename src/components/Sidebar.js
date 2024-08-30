import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="burger-menu" onClick={toggleSidebar}>
                &#9776; {/* Burger menu icon */}
            </div>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <p className='brandName'>Otoyıkamatik</p>
                <ul>
                    <li id='sidebarText'><a href="#dashboard">Dashboard</a></li>
                    <li id='sidebarText'><a href="#reports">Reports</a></li>
                    <li id='sidebarText'><a href="#settings">Settings</a></li>
                </ul>
            </div>
        </>
    );
}

export default Sidebar;
