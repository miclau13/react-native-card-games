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
  inputValues: InputValues;
};

const LoginView: React.ComponentType<LoginViewProps> = (props) => {
  const { 
    handleLogInOnPress,
    handleInputOnChange,
    inputValues,
  } = props;
  
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
    <GameBackground>
      <View style={{ alignItems: 'center', alignSelf: 'center', width: '50%' }}>
        <Image
          source={require('@assets/Cards/Back_Side_Card.jpg')}
          style={{ height: 300, width: 200 }}
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
        <Button
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          disabled={!inputValues.username || !inputValues.password}
          // icon={<Icon name='input' color='#ffffff' />}
          onPress={handleLogInOnPress}
          title='Log In' 
        />
      </View>
    </GameBackground>
    </KeyboardAvoidingView>
  );
}
export default React.memo(LoginView);