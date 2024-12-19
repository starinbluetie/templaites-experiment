import React from 'react';

function Navigation({ activeTab, setActiveTab }) {
  return (
    <nav>
      <ul className="tab-nav">
        <li
          className={`tab-item ${activeTab === 'create-template' ? 'active' : ''}`}
          onClick={() => setActiveTab('create-template')}
        >
          Crear Plantilla
        </li>
        <li
          className={`tab-item ${activeTab === 'organize-templates' ? 'active' : ''}`}
          onClick={() => setActiveTab('organize-templates')}
        >
          Organizar Plantillas
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;