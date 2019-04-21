import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native'
import {
    darkBackgroundColor, darkButtonColor,
    darkTextColor,
    inputBackgroundColor, lightTextColor
} from "./res/colors"

export default class SignUpScreen extends React.Component {
    state = {
        login: '',
        password: '',
        password_confirmation: ''
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Sign Up</Text>
                <KeyboardAvoidingView >
                    <TextInput
                        style={styles.input}
                        value={this.state.name}
                        onChangeText={name => this.setState({name})}
                        placeholder='Name'
                        returnKeyType='next'
                        autoCapitalize='none'
                        autoCorrect={false}
                        onSubmitEditing={() => this.passwordInput.focus()}/>
                    <TextInput
                        style={styles.input}
                        value={this.state.password}
                        onChangeText={password => this.setState({password})}
                        placeholder='Password'
                        returnKeyType='next'
                        secureTextEntry={true}
                        onSubmitEditing={() => this.passwordCInput.focus()}
                        ref={input => (this.passwordInput = input)}/>
                    <TextInput
                        style={styles.input}
                        value={this.state.password_confirmation}
                        onChangeText={password_confirmation => this.setState({password_confirmation})}
                        placeholder='Confirm Password'
                        secureTextEntry={true}
                        returnKeyType='go'
                        ref={input => (this.passwordCInput = input)}/>
                </KeyboardAvoidingView>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Ok</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: darkBackgroundColor,
        padding: 16
    },
    title: {
        color: lightTextColor,
        textAlign: 'center',
        fontSize: 20
    },
    input: {
        height: 40,
        width: 350,
        marginBottom: 10,
        backgroundColor: inputBackgroundColor,
        color: darkTextColor,
        paddingHorizontal: 10
    },
    button: {
        height: 50,
        backgroundColor: darkButtonColor,
        alignSelf: 'stretch',
        marginTop: 10,
        justifyContent: 'center',
        paddingVertical: 15,
        marginBottom: 10
    },
    buttonText: {
        fontSize: 18,
        alignSelf: 'center',
        textAlign: 'center',
        color: lightTextColor
    }
});