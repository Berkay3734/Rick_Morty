import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const CharacterInfo = ({route, navigation}) => {
  const {characterData} = route.params;
  return (
    <View style={styles.container}>
      <Image
        source={{uri: characterData.image}}
        style={{width: '100%', height: 500}}
      />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
});
