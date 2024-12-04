import * as React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {useLayout} from 'hooks';
import {
  StyleService,
  useStyleSheet,
  TopNavigation,
  Button,
  Radio,
  Icon,
  Layout,
} from '@ui-kitten/components';

import {
  Container,
  Content,
  Text,
  NavigationAction,
  VStack,
  HStack,
  IDivider,
} from 'components';
import Images from 'assets/images';
import Carousel from 'react-native-reanimated-carousel';

const FoodDelivery08 = React.memo(() => {
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const [activeLocation, setActiveLocation] = React.useState(0);
  const [activePayment, setActivePayment] = React.useState(0);
  return (
    <Container style={styles.container} level="3" useSafeArea={false}>
      <VStack style={[styles.topNavigation, {paddingTop: top + 4}]} level="1">
        <TopNavigation
          accessoryLeft={<NavigationAction status="primary" />}
          accessoryRight={<NavigationAction icon="search" status="primary" />}
        />
        <Text category="h3" marginLeft={20} marginBottom={4}>
          My Order
        </Text>
      </VStack>
      <Content contentContainerStyle={styles.content}>
        <HStack itemsCenter mb={32} mh={24}>
          <Text category="h6">🛵 Shipping to</Text>
          <Button children={'Add location'} size="medium" />
        </HStack>
        <Carousel
          width={width}
          height={120 * (height / 812)}
          data={DATA_LOCATION}
          mode="parallax"
          loop={false}
          modeConfig={{
            parallaxScrollingScale: 1,
            parallaxScrollingOffset: 32,
          }}
          onSnapToItem={e => setActiveLocation(e)}
          renderItem={({item, index}) => {
            const isActive = index === activeLocation;
            return (
              <HStack
                level={isActive ? '12' : '1'}
                key={index}
                ml={20}
                style={[
                  {width: width - 52},
                  styles.location,
                  isActive && styles.locationActive,
                ]}>
                <Radio checked={isActive} status="warning" />
                <VStack>
                  <HStack>
                    <Text
                      category="h6"
                      status={activeLocation ? 'basic' : 'white'}>
                      {item.name}
                    </Text>
                    <TouchableOpacity>
                      <Icon pack="assets" name="pencil" />
                    </TouchableOpacity>
                  </HStack>
                  <Text
                    status={activeLocation ? 'basic' : 'white'}
                    category="subhead">
                    {item.phoneNumber}
                  </Text>
                  <Text
                    status={activeLocation ? 'basic' : 'white'}
                    category="subhead">
                    {item.address}
                  </Text>
                </VStack>
              </HStack>
            );
          }}
        />
        <HStack itemsCenter mb={24} mh={24}>
          <Text category="h6">💰 Payment</Text>
          <Button children={'Add payment'} size="medium" />
        </HStack>
        <VStack mh={24} level="1" padding={16} border={16} pb={0}>
          {DATA.map((item, i) => {
            const isActive = i === activePayment;
            return (
              <VStack key={i} mb={16}>
                <HStack
                  itemsCenter
                  onPress={() => {
                    setActivePayment(i);
                  }}>
                  <HStack itemsCenter>
                    <Image source={item.image} />
                    <Text status="platinum" category="h6">
                      {item.name}
                    </Text>
                  </HStack>
                  <Radio
                    status="warning"
                    checked={isActive}
                    onChange={() => {
                      setActivePayment(i);
                    }}
                  />
                </HStack>
                {i < DATA.length - 1 && <IDivider marginTop={16} />}
              </VStack>
            );
          })}
        </VStack>
      </Content>
      <HStack level="1" padding={24} style={styles.price}>
        <Text category="h6">Total:</Text>
        <Text category="h6" status="primary">
          $12.13
        </Text>
      </HStack>
      <Layout style={[styles.bottom, {paddingBottom: bottom + 8}]}>
        <Button children={'Check Out'} />
      </Layout>
    </Container>
  );
});

export default FoodDelivery08;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  topNavigation: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  content: {
    paddingTop: 24,
  },
  locationActive: {
    borderWidth: 1,
    borderColor: 'background-basic-color-3',
  },
  location: {
    borderWidth: 1,
    borderColor: 'transparent',
    padding: 16,
    borderRadius: 16,
  },
  bottom: {
    paddingHorizontal: 24,
    shadowColor: '#00000050',
    shadowOffset: {
      width: 0.5,
      height: 0.5,
    },
    shadowOpacity: 0.6,
    shadowRadius: 2.11,
    elevation: 1,
    paddingTop: 12,
  },
  price: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
});

const DATA = [
  {name: 'Credit Card', image: Images.delivery.credit_card},
  {name: 'Paypal', image: Images.delivery.paypal},
  {name: 'Apple', image: Images.delivery.apple},
];
const DATA_LOCATION = [
  {
    address: '1901 Thornridge Cir. Shiloh, Hawaii 8103',
    phoneNumber: '(316) 555-0116',
    name: 'Home',
  },
  {
    address: '1901 Thornridge Cir. Shiloh, Hawaii 8103',
    phoneNumber: '(316) 555-0116',
    name: 'Company',
  },
];
