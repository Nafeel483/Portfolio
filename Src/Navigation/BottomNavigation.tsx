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
import {
  AnimatedTabBarNavigator,
  DotSize,
  TabElementDisplayOptions,
} from 'react-native-animated-nav-tab-bar';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Feather';

import Home from "../Screens/MainScreens/Home";
import Categories from "../Screens/MainScreens/Categories";
import Profile from "../Screens/MainScreens/AboutMe";


type BottomStackParamList = {
  Home: undefined,
  Categories: undefined,
  Profile: undefined,
};

type HomeStackParamList = {
  HomeTab: undefined,
};
type CategoriesStackParamList = {
  CategoriesTab: undefined,
};
type ProfileStackParamList = {
  ProfileTab: undefined,
};


const navigationRef = React.createRef<any>();

export function navigate(name: any, params: any) {
  navigationRef.current?.navigate(name, params);
}

const Tabs = AnimatedTabBarNavigator();

const TabBarIcon = (props: any) => {
  return (
    <Icon
      name={props.name}
      size={props.size ? props.size : 24}
      color={props.tintColor}
    />
  );
};

// const Screen = styled.View`
//   flex: 1;
//   justify-content: center;
//   align-items: center;
//   background-color: #f2f2f2;
// `;

const Tab = createBottomTabNavigator<BottomStackParamList>();
const HomeStack = createStackNavigator<HomeStackParamList>();
const CategoriesStack = createStackNavigator<CategoriesStackParamList>();
const ProfileStack = createStackNavigator<ProfileStackParamList>();



export const HomeStacks = () => {
  return (
    <HomeStack.Navigator initialRouteName="HomeTab"
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="HomeTab" component={Home} />
    </HomeStack.Navigator>
  );
}

const CategoriesStacks = () => {
  return (
    <CategoriesStack.Navigator initialRouteName="CategoriesTab"
      screenOptions={{
        headerShown: false,
      }}>
      <CategoriesStack.Screen name="CategoriesTab" component={Categories} />

    </CategoriesStack.Navigator>
  )
}

const ProfileStacks = () => {
  return (
    <ProfileStack.Navigator initialRouteName="ProfileTab"
      screenOptions={{
        headerShown: false,
      }}>
      <ProfileStack.Screen name="ProfileTab" component={Profile} />

    </ProfileStack.Navigator>
  )
}



export const BottomTabView = (props: any) => {
  // let unreadChatCount = props?.chat?.unreadChatCount?.count ? props?.chat?.unreadChatCount?.count : 0
  let unreadChatCount = 1
  return (
    <Tabs.Navigator
      initialRouteName="HomeTab"
      tabBarOptions={{
        activeTintColor: '#ffffff',
        inactiveTintColor: '#223322',
        activeBackgroundColor: '#B40313',
      }}
      appearance={{
        shadow: true,
        floating: true,
        whenActiveShow: TabElementDisplayOptions.BOTH,
        dotSize: DotSize.MEDIUM,
      }}>
      <Tabs.Screen
        name="Home"
        component={HomeStacks}
        options={{
          
          tabBarIcon: ({ focused, color }: any) => (
            <TabBarIcon focused={focused} tintColor={color} name="home" />
          ),
        }}
      />
      <Tabs.Screen
        name="Categories"
        component={CategoriesStacks}
        options={{
          tabBarIcon: ({ focused, color }: any) => (
            <TabBarIcon focused={focused} tintColor={color} name="grid" />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileStacks}
        options={{
          tabBarIcon: ({ focused, color }: any) => (
            <TabBarIcon focused={focused} tintColor={color} name="user" />
          ),
        }}
      />
     </Tabs.Navigator>
  );
}

export default BottomTabView;