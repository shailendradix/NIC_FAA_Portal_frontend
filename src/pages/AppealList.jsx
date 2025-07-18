import React from 'react';
import { useParams } from 'react-router-dom';

import PendingAppeals from './appeals/PendingAppeals';
import NewAppeals from './appeals/NewAppeals';
import UnderProcessAppeals from './appeals/UnderProcessAppeals';

const AppealList = () => {
  const { type } = useParams();

  const renderPage = () => {
    switch (type) {
      case 'pendingWithin10Days':
        return <PendingAppeals />;
      case 'newAppeals':
        return <NewAppeals />;
      case 'appealsUnderProcess':
        return <UnderProcessAppeals />;
      default:
        return <div className="p-4 text-red-500">Unknown Appeal Type</div>;
    }
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
};

export default AppealList;
