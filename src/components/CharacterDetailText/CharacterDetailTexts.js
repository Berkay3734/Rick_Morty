import {Text} from 'react-native';
import styles from './CharacterDetailTexts.style';

const CharacterDetailTexts = ({label, value}) => {
  if (!value) return null;
  return (
    <Text style={styles.text}>
      {label}: {value}
    </Text>
  );
};

export default CharacterDetailTexts;
