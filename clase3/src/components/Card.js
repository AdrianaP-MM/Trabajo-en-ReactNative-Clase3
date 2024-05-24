import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Card = ({ src, name, hexa }) => {
    return (
        <View style={[styles.cardTotal, { backgroundColor: hexa }]}>
            <Image source={src} style={styles.image} />
            <View>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.hexa}>{hexa}</Text>
            </View>
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    cardTotal: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 6,
        width: 119,
        height: 180,
        borderRadius: 5,
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: '400',
        marginBottom: 2,
        color: 'white',
    },
    hexa: {
        fontSize: 14,
        fontWeight: '300',
        marginBottom: 1,
        color: 'white'
    },
});
