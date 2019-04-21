import React, {Component} from 'react';
import LoginScreen from "./src/LoginScreen";
import SignUpScreen from "./src/SignUpScreen";
import Products from "./src/Products";

export default class App extends Component<Props> {
  render() {
    return (
      <SignUpScreen/>
    );
  }
}