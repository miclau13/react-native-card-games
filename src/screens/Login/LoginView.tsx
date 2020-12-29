import React from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { Button, ButtonProps, Image, Icon } from 'react-native-elements';

import GameBackground, { GameBackgroundProps } from '@components/GameBackground';
import InputComponent, { InputComponentProps } from '@components/InputComponent';
import styles from './styles';

type InputValues = {
  username: string;
  password: string;
};

export interface LoginViewProps {
  handleLogInOnPress: Exclude<ButtonProps['onPress'], undefined>;
  handleInputOnChange(field: keyof InputValues): InputComponentProps['onChangeText'];
  handleSignUpOnPress: Exclude<ButtonProps['onPress'], undefined>;
  inputValues: InputValues;
};

const LoginView: React.ComponentType<LoginViewProps> = (props) => {
  const { 
    handleLogInOnPress,
    handleInputOnChange,
    handleSignUpOnPress,
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
          errorMessage={"Please enter your username"}   
          label={"Username"}
          onChangeText={handleInputOnChange("username")}
          value={inputValues.username}
        />
        <View style={{ marginVertical: 8 }}/>
        <InputComponent
          errorMessage={"Please enter your password"}   
          label={"Password"}
          onChangeText={handleInputOnChange("password")}
          secureTextEntry={true}
          value={inputValues.password}
        />
        <View style={{ marginVertical: 16 }}/>
        <View style={styles.buttonContainer}>
          <Button
            onPress={handleLogInOnPress}
            title='Log In' 
          />
          <View style={{ marginHorizontal: 16 }}/>
          <Button
            onPress={handleSignUpOnPress}
            title='Sign Up' 
          />
        </View>
      </View>
      <View style={{ flex: 1 }}/>
    </GameBackground>
    </KeyboardAvoidingView>
  );
}
export default React.memo(LoginView);