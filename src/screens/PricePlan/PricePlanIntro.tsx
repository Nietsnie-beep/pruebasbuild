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
import {PricePlanStackParamList} from 'navigation/navigation-types';

interface ButtonProps {
  name: string;
  navigate: keyof PricePlanStackParamList;
}

const PricePlanIntro = React.memo(() => {
  const {navigate} = useNavigation<NavigationProp<PricePlanStackParamList>>();

  const styles = useStyleSheet(themedStyles);

  const data: ButtonProps[] = [
    {name: '01', navigate: 'PricePlan01'},
    {name: '02', navigate: 'PricePlan02'},
    {name: '03', navigate: 'PricePlan03'},
    {name: '04', navigate: 'PricePlan04'},
    {name: '05', navigate: 'PricePlan05'},
    {name: '06', navigate: 'PricePlan06'},
    {name: '07', navigate: 'PricePlan07'},
    {name: '08', navigate: 'PricePlan08'},
    {name: '09', navigate: 'PricePlan09'},
    {name: '10', navigate: 'PricePlan10'},
  ];

  return (
    <Container style={styles.container}>
      <TopNavigation
        title={'PricePlan'}
        accessoryLeft={()=><NavigationAction status="placeholder" />}
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

export default PricePlanIntro;

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
