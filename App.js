import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
export default function App() {
  const [myWriteOn, setMyWriteOn] = useState(true);
  const chooseMyWriting = () => {
    setMyWriteOn(true);
  };
  const chooseMyScrap = () => {
    setMyWriteOn(false);
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
              source={require('./assets/profileArt.jpg')}
              style={styles.profileArtPic}
            />
          </View>
          <View style={styles.profile}>
            <View>
              <Image
                style={styles.profilePic}
                source={require('./assets/profile4.jpg')}
              />
            </View>
            <View style={styles.name_desc}>
              <Text style={styles.name}>오모세</Text>
              <Text style={styles.desc}>소프트웨어학과 23학번 오모세</Text>
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
                  <View key={nums} style={styles.Writings}></View>
                ))}
              </View>
            ) : (
              <View style={styles.grid}>
                {myScraps.map((nums, index) => (
                  <View key={nums} style={styles.Writings}></View>
                ))}
              </View>
            )}
          </ScrollView>
        </View>
        <View>
          <TouchableOpacity>
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
});
