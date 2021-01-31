import React from 'react';
import {StatusBar} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
const queryClient = new QueryClient();

import MainScreen from './src/screens/main';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <QueryClientProvider client={queryClient}>
        <MainScreen />
      </QueryClientProvider>
    </>
  );
};

export default App;
