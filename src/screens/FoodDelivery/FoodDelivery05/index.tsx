import * as React from 'react';
import {Image} from 'react-native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  TopNavigation,
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
  Readmore,
} from 'components';
import Images from 'assets/images';
import TabBar from './TabBar';
import Popular from '../FoodDelivery01/Popular';

const FoodDelivery05 = React.memo(() => {
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const height_ad = 295 * (height / 812);
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <Container style={styles.container} useSafeArea={false}>
      <TopNavigation
        appearance="control"
        style={[styles.topNavigation, {marginTop: top + 4}]}
        accessoryLeft={<NavigationAction status="black" />}
        accessoryRight={<NavigationAction status="black" icon="heart" />}
      />
      <Content contentContainerStyle={styles.content}>
        <Image
          source={Images.delivery.chicken}
          style={{
            width: width,
            height: height_ad,
            position: 'absolute',
            top: 0,
          }}
        />
        <VStack
          level="10"
          mt={240 * (height / 812)}
          mh={24}
          itemsCenter
          justify="center"
          style={{height: 103 * (height / 812), width: width - 48}}
          border={24}>
          <Text category="h3">Lotteia Chicken</Text>
          <HStack itemsCenter>
            <Icon pack="assets" name="global" style={styles.global} />
            <Text category="subhead" marginLeft={4}>
              212 - Kim Ma Thuong - Ha Noi
            </Text>
          </HStack>
        </VStack>
        <HStack mh={52} mt={16} mb={44}>
          <Text category="subhead">🛵️ 10kms</Text>
          <Text category="subhead">⭐️ 4/5</Text>
          <Text category="subhead">⏰️ 15-20 minitues</Text>
        </HStack>
        <Layout style={styles.about}>
          <Layout style={styles.textAbout}>
            <Text category="h6" status="white" center marginHorizontal={12}>
              About
            </Text>
          </Layout>
          <Readmore children={ABOUT} />
        </Layout>
        <TabBar
          style={styles.tabBar}
          tabs={TABS}
          activeIndex={activeTab}
          onChange={setActiveTab}
        />
        <ViewPager onSelect={setActiveTab} selectedIndex={activeTab}>
          <Popular data={DATA} />
          <Popular data={DATA01} />
          <Popular data={DATA01.reverse()} />
          <Popular data={DATA.reverse()} />
        </ViewPager>
      </Content>
    </Container>
  );
});

export default FoodDelivery05;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
  },
  topNavigation: {
    position: 'absolute',
    zIndex: 100,
    left: 0,
    right: 0,
  },
  global: {
    width: 16,
    height: 16,
    tintColor: 'text-primary-color',
  },
  about: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'background-basic-color-7',
    padding: 16,
    paddingTop: 19,
    marginHorizontal: 24,
    marginBottom: 16,
  },
  textAbout: {
    alignSelf: 'center',
    marginTop: -44,
    padding: 10,
    backgroundColor: 'color-basic-100',
    borderRadius: 99,
  },
  tabBar: {
    marginHorizontal: 24,
  },
});

const ABOUT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pretium, lacus in convallis porttitor, tellus justo finibus diam, in vehicula est nunc eu orci. Fusce tincidunt ligula eget tellus dictum, ut egestas magna sagittis. Aliquam erat volutpat. Sed sit amet fermentum ipsum, vel ullamcorper est. Suspendisse suscipit scelerisque blandit. Aliquam sed egestas ipsum. Nullam tincidunt vulputate nisi sed condimentum. In tincidunt diam tellus, sit amet congue tellus volutpat ac. Proin quis urna mattis, viverra dolor ac, dictum sem.';
const TABS = ['Finance', 'Future Life', 'Travel', 'History'];
const DATA = [
  {
    id: '1',
    image: Images.delivery.ice_cream,
    name: 'Ice Cream Jollibee',
    price: '$2.34',
    rate: '4/5',
    delivery: '10kms',
  },
  {
    id: '2',
    image: Images.delivery.ramen,
    name: 'Ramen Jollibee',
    price: '$2.34',
    rate: '4/5',
    delivery: '10kms',
  },
];
const DATA01 = [
  {
    id: '1',
    image: Images.delivery.milkshake,
    name: 'Ice Cream Jollibee',
    price: '$2.34',
    rate: '4/5',
    delivery: '10kms',
  },
  {
    id: '2',
    image: Images.delivery.coffee,
    name: 'Ramen Jollibee',
    price: '$2.34',
    rate: '4/5',
    delivery: '10kms',
  },
];
