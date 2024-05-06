/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import GainersLoosers from './src/GainersLoosers';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenType} from './src/service/Api';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();

const Tab = createMaterialTopTabNavigator();
const Loosers = () => <GainersLoosers type={ScreenType.LOOSERS} />;
const Gainers = () => <GainersLoosers type={ScreenType.GAINERS} />;
const LooserTab = () => <Icon name="trending-down" size={24} color={'red'} />;
const GainerTab = () => <Icon name="trending-up" size={24} color={'green'} />;

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="BseBot">
          <Stack.Screen name="BseBot">
            {() => (
              <Tab.Navigator
                tabBarPosition="bottom"
                screenOptions={{
                  lazy: true,
                  tabBarStyle: {
                    paddingBottom: 16,
                  },
                }}>
                <Tab.Screen
                  name="Loosers"
                  component={Loosers}
                  options={{
                    tabBarLabel: 'Loosers',
                    tabBarIcon: LooserTab,
                  }}
                />
                <Tab.Screen
                  name="Gainers"
                  component={Gainers}
                  options={{
                    tabBarLabel: 'Gainers',
                    tabBarIcon: GainerTab,
                  }}
                />
              </Tab.Navigator>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
