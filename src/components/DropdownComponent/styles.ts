import { StyleSheet } from 'react-native';

// import { pageBackgroundColor } from '../../styles';

const styles = StyleSheet.create({
  iconContainer: {
    top: 8,
    right: 2,
  },
  viewContainer: {
    // borderColor: '#86939e',
    // width: 500,
    borderRadius: 15,
    borderWidth: 1,
  }
});

export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 18,
    paddingRight: 30, // to ensure the text is never behind the icon

    textAlign: 'center',
    minHeight: 40,
    marginLeft: 10,
  },
  inputAndroid: {
    fontSize: 18,
    paddingRight: 30, // to ensure the text is never behind the icon

    textAlign: 'center',
    minHeight: 40,
    marginLeft: 10,
  },
});

export default styles;