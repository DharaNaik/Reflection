/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SplashPage from './Components/Splash'
import Login from './Components/Login'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <SplashPage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color: '#EF5E35'
  },
  instructions: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#EF5E35',
    marginBottom: 5,
  },  

});
