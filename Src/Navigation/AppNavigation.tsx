
import React from 'react';
import { Platform } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { enableScreens } from 'react-native-screens';

// import BottomTabView from "./BottomNavigation";

import Splash from '../Screens/Splash';
// import OpeningScreen from '../Screens/OpeningScreen';
// import SignUp from '../Screens/AuthScreens/SignUp';
// import UserNameSignUp from '../Screens/AuthScreens/SignUp/UserNameSignUp';
// import BirthdaySignUp from '../Screens/AuthScreens/SignUp/BirthdaySignUp';
// import AddressSignUp from '../Screens/AuthScreens/SignUp/AddressSignUp';
// import EmailSignUp from '../Screens/AuthScreens/SignUp/EmailSignUp';
// import PhoneSignUp from '../Screens/AuthScreens/SignUp/PhoneSignUp';
// import TwoStepVerification from '../Screens/AuthScreens/SignUp/TwoStepVerification';
// import CodeOtp from '../Screens/AuthScreens/SignUp/CodeOtp';
// import CreatePassword from '../Screens/AuthScreens/SignUp/CreatePassword';
// import Success from '../Screens/AuthScreens/SignUp/Success';

// import Login from '../Screens/AuthScreens/Login';

// import ListingDetails from '../Screens/MainScreens/ListingDetails';
// import LeasedNotVerify from '../Screens/MainScreens/LeasedNotVerify';
// import LeasedProperty from '../Screens/MainScreens/LeasedProperty ';
// import SummaryLandord from '../Screens/MainScreens/SummaryLandord';

type RootStackParamList = {
  Splash: undefined,
  // OpeningScreen: undefined,
  // SignUp: undefined,
  // UserNameSignUp: undefined,
  // BirthdaySignUp: undefined,
  // AddressSignUp: undefined,
  // EmailSignUp: undefined,
  // PhoneSignUp: undefined,
  // TwoStepVerification: undefined,
  // CodeOtp: undefined,
  // CreatePassword: undefined,
  // Success: undefined,
  // Login: undefined,
  // BottomTabView: undefined,
  // ListingDetails: undefined,
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
        {/* <RootStack.Screen name='OpeningScreen' component={OpeningScreen} options={{ headerShown: false }} /> */}
        {/* <RootStack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} /> */}
        {/* <RootStack.Screen name='UserNameSignUp' component={UserNameSignUp} options={{ headerShown: false }} /> */}
        {/* <RootStack.Screen name='BirthdaySignUp' component={BirthdaySignUp} options={{ headerShown: false }} /> */}
        {/* <RootStack.Screen name='AddressSignUp' component={AddressSignUp} options={{ headerShown: false }} /> */}
        {/* <RootStack.Screen name='EmailSignUp' component={EmailSignUp} options={{ headerShown: false }} /> */}
        {/* <RootStack.Screen name='PhoneSignUp' component={PhoneSignUp} options={{ headerShown: false }} /> */}
        {/* <RootStack.Screen name='TwoStepVerification' component={TwoStepVerification} options={{ headerShown: false }} /> */}
        {/* <RootStack.Screen name='CodeOtp' component={CodeOtp} options={{ headerShown: false }} /> */}
        {/* <RootStack.Screen name='CreatePassword' component={CreatePassword} options={{ headerShown: false }} /> */}
        {/* <RootStack.Screen name='Success' component={Success} options={{ headerShown: false }} /> */}
        {/* <RootStack.Screen name='Login' component={Login} options={{ headerShown: false }} /> */}
        {/* <RootStack.Screen name='SummaryLandord' component={SummaryLandord} options={{ headerShown: false }} /> */}
        {/* <RootStack.Screen name='ListingDetails' component={ListingDetails} options={{ headerShown: false }} /> */}
        {/* <RootStack.Screen name='ListingDetails' component={ListingDetails} options={{ headerShown: false }} /> */}


        {/* <RootStack.Screen name='BottomTabView' component={BottomTabView} options={{ headerShown: false }} /> */}
        {/* <RootStack.Screen name='ListingDetails' component={ListingDetails} options={{ headerShown: false }} /> */}
        {/* <RootStack.Screen name='LeasedNotVerify' component={LeasedNotVerify} options={{ headerShown: false }} /> */}
        {/* <RootStack.Screen name='LeasedProperty' component={LeasedProperty} options={{ headerShown: false }} /> */}

        {/* Login */}
      </RootStack.Navigator>
    </NavigationContainer>

  );
}

