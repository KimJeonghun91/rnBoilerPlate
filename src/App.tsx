import React from 'react';
import { AppStateStatus, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import {
  QueryClient,
  QueryClientProvider,
  focusManager,
} from '@tanstack/react-query';
import { store } from './state/redux/Store';
import { useAppState } from './hooks/useAppState';
import { useOnlineManager } from './hooks/useOnlineManager';

function onAppStateChange(status: AppStateStatus) {
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active');
  }
}

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
});

const App = () => {
  useOnlineManager();
  useAppState(onAppStateChange);


  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </SafeAreaProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
