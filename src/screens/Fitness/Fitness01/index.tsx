import * as React from 'react';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StyleService, useStyleSheet, Button} from '@ui-kitten/components';

import {Container, Content, Text, HStack, VStack} from 'components';
import Images from 'assets/images';
import ChartBar from './ChartBar';
import BottomAddFriend from './BottomAddFriend';
import BottomBar from './BottomBar';

const Fitness01 = React.memo(() => {
  const {goBack} = useNavigation();
  const styles = useStyleSheet(themedStyles);

  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <Container style={styles.container}>
      <Content contentContainerStyle={styles.content}>
        <HStack>
          <Image source={Images.fitness.guy_riding} />
          <VStack>
            <HStack style={styles.layoutPoint} level="10" itemsCenter>
              <Image
                source={Images.fitness.point_run}
                //@ts-ignore
                style={styles.point}
              />
              <Text category="h6" marginLeft={8}>
                35,000
              </Text>
            </HStack>
            <Text
              category="subhead"
              status="placeholder"
              marginTop={16}
              marginBottom={4}>
              Today, December 03, 2020
            </Text>
            <Text category="h1">
              {'3,248 '}
              <Text category="body" status="platinum">
                Steps
              </Text>
            </Text>
          </VStack>
        </HStack>
        <Button
          children={'Run Now'}
          style={styles.buttonRun}
          onPress={goBack}
        />
        <ChartBar data={data} setStep={setStep} dataSetStep={dataSetStep} />
        <BottomAddFriend data={ADD_FRIEND} />
      </Content>
      <BottomBar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </Container>
  );
});

export default Fitness01;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  point: {
    width: 20,
    height: 20,
  },
  layoutPoint: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 99,
  },
  buttonRun: {
    marginTop: 24,
    marginBottom: 32,
  },
  content: {
    paddingHorizontal: 24,
  },
});

const setStep = 8000;
const stepMonday = 4000;
const stepTuesday = 5700;
const stepWednesday = 3284;
const stepThursday = 4500;
const stepFriday = 9000;
const stepSaturday = setStep;
const stepSunday = 2000;
const data = [
  {x: 1, y: 1, y0: stepSunday, date: 'S'},
  {x: 2, y: 1, y0: stepMonday, date: 'M'},
  {x: 3, y: 1, y0: stepTuesday, date: 'T'},
  {x: 4, y: 1, y0: stepWednesday, date: 'W'},
  {x: 5, y: 1, y0: stepThursday, date: 'T'},
  {x: 6, y: 1, y0: stepFriday, date: 'F'},
  {x: 7, y: 1, y0: stepSaturday, date: 'S'},
];
const dataSetStep = [
  {x: 1, y: 1, y0: setStep, date: 'S'},
  {x: 2, y: 1, y0: setStep, date: 'M'},
  {x: 3, y: 1, y0: setStep, date: 'T'},
  {x: 4, y: 1, y0: setStep, date: 'W'},
  {x: 5, y: 1, y0: setStep, date: 'T'},
  {x: 6, y: 1, y0: setStep, date: 'F'},
  {x: 7, y: 1, y0: setStep, date: 'S'},
];
const ADD_FRIEND = [
  Images.avatar.avatar02,
  Images.avatar.avatar03,
  Images.avatar.avatar04,
];
