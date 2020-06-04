import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  flipCard: {
    backfaceVisibility: 'hidden',
  },
  flipCardBack: {
    position: 'absolute',
    top: 0,
  },
  flipContainer: {
    borderRadius: 8,
    borderWidth: 2,
  },
  root: {
    padding: 16,
  }
});

export default styles;