import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  TextInput,
} from 'react-native';
import Character from './Character';

const EpisodeDetails = ({route}) => {
  const {url} = route.params;
  const [episodeData, setEpisodeData] = useState(null);
  const [loading, setLoading] = useState(true);
  // Tüm karakterlerin saklandığı yeni bir durum değişkeni eklendi.
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
        setAllCharacters(characters); // Tüm karakterler burada saklanıyor.
        setFilteredCharacters(characters); // Başlangıçta tüm karakterler gösteriliyor.
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
      : allCharacters; // Filtreleme, orijinal tüm karakter listesi üzerinden yapılıyor.

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
    <ScrollView style={styles.container}>
      <Text>Name: {episodeData.name}</Text>
      <TextInput
        placeholder="Search characters by name"
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={styles.searchInput}
      />
      {filteredCharacters.map((character, index) => (
        <Character key={index} url={character.url} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    margin: 10,
    borderRadius: 5,
  },
});

export default EpisodeDetails;
