import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground
} from 'react-native';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import Ionic from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import GradientText from '../../../Components/GradientText';
import { SwiperFlatListWithGestureHandler } from 'react-native-swiper-flatlist/WithGestureHandler';
import Styles from './Styles';
import Card from '../../../Components/Card';

export type Props = {
  navigation: any;
};


const DATA = [
  {
    id: "1",
    iconPic: Images.tuze,
    title: `TUZE`,
  },
  {
    id: "2",
    iconPic: Images.drink,
    title: `DRINK`,
  },
  {
    id: "3",
    iconPic: Images.vibe,
    title: `VIBE`,
  },
  {
    id: "4",
    iconPic: Images.kuiktok,
    title: `KUIKTOK`,
  },
  {
    id: "5",
    iconPic: Images.unhas,
    title: `UNHAS`,
  },
  {
    id: "6",
    iconPic: Images.panther,
    title: `PANTHER`,
  },
  {
    id: "7",
    iconPic: Images.violet,
    title: `VIOLET`,
  },
  {
    id: "8",
    iconPic: Images.pldre,
    title: `PLDRE`,
  },
]

const WORK_DATA = [
  {
    id: "1",
    iconPic: "time-outline",
    title: `On Budget, On-time`,
    description: `HN Innovative's delivers projects on budget and time according to specifications for predictable and stable collaboration, ensuring client satisfaction and successful outcomes.`,
  },
  {
    id: "2",
    iconPic: Images.groupUsers,
    title: `Dedicated Team`,
    description: `Assign dedicated teams guided by certified project managers and skilled experts, tailored to project needs for efficient execution and delivery of high-quality solutions.`
  },
  {
    id: "3",
    iconPic: Images.mind,
    title: `Passionate People`,
    description: `We employ passionate professionals dedicated to programming excellence, committed to delivering exceptional results and providing ongoing support to meet client needs.`
  },
  {
    id: "4",
    iconPic: Images.ownership,
    title: `Code Ownership`,
    description: `We give full code ownership upon project completion, empowering clients with complete control and flexibility over their software assets, and ensuring transparency and accountability throughout the development process.`
  },
  {
    id: "5",
    iconPic: Images.crown,
    title: `High-Quality Products`,
    description: `Build high-quality products with modern technology, guaranteeing bug-free, optimized performance for long-term usability and scalability, delivering value and reliability to clients.`
  },
]

const Home = (props: any) => {
  const { navigation } = props;
  const [current, setCurrentCard] = useState<any>(0)


  const slideChange = (val: any) => {
    setCurrentCard(val?.index)
  }

  return (
    <LinearGradient
      colors={['#303032', '#000000']}
      style={Styles.backgroundContainer}>
      <SafeAreaView style={Styles.safeAreaContainer}>
        <StatusBar barStyle={'light-content'} />
        <View style={Styles.mainContainer}>

          <View style={Styles.headerContainer}>
            <View>
              <Text style={Styles.brandSubtitle}>{`Welcome back!`}</Text>
              <Text style={Styles.brandTitle}>{`Muhammad Nafeel`}</Text>
            </View>
            <Image source={Images.logo} style={Styles.logoIcon} />
          </View>

          <View style={Styles.line} />

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={Styles.scrollContainer}>


              {/* Recent Projects */}
              <View style={Styles.listContainer}>
                <GradientText itemColor={['#F44E7A', '#FF736A']} style={Styles.activeHeadTitle}>{`Recent Projects`}</GradientText>
              </View>

              <View style={Styles.container}>
                <SwiperFlatListWithGestureHandler
                  autoplay={false}
                  autoplayDelay={2}
                  autoplayLoop={true}
                  index={current}
                  onChangeIndex={(item: any) => { slideChange(item) }}
                  data={DATA}
                  showPagination={false}
                  // PaginationComponent={CustomPagination}
                  e2eID="container_swiper_renderItem"
                  renderItem={({ item, index }) => (
                    <Card key={index} navigation={navigation} item={item} keyID={index} />
                  )} />
              </View>

              {/* Services We Offer */}
              <View style={Styles.listContainer}>
                <GradientText itemColor={['#F44E7A', '#FF736A']} style={Styles.activeHeadTitle}>{`Services We Offer`}</GradientText>
              </View>

              {/* Software Development */}
              <TouchableOpacity style={Styles.servicesContainer}>
                <View style={Styles.servicesInner}>
                  <Image source={Images.software} style={Styles.serviceIcon} />
                  <Text style={Styles.serviceTitle}>{`Software Development`}</Text>
                </View>
                <Ionic name={"chevron-down"} size={20} style={Styles.nextBtn} />
              </TouchableOpacity>
              <View style={Styles.line} />

              {/* Website Development */}
              <TouchableOpacity style={Styles.servicesContainer}>
                <View style={Styles.servicesInner}>
                  <Image source={Images.web} style={Styles.serviceIcon} />
                  <Text style={Styles.serviceTitle}>{`Website Development`}</Text>
                </View>
                <Ionic name={"chevron-down"} size={20} style={Styles.nextBtn} />
              </TouchableOpacity>
              <View style={Styles.line} />

              {/* Mobile App Development*/}
              <TouchableOpacity style={Styles.servicesContainer}>
                <View style={Styles.servicesInner}>
                  <Image source={Images.mobile} style={Styles.serviceIcon} />
                  <Text style={Styles.serviceTitle}>{`Mobile App Development`}</Text>
                </View>
                <Ionic name={"chevron-down"} size={20} style={Styles.nextBtn} />
              </TouchableOpacity>
              <View style={Styles.line} />

              {/* UI/UX */}
              <TouchableOpacity style={Styles.servicesContainer}>
                <View style={Styles.servicesInner}>
                  <Image source={Images.ux} style={Styles.serviceIcon} />
                  <Text style={Styles.serviceTitle}>{`UI/UX`}</Text>
                </View>
                <Ionic name={"chevron-down"} size={20} style={Styles.nextBtn} />
              </TouchableOpacity>
              <View style={Styles.line} />



              {/* Why Work With HN Innovative? */}
              <View style={Styles.workListContainer}>
                <GradientText itemColor={['#F44E7A', '#FF736A']} style={Styles.activeHeadTitle}>{`Why Work With HN Innovative?`}</GradientText>
              </View>

              {
                WORK_DATA?.map((item, keyID) => (
                  <View key={keyID} style={Styles.workContainer}>
                    <View style={Styles.workInner}>
                      <View style={Styles.servicesInner}>
                        {
                          item?.iconPic == "time-outline" ? (
                            <Ionic name={"time-outline"} size={24} style={Styles.workIcon} />
                          ) : (
                            <Image source={item?.iconPic} style={Styles.iconStyle} />
                          )
                        }
                        <Text style={Styles.workTitle}>{item?.title}</Text>
                      </View>
                      <View style={Styles.listBottomWrap}>
                        <Text style={Styles.percentTitle}>{"100%"}</Text>
                      </View>
                    </View>
                    <View style={Styles.workInnerDes}>
                      <Text style={Styles.desTitle}>{item?.description}</Text>
                    </View>
                  </View>
                ))
              }



            </View>
          </ScrollView>

        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

export default Home;
