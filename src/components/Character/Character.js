import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './Character.style';
import {useDispatch, useSelector} from 'react-redux';
import {addFavoriteCharacter} from '../../store/reducer';

function Character({url}) {
  const [characterData, setCharacterData] = useState(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const favoriteCharacter = useSelector(state => state.favoriteCharacter);
  console.log('as', favoriteCharacter);

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

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.characters}
        onPress={() => navigation.navigate('CharacterInfo', {characterData})}>
        <View style={styles.image}>
          <Image source={{uri: characterData.image}} style={styles.imageSize} />
        </View>
        <View style={styles.text}>
          <TouchableOpacity
          // onPress={() => dispatch(addFavoriteCharacter(characterData))}
          >
            <Text>Favorilere Ekle</Text>
          </TouchableOpacity>
          <Text>Name: {characterData.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Character;
