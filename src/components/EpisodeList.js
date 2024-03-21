import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {fetchEpisodes} from '../services/api';
import {useNavigation} from '@react-navigation/native';

const EpisodeList = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

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

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('EpisodeDetails', {url: item.url})}>
      <View style={{padding: 10}}>
        <Text>Name: {item.name}</Text>
        <Text>Episode: {item.episode}</Text>
        <Text>Air Date: {item.air_date}</Text>
        <Text>URL: {item.url}</Text>
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
    <View>
      <FlatList
        data={episodes}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default EpisodeList;
