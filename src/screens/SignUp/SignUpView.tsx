import React from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { Button, ButtonProps, Image, Icon } from 'react-native-elements';

import GameBackground, { GameBackgroundProps } from '@components/GameBackground';
import InputComponent, { InputComponentProps } from '@components/InputComponent';
import styles from './styles';

type InputValues = {
  username: string;
  password: string;
  confirmPassword: string;
};

type InputErrors = {
  username: boolean;
  password: boolean;
  confirmPassword: boolean;
};


export interface SignUpViewProps {
  handleRegisterOnPress: Exclude<ButtonProps['onPress'], undefined>;
  handleInputOnChange(field: keyof InputValues): InputComponentProps['onChangeText'];
  inputErrors: InputErrors;
  inputValues: InputValues;
};

const SignUpView: React.ComponentType<SignUpViewProps> = (props) => {
  const { 
    handleRegisterOnPress,
    handleInputOnChange,
    inputErrors,
    inputValues,
  } = props;
  
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <GameBackground>
        <View style={styles.container}>
          <Image
            source={require('@assets/Cards/Back_Side_Card.jpg')}
            style={{ height: 100, width: 50 }}
            resizeMode="contain"
          />
          <View style={{ marginVertical: 8 }}/>
          <InputComponent
            showError={inputErrors.username}
            errorMessage={"Please enter your username"}   
            label={"Username"}
            onChangeText={handleInputOnChange("username")}
            value={inputValues.username}
          />
          <View style={{ marginVertical: 8 }}/>
          <InputComponent
            showError={inputErrors.password}
            errorMessage={"Please enter your password"}   
            label={"Password"}
            onChangeText={handleInputOnChange("password")}
            secureTextEntry={true}
            value={inputValues.password}
          />
          <View style={{ marginVertical: 8 }}/>
          <InputComponent
            showError={inputErrors.confirmPassword}
            errorMessage={"Password does not match"}   
            label={"Confirm Password"}
            onChangeText={handleInputOnChange("confirmPassword")}
            secureTextEntry={true}
            value={inputValues.confirmPassword}
          />

          <View style={{ marginVertical: 16 }}/>

          <Button
            onPress={handleRegisterOnPress}
            title='Register' 
          />
        </View>
        <View style={{ flex: 1 }}/>
      </GameBackground>
    </KeyboardAvoidingView>
  );
}
export default React.memo(SignUpView);