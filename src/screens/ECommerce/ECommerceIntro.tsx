import * as React from 'react';
import {FlatList} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {
  StyleService,
  useStyleSheet,
  TopNavigation,
  Button,
} from '@ui-kitten/components';

import {Container, NavigationAction} from 'components';
import {ECommerceStackParamList} from 'navigation/navigation-types';

interface ButtonProps {
  name: string;
  navigate: keyof ECommerceStackParamList;
}

const ECommerceIntro = React.memo(() => {
  const {navigate} = useNavigation<NavigationProp<ECommerceStackParamList>>();

  const styles = useStyleSheet(themedStyles);

  const data: ButtonProps[] = [
    {name: '01. Home-01', navigate: 'ECommerce01'},
    {name: '02. Home-02', navigate: 'ECommerce02'},
    {name: '03. Grid Product', navigate: 'ECommerce03'},
    {name: '04. List Product', navigate: 'ECommerce04'},
    {name: '05. Product Details', navigate: 'ECommerce05'},
    {name: '06. Shop-Reviews', navigate: 'ECommerce06'},
    {name: '07. Add to cart', navigate: 'ECommerce07'},
    {name: '08. Checkout', navigate: 'ECommerce08'},
    {name: '09. Order tracking', navigate: 'ECommerce09'},
    {name: '10. View cart', navigate: 'ECommerce10'},
  ];

  return (
    <Container style={styles.container}>
      <TopNavigation
        title={'ECommerce'}
        accessoryLeft={<NavigationAction status="placeholder" />}
      />
      <FlatList
        data={data}
        contentContainerStyle={styles.content}
        renderItem={({item}) => {
          return (
            <Button
              status="primary"
              size='large'
              children={item.name}
              style={styles.button}
              onPress={() => {
                navigate(item.navigate);
              }}
            />
          );
        }}
      />
    </Container>
  );
});

export default ECommerceIntro;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  content: {
    paddingHorizontal: 24,
  },
  button: {
    marginBottom: 16,
    borderRadius:16
  },
});
