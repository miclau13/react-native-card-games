import React from 'react';
import { Icon } from 'react-native-elements';
import RNPickerSelect, { PickerSelectProps } from 'react-native-picker-select';

import styles, { pickerSelectStyles } from './styles';

const DropdownComponent: React.ComponentType<PickerSelectProps> = (props) => {
  return (
    <RNPickerSelect
      style={{
        ...pickerSelectStyles,
        iconContainer: {
          ...styles.iconContainer
        },
        viewContainer: {
          ...styles.viewContainer,
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