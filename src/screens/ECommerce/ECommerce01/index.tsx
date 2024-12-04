import * as React from 'react';
import {View, Image, ImageBackground, TouchableOpacity} from 'react-native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  Input,
  Icon,
  Avatar,
} from '@ui-kitten/components';

import {
  Container,
  Content,
  Text,
  NavigationAction,
  HStack,
  VStack,
} from 'components';
import Images from 'assets/images';
import Carousel from 'react-native-reanimated-carousel';
import Pagination from './Pagination';
import {useSharedValue} from 'react-native-reanimated';

const ECommerce01 = React.memo(() => {
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const wItem = (width - 64) / 2;
  const progress = useSharedValue(0);
  return (
    <Container style={styles.container}>
      <HStack itemsCenter>
        <NavigationAction icon="list" status="primary" />
        <Image
          source={Images.logo}
          //@ts-ignore
          style={styles.logo}
        />
        <NavigationAction icon="bag_simple" status="primary" />
      </HStack>
      <Input
        style={styles.searchBar}
        size="small"
        placeholder="Search items"
        accessoryLeft={<Icon pack="assets" name="search" />}
        accessoryRight={<Icon pack="assets" name="qr_code" />}
      />
      <Content contentContainerStyle={styles.content}>
        <VStack itemsCenter mt={16}>
          <Carousel
            data={DATA}
            width={width - 32}
            height={480 * (height / 812)}
            onProgressChange={(_, absoluteProgress) =>
              (progress.value = absoluteProgress)
            }
            renderItem={({item}) => {
              return (
                <ImageBackground
                  source={item}
                  style={{
                    width: width - 32,
                    height: 480 * (height / 812),
                    justifyContent: 'flex-end',
                  }}></ImageBackground>
              );
            }}
          />
          <VStack style={styles.titleNft}>
            <Text
              category="h2"
              status="white"
              marginLeft={24}
              marginBottom={32}>
              {'Tramkam NFT Collection'}
            </Text>
            <HStack justify="center">
              {DATA.map((item, i) => {
                return (
                  <Pagination
                    index={i}
                    key={i}
                    backgroundColor={'#FFF'}
                    length={DATA.length}
                    animValue={progress}
                  />
                );
              })}
            </HStack>
          </VStack>
        </VStack>
        <Text category="h4" marginLeft={16} marginVertical={24}>
          Feature Author
        </Text>
        <Content horizontal contentContainerStyle={styles.contentFeature}>
          {DATA_FEATURE.map((item, i) => {
            return (
              <VStack key={i} maxWidth={80} itemsCenter mr={20}>
                <Avatar
                  source={item.avatar}
                  //@ts-ignore
                  style={styles.avatar}
                />
                <Text category="body" center>
                  {item.name}
                </Text>
              </VStack>
            );
          })}
        </Content>
        <Text category="h4" marginLeft={16} marginVertical={24}>
          New Arrival
        </Text>
        <HStack wrap mh={16}>
          {DATA_NFT.map((item, i) => {
            return (
              <View style={styles.item} key={i}>
                <ImageBackground
                  source={item.image}
                  style={{width: wItem, height: wItem, alignItems: 'flex-end'}}>
                  <NavigationAction
                    icon="heart"
                    size="small"
                    style={styles.likeButton}
                  />
                </ImageBackground>
                <Text
                  children={item.title}
                  marginTop={12}
                  marginBottom={4}
                  category="callout"
                />
                <Text
                  children={`${item.price}`}
                  category="subhead"
                  status="snow"
                />
              </View>
            );
          })}
        </HStack>
        <TouchableOpacity style={[styles.button]}>
          <Text category="callout">See all items</Text>
        </TouchableOpacity>
      </Content>
      <Layout style={[styles.bottomBar, {paddingBottom: bottom + 8}]} level="2">
        <NavigationAction status="primary" icon="house" />
        <NavigationAction status="primary" icon="heart" />
        {/* @ts-ignore */}
        <Image source={Images.logo} style={styles.logo} />
        <NavigationAction status="primary" icon="bell_ring" />
        <NavigationAction status="primary" icon="user" />
      </Layout>
    </Container>
  );
});

export default ECommerce01;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  content: {
    paddingBottom: 40,
  },
  logo: {
    width: 24,
    height: 24,
  },
  searchBar: {
    borderRadius: 99,
    marginHorizontal: 16,
  },
  titleNft: {
    position: 'absolute',
    bottom: 24,
    left: 0,
    right: 0,
  },
  avatar: {
    width: 72,
    height: 72,
  },
  contentFeature: {
    paddingLeft: 16,
  },
  item: {
    marginRight: 15,
    marginBottom: 24,
  },
  likeButton: {
    position: 'absolute',
    top: 6,
    right: 0,
    zIndex: 1,
  },
  button: {
    borderRadius: 99,
    borderWidth: 1,
    borderColor: 'background-basic-color-3',
    padding: 12,
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 12,
  },
});

const DATA = [
  Images.e_commerce.nft,
  Images.e_commerce.nft,
  Images.e_commerce.nft,
  Images.e_commerce.nft,
];
const DATA_FEATURE = [
  {name: 'Leslie Alexander', avatar: Images.avatar.avatar10},
  {name: 'Theresa Webb', avatar: Images.avatar.avatar01},
  {name: 'Kristin Watsons', avatar: Images.avatar.avatar02},
  {name: 'Albert Flores', avatar: Images.avatar.avatar03},
  {name: 'Leslie Alexander', avatar: Images.avatar.avatar07},
  {name: 'Leslie Alexander', avatar: Images.avatar.avatar05},
  {name: 'Leslie Alexander', avatar: Images.avatar.avatar06},
];
const DATA_NFT = [
  {
    id: 0,
    image: Images.social.person01,
    title: 'Pizza Illustration',
    price: '123ETH',
  },
  {
    id: 1,
    image: Images.social.person02,
    title: 'Pizza Illustration',
    price: '123ETH',
  },
  {
    id: 2,
    image: Images.social.person03,
    title: 'Pizza Illustration',
    price: '123ETH',
  },
  {
    id: 3,
    image: Images.social.person04,
    title: 'Pizza Illustration',
    price: '123ETH',
  },
];
