import * as React from 'react';
import {ImageBackground} from 'react-native';
import {useLayout} from 'hooks';
import {
  StyleService,
  useStyleSheet,
  TopNavigation,
  Button,
} from '@ui-kitten/components';

import {Container, Content, Text, NavigationAction} from 'components';
import Images from 'assets/images';

const FoodDelivery09 = React.memo(() => {
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  return (
    <ImageBackground
      source={Images.delivery.success}
      style={{width: width, height: height}}>
      <Container style={styles.container}>
        <TopNavigation accessoryLeft={<NavigationAction status="primary" />} />
        <Content>
          <Text category="h2" center>
            Success
          </Text>
          <Text
            center
            category="body"
            status="platinum"
            marginHorizontal={32}
            marginTop={12}>
            Establish your own food awards and share your favourites with you
          </Text>
        </Content>
        <Text category="body" center marginBottom={24} status="platinum">
          Check your order
        </Text>
        <Button children={'Back to homepage'} style={styles.button} />
      </Container>
    </ImageBackground>
  );
});

export default FoodDelivery09;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  button: {
    alignSelf: 'center',
    marginBottom: 32,
  },
});
