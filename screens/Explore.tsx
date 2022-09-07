import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Menu from '../components/menu';
import RestaurantCard from '../components/RestaurantCard';

const ExpolreScreen = () => {
    return (
    <View style={styles.container}>
        <Text style={styles.screenTitle}>Restaurants</Text>
        <View>
            <Text style={styles.sectionTitle}>Restaurants near you</Text>
            <RestaurantCard name="Sushi restaurant" />
            <RestaurantCard name="Burger restaurant" />
            <RestaurantCard name="Fine dining restaurant" />

            <Text style={styles.sectionTitle}>Most popular Restaurants</Text>
            <RestaurantCard name="Sushi restaurant" />
            <RestaurantCard name="Burger restaurant" />
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