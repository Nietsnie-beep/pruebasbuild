import * as React from 'react';
import {useLayout} from 'hooks';
import {
  StyleService,
  useStyleSheet,
  Avatar,
  Divider,
  Button,
} from '@ui-kitten/components';

import {Container, Text, NavigationAction, HStack, VStack} from 'components';
import Images from 'assets/images';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const ECommerce05 = React.memo(() => {
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const progress = useSharedValue(0);
  const imageStyle = useAnimatedStyle(() => {
    const heightAni = interpolate(
      progress.value,
      [0, height / 4, height * 2],
      [width, 100 * (width / 375), 100 * (width / 375)],
    );
    const border = interpolate(
      progress.value,
      [0, height / 4, height * 2],
      [24, 0, 0],
    );
    return {
      width: width,
      height: heightAni,
      position: 'absolute',
      top: 0,
      borderBottomRightRadius: border,
      borderBottomLeftRadius: border,
    };
  });
  return (
    <Container style={styles.container}>
      <HStack style={[styles.header, {paddingTop: top + 4}]}>
        <NavigationAction status="basic" backgroundColor={'transparent'} />
        <NavigationAction
          status="basic"
          backgroundColor={'transparent'}
          icon="shopping_cart"
        />
      </HStack>
      <Animated.Image
        source={Images.e_commerce.commerce05}
        style={imageStyle}
      />
      <Animated.ScrollView
        contentContainerStyle={[styles.content, {paddingTop: width}]}
        scrollEventThrottle={16}
        onScroll={e => {
          progress.value = e.nativeEvent.contentOffset.y;
        }}>
        <HStack itemsCenter mh={24}>
          <HStack itemsCenter>
            <Avatar source={Images.avatar.avatar02} size="tiny" />
            <Text category="h8" marginLeft={8}>
              Leslie Alexander
            </Text>
          </HStack>
          <NavigationAction status="primary" icon="heart" />
        </HStack>
        <Text category="h4" marginTop={16} marginBottom={8} marginLeft={24}>
          {'Donut 3D'}
        </Text>
        <Text
          marginHorizontal={24}
          marginBottom={24}
          category="body"
          status="platinum">
          Occaecat ipsum magna veniam proident aliquip irure enim mollit cillum
          esse. Dolore eu amet Lorem est quis reprehenderit eu. Aute incididunt
          magna voluptate incididunt irure tempor amet est quis ullamco...
        </Text>
        <Divider />
        <VStack mh={24} mt={16}>
          <Text category="subhead" status="platinum">
            Current price
          </Text>
          <HStack justify="flex-start" itemsCenter mt={10}>
            <Text category="h4" status="primary">
              123ETH
            </Text>
            <Text category="callout" status="platinum" marginTop={4}>
              {' '}
              ~$2.468
            </Text>
          </HStack>
        </VStack>
      </Animated.ScrollView>
      <HStack mh={24} mb={8}>
        <Button
          children={'Make Offer'}
          style={styles.buttonOffer}
          status="basic"
        />
        <Button children={'Place Bid'} style={styles.buttonBid} />
      </HStack>
    </Container>
  );
});

export default ECommerce05;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  header: {
    position: 'absolute',
    zIndex: 100,
    left: 8,
    right: 8,
    top: 0,
  },
  content: {
    flexGrow: 1,
  },
  buttonOffer: {
    flex: 1,
    marginRight: 16,
  },
  buttonBid: {
    flex: 1,
  },
});
