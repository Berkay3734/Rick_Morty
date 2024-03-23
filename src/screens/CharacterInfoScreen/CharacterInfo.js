import React from 'react';
import {Image, View} from 'react-native';
import BackButton from '../../components/BackButton/BackButton';
import CharacterDetailTexts from '../../components/CharacterDetailText/CharacterDetailTexts';
import Favorite from '../../components/Favorite/Favorite';
import styles from './CharacterInfo.style';

const CharacterInfo = ({route}) => {
  const {id, name, status, species, type, gender, origin, created, url, image} =
    route.params.characterData;
  console.log(route.params.characterData);

  return (
    <View style={styles.container}>
      <BackButton />
      <Favorite data={route.params.characterData} />
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.textContainer}>
        <CharacterDetailTexts label="Id" value={id} />
        <CharacterDetailTexts label="Name" value={name} />
        <CharacterDetailTexts label="Status" value={status} />
        <CharacterDetailTexts label="Species" value={species} />
        <CharacterDetailTexts label="Type" value={type ?? 'N/A'} />
        <CharacterDetailTexts label="Gender" value={gender} />
        <CharacterDetailTexts label="Origin Name" value={origin?.name} />
        <CharacterDetailTexts
          label="Origin Location"
          value={origin?.location}
        />
        <CharacterDetailTexts label="Origin Url" value={origin?.url ?? 'N/A'} />
        <CharacterDetailTexts label="Created" value={created} />
        <CharacterDetailTexts label="Url" value={url} />
      </View>
    </View>
  );
};

export default CharacterInfo;
