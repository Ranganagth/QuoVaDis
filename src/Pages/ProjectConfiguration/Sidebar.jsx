import React from 'react';
import './ProjectConfiguration.css';

const Sidebar = ({ selectedSection, setSelectedSection }) => {
    const sections = ["Project", "Product", "GPMS", "RASIC"];

    return (
        <aside className="sidebar">
            {sections.map(section => (
                <div
                    key={section}
                    className={`sidebar-item ${selectedSection === section ? 'selected' : ''}`}
                    onClick={() => setSelectedSection(section)}
                >
                    {section}
                </div>
            ))}
        </aside>
    );
};

export default Sidebar;
