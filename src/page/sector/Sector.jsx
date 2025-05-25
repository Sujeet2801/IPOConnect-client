import React from 'react';
import SectorData from './SectorData';
import { useAuth } from '../../hooks/useAuth';

function Sector() {
  const { user } = useAuth();

  return (
    <div>
      {user ? (
        <SectorData />
      ) : (
        <p className="text-center text-gray-500 mt-10">
          Please log in to view sector information.
        </p>
      )}
    </div>
  );
}

export default Sector;
