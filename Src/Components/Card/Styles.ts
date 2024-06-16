import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  listContainer: {
    width: widthScreen / 2.3,
    marginRight: hp(1),
    marginLeft: hp(0.5),
    height: 230,
    borderRadius: 14,
    backgroundColor: Colors.BlackRich,
    borderWidth: 1,
    borderColor: Colors.RedRich
  },
  listInner: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  // listHeadContainer: {
  //   flex: 0.4,
  //   justifyContent: "flex-start",
  //   alignItems: "center"
  // },
  listHeadWrap: {
    marginBottom: hp(3.5),
    width: "85%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  listIcon: {
    width: 110,
    height: 110,
    alignSelf: "center",
    resizeMode: "contain"
  },
  listBottomContainer: {
    width: "100%",
    alignSelf: "center",
    justifyContent:  "center",
    alignItems: "center",
    height: 50,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderBottomRightRadius: 14,
    borderBottomLeftRadius: 14,
  },

  listBottomWrap: {
    width: 80,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    borderRadius: 8,
  },
  priceTitle: {
    fontSize: 24,
    fontFamily: "Inter-Bold",
  },
  monthTitle: {
    color: Colors.WhiteRich,
    fontSize: hp(1.5),
    fontFamily: "Inter-Medium",
  },


})
export default styles;