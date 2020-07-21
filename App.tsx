import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';

import Navigator from '@navigator/Navigator';

const theme = {
  Button: {
    raised: true,
  },
};

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Navigator />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;