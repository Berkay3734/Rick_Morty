import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './CharacterInfo.style';
import BackButton from '../../components/BackButton/BackButton';
import Favorite from '../../components/Favorite/Favorite';

const CharacterInfo = ({route, navigation}) => {
  const {characterData} = route.params;
  return (
    <View style={styles.container}>
      <BackButton />
      <Favorite data={characterData} />
      <Image source={{uri: characterData.image}} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Id: {characterData.id}</Text>
        <Text style={styles.text}>Name: {characterData.name}</Text>
        <Text style={styles.text}>Status: {characterData.status}</Text>
        <Text style={styles.text}>Species: {characterData.species}</Text>
        <Text style={styles.text}>Type: {characterData.type}</Text>
        <Text style={styles.text}>Gender: {characterData.gender}</Text>
        <Text style={styles.text}>
          Origin Name: {characterData.origin.name}
        </Text>
        <Text style={styles.text}>
          Origin Location: {characterData.origin.location}
        </Text>
        <Text style={styles.text}>Origin Url: {characterData.origin.url}</Text>
        <Text style={styles.text}>Created: {characterData.created}</Text>
        <Text style={styles.text}>Url: {characterData.url}</Text>
      </View>
    </View>
  );
};

export default CharacterInfo;
