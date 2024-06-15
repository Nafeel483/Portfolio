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
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import Ionic from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import Styles from './Styles';

export type Props = {
  navigation: any;
};

const AboutMe = (props: any) => {
  const { navigation } = props;

  return (
    <LinearGradient
      colors={['#303032', '#000000']}
      style={Styles.backgroundContainer}>
      <SafeAreaView style={Styles.safeAreaContainer}>
        <StatusBar barStyle={'light-content'} />
        <View style={Styles.mainContainer}>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

export default AboutMe;
