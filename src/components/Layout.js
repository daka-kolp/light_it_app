import React from 'react'
import {View, StyleSheet, ScrollView} from 'react-native'

export const Layout = props => {
    return (
        <ScrollView>
            <View style={styles.container}>
                {props.children}
            </View>
        </ScrollView>
    )
};
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 30,
        flexWrap: 'wrap',
        flexShrink: 2,
        justifyContent: 'space-around',
        padding: 10
    }
});

