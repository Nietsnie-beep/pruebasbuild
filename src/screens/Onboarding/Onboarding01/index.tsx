import * as React from 'react';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  StyleService,
  useStyleSheet,
  TopNavigation,
} from '@ui-kitten/components';

import {Container, Content, Text, VStack, HStack} from 'components';
import Images from 'assets/images';
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';
import {useSharedValue} from 'react-native-reanimated';
import Pagination from '../elements/Pagination';
import TextContent from './TextContent';
import RoundedButton from 'components/RoundedButton';

const Onboarding01 = React.memo(() => {
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
      parallaxScrollingScale: 0.98,
      parallaxScrollingOffset: 100,
    },
    width: width,
    height: height / 1.5,
    windowSize: width,
  };

  const colors = ['#5784E8', '#5784E8', '#5784E8', '#5784E8'];
  const onNext = () => {
    refCarousel.current?.next();
  };
  const onPrev = () => {
    refCarousel.current?.prev();
  };
  return (
    <Container style={styles.container}>
      <TopNavigation
        style={styles.topNavigation}
        accessoryLeft={<Image source={Images.logo} />}
        accessoryRight={
          <Text uppercase status="info" category="h6" onPress={goBack}>
            Skip
          </Text>
        }
      />
      <Content contentContainerStyle={styles.content}>
        <Carousel
          {...config}
          mode="parallax"
          data={data}
          onProgressChange={(_, absoluteProgress) => {
            progressValue.value = absoluteProgress;
          }}
          ref={refCarousel}
          renderItem={({item, index}) => {
            return (
              <VStack mh={24} itemsCenter>
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
            );
          }}
        />
        <HStack itemsCenter mh={16} mb={24}>
          <RoundedButton
            status={'placeholder'}
            icon="arrow_circle_left"
            onPress={onPrev}
          />
          <HStack justify="center">
            {colors.map((backgroundColor, index) => {
              return (
                <Pagination
                  backgroundColor={backgroundColor}
                  animValue={progressValue}
                  index={index}
                  key={index}
                  length={colors.length}
                  widthActiveIndicator={120}
                />
              );
            })}
          </HStack>
          <RoundedButton
            status={'basic'}
            icon="arrow_circle_right"
            onPress={onNext}
          />
        </HStack>
      </Content>
    </Container>
  );
});

export default Onboarding01;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  topNavigation: {
    marginHorizontal: 16,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'space-between',
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
