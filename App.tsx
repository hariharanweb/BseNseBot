/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import GainersLoosers from './src/GainersLoosers';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenType} from './src/service/Api';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StyleSheet, Switch, Text} from 'react-native';

const Stack = createNativeStackNavigator();

const Tab = createMaterialTopTabNavigator();
const LooserTab = () => <Icon name="trending-down" size={24} color={'red'} />;
const GainerTab = () => <Icon name="trending-up" size={24} color={'green'} />;

const App = () => {
  const [allStocks, setAllStocks] = useState<boolean>(false);
  const renderHeaderRight = () => {
    return (
      <>
        <Switch
          value={allStocks}
          onValueChange={value => setAllStocks(value)}
        />
        <Text style={styles.switchText}>All</Text>
      </>
    );
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="BseBot">
          <Stack.Screen
            name="Market Bot"
            options={{
              headerRight: renderHeaderRight,
            }}>
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
                  children={() => (
                    <GainersLoosers
                      type={ScreenType.LOOSERS}
                      allStocks={allStocks}
                    />
                  )}
                  options={{
                    tabBarLabel: 'Loosers',
                    tabBarIcon: LooserTab,
                  }}
                />
                <Tab.Screen
                  name="Gainers"
                  children={() => (
                    <GainersLoosers
                      type={ScreenType.GAINERS}
                      allStocks={allStocks}
                    />
                  )}
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

const styles = StyleSheet.create({
  switchText: {
    paddingLeft: 8,
  },
});

export default App;
