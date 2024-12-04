import * as React from 'react';
import {View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  StyleService,
  useStyleSheet,
  TopNavigation,
} from '@ui-kitten/components';

import {Container, Content, Text, VStack, HStack} from 'components';
import Images from 'assets/images';
import {useSharedValue} from 'react-native-reanimated';
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';
import TextContent from './TextContent';
import RoundedButton from 'components/RoundedButton';

const Onboarding04 = React.memo(() => {
  const {goBack} = useNavigation();
  const {height, width} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const size_image = 240 * (width / 375);
  const refCarousel = React.useRef<ICarouselInstance>(null);
  const progressValue = useSharedValue<number>(0);
  const config = {
    pagingEnabled: true,
    snapEnabled: true,
    modeConfig: {
      parallaxScrollingScale: 0.97,
      parallaxScrollingOffset: 110,
    },
    width: width,
    height: height / 1.5,
    windowSize: width,
  };
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <Container style={styles.container}>
      <TopNavigation
        style={styles.topNav}
        accessoryRight={<Image source={Images.logo} />}
      />
      <Content>
        <HStack justify="flex-start" mh={40}>
          {data.map((item, index) => {
            return (
              <VStack key={index} justify="flex-end">
                <Text
                  category={index === activeIndex ? 'h1' : 'callout'}
                  marginBottom={index === activeIndex ? 0 : 6}
                  opacity={index === activeIndex ? 1 : 0.5}
                  marginRight={24}>
                  0{index + 1}
                </Text>
              </VStack>
            );
          })}
        </HStack>
        <Carousel
          {...config}
          mode="parallax"
          data={data}
          onProgressChange={(_, absoluteProgress) => {
            progressValue.value = absoluteProgress;
          }}
          ref={refCarousel}
          onSnapToItem={index => setActiveIndex(index)}
          renderItem={({item, index}) => {
            return (
              <VStack mh={24} itemsCenter>
                <View style={{height: 200 * (height / 812)}}>
                  <TextContent
                    title={item.title}
                    animValue={progressValue}
                    index={index}
                    describe={item.describe}
                  />
                </View>
                <Image
                  source={item.image}
                  style={{width: size_image, height: size_image, marginTop: 40}}
                />
              </VStack>
            );
          }}
        />
      </Content>
      <HStack mb={12} itemsCenter mh={40}>
        <Text category="h6" uppercase status="primary" onPress={goBack}>
          Skip now
        </Text>
        <RoundedButton icon="arrow_right" status="basic" onPress={goBack} />
      </HStack>
    </Container>
  );
});

export default Onboarding04;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  topNav: {
    marginHorizontal: 16,
  },
});
const data = [
  {
    image: Images.onboarding.onboarding01,
    title: 'Souper Sunday for soup recipes',
    describe:
      'Establish your own food awards and share your favourites with your audience',
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
