import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import { AuthContext } from '../../../App';
import LoadingComponent from '@components/Loading';
import { LoginStackParamList } from '@navigator/StackNavigator/LoginStack';
import LoginView, { LoginViewProps } from './LoginView';

type LoginScreenNavigationProp = StackNavigationProp<
  LoginStackParamList,
  'Login'
>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

interface Login {
  loading: boolean;
};

const Login: React.ComponentType<Props> = (props) => {
  const { navigation } = props;
  const [loading] = React.useState<Login['loading']>(false);
  const { signIn } = React.useContext(AuthContext);

  const [inputValues, setInputValues] = React.useState<LoginViewProps['inputValues']>({
    username: '',
    password: '',
  });

  const handleLogInOnPress = React.useCallback<LoginViewProps['handleLogInOnPress']>(() => {
    signIn(inputValues);
  }, [inputValues, signIn]);

  const handleSignUpOnPress = React.useCallback<LoginViewProps['handleSignUpOnPress']>(() => {
    navigation.navigate("SignUp")
  }, []);

  const handleInputOnChange = React.useCallback<LoginViewProps['handleInputOnChange']>(field => value => {
    setInputValues(values => {
      return ({ ...values, [field]: value });
    });
  }, []);
  
  if (loading) {
    return (
      <LoadingComponent />
    );
  };

  return (
    <LoginView 
      handleLogInOnPress={handleLogInOnPress}
      handleInputOnChange={handleInputOnChange}
      handleSignUpOnPress={handleSignUpOnPress}
      inputValues={inputValues}
    />
  )
};

export default React.memo(Login);