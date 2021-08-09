import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {},
  images: {
    height: 250,
    marginVertical: 10,
    resizeMode: 'contain',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#c9c9c9',
    borderRadius: 10,
  },
  activeDot: {
    backgroundColor: '#c9c9c9',
  },
});

export default styles;
