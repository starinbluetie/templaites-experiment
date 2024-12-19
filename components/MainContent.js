import React from 'react';
import CreateTemplate from './CreateTemplate';
import EditTemplate from './EditTemplate';
import OrganizeTemplates from './OrganizeTemplates';
// Remove import of VersionHistory component
// import VersionHistory from './VersionHistory';

function MainContent({ activeTab }) {
  return (
    <main>
      {activeTab === 'create-template' && <CreateTemplate />}
      {activeTab === 'organize-templates' && <OrganizeTemplates />}
      {/* Remove VersionHistory component rendering */}
      {/* {activeTab === 'version-history' && <VersionHistory />} */}
      {/* ...existing code... */}
    </main>
  );
}

export default MainContent;