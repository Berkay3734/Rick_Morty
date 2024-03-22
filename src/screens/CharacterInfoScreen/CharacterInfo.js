import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './CharacterInfo.style';

const CharacterInfo = ({route, navigation}) => {
  const {characterData} = route.params;
  return (
    <View style={styles.container}>
      <Image source={{uri: characterData.image}} style={styles.image} />
      <View style={styles.text}>
        <Text>Id: {characterData.id}</Text>
        <Text>Name: {characterData.name}</Text>
        <Text>Status: {characterData.status}</Text>
        <Text>Species: {characterData.species}</Text>
        <Text>Type: {characterData.type}</Text>
        <Text>Gender: {characterData.gender}</Text>
        <Text>Origin Name: {characterData.origin.name}</Text>
        <Text>Origin Location: {characterData.origin.location}</Text>
        <Text>Origin Url: {characterData.origin.url}</Text>
        <Text>Created: {characterData.created}</Text>
        <Text>Url: {characterData.url}</Text>
      </View>
    </View>
  );
};

export default CharacterInfo;
