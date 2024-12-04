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
  Button,
  Icon,
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
import Pagination from '../elements/Pagination';
import {useSharedValue} from 'react-native-reanimated';
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';
import TextContent from '../Onboarding01/TextContent';

const Onboarding06 = React.memo(() => {
  const theme = useTheme();
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
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
    height: height / 1.6,
    windowSize: width,
  };
  return (
    <Container style={styles.container}>
      <TopNavigation
        accessoryLeft={
          <Image
            source={Images.logo}
            //@ts-ignore
            style={styles.logo}
          />
        }
        accessoryRight={
          <HStack>
            {data.map((item, i) => {
              return (
                <Pagination
                  key={i}
                  index={i}
                  backgroundColor={'#5784E8'}
                  length={data.length}
                  animValue={progressValue}
                  widthActiveIndicator={6}
                  heightActiveIndicator={6}
                  sizeIndicator={6}
                />
              );
            })}
          </HStack>
        }
      />
      <Content>
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
      </Content>
      <Button
        children={'Get Starter'}
        style={styles.button}
        accessoryRight={<Icon pack="assets" name="caret_right" />}
        onPress={goBack}
      />
    </Container>
  );
});

export default Onboarding06;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 32,
    height: 32,
  },
  button: {
    marginHorizontal: 24,
    marginBottom: 8,
  },
});
const data = [
  {
    image: Images.onboarding.onboarding07,
    title: 'That Every Business Must Employ',
    describe:
      'Open an app geared toward stock trading, and you’ll probably discover a dictionary of investing terms that rivals Investopedia. ',
  },
  {
    image: Images.onboarding.onboarding09,
    title: 'Souper Sunday for soup recipes',
    describe:
      'Establish your own food awards and share your favourites with your audience',
  },
  {
    image: Images.onboarding.onboarding08,
    title: 'Dreams create strength people',
    describe:
      'Independent research lab exploring new mediums of thought and expanding the imaginative powers of the human species',
  },
  {
    image: Images.onboarding.onboarding03,
    title: 'That Every Business Must Employ',
    describe:
      'Establish your own food awards and share your favourites with your',
  },
  {
    image: Images.onboarding.onboarding02,
    title: 'Souper Sunday for soup recipes',
    describe:
      'Establish your own food awards and share your favourites with your audience',
  },
  {
    image: Images.onboarding.onboarding01,
    title: 'That Every Business Must Employ',
    describe:
      'Establish your own food awards and share your favourites with your',
  },
];
