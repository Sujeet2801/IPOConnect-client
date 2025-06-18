import React from 'react';
import SectorData from './SectorData';
import { useAuth } from '../../hooks/useAuth';
import RequireLoginMessage from '../../utility/RequireLoginMessage';

function Sector() {
  const { user } = useAuth();

  return (
    <div>
      <SectorData />
      {/* {user ? (
        <SectorData />
      ) : (
        <RequireLoginMessage page="Sectors"/>
      )} */}
    </div>
  );
}

export default Sector;
