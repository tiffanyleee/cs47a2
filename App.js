import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, Image, Platform, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';


export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */

  return (
    <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column",
    }]}>
      <View style={styles.navBar}>
        <Image style={styles.navBar} source={require("./assets/Icons/menu_light.png")} />
        <Text style={styles.navBar}>
          ensom       
        </Text>
        <Image style={styles.navBar} source={require("./assets/Icons/sun.png")} />    
      </View>

      <View style={styles.profile}>
        <View style={styles.photo}>
          <ImageBackground style={styles.photo} source={require("./assets/Profiles/mtl.jpg")}>    
             <View style={styles.photoText}>
              <Text style={styles.photoText}>
                MTL       
              </Text>
            </View>
            <View style={styles.photoLoc}>
              <Text style={styles.photoLoc}>
                2 miles away       
              </Text>
              </View>
          </ImageBackground>
        </View>
        <View style={styles.audio}>
          <Text style={styles.audioText}>
            My hottest take       
          </Text>
          <View style={styles.audioIcons}>
            <Image style={styles.audioPlay} source={require("./assets/Icons/player_light.png")} />    
            <Image style={styles.audioRecord} source={require("./assets/Icons/audio_waveform_light.png")} /> 
          </View> 
        </View>
      </View>

      <View style={styles.menuBar}>
        <View style={styles.menuCols}>
          <View style={styles.menuIcons}>
            <Image style={styles.navBar} source={require("./assets/Icons/discover_light.png")} />
          </View>
          <Text style={styles.menuText}>
              Discover      
          </Text>
        </View>
        <View style={styles.menuCols}>
          <View style={styles.menuIcons}>
            <Image style={styles.navBar} source={require("./assets/Icons/heart_light.png")} />
          </View>
          <Text style={styles.menuText}>
              Matches     
          </Text>
        </View>
        <View style={styles.menuCols}>
          <View style={styles.menuIcons}>
            <Image style={styles.navBar} source={require("./assets/Icons/messages_light.png")} />
          </View>
          <Text style={styles.menuText}>
              DMs     
          </Text>
        </View>
      </View>
    </View>
    

    
);

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
    backgroundColor: 'lightgrey',
  },

  navBar: {
    height: Platform.OS === 'ios' ? 41 : 54,
    justifyContent: "space-between",
    resizeMode: 'contain',
    fontFamily: 'Sydney',
    flexDirection: "row",
  },

  profile: {
    padding: 30,
    alignItems: 'center',
    width: '100%',
    flex: 8,
    borderWidth: 0,
    borderRadius: 10,
    borderColor: 'white',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2.22,
    elevation: 3,
    overflow: 'hidden',
  },

  photo: {
    flex: 8,
    width: '100%',
    height: '100%',
  },

  photoText: {
    flex: 1,
    left: 5,
    fontSize: 30,
    fontFamily: 'Sydney',
    color: 'white',
  },

  photoLoc: {
    flex: 5,
    left: 3,
    position: 'absolute',
    bottom: 0,
    fontSize: 15,
    fontFamily: 'Sydney',
    color: 'white',
  },

  audio: {
    flex: 3,
    flexDirection: 'column',
    marginTop: 20,
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 0,
    borderRadius: 30,
    borderColor: 'white',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.22,
    elevation: 3,
    marginBottom: 70,
    alignSelf: "center",
  },

  audioIcons: {
    flexDirection: 'row',
    flex: 8,
  }, 

  audioText: {
    left: 20,
    top: 10,
    fontSize: 20,
    fontFamily: 'Sydney',
  },

  audioRecord: {
    flex: 8,
    width: null,
    height: null,
    resizeMode: 'contain',
    margin: 15,
  },

  audioPlay: {
    flex: 2,
    width: null,
    height: null,
    resizeMode: 'contain',
    left: 10,
  },

  menuBar: {
    padding: 5,
    width: '100%',
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: 'black',
    resizeMode: 'contain',
  },

  menuCols: {
    flexDirection: "column",
    backgroundColor: 'black',
    resizeMode: 'contain',
  },

  menuIcons: {
    padding: 5,
    width: '100%',
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    textAlignVertical: "center",
  },

  menuText: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Sydney',
    color: 'white',
    alignItems: 'center',
    textAlign: "center",
    textAlignVertical: "center",
  },
});