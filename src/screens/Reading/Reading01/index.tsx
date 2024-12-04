import * as React from 'react';
import {View, Image, StyleSheet, ImageRequireSource} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  useTheme,
  TopNavigation,
  Avatar,
  Icon,
  ViewPager,
} from '@ui-kitten/components';

import {
  Container,
  Content,
  Text,
  NavigationAction,
  VStack,
  HStack,
} from 'components';
import Images from 'assets/images';
import TabBar from './TabBar';
import BottomTab from './BottomTab';

interface TabProps {
  title: string;
  artist: string;
  image: ImageRequireSource;
}

const Reading01 = React.memo(() => {
  const theme = useTheme();
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const size_img = 221 * (width / 375);
  const [activeTab, setActiveTab] = React.useState(0);

  const Tab = () => {
    return (
      <Layout style={styles.containerTab}>
        {DATA_TAB.map((item, i) => {
          return (
            <HStack
              key={i}
              maxWidth={width - 32}
              padding={16}
              mb={24}
              level="2"
              border={8}>
              <Image
                borderRadius={4}
                source={item.image}
                style={{
                  width: 108 * (width / 375),
                  height: 147 * (height / 812),
                }}
              />
              <VStack>
                <VStack>
                  <Text
                    maxWidth={192 * (width / 375)}
                    category="h7"
                    marginBottom={4}>
                    {item.title}
                  </Text>
                  <Text category="subhead" status="platinum">
                    {item.artist}
                  </Text>
                </VStack>
                <HStack>
                  <Icon pack="assets" name="headphone" />
                  <Text category="subhead">{item.time}</Text>
                </HStack>
              </VStack>
            </HStack>
          );
        })}
      </Layout>
    );
  };

  return (
    <Container style={styles.container}>
      <TopNavigation
        accessoryLeft={<NavigationAction icon="dot_nine" status="primary" />}
        accessoryRight={
          <Avatar source={Images.avatar.avatar10} shape="square" />
        }
      />

      <Text category="h2" marginLeft={24}>
        For you
      </Text>
      <Content contentContainerStyle={styles.content}>
        <VStack itemsCenter mb={28}>
          <Image
            source={Images.social.person02}
            borderRadius={24}
            style={{
              width: size_img,
              height: size_img,
            }}
          />
          <Text style={styles.title} center marginTop={16}>
            Listen and relax your soul
          </Text>
          <Text category="body" status="placeholder" center marginTop={4}>
            12:35
          </Text>
        </VStack>
        <HStack itemsCenter mh={16}>
          <Text category="h6">Following Categories</Text>
          <Icon pack="assets" name="arrow_right" style={styles.iconRight} />
        </HStack>
        <TabBar
          style={styles.tabBar}
          tabs={TABS}
          activeIndex={activeTab}
          onChange={setActiveTab}
        />
        <ViewPager
          selectedIndex={activeTab}
          onSelect={setActiveTab}
          style={styles.viewPager}>
          <Tab />
          <Tab />
          <Tab />
        </ViewPager>
      </Content>
      <BottomTab />
    </Container>
  );
});

export default Reading01;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  title: {
    fontFamily: 'AlbertSans-Regular',
    fontWeight: '400',
    fontSize: 20,
  },
  content: {
    marginTop: 24,
  },
  iconRight: {
    width: 16,
    height: 16,
    tintColor: 'text-primary-color',
  },
  tabBar: {
    marginHorizontal: 16,
  },
  containerTab: {
    flex: 1,
  },
  viewPager: {
    flex: 1,
    paddingBottom: 40,
  },
});
const TABS = [
  {icon: 'coins', title: 'Finance'},
  {icon: 'money', title: 'Future Life'},
  {icon: 'coffe', title: 'Travel'},
  {icon: 'sun', title: 'History'},
];
const DATA_TAB = [
  {
    title: 'The Girl with the Dragon Tattoo House',
    artist: 'Jung Kook',
    image: Images.e_commerce.commerce01,
    time: '48 mins',
  },
  {
    title: 'The Girl with the Dragon Tattoo House',
    artist: 'Jung Kook',
    image: Images.e_commerce.commerce01,
    time: '48 mins',
  },
  {
    title: 'The Girl with the Dragon Tattoo House',
    artist: 'Jung Kook',
    image: Images.e_commerce.commerce01,
    time: '48 mins',
  },
  {
    title: 'The Girl with the Dragon Tattoo House',
    artist: 'Jung Kook',
    image: Images.e_commerce.commerce01,
    time: '48 mins',
  },
];
