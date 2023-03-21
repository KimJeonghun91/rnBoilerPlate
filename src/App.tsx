import { StatusBar } from 'react-native';
import Navigation from './Navigation';
import { NavigationContainer } from '@react-navigation/native';
import rootReducer from "./assets/redux/rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
const store = configureStore({
  reducer: rootReducer,
  // middleware: [...middlewares],
  devTools: false
});




const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" backgroundColor={'#ffffff'} />
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
