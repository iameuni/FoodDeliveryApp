import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native'
import RestaurantCard from '../components/RestaurantCard';
import Menu from '../components/menu';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../App';

type Props = NativeStackScreenProps<RootStackParams, 'Restaurants'>;

const RestaurantsScreen = ({ navigation }:Props) => {
    return (
    <View style={styles.container}>
        <Text style={styles.screenTitle}>Restaurants Screen</Text>
        <ScrollView>
            <RestaurantCard name="Sushi restaurant" onPress={name => {
                navigation.navigate('Restaurant', {name});
            }}/>
            <RestaurantCard name="Burger restaurant" onPress={name => {
                navigation.navigate('Restaurant', {name});
            }}/>
            <RestaurantCard name="Fine dining restaurant" onPress={name => {
                navigation.navigate('Restaurant', {name});
            }}/>
            <RestaurantCard name="Sushi restaurant" onPress={name => {
                navigation.navigate('Restaurant', {name});
            }}/>
            <RestaurantCard name="Burger restaurant" onPress={name => {
                navigation.navigate('Restaurant', {name});
            }}/>
            <RestaurantCard name="Fine dining restaurant" onPress={name => {
                navigation.navigate('Restaurant', {name});
            }}/>
        </ScrollView>
        <Menu />
    </View>
    );
};

const styles = StyleSheet.create({
    container:{
        padding: 16,
        marginTop: 24,
    },
    screenTitle: {
        fontSize: 24,
        marginTop: 8,
        fontWeight: 'bold',
    },
});

export default RestaurantsScreen;