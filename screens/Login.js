import { StatusBar } from 'expo-status-bar';
import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.main}></View>
      <View style={styles.bottom}>
        <View style={styles.cover}>
          <TextInput placeholder="ID" style={styles.idAndPw}></TextInput>
          <TextInput placeholder="PW" style={styles.idAndPw}></TextInput>

          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginTxt}>로그인</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.RegisterBtn}>
            <Text style={styles.Register}>회원가입</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flexDirection: 'column',
    flex: 1,
  },
  main: {
    flex: 1,
    backgroundColor: '#093D8C',
  },
  bottom: {
    flex: 2,
    backgroundColor: '#093D8C ',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cover: {
    backgroundColor: '#2B6653',
    flexDirection: 'column',
    marginTop: 30,
    borderRadius: 30,
    width: '90%',
    height: '80%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  idAndPw: {
    marginTop: 50,
    fontSize: 20,
    backgroundColor: 'white',
    paddingVertical: 12,
    marginHorizontal: 30,
    paddingHorizontal: 10,

    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  loginBtn: {
    backgroundColor: '#2A6273',
    height: '17%',
    width: '50%',
    borderRadius: 15,
    marginLeft: 80,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  loginTxt: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  RegisterBtn: {
    alignItems: 'flex-end',
    marginTop: 30,
    marginRight: 30,
  },
  Register: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
});
