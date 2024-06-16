import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../Styles/Colors';

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
    marginTop: hp(2),
    width: widthScreen / 1.12,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

  },
  headerWrap: {
    alignItems: "center",
  },
  logoIcon: {
    width: 70,
    height: 70,
    resizeMode: "contain"
  },

  nameContainer: {
    // marginTop: hp(-5),
    justifyContent: "center",
    alignItems: "center",
  },
  brandTitle: {
    fontSize: 20,
    fontFamily: "Poppions-SemiBold",
    color: Colors.WhiteRich,
  },
  brandSubtitle: {
    fontSize: 16,
    fontFamily: "Poppions-Regular",
    color: Colors.GreyNurse,
    lineHeight: 22,
  },
  container: {
    marginTop: hp(1.5),
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginBottom: hp(2)
  },
  line: {
    marginTop: hp(2),
    width: widthScreen / 1.12,
    alignSelf: "center",
    height: hp(0.04),
    backgroundColor: Colors.GraniteGray
  },
  scrollContainer: {
    marginBottom: hp("15%"),
    marginTop: hp(0.5)
  },
  listContainer: {
    marginTop: hp(2),
    width: widthScreen / 1.12,
    alignSelf: "center",
    marginBottom: hp(1)
  },
  activeHeadTitle: {
    fontSize: 20,
    fontFamily: "Inter-SemiBold",
  },
  servicesContainer: {
    marginTop: hp(2),
    width: widthScreen / 1.12,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: hp(1)
  },
  servicesInner: {
    flexDirection: "row",
    alignItems: "center",
  },
  serviceIcon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    tintColor: Colors.WhiteRich
  },
  serviceTitle: {
    fontSize: 16,
    fontFamily: "Inter-Regular",
    color: Colors.GreyNurse,
    marginLeft: hp(1.5)
  },
  nextBtn: {
    color: Colors.GreyNurse,
  },
  workListContainer: {
    marginTop: hp(3),
    width: widthScreen / 1.12,
    alignSelf: "center",
    marginBottom: hp(1)
  },
  workContainer: {
    marginTop: hp(2),
    width: widthScreen / 1.12,
    alignSelf: "center",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.RedRich,
    marginBottom: hp(1)
  },
  workInner: {
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: hp(1.8)
  },
  workIcon: {
    color: Colors.BayouxBlue,
  },
  listBottomWrap: {
    width: 60,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    height: 25,
    borderRadius: 30,
    backgroundColor: Colors.BayouxBlue,
  },
  workTitle: {
    fontSize: 16,
    fontFamily: "Inter-Regular",
    color: Colors.WhiteRich,
    marginLeft: hp(1.5)
  },
  percentTitle: {
    color: Colors.WhiteRich,
    fontSize: hp(1.5),
    fontFamily: "Inter-Medium",
  },
  workInnerDes: {
    width: "85%",
    alignSelf: "center",
    marginTop: hp(1.8),
    marginBottom: hp(1.8)
  },
  desTitle: {
    color: Colors.LightGray,
    fontSize: 13,
    fontFamily: "Poppions-Regular",
    lineHeight: 20
  },
  iconStyle: {
    width: 24,
    height: 24,
    // resizeMode: "contain",
    tintColor: Colors.BayouxBlue,
  }
});
export default styles;