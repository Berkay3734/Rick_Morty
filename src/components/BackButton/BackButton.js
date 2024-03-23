import {Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './BackButton.style';
import {useNavigation} from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.goBack()}>
      <Image source={require('../../images/back-button.png')} />
    </TouchableOpacity>
  );
};

export default BackButton;
