import * as React from 'react';
import {Image, ImageBackground} from 'react-native';
import {useLayout} from 'hooks';
import {
  Button,
  Icon,
  Layout,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';

import {Container, Text, HStack, VStack, NavigationAction} from 'components';
import Images from 'assets/images';

const Fitness09 = React.memo(() => {
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  return (
    <Container style={styles.container}>
      <NavigationAction
        style={[styles.goBack, {top: top + 8}]}
        status="primary"
      />
      <ImageBackground
        source={Images.fitness.bitmap}
        style={{width: width, height: height, justifyContent: 'space-between'}}>
        <Image source={Images.fitness.vector02} style={{alignSelf: 'center'}} />
        <Layout level="1" style={[styles.layout, {marginBottom: bottom + 40}]}>
          <HStack justify="flex-start" itemsCenter>
            <Text category="subhead">Today, 20/11/2020</Text>
            <Text status="primary" category="c1" marginLeft={12}>
              (AVG: 80m/s)
            </Text>
          </HStack>
          <HStack itemsCenter justify="flex-start">
            <Text style={styles.km}>2.56</Text>
            <Text category="body" status="platinum" marginTop={20}>
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
          <HStack>
            <Button
              children={'More'}
              accessoryLeft={<Icon pack="assets" name="messenger" />}
              status="transparent-primary"
              style={styles.buttonMore}
            />
            <Button
              children={'Share'}
              accessoryLeft={<Icon pack="assets" name="user_plus" />}
              style={styles.buttonShare}
            />
          </HStack>
        </Layout>
      </ImageBackground>
    </Container>
  );
});

export default Fitness09;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  layout: {
    padding: 24,
    marginHorizontal: 8,
    shadowColor: '#00000050',
    shadowOffset: {
      width: 0.5,
      height: 0.5,
    },
    shadowOpacity: 0.6,
    shadowRadius: 2.11,
    elevation: 1,
    borderRadius: 16,
  },
  km: {
    fontSize: 56,
    lineHeight: 70,
    fontWeight: 'bold',
  },
  goBack: {
    position: 'absolute',
    top: 0,
    left: 12,
    zIndex: 100,
  },
  buttonMore: {
    flex: 1,
    marginRight: 16,
  },
  buttonShare: {
    flex: 1,
  },
});
