import React, { useState } from 'react';
import './ProjectConfiguration.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Project from './Project';
import Product from './Product';
import GPMS from './GPMS';
import RASIC from './RASIC';

const ProjectConfiguration = () => {
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
    <div className="project-config">
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
};

export default ProjectConfiguration;
