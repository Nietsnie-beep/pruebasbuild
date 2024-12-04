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
import {FoodDeliveryStackParamList} from 'navigation/navigation-types';

interface ButtonProps {
  name: string;
  navigate: keyof FoodDeliveryStackParamList;
}

const FoodDeliveryIntro = React.memo(() => {
  const {navigate} = useNavigation<NavigationProp<FoodDeliveryStackParamList>>();

  const styles = useStyleSheet(themedStyles);

  const data: ButtonProps[] = [
    {name: '01. Home', navigate: 'FoodDelivery01'},
    {name: '02. Food & Drink', navigate: 'FoodDelivery02'},
    {name: '03. Food Details', navigate: 'FoodDelivery03'},
    {name: '04. Restaurent', navigate: 'FoodDelivery04'},
    {name: '05. Restaurent Details', navigate: 'FoodDelivery05'},
    {name: '06. My Order', navigate: 'FoodDelivery06'},
    {name: '07. My Order Details', navigate: 'FoodDelivery07'},
    {name: '08. Payment', navigate: 'FoodDelivery08'},
    {name: '09. Success', navigate: 'FoodDelivery09'},
    {name: '10. Tracking Order', navigate: 'FoodDelivery10'},
  ];

  return (
    <Container style={styles.container}>
      <TopNavigation
        title={'FoodDelivery'}
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

export default FoodDeliveryIntro;

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
