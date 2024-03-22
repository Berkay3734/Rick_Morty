import React, {useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import styles from './Favorite.style';

function Favorite() {
  const [favorite, setFavorite] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setFavorite(!favorite)}>
        <Image
          source={
            favorite
              ? require('../../images/yellowstar.png')
              : require('../../images/star.png')
          }
          style={styles.imageSize}
        />
      </TouchableOpacity>
    </View>
  );
}

export default Favorite;
