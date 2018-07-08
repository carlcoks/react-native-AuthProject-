import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { AppLoading, Font } from 'expo';

import LoginScreen from './components/login'
import AuthScreen from './components/auth'

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';

const initialState = {};
const store = createStore(reducers, initialState);

export default class App extends React.Component {
  state = {
    loaded: false,
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  _loadFontsAsync = async () => {
    await Font.loadAsync({
      'Lato': require('./src/fonts/Lato.ttf'),
      'LatoBold': require('./src/fonts/LatoBold.ttf'),
    });
    this.setState({loaded: true});
  }

  render() {
    if (!this.state.loaded) {
      return <AppLoading />;
    }

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
