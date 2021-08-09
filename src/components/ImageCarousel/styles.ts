import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {},
  images: {
    marginVertical: 10,
    height: 250,
    resizeMode: 'contain',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ededed',
    margin: 5,
  },
  activeDot: {
    backgroundColor: '#c9c9c9',
  },
});

export default styles;
