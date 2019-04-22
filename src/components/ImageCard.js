import React from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {dp48, windowWidth} from "../res/dimensions"
import {darkTextColor, lightButtonColor} from "../res/colors";

export const ImageCard = ({data, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Image style={styles.icon} source={{uri: data.image}}/>
                <Text style={styles.title}>{data.title}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: lightButtonColor,
        width: windowWidth / 2.6,
        marginBottom: 16,
        padding: 16
    },
    icon: {
        width: dp48,
        height: dp48
    },
    title: {
        paddingHorizontal: 10,
        fontSize: 18,
        alignSelf: 'center',
        textAlign: 'center',
        color: darkTextColor
    }
});