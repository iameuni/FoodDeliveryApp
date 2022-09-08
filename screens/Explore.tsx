import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Menu from '../components/menu';
import RestaurantCard from '../components/RestaurantCard';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../App';

type Props = NativeStackScreenProps<RootStackParams, 'ExploreStack'>;


const ExpolreScreen = ({ navigation }:Props) => {
    return (
    <View style={styles.container}>
        <Text style={styles.screenTitle}>Restaurants</Text>
        <View>
            <Text style={styles.sectionTitle}>Restaurants near you</Text>
            <RestaurantCard name="Sushi restaurant" onPress={() => {
                    navigation.navigate("RestaurantsStack", {screen: 'Restaurant', params: {name:'Hello from explore'}})
            }}/>
            <RestaurantCard name="Burger restaurant"  onPress={() => {
                    navigation.navigate("Restaurant", {name: 'Sushi restaurant'})
            }}/>
            <RestaurantCard name="Fine dining restaurant"  onPress={() => {
                    navigation.push("Restaurant", {name: 'Sushi restaurant'})
            }}/>

            <Text style={styles.sectionTitle}>Most popular Restaurants</Text>
            <RestaurantCard name="Sushi restaurant"  onPress={() => {
                    navigation.push("Restaurant", {name: 'Sushi restaurant'})
            }}/>
            <RestaurantCard name="Burger restaurant"  onPress={() => {
                    navigation.push("Restaurant", {name: 'Sushi restaurant'})
            }}/>
        </View>
        <Menu />
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        marginTop: 24,
    },
    sectionTitle: {
        fontSize: 16,
        marginTop: 16,
    },
    restaurantCard: {
      backgroundColor: "#efefef"
    },
    screenTitle: {
        fontSize: 24,
        marginTop: 8,
        fontWeight: 'bold',
    },
});
  
export default ExpolreScreen;