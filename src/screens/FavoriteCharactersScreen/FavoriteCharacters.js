import React from 'react';
import {Text, View} from 'react-native';
import styles from './FavoriteCharacters.style';
import {useSelector} from 'react-redux';
import Character from '../../components/Character/Character';
import {ScrollView} from 'react-native-gesture-handler';

const FavoriteCharacters = () => {
  const FavoriteCharacters = useSelector(state => state.FavoriteCharacters);
  return (
    <View style={styles.container}>
      {FavoriteCharacters ? (
        FavoriteCharacters.map((item, index) => {
          return (
            <ScrollView style={styles.container}>
              <Character key={index} url={item.url} />
            </ScrollView>
          );
        })
      ) : (
        <Text style={styles.text}>No Favorite Characters</Text>
      )}
    </View>
  );
};

export default FavoriteCharacters;
