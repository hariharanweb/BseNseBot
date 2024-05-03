/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import GainersLoosers from './src/GainersLoosers';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenType} from './src/service/Api';

const Stack = createNativeStackNavigator();

const Tab = createMaterialTopTabNavigator();
const Loosers = () => <GainersLoosers type={ScreenType.LOOSERS} />;
const Gainers = () => <GainersLoosers type={ScreenType.GAINERS} />;
const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="BseBot">
          <Stack.Screen name="BseBot">
            {() => (
              <Tab.Navigator tabBarPosition="bottom">
                <Tab.Screen name="Loosers" component={Loosers} />
                <Tab.Screen name="Gainers" component={Gainers} />
              </Tab.Navigator>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
