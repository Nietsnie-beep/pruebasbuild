import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  StyleService,
  useStyleSheet,
  useTheme,
  TopNavigation,
  Input,
  Icon,
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
import OrderItem from './OrderItem';

const FoodDelivery06 = React.memo(() => {
  const theme = useTheme();
  const {goBack} = useNavigation();
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
      <Content level="2" contentContainerStyle={styles.content}>
        {DATA.map((food, index) => {
          return <OrderItem key={index} item={food} index={index} />;
        })}
        <Input
          placeholder="Promo Code"
          accessoryLeft={() => <Icon pack="assets" name="gift" />}
          status="control"
          size="control"
          style={styles.input}
          maxLength={12}
          accessoryRight={() => {
            return <Button children={'Apply'} style={styles.buttonApply} />;
          }}
        />
      </Content>
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

export default FoodDelivery06;

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
  input: {
    marginHorizontal: 24,
  },
  buttonApply: {
    position: 'absolute',
    right: 0,
    zIndex: 100,
  },
  bottom: {
    paddingTop: 12,
    paddingHorizontal: 24,
  },
  navigation: {
    borderRadius: 14,
    width: 48,
    height: 48,
  },
});
const DATA = [
  {id: 0, name: 'Hot Banana', price: 5.07, image: Images.delivery.banana},
  {id: 1, name: 'Blue Orange', price: 5.07, image: Images.delivery.orange},
  {id: 2, name: 'Pink Donus', price: 5.07, image: Images.delivery.donut},
  {id: 2, name: 'Cappuccino', price: 5.07, image: Images.delivery.drink},
];
