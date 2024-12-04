import * as React from 'react';
import {View, Image} from 'react-native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  Avatar,
  Divider,
} from '@ui-kitten/components';

import {Container, Content, Text, HStack, VStack} from 'components';
import Header from './Header';
import Images from 'assets/images';
import Carousel from 'react-native-reanimated-carousel';
import {useSharedValue} from 'react-native-reanimated';
import Pagination from './Pagination';

const ECommerce02 = React.memo(() => {
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const img_width = 343 * (width / 375);
  const img_height = 160 * (height / 812);
  const progressValue = useSharedValue(0);
  return (
    <Container style={styles.container} useSafeArea={false}>
      <Header />
      <Content contentContainerStyle={styles.contentContainer}>
        <Carousel
          width={width}
          height={img_height}
          data={DATA}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.95,
            parallaxScrollingOffset: 50,
          }}
          onProgressChange={(_, absoluteProgress) =>
            (progressValue.value = absoluteProgress)
          }
          renderItem={({item}) => {
            return (
              <Image
                source={item}
                style={{width: img_width, height: img_height, marginLeft: 16}}
                borderRadius={16}
              />
            );
          }}
        />
        <HStack justify="center" mt={8} mb={24}>
          {DATA.map((item, i) => {
            return (
              <Pagination
                key={i}
                index={i}
                backgroundColor={'#5784E8'}
                length={DATA.length}
                animValue={progressValue}
              />
            );
          })}
        </HStack>
        <HStack mh={24}>
          <Text category="h6">Feature Author</Text>
          <Text category="callout" status="primary">
            See all
          </Text>
        </HStack>
        <Content horizontal contentContainerStyle={styles.contentFeature}>
          {DATA_AUTHOR.map((author, i) => {
            return (
              <HStack key={i} mr={24}>
                <View>
                  <Avatar source={author.avatar} />
                  <Layout level="10" style={styles.count}>
                    <Text category="footnote">{i + 1}</Text>
                  </Layout>
                </View>
                <VStack ml={12}>
                  <Text category="body">{author.name}</Text>
                  <Text category="c1" status="placeholder">
                    {author.collection} collection
                  </Text>
                </VStack>
              </HStack>
            );
          })}
        </Content>
        <HStack mh={24}>
          <Text category="h6">Hot Collection</Text>
          <Text category="callout" status="primary">
            See all
          </Text>
        </HStack>
        <Content horizontal contentContainerStyle={styles.contentCollection}>
          {DATA_COLLECTION.map((collection, i) => {
            return (
              <VStack key={i} mr={16} style={styles.collection}>
                <Image
                  source={collection.image}
                  style={{
                    borderRadius: 12,
                    width: 180 * (width / 375),
                    height: 108 * (height / 812),
                  }}
                />
                <VStack mt={10} mh={16}>
                  <HStack mb={10} justify="flex-start">
                    <Avatar source={collection.avatar} size="tiny" />
                    <Text category="h8" marginLeft={8}>
                      {collection.name}
                    </Text>
                  </HStack>
                  <Divider />
                  <HStack mt={10}>
                    <Text category="c1">Volumn</Text>
                    <Text category="c1">{collection.volumn}</Text>
                  </HStack>
                  <HStack mt={10}>
                    <Text category="c1">Floor Price</Text>
                    <Text category="c1">{collection.floor_price}</Text>
                  </HStack>
                </VStack>
              </VStack>
            );
          })}
        </Content>
        <HStack mh={24}>
          <Text category="h6">Trending</Text>
          <Text category="callout" status="primary">
            See all
          </Text>
        </HStack>
        <Content horizontal contentContainerStyle={styles.contentTrending}>
          {DATA_TRENDING.map((item, i) => {
            return (
              <VStack key={i} style={styles.trendingItem} mr={16}>
                <Image source={item.image} />
                <VStack mh={12}>
                  <Text category="h8" marginVertical={8}>
                    {item.title}
                  </Text>
                  <Divider />
                  <HStack mt={8}>
                    <Layout style={styles.tag} level="3">
                      <Text category="c2">{'BSC'}</Text>
                    </Layout>
                    <Text category="c1">{item.price}</Text>
                  </HStack>
                </VStack>
              </VStack>
            );
          })}
        </Content>
      </Content>
    </Container>
  );
});

export default ECommerce02;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 40,
  },
  count: {
    position: 'absolute',
    bottom: -2,
    right: -4,
    width: 23,
    height: 23,
    borderWidth: 1,
    borderColor: 'text-white-color',
    borderRadius: 99,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentFeature: {
    marginTop: 16,
    marginLeft: 16,
    marginBottom: 32,
  },
  collection: {
    borderWidth: 1,
    borderColor: 'background-basic-color-2',
    borderRadius: 16,
    paddingBottom: 12,
  },
  contentCollection: {
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 32,
  },
  trendingItem: {
    borderWidth: 1,
    borderColor: 'background-basic-color-2',
    borderRadius: 16,
    paddingBottom: 12,
  },
  tag: {
    width: 36,
    height: 21,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentTrending: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
});

const DATA = [
  Images.e_commerce.commerce01,
  Images.e_commerce.commerce02,
  Images.e_commerce.commerce03,
];
const DATA_AUTHOR = [
  {avatar: Images.avatar.avatar02, name: 'Leslie Alexander', collection: 20},
  {avatar: Images.avatar.avatar03, name: 'Cody Fisher', collection: 20},
  {avatar: Images.avatar.avatar04, name: 'Kristin Watson', collection: 20},
  {avatar: Images.avatar.avatar05, name: 'Albert Flores', collection: 20},
];
const DATA_COLLECTION = [
  {
    avatar: Images.avatar.avatar02,
    name: 'Leslie Alexander',
    volumn: '$25.4M',
    floor_price: '$1.69M',
    image: Images.e_commerce.commerce02,
  },
  {
    avatar: Images.avatar.avatar03,
    name: 'Cody Fisher',
    volumn: '$25.4M',
    floor_price: '$1.69M',
    image: Images.e_commerce.commerce03,
  },
  {
    avatar: Images.avatar.avatar04,
    name: 'Kristin Watson',
    volumb: '$25.4M',
    floor_price: '$1.69M',
    image: Images.e_commerce.commerce04,
  },
];
const DATA_TRENDING = [
  {image: Images.social.person01, title: 'Genesis Mars #13', price: '12 BUSD'},
  {image: Images.social.person02, title: 'Genesis Mars #13', price: '12 BUSD'},
  {image: Images.social.person03, title: 'Genesis Mars #13', price: '12 BUSD'},
  {image: Images.social.person04, title: 'Genesis Mars #13', price: '12 BUSD'},
];
