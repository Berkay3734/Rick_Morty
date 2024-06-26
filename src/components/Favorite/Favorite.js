import React, {useState} from 'react';
import {Alert, Image, TouchableOpacity, View} from 'react-native';
import styles from './Favorite.style';
import {useDispatch, useSelector} from 'react-redux';
import {addFavoriteCharacter} from '../../store/reducer';
import Notification from '../../services/Notification';
import {useToast} from 'react-native-toast-notifications';

function Favorite({data}) {
  const [favorite, setFavorite] = useState(false);
  const toast = useToast();
  const favoriteCharacters = useSelector(
    state => state.user.favoriteCharacters,
  );
  const dispatch = useDispatch();

  const handleFavorite = () => {
    setFavorite(!favorite);
    if (favoriteCharacters.includes(data.url)) {
      Alert.alert(
        'Karakter Silme',
        `${data.name} isimli karakteri favorilerden kaldırmak istediğinize emin misiniz?`,
        [
          {
            text: 'Hayır',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'Evet',
            onPress: () => {
              const updatedCharacters = favoriteCharacters.filter(
                characterUrl => characterUrl !== data.url,
              );
              dispatch(addFavoriteCharacter(updatedCharacters));
              setFavorite(false);
            },
          },
        ],
        {cancelable: false},
      );
    } else {
      if (favoriteCharacters.length >= 10) {
        Notification();
        toast.show(
          'Favori karakter ekleme sayısını aştınız. Başka bir karakteri favorilerden çıkarmalısınız',
          {
            type: 'danger',
            placement: 'top',
            duration: 4000,
            offset: 30,
            animationType: 'slide-in',
          },
        );
        return;
      }
      const updatedCharacters = [...favoriteCharacters, data.url];
      dispatch(addFavoriteCharacter(updatedCharacters));
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleFavorite()}>
        <Image
          source={
            favoriteCharacters.includes(data.url)
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
