import * as React from 'react';
import {View, ImageBackground} from 'react-native';
import {useLayout} from 'hooks';
import {
  StyleService,
  useStyleSheet,
  useTheme,
  TopNavigation,
  Select,
  SelectItem,
  Icon,
  Button,
  IndexPath,
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

const ECommerce03 = React.memo(() => {
  const theme = useTheme();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const [selectIndex, setSelectIndex] = React.useState<IndexPath | IndexPath[]>(
    new IndexPath(0),
  );
  const dataSelect = ['Sort by Price', 'Option 2', 'Option 3'];
  //@ts-ignore
  const displayValue = dataSelect[selectIndex.row];

  const size_img = (width - 48) / 2;
  return (
    <Container style={styles.container}>
      <TopNavigation
        accessoryLeft={<NavigationAction status="black" />}
        title="Product Grid"
        accessoryRight={
          <HStack>
            <NavigationAction icon="heart" status="black" marginRight={-4} />
            <NavigationAction icon="shopping_cart" status="black" />
          </HStack>
        }
      />
      <View style={styles.viewSelect}>
        <Select
          selectedIndex={selectIndex}
          size="large"
          onSelect={index => setSelectIndex(index)}
          status="basic"
          style={styles.select}
          value={displayValue}>
          <SelectItem title="Sort by Price" />
          <SelectItem title="Option 1" />
          <SelectItem title="Option 2" />
        </Select>
        <Button
          accessoryRight={<Icon pack="assets" name="filter" />}
          style={styles.filter}
        />
      </View>
      <Content contentContainerStyle={styles.content}>
        <HStack wrap mh={16}>
          {DATA.map((item, i) => {
            return (
              <VStack key={i} maxWidth={size_img} mb={16}>
                <ImageBackground
                  source={item.image}
                  style={{width: size_img, height: size_img}}
                />
                <ImageBackground
                  source={Images.shape}
                  style={styles.shape}
                  imageStyle={{tintColor: theme['text-primary-color']}}>
                  <Icon pack="assets" name="heart" style={styles.heart} />
                </ImageBackground>
                <Text
                  category="callout"
                  maxWidth={size_img}
                  marginTop={12}
                  numberOfLines={1}>
                  {item.title}
                </Text>
                <Text category="subhead" marginBottom={4} status="platinum">
                  {item.price}
                </Text>
              </VStack>
            );
          })}
        </HStack>
      </Content>
    </Container>
  );
});

export default ECommerce03;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  viewSelect: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 4,
  },
  filter: {
    marginBottom: 8,
    width: 48,
    borderRadius: 99,
  },
  select: {
    flex: 1,
    marginRight: 16,
    borderRadius: 16,
  },
  shape: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 8,
    left: 8,
    tintColor: 'text-primary-color',
  },
  heart: {
    width: 12,
    height: 12,
    tintColor: 'text-white-color',
  },
  content: {
    paddingBottom: 40,
  },
});
const DATA = [
  {
    title: `"MOAR" #13`,
    price: '134ETH',
    image: Images.e_commerce.product01,
  },
  {
    title: `Bored Ape Yacht Club`,
    price: '134ETH',
    image: Images.e_commerce.product02,
  },
  {
    title: `BEANZ Official`,
    price: '134ETH',
    image: Images.e_commerce.product03,
  },
  {
    title: `HAKI NFT`,
    price: '134ETH',
    image: Images.e_commerce.product04,
  },
  {
    title: `HAKI NFT`,
    price: '134ETH',
    image: Images.e_commerce.product05,
  },
  {
    title: `HAKI NFT`,
    price: '134ETH',
    image: Images.e_commerce.product06,
  },
];
