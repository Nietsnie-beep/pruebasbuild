import * as React from 'react';
import {Image, ImageRequireSource} from 'react-native';
import {useLayout} from 'hooks';
import {StyleService, useStyleSheet, Icon} from '@ui-kitten/components';
import {Content, Text, HStack, VStack} from 'components';
import _ from 'lodash';

interface IPopularFoodProps {
  id: string;
  image: ImageRequireSource;
  name: string;
  price: string;
  rate: string;
  delivery: string;
}

const Popular = React.memo(({data}: {data: IPopularFoodProps[]}) => {
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const width_layout = 180 * (width / 375);
  const height_layout = 140 * (height / 812);
  return (
    <Content horizontal contentContainerStyle={styles.content}>
      {data &&
        data.map((food, index) => {
          const colors = ['#00CD50', '#FFA26B', '#5C6BB2', '#CE8ABC'];
          let colours = _.shuffle(colors);
          const color = colours.pop();
          return (
            <VStack key={index} mr={24}>
              <VStack
                style={{width: width_layout, height: height_layout + 20}}
                border={16}
                mb={44}>
                {/* @ts-ignore */}
                <Image source={food.image} style={styles.image} />
                <HStack
                  style={{
                    backgroundColor: color,
                    width: width_layout,
                    height: height_layout,
                    borderRadius: 16,
                    zIndex: -100,
                    position: 'absolute',
                    top: 44,
                  }}
                />
                <HStack level="10" style={styles.freeship} itemsCenter>
                  <VStack style={styles.heartLayout} level="1">
                    <Icon pack="assets" name="heart" style={styles.heart} />
                  </VStack>
                  <Text category="subhead">Freeship</Text>
                </HStack>
              </VStack>
              <Text category="body">{food.name}</Text>
              <Text category="h6" marginVertical={8} status="primary">
                {food.price}
              </Text>
              <Text category="subhead">
                ⭐️ {food.rate} 🛵️ {food.delivery}
              </Text>
            </VStack>
          );
        })}
    </Content>
  );
});

export default Popular;

const themedStyles = StyleService.create({
  content: {
    paddingLeft: 24,
  },
  image: {},
  freeship: {
    padding: 8,
    alignSelf: 'flex-end',
    borderRadius: 16,
    borderTopRightRadius: 0,
  },
  heartLayout: {
    padding: 4,
    borderRadius: 99,
  },
  heart: {
    tintColor: 'text-success-color',
  },
});
