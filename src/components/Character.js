import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function Character({url}) {
  const [characterData, setCharacterData] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setCharacterData(data);
      } catch (error) {
        console.error('Fetching character data failed', error);
      }
    }

    fetchData();
  }, [url]);

  if (!characterData) return <Text>Loading...</Text>;

  console.log(characterData);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.characters}
        onPress={() => navigation.navigate('CharacterInfo', {characterData})}>
        <View style={styles.image}>
          <Image
            source={{uri: characterData.image}}
            style={{width: 200, height: 220}}
          />
        </View>
        <View style={styles.text}>
          <TouchableOpacity onPress={() => console.log('favorilere eklendi')}>
            <Text>Favorilere Ekle</Text>
          </TouchableOpacity>
          <Text>Name: {characterData.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Character;

const styles = StyleSheet.create({
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
