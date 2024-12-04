import * as React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  TopNavigation,
  Icon,
} from '@ui-kitten/components';
import {Container, Content, Text, NavigationAction, VStack} from 'components';
import Images from 'assets/images';
import Header from './Header';

const ECommerce04 = React.memo(() => {
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const sizeImage = 108 * (width / 375);
  return (
    <Container style={styles.container}>
      <TopNavigation
        accessoryLeft={<NavigationAction status="black" />}
        title="List Product"
        accessoryRight={<NavigationAction icon="search" status="black" />}
      />
      <Header />
      <Content contentContainerStyle={{paddingBottom: bottom + 40}}>
        <Image
          source={Images.e_commerce.commerce04}
          style={{width: width, height: width / 2.59, marginBottom: 4}}
        />
        {data.map((item, index) => {
          return (
            <TouchableOpacity style={styles.item} key={index}>
              <Layout
                level="2"
                style={[styles.layout, {width: sizeImage, height: sizeImage}]}>
                <TouchableOpacity style={styles.buttonHeart}>
                  <Icon pack="assets" name="heart" style={styles.iconHeart} />
                </TouchableOpacity>
                <Image
                  source={item.image}
                  style={{width: sizeImage, height: sizeImage, borderRadius: 8}}
                />
              </Layout>
              <VStack>
                <Text
                  children={item.title}
                  category="h6"
                  marginBottom={12}
                  marginLeft={16}
                />
                <Text
                  children={item.price}
                  status="primary"
                  category="subhead"
                  marginLeft={16}
                />
                <Text
                  children={`Last Sale: ${item.last_sale}`}
                  status="platinum"
                  category="subhead"
                  marginLeft={16}
                />
              </VStack>
            </TouchableOpacity>
          );
        })}
      </Content>
    </Container>
  );
});

export default ECommerce04;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  tabBar: {
    flexDirection: 'row',
  },
  item: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 20,
  },
  layout: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  burger: {
    width: 64,
    height: 51,
  },
  iconHeart: {
    width: 10,
    height: 10,
    tintColor: 'text-white-color',
  },
  buttonHeart: {
    position: 'absolute',
    backgroundColor: 'background-basic-color-5',
    zIndex: 100,
    width: 24,
    height: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    top: 8,
    left: 8,
  },
});
const data = [
  {
    id: 0,
    title: 'Minimal ART NFT',
    price: '123ETH',
    last_sale: '123ETH',
    image: Images.e_commerce.commerce01,
  },
  {
    id: 1,
    title: 'Minimal ART NFT',
    price: '123ETH',
    last_sale: '123ETH',
    image: Images.e_commerce.commerce02,
  },
  {
    id: 2,
    title: 'Minimal ART NFT',
    price: '123ETH',
    last_sale: '123ETH',
    image: Images.e_commerce.commerce05,
  },
  {
    id: 3,
    title: 'Minimal ART NFT',
    price: '123ETH',
    last_sale: '123ETH',
    image: Images.e_commerce.commerce03,
  },
  {
    id: 4,
    title: 'Minimal ART NFT',
    price: '123ETH',
    last_sale: '123ETH',
    image: Images.social.person02,
  },
];
