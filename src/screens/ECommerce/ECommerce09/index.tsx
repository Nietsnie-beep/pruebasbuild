import * as React from 'react';
import {Image} from 'react-native';
import {
  StyleService,
  useStyleSheet,
  TopNavigation,
  Button,
} from '@ui-kitten/components';

import {Container, Content, Text, NavigationAction, VStack} from 'components';
import Images from 'assets/images';
import OrderStep from './OrderStep';

const ECommerce09 = React.memo(() => {
  const styles = useStyleSheet(themedStyles);
  const [index, setIndex] = React.useState(3);

  return (
    <Container style={styles.container}>
      <TopNavigation
        accessoryLeft={<NavigationAction status="primary" />}
        title="Order Tracking"
      />
      <Content contentContainerStyle={styles.content}>
        <Image
          source={Images.e_commerce.tracking}
          //@ts-ignore
          style={styles.image}
        />
        <VStack style={styles.layout} level="9" mb={24}>
          <Text category="h6" marginBottom={8}>
            Order ID:{' '}
            <Text category="h6" status="primary">
              #131313
            </Text>
          </Text>
          <Text category="body" status="platinum">
            Estimate Date: <Text category="body">October 04, 2021</Text>
          </Text>
        </VStack>
        <OrderStep
          timeStep={[
            'October 04, 2021 01:21',
            'October 04, 2021 01:21',
            'October 04, 2021 01:21',
            'October 04, 2021 01:21',
          ]}
          step={index}
        />
      </Content>
      <Button style={styles.button} children="Call Shipper" />
    </Container>
  );
});

export default ECommerce09;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  image: {
    alignSelf: 'center',
    marginTop: -32,
  },
  layout: {
    padding: 24,
    paddingTop: 20,
    borderRadius: 8,
    marginTop: 24,
  },
  content: {
    marginHorizontal: 24,
  },
  button: {
    marginHorizontal: 24,
    marginBottom: 8,
  },
});
