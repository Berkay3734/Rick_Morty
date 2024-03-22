import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
    backgroundColor: '#80b8f2',
    borderRadius: 20,
    alignSelf: 'center',
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageSize: {
    width: '100%',
    height: 220,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  text: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  characters: {
    flex: 0.9,
    flexDirection: 'row',
  },
  charactersText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});
