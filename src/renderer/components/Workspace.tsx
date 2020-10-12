import { Credentials, VaultSource, VaultSourceStatus } from 'buttercup/web';
import React, { useEffect, useState } from 'react';
import { DatasourceType, useManager } from '../services/VaultManager';
import Vault from './Vault';

const Workspace = () => {
  const [selectedSource, setSelectedSource] = useState<VaultSource | null>(
    null
  );
  const { sources, addSource } = useManager();

  const handleClick = () => {
    addSource({
      type: DatasourceType.LocalStorage,
      name: 'Sallar',
      initialise: true,
      masterPassword: 'sallar'
    });
  };

  useEffect(() => {
    if (sources.length === 0) {
      return;
    }
    if (sources[0].status === VaultSourceStatus.Locked) {
      sources[0].unlock(Credentials.fromPassword('sallar'));
    } else if (sources[0].status === VaultSourceStatus.Unlocked) {
      setSelectedSource(sources[0]);
    }
  }, [sources, selectedSource]);

  return (
    <>
      {!selectedSource ? (
        <button onClick={handleClick} style={{ marginTop: 100 }}>
          test
        </button>
      ) : (
        <Vault source={selectedSource} />
      )}
    </>
  );
};

export default Workspace;
