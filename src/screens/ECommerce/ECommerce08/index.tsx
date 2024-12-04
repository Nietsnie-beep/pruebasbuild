import * as React from 'react';
import {Image, FlatList} from 'react-native';
import {
  StyleService,
  useStyleSheet,
  TopNavigation,
  Divider,
  Radio,
  RadioGroup,
} from '@ui-kitten/components';

import {
  Container,
  Content,
  Text,
  NavigationAction,
  HStack,
  VStack,
} from 'components';
import keyExtractor from 'utils/keyExtractor';
import Images from 'assets/images';

const ECommerce08 = React.memo(() => {
  const styles = useStyleSheet(themedStyles);

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const Card = () => (
    <FlatList
      style={styles.contentCard}
      data={DATA_CARD}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={() => <Divider style={styles.divider} />}
      renderItem={({item}) => {
        return (
          <HStack pb={16}>
            <Text category="body">{item.title}</Text>
            <Text category="h7">{item.value}</Text>
          </HStack>
        );
      }}
      ListFooterComponent={
        <VStack>
          <Divider style={styles.divider} />
          <HStack>
            <Text>{'TOTAL'}</Text>
            <Text category="h7" status="primary">
              {'$34.99'}
            </Text>
          </HStack>
        </VStack>
      }
    />
  );

  return (
    <Container style={styles.container}>
      <TopNavigation
        accessoryLeft={<NavigationAction status="primary" />}
        title="Checkout"
      />
      <FlatList
        data={[]}
        keyExtractor={keyExtractor}
        renderItem={() => <></>}
        ListHeaderComponent={<Card />}
        ListFooterComponent={
          <VStack>
            <VStack mv={32} ml={16}>
              <Text category="h4" marginBottom={16}>
                Product ({DATA_PRODUCT.length})
              </Text>
              <Content horizontal>
                {DATA_PRODUCT.map((item, i) => {
                  return (
                    <Image
                      source={item}
                      key={i}
                      style={{
                        width: 64,
                        height: 64,
                        marginRight: 16,
                      }}
                    />
                  );
                })}
              </Content>
            </VStack>
            <Text category="h4" marginLeft={16} marginBottom={24}>
              Payment Method
            </Text>
            <RadioGroup
              style={styles.contentRatio}
              selectedIndex={selectedIndex}
              onChange={index => setSelectedIndex(index)}>
              <Radio children={'COD'} status="basic" />
              <Radio children="Visa, Master, Credit Card" status="basic" />
              <Radio children="Crypto Currency" status="basic" />
            </RadioGroup>
          </VStack>
        }
      />
    </Container>
  );
});

export default ECommerce08;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  contentCard: {
    padding: 16,
    backgroundColor: 'background-basic-color-9',
    marginHorizontal: 16,
    borderRadius: 8,
  },
  divider: {
    backgroundColor: 'background-basic-color-3',
    marginBottom: 16,
  },
  contentRatio: {
    marginLeft: 16,
  },
});
const DATA_CARD = [
  {title: 'ID', value: '#MM13579'},
  {title: 'Sub total', value: '$24.53'},
  {title: 'Promo Code', value: '$1.99'},
  {title: 'Delivery', value: '4.99'},
];
const DATA_PRODUCT = [
  Images.social.person01,
  Images.social.person02,
  Images.social.person03,
];
