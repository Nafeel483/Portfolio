import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  ImageBackground
} from 'react-native';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import Ionic from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import GradientText from '../../Components/GradientText';
import Styles from './Styles';

export type Props = {
  navigation: any;
};

const GetStarted = (props: any) => {
  const { navigation } = props;

  return (
    <LinearGradient
      colors={['#303032', '#000000']}
      style={Styles.backgroundContainer}>
      <SafeAreaView style={Styles.safeAreaContainer}>
        <StatusBar barStyle={'light-content'} />
        <View style={Styles.mainContainer}>

          <View style={Styles.headerContainer}>
            <View style={Styles.headerWrap}>
              <Image source={Images.logo} style={Styles.logoIcon} />
              <GradientText itemColor={["#EAE6E4", "#A2D6C0"]}
                style={Styles.brandTitle}>{`H N`}</GradientText>
            </View>
            <Text style={Styles.brandSubtitle}>{`Innovative Solutions`}</Text>
          </View>

          <View style={Styles.centerContainer}>
            <Image source={Images.mainIconOne} style={Styles.centerIcon} />
          </View>
          <View style={Styles.bottomContainer}>
            <View style={Styles.bottomWrap}>
              <Text style={Styles.discoverText}>{`See The Work We’ve Done`}</Text>
              <Text style={Styles.descriptionTxt}>{`Our work is a testament to our unwavering commitment to excellence and innovation. With a diverse portfolio of projects spanning various industries and domains, we take pride in delivering tailored solutions that not only meet but exceed our clients’ expectations.`}</Text>

              <TouchableOpacity onPress={() => { navigation.navigate("ServicesOpening") }}>
                <LinearGradient
                  colors={['#910000', '#E14E68']}
                  style={Styles.nextButton}>
                  <Ionic name={"chevron-forward"} size={28} style={Styles.nextBtn} />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>


        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

export default GetStarted;
