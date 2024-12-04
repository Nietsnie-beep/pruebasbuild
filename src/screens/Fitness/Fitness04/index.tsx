import * as React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout, useTimer} from 'hooks';
import {Icon, StyleService, useStyleSheet} from '@ui-kitten/components';

import {Container, Content, Text, VStack, HStack} from 'components';
import Images from 'assets/images';

const Fitness04 = React.memo(() => {
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const [km, setKm] = React.useState(2.56);
  const [step, setStep] = React.useState('3,246');

  const formatTime = (timer: number) => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = Math.floor(timer / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);

    return `${getMinutes}:${getSeconds}`;
  };
  const {timer, isPlay, handleStart, handlePause} = useTimer(625);

  return (
    <Container style={styles.container}>
      <Image
        source={Images.fitness.bitmap}
        //@ts-ignore
        style={{width: width, height: height, ...styles.img}}
      />
      <Content>
        <HStack>
          <VStack mt={24} ml={36}>
            <View>
              <Text italic style={styles.km}>
                {km}
              </Text>
              <Text children="Km" category="h6" italic status="platinum" />
            </View>
            <Text marginTop={84} style={styles.step}>
              {step}
            </Text>
            <Text
              category="h6"
              status="platinum"
              children="Step"
              marginBottom={24}
            />
            <Text category="h2" children={formatTime(timer)} />
            <Text category="h6" children="Time" status="platinum" />
          </VStack>
          <Image
            source={Images.fitness.girl}
            //@ts-ignore
            style={styles.girl}
          />
        </HStack>
      </Content>
      <HStack itemsCenter mh={36}>
        <VStack onPress={goBack} level="11" style={styles.button}>
          <Icon pack="assets" name="camera" style={styles.iconButton} />
        </VStack>
        <TouchableOpacity style={styles.buttonPlay}>
          <Icon
            pack="assets"
            name={isPlay ? 'play' : 'pause'}
            style={styles.play}
          />
        </TouchableOpacity>
        <VStack style={styles.button} level="10" onPress={goBack}>
          <Icon pack="assets" name="music" style={styles.iconButton} />
        </VStack>
      </HStack>
    </Container>
  );
});

export default Fitness04;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  img: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  km: {
    fontSize: 56,
    lineHeight: 70,
    fontFamily: 'Overpass-ExtraBoldItalic',
    fontStyle: 'italic',
  },
  step: {
    fontSize: 32,
    lineHeight: 40,
    fontFamily: 'Overpass-ExtraBoldItalic',
    fontStyle: 'italic',
  },
  girl: {
    marginTop: 60,
  },
  button: {
    borderRadius: 16,
    padding: 12,
  },
  iconButton: {
    width: 24,
    height: 24,
  },
  play: {
    width: 40,
    height: 40,
    tintColor: 'text-white-color',
  },
  buttonPlay: {
    width: 80,
    height: 80,
    backgroundColor: 'background-basic-color-7',
    bordeRadius: 99,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 99,
  },
});
