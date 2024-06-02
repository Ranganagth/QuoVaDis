import React, { useState } from 'react';
import './App.css';
import Header from './Pages/Header';
import Sidebar from './Pages/Sidebar';
import Project from './Pages/Project';
import Product from './Pages/Product';
import GPMS from './Pages/GPMS';
import RASIC from './Pages/RASIC';

function App() {
    const [selectedSection, setSelectedSection] = useState('Project');

    const renderContent = () => {
        switch (selectedSection) {
            case 'Project':
                return <Project />;
            case 'Product':
                return <Product />;
            case 'GPMS':
                return <GPMS />;
            case 'RASIC':
                return <RASIC />;
            default:
                return <Project />;
        }
    };

    return (
        <div className="app">
            <Header />
            <div className="main-content">
                <Sidebar selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
                <div className="content-area">
                    {renderContent()}
                    <div className="footer">
                        <button>Save</button>
                        <button>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
