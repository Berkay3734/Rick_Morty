import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import styles from './FavoriteCharacters.style';
import {useSelector} from 'react-redux';
import Character from '../../components/Character/Character';
import BackButton from '../../components/BackButton/BackButton';

const FavoriteCharacters = () => {
  const favoriteCharacters = useSelector(
    state => state.user.favoriteCharacters,
  );
  return (
    <View style={styles.container}>
      <BackButton />
      <Text style={styles.title}>Favorite Characters</Text>
      <ScrollView style={styles.container}>
        {favoriteCharacters ? (
          favoriteCharacters.map((item, index) => {
            return <Character key={index} url={item} />;
          })
        ) : (
          <Text style={styles.text}>No Favorite Characters</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default FavoriteCharacters;
