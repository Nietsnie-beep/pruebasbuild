import * as React from 'react';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { StyleService, useStyleSheet, TopNavigation, Button, Icon } from '@ui-kitten/components';
import {Container, Text, HStack, VStack} from 'components';
import Images from 'assets/images';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import DotsColumn from './DotsColumn';

const Onboarding08 = React.memo(() => {
  const {goBack} = useNavigation();
  const styles = useStyleSheet(themedStyles);

  const progressValue = useSharedValue<number>(0);
  const scrollHandler = useAnimatedScrollHandler(event => {
    progressValue.value = event.contentOffset.y;
  });
  return (
    <Container style={styles.container}>
      <TopNavigation
        style={styles.topNav}
        accessoryLeft={
          <Image
            source={Images.logo}
            //@ts-ignore
            style={styles.logo}
          />
        }
        accessoryRight={
          <Text category="h6" status="primary" onPress={goBack}>
            Skip
          </Text>
        }
      />
      <HStack>
        <VStack justify="flex-start">
          <DotsColumn
            style={styles.dot}
            data={data}
            translationValue={progressValue}
            heightInterpolate={90}
            heightItem={345}
          />
        </VStack>
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
          scrollEventThrottle={16}
          onScroll={scrollHandler}
          snapToInterval={332}
          decelerationRate="fast">
          {data.map((item, i) => {
            return (
              <VStack mb={24} key={i}>
                <Image source={item.image} />
              </VStack>
            );
          })}
        </Animated.ScrollView>
      </HStack>
      <Button
        children={'Go Now'}
        accessoryRight={<Icon pack="assets" name="caret_right" />}
        style={styles.button}
      />
    </Container>
  );
});

export default Onboarding08;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 32,
    height: 32,
  },
  topNav: {
    marginHorizontal: 16,
    marginBottom: 24,
  },
  content: {
    paddingBottom: 168,
  },
  dot: {
    marginLeft: 24,
    marginRight: 28,
  },
  button: {
    position: 'absolute',
    bottom: 40,
    left: 32,
  },
});
const data = [
  {
    image: Images.onboarding.onboarding11,
  },
  {
    image: Images.onboarding.onboarding12,
  },
  {
    image: Images.onboarding.onboarding11,
  },
  {
    image: Images.onboarding.onboarding10,
  },
];
