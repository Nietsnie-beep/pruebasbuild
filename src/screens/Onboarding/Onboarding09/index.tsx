import * as React from 'react';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  useTheme,
  Button,
} from '@ui-kitten/components';

import {Container, Content, Text, VStack, HStack} from 'components';
import Images from 'assets/images';
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';
import {useSharedValue} from 'react-native-reanimated';
import Pagination from '../elements/Pagination';

const Onboarding09 = React.memo(() => {
  const theme = useTheme();
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const refCarousel = React.useRef<ICarouselInstance>(null);
  const progressValue = useSharedValue<number>(0);
  const size = 295 * (width / 375);
  return (
    <Container style={styles.container}>
      <Image
        source={Images.logo}
        //@ts-ignore
        style={styles.logo}
      />
      <Content>
        <Carousel
          data={data}
          width={width}
          height={height / 1.5}
          windowSize={width}
          onProgressChange={(_, absoluteProgress) => {
            progressValue.value = absoluteProgress;
          }}
          ref={refCarousel}
          renderItem={({item}) => {
            return (
              <VStack itemsCenter mh={32}>
                <Text category="h2" center marginBottom={16}>
                  {item.title}
                </Text>
                <Text style={styles.descibe} center marginBottom={40}>
                  {item.describe}
                </Text>
                <Image
                  source={item.image}
                  style={{width: size, height: size}}
                />
              </VStack>
            );
          }}
        />
        <HStack justify="center">
          {data.map((item, i) => {
            return (
              <Pagination
                index={i}
                sizeIndicator={6}
                widthActiveIndicator={6}
                heightActiveIndicator={6}
                backgroundColor={theme['color-primary-100']}
                length={data.length}
                animValue={progressValue}
              />
            );
          })}
        </HStack>
      </Content>
      <Layout style={[styles.bottom, {paddingBottom: bottom + 8}]}>
        <Button
          children={'Skip'}
          status="transparent-primary"
          style={styles.buttonSkip}
          onPress={goBack}
        />
        <Button
          children={'Get Starter'}
          status="primary"
          style={styles.buttonGetStart}
          onPress={goBack}
        />
      </Layout>
    </Container>
  );
});

export default Onboarding09;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  logo: {
    width: 48,
    height: 48,
    alignSelf: 'center',
    marginBottom: 32,
  },
  descibe: {
    fontSize: 20,
    lineHeight: 22,
    fontWeight: '400',
    fontFamily: 'AlbertSans-Regular',
  },
  bottom: {
    paddingHorizontal: 24,
    paddingTop: 24,
    backgroundColor: '#F5F7FA',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  buttonSkip: {
    flex: 1,
    marginRight: 16,
  },
  buttonGetStart: {
    flex: 1,
  },
});

const data = [
  {
    image: Images.onboarding.onboarding13,
    title: 'Directly answer customers’ financial ',
    describe: 'Open an app geared toward stock trading, and you’ll probably ',
  },
  {
    image: Images.onboarding.onboarding07,
    title: 'Souper Sunday for soup recipes',
    describe:
      'Establish your own food awards and share your favourites with your audience',
  },
  {
    image: Images.onboarding.onboarding08,
    title: 'Dreams create strength people',
    describe: 'Independent research lab exploring new mediums of thought.',
  },
  {
    image: Images.onboarding.onboarding09,
    title: 'That Every Business Must Employ',
    describe:
      'Establish your own food awards and share your favourites with your',
  },
  {
    image: Images.onboarding.onboarding01,
    title: 'Souper Sunday for soup recipes',
    describe:
      'Establish your own food awards and share your favourites with your audience',
  },
  {
    image: Images.onboarding.onboarding02,
    title: 'That Every Business Must Employ',
    describe:
      'Establish your own food awards and share your favourites with your',
  },
];
