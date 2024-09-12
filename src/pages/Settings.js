import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import './Settings.css';

const Settings = () => {
    const [formData, setFormData] = useState({
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
        input7: '',
        input8: '',
        input9: '',
        input10: '',
        input11: '',
        input12: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form verisini işleme kodları buraya gelecek
        console.log(formData);
    };

    return (
        <div className="settings">
            <Sidebar />
            <div className="main-content">
                <Header />
                <div className="settings-header">
                    <h2>Ayarlar</h2>
                </div>
                <form className="settings-form" onSubmit={handleSubmit}>
                    {Object.keys(formData).map((key) => (
                        <div className="form-group" key={key}>
                            <label htmlFor={key}>Input {key.slice(-1)}</label>
                            <input 
                                type="text" 
                                id={key} 
                                name={key} 
                                value={formData[key]} 
                                onChange={handleChange} 
                            />
                        </div>
                    ))}
                    <button type="submit" className="submit-button">Kaydet</button>
                </form>
            </div>
        </div>
    );
}

export default Settings;
