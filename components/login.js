import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class LoginScreen extends React.Component {
  state = {
    telefon: '',
    password: ''
  }
  handleTelefon = (text) => {
    this.setState({ telefon: text })
  }
  handlePassword = (text) => {
    this.setState({ password: text })
  }

  login = (email, pass) => {

  }

  render() {
    return (
      <View style={styles.main}>

        <Text style={styles.title}>ODDS</Text>

        <View style={styles.bottom}>
          <TouchableOpacity>
            <View style={styles.createAcc}>
              <Text onPress={() => Actions.auth()} style={styles.createAccText}>СОЗДАТЬ АККАУНТ</Text>
            </View>
          </TouchableOpacity>

          <Text style={styles.between}>или</Text>

          <View>
            <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "+7"
              placeholderTextColor = "#616161"
              autoCapitalize = "none"
              onChangeText = {this.handleTelefon}/>

            <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "Пароль"
              placeholderTextColor = "#616161"
              autoCapitalize = "none"
              onChangeText = {this.handlePassword}/>

            <TouchableOpacity
               style = {styles.submitButton}
               onPress = { () => this.login(this.state.email, this.state.password) }>
               <Text style = {styles.submitButtonText}>Войти</Text>
            </TouchableOpacity>

            <Text style={styles.recovery}>Забыли пароль?</Text>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    paddingTop: 100,
    paddingLeft: 30,
    paddingRight: 30
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontSize: 50,
    color: '#ff8c18'
  },
  bottom: {
    paddingBottom: 50,
    justifyContent: 'space-between',
  },
  createAcc: {
    width: '100%',
    borderRadius: 30,
    backgroundColor: '#ffb047',
    paddingTop: 12,
    paddingBottom: 12,
    justifyContent: 'center'
  },
  createAccText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center'
  },
  between: {
    marginTop: 30,
    marginBottom: 30,
    color: '#5e5e5c',
    textAlign: 'center'
  },
  input: {
    marginBottom: 25,
    width: '100%',
    paddingBottom: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: '#dfdfdf'
  },
  submitButton: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#414141',
    borderRadius: 30,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: 'rgba(255, 255, 255, 0)'
  },
  submitButtonText: {
    textAlign: 'center',
    color: '#000',
    fontSize: 20,
  },
  recovery: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20
  }
});
