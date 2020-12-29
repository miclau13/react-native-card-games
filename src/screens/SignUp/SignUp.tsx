import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import { AuthContext } from '../../../App';
import LoadingComponent from '@components/Loading';
import { LoginStackParamList } from '@navigator/StackNavigator/LogInStack';
import SignUpView, { SignUpViewProps } from './SignUpView';

type SignUpScreenNavigationProp = StackNavigationProp<
  LoginStackParamList,
  'SignUp'
>;

type Props = {
  navigation: SignUpScreenNavigationProp;
};

interface SignUp {
  loading: boolean;
};

const SignUp: React.ComponentType<Props> = (props) => {
  const { navigation } = props;
  const [loading] = React.useState<SignUp['loading']>(false);
  const { signUp } = React.useContext(AuthContext);

  const [inputValues, setInputValues] = React.useState<SignUpViewProps['inputValues']>({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [inputErrors, setInputErrors] = React.useState<SignUpViewProps['inputErrors']>({
    username: false,
    password: false,
    confirmPassword: false,
  });

  const handleRegisterOnPress = React.useCallback<SignUpViewProps['handleRegisterOnPress']>(() => {
    console.log("SignUp handleRegisterOnPress inputValues",inputValues)
    let errors = {
      username: false,
      password: false,
      confirmPassword: false,
    };
    let hasError = false;
    if (!inputValues.username) {
      errors.username = true;
      hasError = true;
    }
    if (!inputValues.password) {
      errors.password = true;
      hasError = true;
    }
    if (!inputValues.confirmPassword || inputValues.confirmPassword !== inputValues.password) {
      errors.confirmPassword = true;
      hasError = true;
    }

    if (!hasError) {
      console.log("SignUp handleRegisterOnPress !hasError")
      signUp({
        username: inputValues.username,
        password: inputValues.password,
      });
    } else {
      console.log("SignUp handleRegisterOnPress errors",errors)
      setInputErrors(errors);
    }
  }, [inputValues, signUp]);

  const handleInputOnChange = React.useCallback<SignUpViewProps['handleInputOnChange']>(field => value => {
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
    <SignUpView 
      handleRegisterOnPress={handleRegisterOnPress}
      handleInputOnChange={handleInputOnChange}
      inputValues={inputValues}
      inputErrors={inputErrors}
    />
  )
};

export default React.memo(SignUp);