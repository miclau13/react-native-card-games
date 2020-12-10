import React from 'react';
import { ViewStyle } from 'react-native';
import { Icon } from 'react-native-elements';
import RNPickerSelect, { PickerSelectProps } from 'react-native-picker-select';

import styles, { pickerSelectStyles } from './styles';

export interface DropdownComponentProps extends PickerSelectProps {
  viewContainerStyle: ViewStyle;
}

const DropdownComponent: React.ComponentType<DropdownComponentProps> = (props) => {
  return (
    <RNPickerSelect
      style={{
        ...pickerSelectStyles,
        iconContainer: {
          ...styles.iconContainer
        },
        viewContainer: {
          ...styles.viewContainer,
          ...props.viewContainerStyle,
        }
      }}
      placeholder={{}}
      useNativeAndroidPickerStyle={false}
      textInputProps={{ allowFontScaling: false }}
      Icon={() => (<Icon name="expand-more"/>)}
      {...props}
    />
  )
}; 

export default DropdownComponent;