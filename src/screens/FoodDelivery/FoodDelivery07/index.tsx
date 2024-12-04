import * as React from 'react';
import {View} from 'react-native';
import {useLayout} from 'hooks';
import {
  StyleService,
  useStyleSheet,
  useTheme,
  TopNavigation,
  Button,
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
import OrderItem from '../FoodDelivery06/OrderItem';

const FoodDelivery07 = React.memo(() => {
  const theme = useTheme();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  return (
    <Container style={styles.container} useSafeArea={false} level="2">
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
        {DATA.map((food, index) => {
          return <OrderItem key={index} item={food} index={index} />;
        })}
      </Content>
      <HStack level="1" style={styles.information}>
        <View>
          <Text category="h7" status={'basic'} marginBottom={12}>
            Item total
          </Text>
          <Text category="h7" status={'basic'} marginBottom={12}>
            Delivery Charge
          </Text>
          <Text category="h7" status={'basic'} marginBottom={16}>
            Tax
          </Text>
          <Text category="h6">Total</Text>
        </View>
        <VStack>
          <Text category="h7" status={'basic'} marginBottom={12}>
            $70.19
          </Text>
          <Text category="h7" status={'basic'} marginBottom={12}>
            $10.49
          </Text>
          <Text category="h7" status={'basic'} marginBottom={16}>
            $2.49
          </Text>
          <Text category="h6" status={'primary'}>
            $84.27
          </Text>
        </VStack>
      </HStack>
      <HStack
        style={[styles.bottom, {paddingBottom: bottom + 4}]}
        level="1"
        itemsCenter>
        <NavigationAction
          icon="shopping_cart"
          backgroundColor={`${theme['background-basic-color-5']}30`}
          status="primary"
          style={styles.navigation}
        />
        <Button children={'Buy Now'} />
        <NavigationAction
          icon="question"
          backgroundColor={`${theme['background-basic-color-5']}30`}
          status="primary"
          style={styles.navigation}
        />
      </HStack>
    </Container>
  );
});

export default FoodDelivery07;

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
    paddingBottom: 60,
  },
  bottom: {
    paddingTop: 12,
    paddingHorizontal: 24,
    shadowColor: '#00000050',
    shadowOffset: {
      width: 0.5,
      height: 0.5,
    },
    shadowOpacity: 0.6,
    shadowRadius: 2.11,
    elevation: 1,
  },
  navigation: {
    borderRadius: 14,
    width: 48,
    height: 48,
  },
  information: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
  },
});
const DATA = [
  {id: 0, name: 'Hot Banana', price: 5.07, image: Images.delivery.banana},
  {id: 1, name: 'Blue Orange', price: 5.07, image: Images.delivery.orange},
  {id: 2, name: 'Pink Donus', price: 5.07, image: Images.delivery.donut},
];
