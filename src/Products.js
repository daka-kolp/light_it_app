import React, {Component} from "react";
import {StyleSheet, View} from "react-native";
//import {Header} from 'react-native-elements'
import {darkBackgroundColor} from "./res/colors";

import {Layout, ImageCard} from "./components";

const list = [
    {
        id: 1,
        title: 'product1',
        image: 'http://smktesting.herokuapp.com/static/img1.png',
        text: 'lorem ipsum 1'
    },
    {
        id: 2,
        title: 'product2',
        image: 'http://smktesting.herokuapp.com/static/img2.png',
        text: 'lorem ipsum 1'
    }
]
export default class Products extends Component {
    state = {
        data: list
    }

    render() {
        const {data} = this.state
        // const {navigation} = this.props
        return (
            <View style={styles.container}>
                <Layout>
                    {data.map(item => (
                        <ImageCard
                            data={item}
                            key={item.id}
                            // onPress={() => navigation.navigate(SPIDER_DETAILS, (item.show))}
                        />
                    ))}
                </Layout>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: darkBackgroundColor
    }
})