import * as React from 'react';
import {Image} from 'react-native';
import {useLayout} from 'hooks';
import {
  StyleService,
  useStyleSheet,
  useTheme,
  TopNavigation,
  Avatar,
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
import TitleHeader from './TitleHeaer';
import _ from 'lodash';
import Popular from './Popular';

const FoodDelivery01 = React.memo(() => {
  const theme = useTheme();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  return (
    <Container style={styles.container} level="2" useSafeArea={false}>
      <VStack level="1" style={[{paddingTop: top + 4}, styles.header]}>
        <TopNavigation
          style={styles.topNavigation}
          accessoryLeft={
            <Avatar source={Images.avatar.avatar10} size="small" />
          }
          accessoryRight={
            <NavigationAction icon="shopping_bag" status="primary" />
          }
        />
        <Text category="h3" marginLeft={16} marginBottom={8}>
          Hello Friends
        </Text>
      </VStack>
      <Content contentContainerStyle={styles.content}>
        <Input
          placeholder="Enter something..."
          status="control"
          style={styles.input}
          accessoryLeft={<Icon pack="assets" name="search" />}
        />
        <TitleHeader title="Popular Food" />
        <Popular data={DATA} />
        <TitleHeader title="Restaurent" />
        {/* @ts-ignore */}
        <Image source={Images.delivery.food_ad} style={styles.ad} />
        <HStack justify="flex-start" mh={24} mv={24}>
          {TAG.map((item, i) => {
            return (
              <VStack key={i} ph={12} pv={8} border={40} level="3" mr={16}>
                <Text category="c1" status="platinum">
                  {item}
                </Text>
              </VStack>
            );
          })}
        </HStack>
        <VStack mh={24}>
          <Text category="h4">Pizza Hut - Kim Ma Thuong</Text>
          <HStack justify="flex-start" itemsCenter mt={8}>
            <Icon pack="assets" name="global" style={styles.global} />
            <Text category="subhead" marginLeft={4}>
              212 - Kim Ma Thuong - Ba Dinh - Ha Noi
            </Text>
          </HStack>
          <HStack justify="flex-start" mt={16}>
            <Text category="subhead">🛵️ 10kms</Text>
            <Text category="subhead" marginLeft={16}>
              ⭐️ 4/5
            </Text>
          </HStack>
        </VStack>
      </Content>
      <HStack level="5" mh={40} style={{bottom: bottom + 8, ...styles.botton}}>
        <NavigationAction icon="house" />
        <Button
          accessoryRight={() => (
            <Icon
              pack="assets"
              name="plus"
              style={{tintColor: theme['text-basic-color']}}
            />
          )}
          style={styles.buttonPlus}
        />
        <NavigationAction icon="heart" />
      </HStack>
    </Container>
  );
});

export default FoodDelivery01;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  header: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  topNavigation: {
    marginLeft: 8,
  },
  content: {
    paddingVertical: 24,
    paddingBottom: 140,
  },
  input: {
    marginHorizontal: 24,
  },
  ad: {
    alignSelf: 'center',
    marginTop: 8,
  },
  global: {
    tintColor: 'text-primary-color',
    width: 16,
    height: 16,
  },
  botton: {
    position: 'absolute',
    left: 20,
    right: 20,
    paddingVertical: 12,
    paddingHorizontal: 12,
    alignItems: 'center',
    borderRadius: 24,
  },
  buttonPlus: {
    width: 48,
    height: 48,
    backgroundColor: 'background-basic-color-10',
    borderRadius: 99,
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
const TAG = ['pizza', 'spaghetti', 'bugger'];
