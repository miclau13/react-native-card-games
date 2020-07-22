import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1, 
    flexDirection: 'row', 
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  gameHeaderContainer: {
    alignItems: 'center',
    flexDirection: 'row',  
    justifyContent: 'center',
  },
  horizontalViewBox1: {
    marginHorizontal: 8
  },
  horizontalViewBox2: {
    marginHorizontal: 16
  },
  titleImage: {
    height: 50,
    width: 50, 
  }
});

export default styles;