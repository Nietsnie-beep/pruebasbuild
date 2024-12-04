import * as React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  useTheme,
  TopNavigation,
} from '@ui-kitten/components';

import {Container, Content, Text, NavigationAction, VStack} from 'components';
import TitleHeader from '../FoodDelivery01/TitleHeaer';
import Popular from '../FoodDelivery01/Popular';
import Images from 'assets/images';

const FoodDelivery02 = React.memo(() => {
  const theme = useTheme();
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  return (
    <Container style={styles.container} useSafeArea={false} level="2">
      <VStack level="1" style={[{paddingTop: top + 4}, styles.header]}>
        <TopNavigation
          style={styles.topNavigation}
          accessoryLeft={<NavigationAction status="primary" />}
          accessoryRight={<NavigationAction icon="search" status="primary" />}
        />
        <Text category="h3" marginLeft={16} marginBottom={8}>
          Hello Friends
        </Text>
      </VStack>
      <Content contentContainerStyle={styles.content}>
        <TitleHeader title="🍖 Food" />
        <Popular data={DATA} />
        <TitleHeader title="☕️ Drink" />
        <Popular data={DATA01} />
      </Content>
    </Container>
  );
});

export default FoodDelivery02;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  header: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  topNavigation: {},
  content: {
    paddingBottom: 60,
  },
});
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
