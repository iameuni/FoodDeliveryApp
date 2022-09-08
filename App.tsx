import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { View, SafeAreaView, StyleSheet, Text } from 'react-native';
import ExploreScreen from './screens/Explore';
import ProfileScreen from './screens/Profile';
import RestaurantsScreen from './screens/Restaurants';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RestaurantScreen from './screens/Restaurant';
import React from 'react';
import ExploreIcon from './icons/ExploreIcon';
import RestaurantIcon from './icons/RestaurantIcon';
import ProfileIcon from './icons/ProfileIcon';

export type RootStackParams = {
  ExploreStack: undefined;
  RestaurantsStack: NavigatorScreenParams<RestaurantsStackParams>;
  Profile: undefined;
  Restaurant: {
    name: string;
  };
};

const RootStack = createBottomTabNavigator<RootStackParams>();

export type RestaurantsStackParams = {
  Restaurants: undefined;
  Restaurant: {
    name: string;
  };
};

const RestaurantsStack = createNativeStackNavigator<RestaurantsStackParams>();

const RestaurantScreenStack = () => {
  return (
    <RestaurantsStack.Navigator initialRouteName='Restaurants'>
      <RestaurantsStack.Screen name="Restaurants" component={RestaurantsScreen} />
      <RestaurantsStack.Screen name="Restaurant" component={RestaurantScreen} />
    </RestaurantsStack.Navigator>
  );
};

export type ExploreStackParams = {
  Explore: undefined;
  Restaurant: {
    name: string;
  };
};

const ExploreStack = createNativeStackNavigator<ExploreStackParams>();

const ExploreScreenStack = () => {
  return (
    <ExploreStack.Navigator initialRouteName="Explore">
      <ExploreStack.Screen name="Explore" component={ExploreScreen} />
      <ExploreStack.Screen name="Restaurant" component={RestaurantScreen} />
    </ExploreStack.Navigator>
  );
};

const App = () => {

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="ExploreStack">
        <RootStack.Screen name="ExploreStack" component={ExploreScreenStack} options={{
          tabBarIcon: ({ color, size }) => <ExploreIcon color={color} size={size} />,
          tabBarLabel: "Explore"
        }} />
        <RootStack.Screen
          name="RestaurantsStack"
          component={RestaurantScreenStack}
          options={{
            tabBarIcon: ({ color, size }) => <RestaurantIcon color={color} size={size} />,
            tabBarLabel: "Restaurants"
        }} />
        <RootStack.Screen name="Profile" component={ProfileScreen} options={{
          tabBarIcon: ({ color, size }) => <ProfileIcon color={color} size={size} />,
          tabBarLabel: "Profile"
        }} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
  },
});

export default App;