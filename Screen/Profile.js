import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
export default function Profile({ navigation }) {
  const [myWriteOn, setMyWriteOn] = useState(true);
  const [editNameOn, setEditNameOn] = useState(false);
  const [editDescOn, setEditDescOn] = useState(false);
  const [name, setName] = useState('오모세');
  const [desc, setDesc] = useState('소프트웨어학과 23학번 오모세');
  const [txt, setTxt] = useState('');
  const chooseMyWriting = () => {
    setMyWriteOn(true);
  };
  const chooseMyScrap = () => {
    setMyWriteOn(false);
  };
  const EditName = () => {
    console.log('you pressed edit');
    setEditNameOn(true);
  };
  const submitName = () => {
    setEditNameOn(false);
    setName(txt);
    setTxt('');
  };
  const EditDesc = () => {
    console.log('you pressed desc');
    setEditDescOn(true);
  };
  const submitDesc = () => {
    setEditDescOn(false);
    setDesc(txt);
    setTxt('');
  };
  const myWritings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const myScraps = [1, 2, 3, 4, 5];
  return (
    <>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.BIO}>
          <View style={styles.profileArt}>
            <Image
              source={require('../assets/profileArt.jpg')}
              style={styles.profileArtPic}
            />
          </View>
          <View style={styles.profile}>
            <View>
              <Image
                style={styles.profilePic}
                source={require('../assets/profile4.jpg')}
              />
            </View>
            <View style={styles.name_desc}>
              {editNameOn ? (
                <View style={styles.nameEdit}>
                  <TextInput
                    placeholder="닉네임 변경"
                    onSubmitEditing={submitName}
                    onChangeText={(e) => {
                      setTxt(e);
                      console.log(txt);
                    }}
                    style={styles.modifyName}
                  ></TextInput>
                </View>
              ) : (
                <View style={styles.nameEdit}>
                  <Text
                    adjustsFontSizeToFit={true}
                    numberOfLines={1}
                    style={styles.name}
                  >
                    {name}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      EditName();
                    }}
                  >
                    <Feather name="edit" size={36} color="white" />
                  </TouchableOpacity>
                </View>
              )}
              {editDescOn ? (
                <View style={styles.nameEdit}>
                  <TextInput
                    placeholder="설명 변경"
                    onSubmitEditing={submitDesc}
                    onChangeText={(e) => {
                      setTxt(e);
                      console.log(txt);
                    }}
                    style={styles.modifyName}
                  ></TextInput>
                </View>
              ) : (
                <View style={styles.descEdit}>
                  <Text
                    adjustsFontSizeToFit={true}
                    numberOfLines={3}
                    style={styles.desc}
                  >
                    {desc}
                  </Text>
                </View>
              )}
              <TouchableOpacity onPress={EditDesc}>
                <Feather name="edit" size={30} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.album}>
          <View style={styles.albumSelect}>
            {myWriteOn ? (
              <>
                <TouchableOpacity
                  onPress={() => {
                    chooseMyWriting();
                  }}
                >
                  <View style={styles.myWritingChange}>
                    <Text style={styles.myWriting}>내 게시글</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    chooseMyScrap();
                  }}
                >
                  <Text style={styles.myScrap}>스크랩한 글</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <TouchableOpacity
                  onPress={() => {
                    chooseMyWriting();
                  }}
                >
                  <View>
                    <Text style={styles.myWriting}>내 게시글</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    chooseMyScrap();
                  }}
                >
                  <View style={styles.myScrapChange}>
                    <Text style={styles.myScrap}>스크랩한 글</Text>
                  </View>
                </TouchableOpacity>
              </>
            )}
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            {myWriteOn ? (
              <View style={styles.grid}>
                {myWritings.map((nums, index) => (
                  <TouchableOpacity
                    activeOpacity={0.4}
                    key={nums}
                    style={styles.Writings}
                  ></TouchableOpacity>
                ))}
              </View>
            ) : (
              <View style={styles.grid}>
                {myScraps.map((nums, index) => (
                  <TouchableOpacity
                    key={nums}
                    style={styles.Writings}
                  ></TouchableOpacity>
                ))}
              </View>
            )}
          </ScrollView>
        </View>
        <View>
          <TouchableOpacity
            title="go to login"
            onPress={() => navigation.navigate('Login')}
          >
            <View style={styles.writeBtnRndRnd}>
              <View style={styles.writeBtnRnd}>
                <Feather
                  style={styles.writeBtn}
                  name="pen-tool"
                  size={80}
                  color="white"
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  editIcon: {
    width: 30,
    height: 30,
    backgroundColor: 'black',
  },
  profile: {
    borderTopEndRadius: 20,
    flexDirection: 'row',
    flex: 3,
    backgroundColor: '#2B6653',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: -10 }, // change this for more shadow
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  BIO: {
    backgroundColor: 'black',
    flexDirection: 'column',
    flex: 5,
  },
  profileArt: {
    flex: 5,

    backgroundColor: 'red',
  },
  album: {
    flex: 6,
    flexDirection: 'column',
    backgroundColor: '#2B6653',
  },
  profileArtPic: {
    width: '100%',
    height: '110%',
  },
  profilePic: {
    height: 120,
    width: 120,
    borderRadius: 120,
    position: 'relative',
    bottom: 60,
    left: 8,
  },
  name_desc: {
    flexDirection: 'column',
  },

  name: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
  },
  desc: {
    marginTop: 5,
    marginLeft: 10,
    color: 'white',
  },
  albumSelect: {
    backgroundColor: '#2B6653',
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',

    borderColor: 'black',

    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 }, // change this for more shadow
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  myWriting: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  myWritingChange: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    borderBottomColor: 'white',
    borderBottomWidth: 3,
    paddingBottom: 3,
  },
  myScrap: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  myScrapChange: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    borderBottomColor: 'white',
    borderBottomWidth: 3,
    paddingBottom: 3,
  },
  Writings: {
    width: SCREEN_WIDTH / 3,
    height: SCREEN_WIDTH / 3,
    backgroundColor: 'white',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#1F5F31',
  },
  grid: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },

  writeBtn: {
    position: 'absolute',
    bottom: 20,
    left: 260,
    color: '#FF6C0F',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  nameEdit: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 200,
  },
  TEMPO: {
    width: 200,
    height: 200,
    backgroundColor: 'black',
  },
  modifyName: {
    backgroundColor: 'white',
    fontSize: 20,
    paddingTop: 10,
    width: 200,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 100,
    borderRadius: 15,
    padding: 10,
  },
});
