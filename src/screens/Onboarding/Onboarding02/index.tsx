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

import {
  Container,
  Content,
  Text,
  NavigationAction,
  VStack,
  HStack,
} from 'components';
import Images from 'assets/images';
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';
import Animated, {FadeInRight, useSharedValue} from 'react-native-reanimated';
import TextContent from '../Onboarding01/TextContent';
import {RectButton, Swipeable} from 'react-native-gesture-handler';
import RoundedButton from 'components/RoundedButton';
import SwipeableToStart from './SwipeableToStart';

const Onboarding02 = React.memo(() => {
  const theme = useTheme();
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const refCarousel = React.useRef<ICarouselInstance>(null);
  const progressValue = useSharedValue<number>(0);
  const size_image = 240 * (width / 375);

  return (
    <Container style={styles.container}>
      <TopNavigation
        style={styles.topNavigation}
        accessoryLeft={<Image source={Images.logo} />}
        accessoryRight={
          <Text status="info" category="h6" onPress={goBack}>
            Skip
          </Text>
        }
      />
      <Content>
        <Carousel
          style={{
            width: width,
            height: height / 1.5,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          width={width}
          windowSize={width}
          height={height / 1.5}
          data={data}
          mode="vertical-stack"
          loop
          autoPlay
          autoPlayInterval={1500}
          modeConfig={{
            snapDirection: 'left',
            stackInterval: 12,
            // showLength: 4,
          }}
          onProgressChange={(_, absoluteProgress) => {
            progressValue.value = absoluteProgress;
          }}
          customConfig={() => ({type: 'positive', viewCount: 3})}
          ref={refCarousel}
          renderItem={({item, index}) => {
            return (
              <Animated.View
                style={styles.item}
                entering={FadeInRight.delay((3 - index) * 100).duration(200)}>
                <VStack itemsCenter>
                  <Image
                    source={item.image}
                    style={{width: size_image, height: size_image}}
                  />
                  <TextContent
                    title={item.title}
                    animValue={progressValue}
                    index={index}
                    describe={item.describe}
                  />
                </VStack>
              </Animated.View>
            );
          }}
        />
        <HStack justify="center">
          <SwipeableToStart />
        </HStack>
      </Content>
    </Container>
  );
});

export default Onboarding02;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  topNavigation: {
    marginHorizontal: 16,
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 40,
  },
});
const data = [
  {
    image: Images.onboarding.onboarding01,
    title: 'Imagination created your art',
    describe:
      'Independent research lab exploring new mediums of thought and expanding.',
  },
  {
    image: Images.onboarding.onboarding02,
    title: 'Dreams create strength people',
    describe:
      'Independent research lab exploring new mediums of thought and expanding the imaginative powers of the human species',
  },
  {
    image: Images.onboarding.onboarding03,
    title: 'Create a gift guide for food lovers',
    describe:
      'Establish your own food awards and share your favourites with your audience',
  },
  {
    image: Images.onboarding.onboarding04,
    title: 'That Every Business Must Employ',
    describe:
      'Establish your own food awards and share your favourites with your',
  },
];
