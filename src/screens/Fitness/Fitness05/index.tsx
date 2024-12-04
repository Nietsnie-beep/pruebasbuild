import * as React from 'react';
import {Image, ImageBackground} from 'react-native';
import {useLayout} from 'hooks';
import {StyleService, useStyleSheet, Button} from '@ui-kitten/components';
import {
  Container,
  Content,
  Text,
  NavigationAction,
  HStack,
  VStack,
} from 'components';
import Images from 'assets/images';

const Fitness05 = React.memo(() => {
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  return (
    <Container style={styles.container}>
      <ImageBackground
        style={{width: width, height: height}}
        source={Images.fitness.bitmap}>
        <NavigationAction
          icon="xcircle"
          status="primary"
          style={styles.xcircle}
          marginRight={12}
        />
        <Content>
          <VStack mh={34}>
            <Image source={Images.fitness.biker} />
            <HStack justify="flex-start" itemsCenter>
              <Text category="subhead">Today, 20/11/2020</Text>
              <Text status="primary" category="c1" marginLeft={12}>
                (AVG: 80m/s)
              </Text>
            </HStack>
            <HStack justify="flex-start" itemsCenter mb={28}>
              <Text style={styles.overpass} italic>
                2.56
              </Text>
              <Text
                category="body"
                status="platinum"
                marginTop={40}
                marginLeft={12}>
                Km
              </Text>
            </HStack>
            <HStack mb={32}>
              <VStack>
                <Text category="h1">3,246 </Text>
                <Text category="body" status="platinum">
                  Step
                </Text>
              </VStack>
              <VStack mr={32}>
                <Text category="h1">10:25</Text>
                <Text category="body" status="platinum">
                  Time
                </Text>
              </VStack>
            </HStack>
            <Image
              source={Images.fitness.vector}
              style={{alignSelf: 'center'}}
            />
          </VStack>
        </Content>
        <Button
          children={'Share Now'}
          style={{marginBottom: bottom + 60, marginHorizontal: 40}}
        />
      </ImageBackground>
    </Container>
  );
});

export default Fitness05;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  xcircle: {
    alignSelf: 'flex-end',
  },
  overpass: {
    fontFamily: 'Overpass-ExtraBoldItalic',
    fontSize: 56,
    lineHeight: 70,
  },
});
