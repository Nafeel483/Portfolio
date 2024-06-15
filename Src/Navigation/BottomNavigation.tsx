import React from 'react';
import {
  View,
  Image,
  Platform,
  Text,
  TouchableOpacity
} from 'react-native';

import Images from '../Styles/Images';
import Colors from '../Styles/Colors';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Report from "../Screens/MainScreens/Report";
import Home from "../Screens/MainScreens/Home";
import Message from "../Screens/MainScreens/Message";
import Profile from "../Screens/MainScreens/Profile";


type BottomStackParamList = {
  ReportTab: undefined,
  HomeTab: undefined,
  MessageTab: undefined,
  ProfileTab: undefined,
};
type ReportStackParamList = {
  Report: undefined,
};
type HomeStackParamList = {
  Home: undefined,
};
type MessageStackParamList = {
  Message: undefined,
};
type ProfileStackParamList = {
  Profile: undefined,
};


const navigationRef = React.createRef<any>();

export function navigate(name: any, params: any) {
  navigationRef.current?.navigate(name, params);
}

const Tab = createBottomTabNavigator<BottomStackParamList>();
const ReportStack = createStackNavigator<ReportStackParamList>();
const HomeStack = createStackNavigator<HomeStackParamList>();
const MessageStack = createStackNavigator<MessageStackParamList>();
const ProfileStack = createStackNavigator<ProfileStackParamList>();



export const ReportStacks = () => {
  return (
    <ReportStack.Navigator initialRouteName="Report"
      screenOptions={{
        headerShown: false,
      }}>
      <ReportStack.Screen name="Report" component={Report} />

    </ReportStack.Navigator>
  );
}

export const HomeStacks = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}

const MessageStacks = () => {
  return (
    <MessageStack.Navigator initialRouteName="Message"
      screenOptions={{
        headerShown: false,
      }}>
      <MessageStack.Screen name="Message" component={Message} />

    </MessageStack.Navigator>
  )
}

const ProfileStacks = () => {
  return (
    <ProfileStack.Navigator initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
      }}>
      <ProfileStack.Screen name="Profile" component={Profile} />

    </ProfileStack.Navigator>
  )
}






export const BottomTabView = (props: any) => {
  // let unreadChatCount = props?.chat?.unreadChatCount?.count ? props?.chat?.unreadChatCount?.count : 0
  let unreadChatCount = 1
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let image;
          let name;

          if (route.name === 'HomeTab') {
            image = Images.home;
            name = "Home"
          }
          else if (route.name === 'ReportTab') {
            image = Images.report;
            name = "Report"
          }
          else if (route.name === 'MessageTab') {
            image = Images.message;
            name = "Inbox"
          }
          else if (route.name === 'ProfileTab') {
            image = Images.profile;
            name = "Profile"
          }


          return (
            <>
              <View style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                <Image source={image} style={{
                  marginTop: hp(1.5),
                  width: 24,
                  height: 24,
                  tintColor: focused ? Colors.Blue : "rgba(255, 255, 255, 0.5)"
                }} />
                <Text
                  style={{
                    marginTop: hp(1),
                    fontSize: 12,
                    fontFamily: "Inter-Regular",
                    color: focused ? Colors.Blue : "rgba(255, 255, 255, 0.5)"
                  }}>{name}</Text>
              </View>
            </>
          );
        },
        tabBarStyle: {
          height: hp(12),
          backgroundColor: Colors.RichBlack,
          borderTopWidth: 1,
          borderTopColor: Colors.CyanBlue,
          position: 'absolute',
          overflow: 'hidden',
        },
        tabBarShowLabel: false
      })}>

      <Tab.Screen name="HomeTab" component={HomeStacks} />
      <Tab.Screen name="ReportTab" component={ReportStacks} />
      <Tab.Screen name="MessageTab" component={MessageStacks} />
      <Tab.Screen name="ProfileTab" component={ProfileStacks} />
    </Tab.Navigator>
  );
}

export default BottomTabView;