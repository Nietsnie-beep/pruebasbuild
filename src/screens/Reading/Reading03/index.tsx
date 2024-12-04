import * as React from 'react';
import {Image} from 'react-native';
import {useLayout} from 'hooks';
import {
  StyleService,
  useStyleSheet,
  Button,
  Icon,
  Divider,
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
import StarRating from './StarRating';

const Reading03 = React.memo(() => {
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  return (
    <Container style={styles.container}>
      <HStack style={[styles.header, {top: top + 8}]}>
        <NavigationAction status="primary" />
        <NavigationAction status="primary" icon="bookmark" />
      </HStack>
      <Content>
        <Image
          borderRadius={8}
          source={Images.reading.reading05}
          //@ts-ignore
          style={styles.image}
        />
        <HStack mt={32} mh={24}>
          <Button
            style={styles.buttonListen}
            children={'Listen'}
            accessoryLeft={<Icon pack="assets" name="headphone" />}
          />
          <Button
            style={styles.buttonReading}
            children={'Reading'}
            status="purple"
            accessoryLeft={<Icon pack="assets" name="eye_glash" />}
          />
        </HStack>
        <VStack mh={24} mv={24}>
          <Text category="h5">Rebecca of Sunnybrook Farm</Text>
          <HStack mt={16} itemsCenter mb={24}>
            <Text category="body" status="placeholder">
              June Cook
            </Text>
            <HStack itemsCenter>
              <Icon pack="assets" name="timer" style={styles.timer} />
              <Text category="h7" status="platinum">
                24 mins
              </Text>
            </HStack>
          </HStack>
          <StarRating defaultRate={5} reviewer={241} />
        </VStack>
        <Divider />
        <VStack mh={24} mv={24}>
          <Text category="h6" marginBottom={16}>
            Book summary
          </Text>
          <Text category="body">
            The author, vice chairman of Ogilvy, shares why what’s irrational
            often works better than what’s considered to be rational. Rory
            explains we take some actions based on a psychological rather than
            logical level. As marketers, we should appeal to this irrational
            side of our thinking and try what seems to be counterintuitive or
            logic-defying.
          </Text>
        </VStack>
      </Content>
    </Container>
  );
});

export default Reading03;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  header: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 100,
  },
  image: {
    alignSelf: 'center',
    marginTop: 24,
  },
  buttonListen: {
    flex: 1,
    marginRight: 15,
  },
  buttonReading: {
    flex: 1,
  },
  timer: {
    width: 16,
    height: 16,
    tintColor: 'text-platinum-color',
    marginRight: 8,
  },
  star: {
    width: 16,
    height: 16,
  },
});
