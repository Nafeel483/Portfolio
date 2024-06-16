
import React from 'react';
import { Platform } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { enableScreens } from 'react-native-screens';

import BottomTabView from "./BottomNavigation";

import Splash from '../Screens/Splash';
import GetStarted from '../Screens/GetStarted';
import ServicesOpening from '../Screens/ServicesOpening';

type RootStackParamList = {
  Splash: undefined,
  GetStarted: undefined,
  ServicesOpening: undefined,

  BottomTabView: undefined,
  // LeasedNotVerify: undefined,
  // LeasedProperty: undefined,
  // SummaryLandord: undefined,
};

// type AuthStackParamList = {
//   Login: { value: string } | undefined,
// };


enableScreens();


const RootStack = createStackNavigator<RootStackParamList>();


export const THEME_COLOR = '#0AAF60';

export const setNavigator = (nav: any) => {
  const navigator = nav;
};

export default function RootNavigator() {
  return (

    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
        <RootStack.Screen name='GetStarted' component={GetStarted} options={{ headerShown: false }} />
        <RootStack.Screen name='ServicesOpening' component={ServicesOpening} options={{ headerShown: false }} />
       


        <RootStack.Screen name='BottomTabView' component={BottomTabView} options={{ headerShown: false }} />
        {/* <RootStack.Screen name='LeasedNotVerify' component={LeasedNotVerify} options={{ headerShown: false }} /> */}
        {/* <RootStack.Screen name='LeasedProperty' component={LeasedProperty} options={{ headerShown: false }} /> */}

        {/* Login */}
      </RootStack.Navigator>
    </NavigationContainer>

  );
}

