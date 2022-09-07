import { NavigationContainer } from '@react-navigation/native';
import { View, SafeAreaView, StyleSheet, Text } from 'react-native';
import ExploreScreen from './screens/Explore';
import ProfileScreen from './screens/Profile';
import RestaurantsScreen from './screens/Restaurants';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RestaurantScreen from './screens/Restaurant';

export type RootStackParams = {
  Explore;
  Restaurants;
  Profile;
  Restaurant: {
    name: string;
  }
};

const RootStack = createNativeStackNavigator<RootStackParams>();


const App = () => {

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Explore">
        <RootStack.Screen name="Explore" component={ExploreScreen} />
        <RootStack.Screen name="Restaurants" component={RestaurantsScreen} />
        <RootStack.Screen name="Profile" component={ProfileScreen} />
        <RootStack.Screen name="Restaurant" component={RestaurantScreen} />
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
