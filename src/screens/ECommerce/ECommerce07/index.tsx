import * as React from 'react';
import {View, Image, TouchableOpacity, FlatList} from 'react-native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  TopNavigation,
  Icon,
  Button,
} from '@ui-kitten/components';

import {Container, Text, NavigationAction} from 'components';
import Images from 'assets/images';
import _, {isEmpty} from 'lodash';
import keyExtractor from 'utils/keyExtractor';

const ECommerce07 = React.memo(() => {
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);
  const [data, setData] = React.useState(DATA);

  const handleRemove = React.useCallback(
    //@ts-ignore
    item => {
      const arr = _.filter(data, i => {
        return i !== item;
      });
      setData(arr);
    },
    [data],
  );

  const renderItem = React.useCallback(
    //@ts-ignore
    ({item, index}) => {
      const onPress = () => {
        let idx = _.find(data, i => i.id === item.id);
        if (!!idx) {
          handleRemove(item);
        }
      };
      return (
        <View style={styles.item}>
          <Image
            source={item.image}
            /* @ts-ignore */
            style={{
              width: 96 * (width / 375),
              height: 96 * (width / 375),
              marginRight: 16,
            }}
          />
          <View style={styles.viewText}>
            <View style={styles.flexRow}>
              <Text children={item.title} category="callout" />
              <TouchableOpacity onPress={onPress}>
                <Icon pack="assets" name="xcircle" style={styles.cancel} />
              </TouchableOpacity>
            </View>
            <Text category="callout" status="primary" children={item.price} />
          </View>
        </View>
      );
    },
    [data],
  );
  const renderHeader = () => (
    <Layout level="9" style={styles.card}>
      <Text category="h4" center>
        You have{' '}
        <Text
          children={` ${data.length} `}
          status="primary"
          category="h4"
          center
        />
        product on cart is{' '}
        <Text center children={`$24135.99`} status="primary" category="h4" />
      </Text>
    </Layout>
  );
  return (
    <Container style={styles.container}>
      <TopNavigation
        title={'Cart'}
        accessoryLeft={<NavigationAction status="primary" />}
        accessoryRight={
          <NavigationAction icon="circles_four" status="primary" />
        }
      />
      {!isEmpty(data) ? (
        <FlatList
          data={data}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          ListHeaderComponent={renderHeader}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <FlatList
          data={[]}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          ListHeaderComponent={renderHeader}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
        />
      )}
      <Layout style={styles.totalView} level="2">
        <Text children="total:" uppercase category="callout" />
        <Text children="$15.88" uppercase category="callout" />
      </Layout>
      <Layout style={[styles.bottom, {marginBottom: bottom + 8}]}>
        <Button
          children="Shopping"
          style={styles.shopping}
          status="transparent-primary"
        />
        <Button children="Checkout" style={styles.checkout} />
      </Layout>
    </Container>
  );
});

export default ECommerce07;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  icon: {
    width: 64,
    height: 51,
    marginVertical: 22,
    marginHorizontal: 16,
  },
  item: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewText: {
    flex: 1,
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  cancel: {
    width: 24,
    height: 24,
    tintColor: 'text-secondary-color',
    marginTop: 4,
    marginRight: 8,
  },
  totalView: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'background-basic-color-2',
    borderRadius: 12,
    padding: 16,
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 8,
  },
  bottom: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 16,
  },
  shopping: {
    flex: 1,
    marginRight: 16,
  },
  checkout: {
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 24,
    marginHorizontal: 16,
    borderRadius: 8,
    marginBottom: 24,
  },
});

const DATA = [
  {
    id: 0,
    title: 'Los Muertos World',
    price: '123ETH',
    image: Images.e_commerce.product01,
  },
  {
    id: 1,
    title: 'Moonbirds',
    price: '123ETH',
    image: Images.e_commerce.product02,
  },
  {
    id: 2,
    title: 'Cool Pets NFT',
    price: '123ETH',
    image: Images.e_commerce.product03,
  },
];
