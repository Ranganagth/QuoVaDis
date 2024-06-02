// import React from 'react';
// import './ProjectConfiguration.css';

// const Header = () => (
//     <header className="header">
//         <img src="/quo_log.png" alt="Logo" className="logo" />
//         <h1>Project Configuration</h1>
//     </header>
// );

// export default Header;

// Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectConfiguration.css';

const Header = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/project');
    };

    return (
        <header className="header">
            <img
                src="/quo_log.png"
                alt="Logo"
                className="logo"
                onClick={handleLogoClick}
                style={{ cursor: 'pointer' }} // Ensure the cursor changes to pointer on hover
            />
            <h1>Project Configuration</h1>
        </header>
    );
};

export default Header;
