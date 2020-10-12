import { VaultProvider, VaultUI } from '@buttercup/ui';
import '@buttercup/ui/dist/styles.css';
import {
  consumeVaultFacade,
  createVaultFacade,
  VaultFacade,
  VaultSource
} from 'buttercup/web';
import React from 'react';

function arrayBufferToBase64(buffer) {
  let binary = '';
  let bytes = new Uint8Array(buffer);
  let len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}

function createArchiveFacade(vault) {
  return JSON.parse(JSON.stringify(createVaultFacade(vault)));
}

function processVaultUpdate(archive, facade) {
  consumeVaultFacade(archive, facade);
  const out = createVaultFacade(archive);
  return out;
}

interface VaultProps {
  source: VaultSource;
}

const Vault: React.FunctionComponent<VaultProps> = ({ source }) => {
  console.log('SOURCEE', source.vault);
  const facade = createArchiveFacade(source.vault);

  return (
    <VaultProvider
      icons
      iconsPath="../resources/icons"
      vault={facade}
      onUpdate={(vaultFacade: VaultFacade) => {
        console.log('Saving vault...', vaultFacade);
        // const source = vaultManager.sources[0];
        // setArchiveFacade(processVaultUpdate(source.vault, vaultFacade));
      }}
    >
      <VaultUI />
    </VaultProvider>
  );
};

export default Vault;
