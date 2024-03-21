import React from 'react';
import EpisodeList from './src/components/EpisodeList';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import EpisodeDetails from './src/components/EpisodeDetails';
import CharacterInfo from './src/components/CharacterInfo';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="EpisodeList" component={EpisodeList} />
        <Stack.Screen name="EpisodeDetails" component={EpisodeDetails} />
        <Stack.Screen name="CharacterInfo" component={CharacterInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
