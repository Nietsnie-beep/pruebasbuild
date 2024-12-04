import * as React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {
  StyleService,
  useStyleSheet,
  TopNavigation,
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
import ContentDetails from './ContentDetails';

const FoodDelivery03 = React.memo(() => {
  const styles = useStyleSheet(themedStyles);

  const [activeTab, setActiveTab] = React.useState(0);
  const [orderNum, setOrderNum] = React.useState(2);
  const [disableMinus, setDisableMinus] = React.useState(false);
  React.useCallback(() => {
    orderNum <= 1 ? setDisableMinus(true) : setDisableMinus(false);
  }, [orderNum, disableMinus]);
  return (
    <Container style={styles.container} level="1">
      <TopNavigation
        accessoryLeft={<NavigationAction status="primary" />}
        accessoryRight={<NavigationAction status="primary" icon="heart" />}
      />
      <Content level="2">
        <HStack mh={24}>
          <Text category="h1">Snackla{'\n'}Cholis</Text>
          <VStack>
            <Text category="h3" status="primary">
              $12.13
            </Text>
            <Text category="h6" line_through>
              $22.13
            </Text>
          </VStack>
        </HStack>
        <Text category="body" marginHorizontal={24} marginTop={8}>
          Establish your own food awards and share your favourites with you
        </Text>
        <VStack level="12" pv={16} ph={24} style={styles.information}>
          <Text category="h6" status="warning">
            Information
          </Text>
        </VStack>
        <VStack ml={20} mt={32}>
          <Text category="h6">⏰️ 15-20 minitues</Text>
          <Text category="h6" marginVertical={12}>
            🔥 300 cals
          </Text>
          <Text category="h6">⭐️ 4/5</Text>
        </VStack>
        <ContentDetails activeTab={activeTab} onChange={setActiveTab} />
      </Content>
      <HStack mh={24} pt={8}>
        <View style={styles.calculator}>
          <TouchableOpacity onPress={() => setOrderNum(orderNum + 1)}>
            <Icon pack="assets" name="plus" style={styles.icon} />
          </TouchableOpacity>
          <Text category="h6" marginHorizontal={16}>
            {orderNum}
          </Text>
          <TouchableOpacity
            onPress={() => setOrderNum(orderNum - 1)}
            disabled={orderNum <= 1}>
            <Icon pack="assets" name="minus" style={styles.icon} />
          </TouchableOpacity>
        </View>
        <Button children="Add to cart" style={styles.addToCart} />
      </HStack>
    </Container>
  );
});

export default FoodDelivery03;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  information: {
    alignSelf: 'flex-start',
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    marginTop: 24,
  },
  calculator: {
    borderRadius: 99,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'text-primary-color',
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: 'text-placeholder-color',
  },
  addToCart: {
    flex: 1,
    marginLeft: 24,
  },
});
