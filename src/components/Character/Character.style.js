import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageSize: {
    width: 200,
    height: 220,
  },
  text: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  characters: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#d3d3d3',
  },
});
