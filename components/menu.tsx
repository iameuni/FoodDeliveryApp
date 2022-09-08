import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { RootStackParams } from '../App';

const Menu = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Navigation</Text>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("ExploreStack")
                }}>
                <Text style={styles.link}>Explore</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("RestaurantsStack")
                }}>
                <Text style={styles.link}>Restaurants</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => {
                    navigation.navigate("Profile")
                }}>
                <Text style={styles.link}>Profile</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#efefef",
        padding: 16,
        marginTop: 8,
    },
    link: {
        fontSize: 16,
        marginTop: 4,
        color: '#097abe',
        fontWeight: 'bold',
    },
    title: {
        fontSize: 18,
    }
});

export default Menu;