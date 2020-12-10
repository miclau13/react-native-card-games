import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32
  },
  listItemContainer: {
    padding: 32, 
    margin: 16, 
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.5, 
  },
  title: {
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default styles;