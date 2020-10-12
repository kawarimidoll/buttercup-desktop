import { themes } from '@buttercup/ui';
import '@buttercup/ui/dist/styles.css';
import { init as initButtercup } from 'buttercup/web';
import React from 'react';
import { hot } from 'react-hot-loader/root';
import { ThemeProvider } from 'styled-components';
import Vault from './components/Vault';
import Workspace from './components/Workspace';
import VaultManager from './services/VaultManager';

try {
  initButtercup();
} catch (err) {}

const App = () => {
  return (
    <ThemeProvider theme={themes.dark}>
      <div style={{ height: '100vh' }} className="bp3-dark">
        <VaultManager>
          {/* <Vault /> */}
          <Workspace />
        </VaultManager>
      </div>
    </ThemeProvider>
  );
};

export default hot(App);
