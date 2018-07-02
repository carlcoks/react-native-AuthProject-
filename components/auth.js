import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class AuthScreen extends React.Component {
  render() {
    return (
      <View style={styles.main}>

        <Text style={styles.title}>ODDS</Text>

        <View style={styles.bottom}>
          <Text style={styles.bottomTitle}>СОЗДАЙТЕ СВОЙ АККАУНТ</Text>

          <View>
            <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "Телефон"
              placeholderTextColor = "#616161"
              autoCapitalize = "none"
            />

            <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "Имя и Фамилия"
              placeholderTextColor = "#616161"
              autoCapitalize = "none"
            />

            <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "Пароль"
              placeholderTextColor = "#616161"
              autoCapitalize = "none"
            />

            <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "Повторите пароль"
              placeholderTextColor = "#616161"
              autoCapitalize = "none"
            />

            <TouchableOpacity
               style = {styles.submitButton}
             >
               <Text style = {styles.submitButtonText}>Создать</Text>
            </TouchableOpacity>

            <Text style={styles.cancel} onPress={()=>Actions.login()}>Отмена</Text>
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
  bottomTitle: {
    marginTop: 50,
    marginBottom: 50,
    textAlign: 'center',
    fontSize: 16,
    color: '#000'
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
    marginTop: 30,
    width: '100%',
    borderWidth: 1,
    borderColor: '#414141',
    borderRadius: 30,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#ffad41'
  },
  submitButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
  },
  cancel: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20
  }
});
