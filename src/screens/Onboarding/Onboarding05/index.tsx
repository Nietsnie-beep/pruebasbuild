import * as React from 'react';
import {View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  Button,
} from '@ui-kitten/components';

import {Container, Content, VStack, HStack} from 'components';
import Images from 'assets/images';
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';
import {useSharedValue} from 'react-native-reanimated';
import Pagination from '../elements/Pagination';
import TextContent from './TextContent';

const Onboarding05 = React.memo(() => {
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const size_image = 279 * (width / 375);
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
    height: size_image,
    windowSize: width,
  };
  const colors = ['#5784E8', '#5784E8', '#5784E8', '#5784E8'];
  return (
    <Container style={styles.container}>
      <Image
        source={Images.logo}
        //@ts-ignore
        style={styles.logo}
      />
      <Content scrollEnabled={false} contentContainerStyle={styles.content}>
        <Carousel
          data={data}
          autoPlay
          loop={true}
          {...config}
          autoPlayInterval={1600}
          ref={refCarousel}
          onProgressChange={(_, absoluteProgress) => {
            progressValue.value = absoluteProgress;
          }}
          renderItem={({item, index}) => {
            return (
              <VStack mh={24} itemsCenter>
                <Image
                  source={item.image}
                  style={{width: size_image, height: size_image}}
                />
              </VStack>
            );
          }}
        />
        <HStack justify="center" mt={32}>
          {colors.map((backgroundColor, index) => {
            return (
              <Pagination
                index={index}
                backgroundColor={backgroundColor}
                animValue={progressValue}
                key={index}
                widthActiveIndicator={40}
                length={colors.length}
              />
            );
          })}
        </HStack>
      </Content>
      <Layout
        style={{
          width: width - 16,
          height: 317 * (height / 812),
          borderTopLeftRadius: 16,
          justifyContent: 'flex-end',
          marginLeft: 16,
        }}
        level="8">
        <>
          {data.map((item, index) => {
            return (
              <View key={index} style={styles.textContent}>
                <TextContent
                  title={item.title}
                  describe={item.describe}
                  animValue={progressValue}
                  index={index}
                />
              </View>
            );
          })}
        </>
        <Button
          onPress={goBack}
          children={'Get Starter'}
          style={[
            styles.button,
            {
              marginBottom: bottom + 4,
              marginHorizontal: 24,
            },
          ]}
        />
      </Layout>
    </Container>
  );
});

export default Onboarding05;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  logo: {
    alignSelf: 'center',
    marginBottom: 24,
  },
  content: {
    flexGrow: 1,
  },
  textContent: {
    position: 'absolute',
    paddingHorizontal: 40,
    top: 40,
  },
  button: {},
});
const data = [
  {
    image: Images.onboarding.onboarding05,
    title: 'Create a gift guide for food lovers',
    describe:
      'Establish your own food awards and share your favourites with your audience',
  },
  {
    image: Images.onboarding.onboarding06,
    title: 'Dreams create strength people',
    describe:
      'Independent research lab exploring new mediums of thought and expanding the imaginative powers of the human species',
  },
  {
    image: Images.onboarding.onboarding07,
    title: 'Souper Sunday for soup recipes',
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
