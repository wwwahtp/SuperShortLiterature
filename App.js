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
import { Feather } from '@expo/vector-icons';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
export default function App() {
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

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
            <TouchableOpacity>
              <Text style={styles.myWriting}>내 게시글</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.myScrap}>스크랩한 글</Text>
            </TouchableOpacity>
          </View>
          <ScrollView>
            <View style={styles.grid}>
              {num.map((nums, index) => (
                <View key={nums} style={styles.Writings}></View>
              ))}
            </View>
          </ScrollView>
        </View>
        <View>
          <TouchableOpacity>
            <View style={styles.writeBtnRnd}>
              <Feather
                style={styles.writeBtn}
                name="pen-tool"
                size={80}
                color="black"
              />
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
    borderTopWidth: 1,

    borderTopEndRadius: 20,
    flexDirection: 'row',
    flex: 3,
    backgroundColor: '#052659',
  },
  BIO: {
    backgroundColor: '#021430',
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
    backgroundColor: '#021430',
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
    backgroundColor: '#052659',
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  myWriting: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  myScrap: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
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
  writeBtnRnd: {
    position: 'absolute',
    backgroundColor: 'yellow',
  },
  writeBtn: {
    position: 'absolute',
    bottom: 20,
    left: 260,
    color: '#2B6653',
  },
});
