import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';
import Colors from '../../Styles/Colors';
import Images from '../../Styles/Images';
import Styles from './Styles';
import LinearGradient from 'react-native-linear-gradient';
import GradientText from "../GradientText";

const Card = (props: any) => {
  const { navigation, item, keyID } = props;
  return (
    <LinearGradient key={keyID}
      colors={['#0B1219', '#9AC2E5']}
      style={Styles.listContainer}>
      <View style={Styles.listInner}>

        <View style={Styles.listHeadWrap}>
          <Image source={item?.iconPic} style={Styles.listIcon} />
        </View>

        <View style={Styles.listBottomContainer}>
          <TouchableOpacity>
            <LinearGradient colors={['#910000', '#E14E68']}
              style={Styles.listBottomWrap}>
              <Text style={Styles.monthTitle}>{"View"}</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>


      </View>
    </LinearGradient >
  );
};

export default Card;
