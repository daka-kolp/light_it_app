import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native'
import {
    darkBackgroundColor,
    darkTextColor,darkButtonColor,
    inputBackgroundColor, lightButtonColor, lightTextColor
} from "./res/colors"

export default class LoginScreen extends React.Component {
    state = {
        login: '',
        password: ''
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Light_It</Text>
                <KeyboardAvoidingView>
                    <TextInput
                        style={styles.input}
                        value={this.state.name}
                        onChangeText={name => this.setState({name})}
                        placeholder='Name'
                        returnKeyType='next'
                        autoCapitalize='none'
                        autoCorrect={false}
                        onSubmitEditing={() => this.passwordCInput.focus()}/>
                    <TextInput
                        style={styles.input}
                        value={this.state.password}
                        onChangeText={password => this.setState({password})}
                        placeholder='Password'
                        secureTextEntry={true}
                        returnKeyType='go'
                        onSubmitEditing={() => this.passwordInput.focus()}/>
                </KeyboardAvoidingView>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonTextSingIn}>Sing in</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonSingUp}>
                    <Text style={styles.buttonTextSingUp}> Sign up </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: darkBackgroundColor,

    },
    title: {
        marginTop: 16,
        color: lightTextColor,
        textAlign: 'center',
        fontSize: 20
    },
    input: {
        height: 40,
        width: 350,
        backgroundColor: inputBackgroundColor,
        color: darkTextColor,
        marginBottom: 10,
        paddingHorizontal: 10
    },
    button: {
        height: 50,
        width: 350,
        backgroundColor: lightButtonColor,
        justifyContent: 'center',
        paddingVertical: 15
    },
    buttonTextSingIn: {
        fontSize: 18,
        color: darkTextColor,
        alignSelf: 'center',
        textAlign: 'center'
    },
    buttonSingUp: {
        backgroundColor: darkButtonColor,
        alignSelf: 'stretch',
        paddingVertical: 16,
    },
    buttonTextSingUp: {
        fontSize: 18,
        color: lightTextColor,
        alignSelf: 'center',
        textAlign: 'center'
    },
});