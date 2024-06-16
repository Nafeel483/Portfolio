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

const ServicesOpening = (props: any) => {
  const { navigation } = props;

  return (
    <LinearGradient
      colors={['#F6F3EE', '#DADCD4']}
      style={Styles.backgroundContainer}>
      <SafeAreaView style={Styles.safeAreaContainer}>
        <StatusBar barStyle={'light-content'} />
        <View style={Styles.mainContainer}>

          <View style={Styles.headerContainer}>
            <View style={Styles.headerWrap}>
              <Image source={Images.logo} style={Styles.logoIcon} />
              <Text style={Styles.brandTitle}>{`H N`}</Text>
            </View>
            <Text style={Styles.brandSubtitle}>{`Innovative Solutions`}</Text>
          </View>

          <View style={Styles.centerContainer}>
            <Image source={Images.mainIcon} style={Styles.centerIcon} />
          </View>
          <View style={Styles.bottomContainer}>
            <View style={Styles.bottomWrap}>
              <Text style={Styles.discoverText}>{`WE DEVELOP USING THE LATEST TECHNOLOGIES`}</Text>
              <Text style={Styles.descriptionTxt}>{`Our Team Is Expert In Using The Most Trusted And Advance Technologies For Your Product So You Have Scalability And Endless Support.`}</Text>
              <TouchableOpacity onPress={() => {
                navigation.navigate("BottomTabView", {
                  screen: "Home"
                })
              }}>
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

export default ServicesOpening;
