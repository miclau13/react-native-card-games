import React from 'react';
import { Input, InputProps } from 'react-native-elements';

import styles from './styles';

export interface InputComponentProps extends InputProps {
  showError?: boolean;
};

const InputComponent: React.ComponentType<InputComponentProps> = (props) => {
  const { errorMessage, showError = false, value, ...inputProps } = props;

  const errorBorderStyle = showError && errorMessage ? styles.errorBorder : null;

  return (
    <Input
      errorMessage={showError ? errorMessage : ""}   
      errorProps={{ allowFontScaling: false }}
      inputContainerStyle={[styles.inputContainer, errorBorderStyle]}
      labelStyle={styles.label}
      labelProps={{ allowFontScaling: false }}
      renderErrorMessage={false}
      value={value}
      allowFontScaling={false}
      { ...inputProps }
    />
  )
}; 

export default InputComponent;