import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: '100%',
    height: '100%'
  },
});

export default styles;