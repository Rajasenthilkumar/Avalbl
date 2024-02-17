// import React from 'react';
// import './App.css';
// import { Routers } from './components/Router/Router';

// const App = () => {
//   return (
//     <div className="App">
//       <Routers />
//     </div>
//   );
// };

// export default App;

import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Routers } from '../src/components/Router/Router';
import './App.css';
// import { ErrorBoundary } from 'components/ErrorPage/ErrorBoundary';
// import { theme } from 'styles/theme';
import { Provider } from 'react-redux';
import { store, persistor } from './reducer/configStore';
// import { useICE } from '@mineral-community/ice-utils';
import { PersistGate } from 'redux-persist/integration/react';

// AppPlain is useful for testing, wherein providers, such as the router, may be easily mocked.
// See testUtils/renderWithProviders
export const AppPlain: React.FC = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <HelmetProvider>
        {/* <ErrorBoundary> */}
        <Routers />
        {/* </ErrorBoundary> */}
      </HelmetProvider>
    </PersistGate>
  </Provider>
);

export const App: React.FC = () => {
  // const ICE_DEV_KEY = process.env.REACT_APP_ICE_DEV_KEY || ''; // Your Product Key
  // const ICE_SCRIPT_PATH = process.env.REACT_APP_ICE_UTILS_SCRIPT_PATH || '';
  // const ice = useICE(ICE_DEV_KEY, ICE_SCRIPT_PATH, 'silent');
  // const iceLaunchedRef = React.useRef<boolean>(false);

  // const initializeICE = () => {
  //   iceLaunchedRef.current = Boolean(
  //     ice?.init?.(
  //       {
  //         name: 'SBO', // Your Product Identifier
  //         version: '1.0', // Your Product Version (leave empty if you want to support multiple versions)
  //         displayName: 'SBO',
  //       },
  //       {
  //         userName: '', // Optional
  //         email: '', // Optional
  //       },
  //       {
  //         mode: 'off',
  //       }
  //     )
  //   );
  // };
  // React.useEffect(() => {
  //   initializeICE();
  // }, [ice]);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* <ThemeProvider theme={theme}> */}
      <AppPlain />
      {/* </ThemeProvider> */}
    </BrowserRouter>
  );
};
