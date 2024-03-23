import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import EpisodeList from './src/screens/EpisodeListScreen/EpisodeList';
import EpisodeDetails from './src/screens/EpisodeDetailsScreen/EpisodeDetails';
import CharacterInfo from './src/screens/CharacterInfoScreen/CharacterInfo';
import DataProvider from './src/store/DataProvider';
import FavoriteCharacters from './src/screens/FavoriteCharactersScreen/FavoriteCharacters';
import {Image} from 'react-native';
import {ToastProvider} from 'react-native-toast-notifications';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const EpisodesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EpisodeList"
        component={EpisodeList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EpisodeDetails"
        component={EpisodeDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CharacterInfo"
        component={CharacterInfo}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <DataProvider>
      <NavigationContainer>
        <ToastProvider>
          <Tab.Navigator>
            <Tab.Screen
              name="Episodes"
              component={EpisodesStack}
              options={{
                headerShown: false,
                tabBarIcon: () => (
                  <Image
                    source={require('./src/images/home.png')}
                    style={{width: 30, height: 30}}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="FavoriteCharacters"
              component={FavoriteCharacters}
              options={{
                headerShown: false,
                tabBarIcon: () => (
                  <Image
                    source={require('./src/images/favourites.png')}
                    style={{width: 30, height: 30}}
                  />
                ),
              }}
            />
          </Tab.Navigator>
        </ToastProvider>
      </NavigationContainer>
    </DataProvider>
  );
};

export default App;
