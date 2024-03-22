import React from 'react';
import EpisodeList from './src/screens/EpisodeListScreen/EpisodeList';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import EpisodeDetails from './src/screens/EpisodeDetailsScreen/EpisodeDetails';
import CharacterInfo from './src/screens/CharacterInfoScreen/CharacterInfo';
import DataProvider from './src/store/DataProvider';

const Stack = createStackNavigator();

const App = () => {
  return (
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="EpisodeList" component={EpisodeList} />
          <Stack.Screen name="EpisodeDetails" component={EpisodeDetails} />
          <Stack.Screen name="CharacterInfo" component={CharacterInfo} />
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
};

export default App;
