import * as React from 'react';
import {View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  StyleService,
  useStyleSheet,
  useTheme,
  TopNavigation,
  Avatar,
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
import Carousel from 'react-native-reanimated-carousel';
import {useSharedValue} from 'react-native-reanimated';

const Social09 = React.memo(() => {
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const width_img = 343 * (width / 375);
  const height_img = 430 * (height / 812);
  const progress = useSharedValue(0);

  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <Container style={styles.container}>
      <TopNavigation
        accessoryLeft={
          <NavigationAction icon="arrow_left" status="primary" size="giant" />
        }
        accessoryRight={
          <NavigationAction icon="xcircle" status="primary" size="giant" />
        }
      />
      <Content>
        <Text category="h3" marginHorizontal={16} marginBottom={8}>
          Share with friend
        </Text>
        <Content horizontal contentContainerStyle={styles.contentHeader}>
          {DATA.map((item, i) => {
            return (
              <VStack mr={24} key={i}>
                <Avatar source={item.user.avatar} size="giant" />
              </VStack>
            );
          })}
        </Content>
        <VStack mt={24}>
          <HStack style={styles.count} level="9" itemsCenter>
            <Text category="c1">{data.length} Photos</Text>
          </HStack>
          <Carousel
            style={{
              width: width,
              height: height_img + 32,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            modeConfig={{
              snapDirection: 'left',
              stackInterval: 18,
            }}
            customConfig={() => ({
              type: 'positive',
              viewCount: data.length - 1,
            })}
            onProgressChange={(_, absoluteProgress) => {
              _ >= 0 ? (progress.value = _) : (progress.value = _ * -1);
              console.log(_);
            }}
            data={data}
            defaultIndex={activeIndex}
            onSnapToItem={i => setActiveIndex(i)}
            windowSize={width}
            mode="vertical-stack"
            width={width}
            height={height_img + 32}
            renderItem={({item}) => {
              return (
                <View>
                  <Image
                    source={item.image}
                    borderRadius={12}
                    style={{
                      width: width_img,
                      height: height_img,
                      marginHorizontal: 16,
                    }}
                  />
                </View>
              );
            }}
          />
        </VStack>
      </Content>
      <Button children={'Share now'} style={styles.buttonShare} onPress={goBack}/>
    </Container>
  );
});

export default Social09;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  message: {
    position: 'absolute',
    zIndex: 100,
    width: 28,
    height: 28,
    borderRadius: 99,
    justifyContent: 'center',
    right: -12,
    top: 0,
  },
  contentHeader: {
    marginLeft: 16,
  },
  count: {
    position: 'absolute',
    zIndex: 100,
    width: 80,
    paddingVertical: 4,
    borderRadius: 99,
    right: 24,
    top: 12,
    justifyContent: 'center',
  },
  buttonShare: {
    marginHorizontal: 24,
    marginBottom: 12,
  },
});
const DATA = [
  {
    user: {
      avatar: Images.avatar.avatar01,
    },
  },
  {
    user: {
      avatar: Images.avatar.avatar02,
    },
  },
  {
    user: {
      avatar: Images.avatar.avatar03,
    },
  },
  {
    user: {
      avatar: Images.avatar.avatar04,
    },
  },
  {
    user: {
      avatar: Images.avatar.avatar05,
    },
  },
  {
    user: {
      avatar: Images.avatar.avatar06,
    },
  },
];
const data = [
  {
    user: {
      avatar: Images.avatar.avatar01,
    },
    image: Images.social.photo02,
  },
  {
    user: {
      avatar: Images.avatar.avatar02,
    },
    image: Images.social.photo03,
  },
  {
    user: {
      avatar: Images.avatar.avatar03,
    },
    image: Images.social.photo04,
  },
  {
    user: {
      avatar: Images.avatar.avatar04,
    },
    image: Images.social.photo05,
  },
];
