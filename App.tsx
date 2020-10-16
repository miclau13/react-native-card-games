import 'react-native-gesture-handler';
import * as SecureStore from 'expo-secure-store';
import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';

import Navigator from '@navigator/Navigator';

interface State {
  isLoading: boolean;
  isSignout: boolean;
  userToken: string;
}

interface Action {
  type: 'RESTORE_TOKEN' | 'SIGN_IN' | 'SIGN_OUT';
  token: string;
};

interface AuthContextValue {
  signIn(data: any): Promise<void>;
  signOut(): void;
  signUp(data: any):  Promise<void>;
};

const initialState = {
  isLoading: true,
  isSignout: false,
  userToken: '',
};

const authContextDefaultValue: AuthContextValue = {
  signIn: async (data) => undefined,
  signOut: () => undefined,
  signUp: async (data) => undefined,
};

export const AuthContext = React.createContext(authContextDefaultValue);

const reducer = (prevState: State, action: Action) => {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
    case 'SIGN_IN':
      return {
        ...prevState,
        isSignout: false,
        userToken: action.token,
      };
    case 'SIGN_OUT':
      return {
        ...prevState,
        isSignout: true,
        userToken: '',
      };
  }
}

const theme = {
  Button: {
    raised: true,
  },
};

const App = () => {
  const [state, dispatch] = React.useReducer(
    reducer,
    initialState
  );
  
  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;
  
      try {
        userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        // Restoring token failed
      }
  
      // After restoring token, we may need to validate it in production apps
  
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken || '' });
    };
  
    bootstrapAsync();
  }, []);
  
  const authContext = React.useMemo(() => ({
    signIn: async data => {
      // In a production app, we need to send some data (usually username, password) to server and get a token
      // We will also need to handle errors if sign in failed
      // After getting token, we need to persist the token using `AsyncStorage`
      // In the example, we'll use a dummy token
  
      dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
    },
    signOut: () => dispatch({ type: 'SIGN_OUT', token: '' }),
    signUp: async data => {
      // In a production app, we need to send user data to server and get a token
      // We will also need to handle errors if sign up failed
      // After getting token, we need to persist the token using `AsyncStorage`
      // In the example, we'll use a dummy token
  
      dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
    },
  }), []);

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <AuthContext.Provider value={authContext}>
          <Navigator userToken={state.userToken}/>
        </AuthContext.Provider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;