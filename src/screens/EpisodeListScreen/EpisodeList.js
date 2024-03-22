import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {fetchEpisodes} from '../../services/api';
import {useNavigation} from '@react-navigation/native';
import styles from './EpisodeList.style';

const EpisodeList = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();
  const [filteredEpisodes, setFilteredEpisodes] = useState([]);

  useEffect(() => {
    const fetchEpisodesData = async () => {
      try {
        const data = await fetchEpisodes();
        setEpisodes(data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching episodes:', error);
        setLoading(false);
      }
    };

    fetchEpisodesData();
  }, []);
  useEffect(() => {
    const filtered = episodes.filter(
      episode =>
        episode.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        episode.episode.toLowerCase().includes(searchQuery.toLowerCase()) ||
        episode.air_date.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    setFilteredEpisodes(filtered);
  }, [searchQuery, episodes]);

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('EpisodeDetails', {url: item.url})}>
      <View style={styles.episodeCard}>
        <Text style={styles.text}>Name: {item.name}</Text>
        <Text style={styles.text}>Episode: {item.episode}</Text>
        <Text style={styles.text}>Air Date: {item.air_date}</Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search episodes"
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={styles.search}
      />
      <FlatList
        data={filteredEpisodes}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default EpisodeList;
