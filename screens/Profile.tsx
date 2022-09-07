import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

const ProfileScreen = () => {
    return (
    <View style={styles.container}>
        <Text style={styles.screenTitle}>Profile Screen</Text>

        <Text>Name: Park Ayun</Text>
        <TouchableOpacity>
            <Text>Edit Profile</Text>
        </TouchableOpacity>
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

export default ProfileScreen;