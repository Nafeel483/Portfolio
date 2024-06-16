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
  },
  mainContainer: {
    flex: 1,
  },

  headerContainer: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: "center"
  },
  headerWrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  logoIcon: {
    width: 70,
    height: 70,
    alignSelf: "center",
    resizeMode: "contain"
  },

  nameContainer: {
    // marginTop: hp(-5),
    justifyContent: "center",
    alignItems: "center",
  },
  brandTitle: {
    fontSize: 28,
    fontFamily: "DMSerifDisplay-Regular",
    color: Colors.BahamaBlue
  },
  brandSubtitle: {
    fontSize: 14,
    fontFamily: "PlaywriteUSTrad-Regular",
    color: Colors.BahamaBlue,
    lineHeight: 22,
    textAlign: "center"
  },
  centerContainer: {
    flex: 0.55,
    justifyContent: "center",
    alignItems: "center"
  },
  centerIcon: {
    width: widthScreen / 1.12,
    alignSelf: "center",
    height: hp(27),
  },
  bottomContainer: {
    flex: 0.3,
    justifyContent: "flex-end",
    // alignItems: "center"
  },
  bottomWrap: {
    width: widthScreen / 1.12,
    alignSelf: "center",
  },
  discoverText: {
    fontSize: 24,
    fontFamily: "Inter-SemiBold",
    color: Colors.FibonacciBlue,
    textAlign: "center",
    lineHeight:35
  },
  descriptionTxt: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
    color: Colors.FibonacciBlue,
    lineHeight: 22,
    textAlign: "center",
    marginTop: hp(3),
  },
  nextButton: {
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp(3),
    marginBottom: hp(1),
    alignSelf: "flex-end"
  },
  nextBtn: {
    color: Colors.WhiteRich,
  }

});
export default styles;