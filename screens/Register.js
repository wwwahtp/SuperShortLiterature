import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const Finish = () => {
  alert('회원가입이 완료되었습니다!');
};
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function App() {
  const [id, setId] = '';
  const [pw, setPw] = '';
  const [repw, setRepw] = '';

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.main}>
            <View style={styles.titleView}>
              <Text style={styles.title}>회원가입</Text>
            </View>
            <TextInput placeholder="ID" style={styles.id}></TextInput>
            <View style={styles.pws}>
              <TextInput placeholder="PW" style={styles.pw}></TextInput>
              <TextInput
                placeholder="PW confirm"
                style={styles.repw}
              ></TextInput>
            </View>
            <View style={styles.horizonLine}></View>
            <Text style={styles.profilePicMsg}>
              프로필 사진을 업로드 해주세요.
            </Text>
            <View style={styles.profilePic}>
              <View style={styles.preview}></View>
              <TouchableOpacity style={styles.upload}>
                <Text style={styles.selectFile}>파일선택</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.profilePicMsg}>
              프로필 아트 사진을 업로드 해주세요.
            </Text>
            <View style={styles.profilePic}>
              <View style={styles.preview}></View>
              <TouchableOpacity style={styles.upload}>
                <Text style={styles.selectFile}>파일선택</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.meaningless}>
              <TouchableOpacity onPress={Finish} style={styles.finish}>
                <Text>가입하기</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    flexDirection: 'column',
  },
  titleView: {
    borderBottomWidth: 1,
    paddingBottom: 30,
    marginHorizontal: 70,
  },
  title: {
    marginTop: 30,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    borderColor: 'black',
  },
  id: {
    fontSize: 20,
    marginTop: 80,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 2,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  pws: {
    borderWidth: 2,
    flexDirection: 'column',
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  pw: {
    fontSize: 20,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    marginHorizontal: 1,
    paddingBottom: 10,
    paddingTop: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  repw: {
    fontSize: 20,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    marginHorizontal: 1,
    paddingTop: 20,
    paddingBottom: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  bottom: {
    flexDirection: 'row',
  },
  preview: {
    width: 200,
    height: 200,
    backgroundColor: 'white',
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
  line: {
    borderColor: 'black',
    borderWidth: 1,
    height: 40,
    width: 150,
    marginLeft: 30,
    marginTop: 105,
  },
  finish: {
    width: 250,
    height: 60,
    borderWidth: 0.1,
    borderRadius: 30,
    marginTop: 100,
    marginBottom: 60,
    marginLeft: 50,
    backgroundColor: '#8DC63F',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  profilePic: {
    flexDirection: 'row',
    marginLeft: 20,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  profilePicMsg: {
    marginLeft: 20,
    marginTop: 80,
    textAlign: 'left',
    marginBottom: 10,
    fontSize: 18,
  },
  upload: {
    width: 100,
    height: 40,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#072A60',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  selectFile: {
    color: 'white',
    fontWeight: 'bold',
  },
  horizonLine: {
    marginLeft: 60,
    marginRight: 60,
    marginTop: 50,
    borderBottomWidth: 1,
  },
});
