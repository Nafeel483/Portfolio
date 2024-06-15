import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  backgroundContainer: {
    width: widthScreen,
    height: heightScreen,
  },
  safeAreaContainer: {
    flex: 1,
    // backgroundColor: Colors.BlackRich
  },
  mainContainer: {
    flex: 0.9,
    justifyContent: "center",
    alignItems: "center"
  },

  logoIcon: {
    width: 300,
    height: 300,
    alignSelf: "center",
    resizeMode: "contain"
  },

  nameContainer: {
    marginTop: hp(-5),
    justifyContent: "center",
    alignItems: "center",
  },
  brandTitle: {
    fontSize: 40,
    fontFamily: "DMSerifDisplay-Regular",
    color: Colors.WhiteRich
  },
  brandSubtitle: {
    fontSize: 15,
    fontFamily: "PlaywriteUSTrad-Regular",
    color: Colors.CyanBlue,
    // marginTop: hp(0.1),
  }

});
export default styles;