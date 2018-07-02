import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import LoginScreen from './components/login'
import AuthScreen from './components/auth'

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';

const initialState = {};
const store = createStore(reducers, initialState);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router hideNavBar={true}>
          <Scene key="root">
            <Scene
              key="login"
              component={LoginScreen}
              initial
              hideNavBar
            />
            <Scene
              key="auth"
              component={AuthScreen}
              hideNavBar
            />
          </Scene>
        </Router>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
});
