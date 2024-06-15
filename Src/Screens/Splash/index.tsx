import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  Text,
  Animated,
  StatusBar,
  SafeAreaView
} from 'react-native';
import Styles from './Styles';
import Images from '../../Styles/Images';
import LinearGradient from 'react-native-linear-gradient';


export type Props = {
  navigation: any;
};

const Splash = (props: any) => {
  const { navigation } = props;

  const imageScale = new Animated.Value(0.1);
  const textScale = new Animated.Value(0.1);

  Animated.timing(imageScale, {
    toValue: 1,
    duration: 1500,
    useNativeDriver: true,
  }).start();

  Animated.timing(textScale, {
    toValue: 1,
    duration: 4000,
    useNativeDriver: true,
  }).start();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     // navigation.navigate("OpeningScreen")
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // }, [])


  return (
    <LinearGradient
      colors={['#303032', '#000000']}
      style={Styles.backgroundContainer}>
      <SafeAreaView style={Styles.safeAreaContainer}>
        <StatusBar barStyle={"light-content"} />
        <View style={Styles.mainContainer}>

          <Animated.Image
            source={Images.logo}
            style={[Styles.logoIcon, { transform: [{ scale: imageScale }] }]} />

          <Animated.View style={[Styles.nameContainer, { transform: [{ scaleX: imageScale }] }]}>
            <Animated.Text style={[Styles.brandTitle, { transform: [{ scaleX: textScale }] }]}>{`H N`}</Animated.Text>
            <Animated.Text style={[Styles.brandSubtitle, { transform: [{ scaleX: textScale }] }]}>{`Innovative Solutions`}</Animated.Text>
          </Animated.View>

        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

export default Splash;


