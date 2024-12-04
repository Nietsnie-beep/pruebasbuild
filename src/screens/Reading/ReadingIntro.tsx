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
import {ReadingStackParamList} from 'navigation/navigation-types';

interface ButtonProps {
  name: string;
  navigate: keyof ReadingStackParamList;
}

const ReadingIntro = React.memo(() => {
  const {navigate} = useNavigation<NavigationProp<ReadingStackParamList>>();

  const styles = useStyleSheet(themedStyles);

  const data: ButtonProps[] = [
    {name: '01. Home Reading', navigate: 'Reading01'},
    {name: '02. List Book', navigate: 'Reading02'},
    {name: '03. Book Details', navigate: 'Reading03'},
    {name: '04. Question', navigate: 'Reading04'},
    {name: '05. Listen Book', navigate: 'Reading05'},
    {name: '06. Bookmark Collection', navigate: 'Reading06'},
    {name: '07. Bookmark List', navigate: 'Reading07'},
    {name: '08. Checkout', navigate: 'Reading08'},
    {name: '09. Order Tracking', navigate: 'Reading09'},
    {name: '10. Home-Book', navigate: 'Reading10'},
  ];

  return (
    <Container style={styles.container}>
      <TopNavigation
        title={'Reading'}
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

export default ReadingIntro;

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
