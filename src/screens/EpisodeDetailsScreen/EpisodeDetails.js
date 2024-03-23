import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import Character from '../../components/Character/Character';
import styles from './EpisodeDetails.style';
import BackButton from '../../components/BackButton/BackButton';

const EpisodeDetails = ({route}) => {
  const {url} = route.params;
  const [episodeData, setEpisodeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [allCharacters, setAllCharacters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacterDetails = async characterUrls => {
      const characterPromises = characterUrls.map(url =>
        fetch(url).then(res => res.json()),
      );
      return Promise.all(characterPromises);
    };

    const fetchEpisodeData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('API request failed');
        }
        const data = await response.json();
        const characters = await fetchCharacterDetails(data.characters);
        setEpisodeData(data);
        setAllCharacters(characters);
        setFilteredCharacters(characters);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching episode details:', error);
        setLoading(false);
      }
    };

    fetchEpisodeData();
  }, [url]);

  useEffect(() => {
    const filtered = searchQuery
      ? allCharacters.filter(character =>
          character.name.toLowerCase().includes(searchQuery.toLowerCase()),
        )
      : allCharacters;

    setFilteredCharacters(filtered);
  }, [searchQuery, allCharacters]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <BackButton />
      <View style={styles.info}>
        <Text style={styles.text}>Name: {episodeData.name}</Text>
        <Text style={styles.text}>Episode: {episodeData.episode}</Text>
        <Text style={styles.text}>Air Date: {episodeData.air_date}</Text>
      </View>
      <TextInput
        placeholder="Search characters by name"
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={styles.searchInput}
      />
      <ScrollView style={styles.container}>
        {filteredCharacters.map((character, index) => (
          <Character key={index} url={character.url} />
        ))}
      </ScrollView>
    </View>
  );
};

export default EpisodeDetails;
