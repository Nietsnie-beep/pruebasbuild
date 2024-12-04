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
import {FitnessStackParamList} from 'navigation/navigation-types';

interface ButtonProps {
  name: string;
  navigate: keyof FitnessStackParamList;
}

const FitnessIntro = React.memo(() => {
  const {navigate} = useNavigation<NavigationProp<FitnessStackParamList>>();

  const styles = useStyleSheet(themedStyles);

  const data: ButtonProps[] = [
    {name: '01. Home Fitness', navigate: 'Fitness01'},
    {name: '02. Select Gender', navigate: 'Fitness02'},
    {name: '03. Workout Plans', navigate: 'Fitness03'},
    {name: '04. Running', navigate: 'Fitness04'},
    {name: '05. Muscles Condition Heatmap', navigate: 'Fitness05'},
    {name: '06. Workout List', navigate: 'Fitness06'},
    {name: '07. Tranning Count', navigate: 'Fitness07'},
    {name: '08. Set Plan', navigate: 'Fitness08'},
    {name: '09. Achievement', navigate: 'Fitness09'},
    {name: '10. Activity', navigate: 'Fitness10'},
  ];

  return (
    <Container style={styles.container}>
      <TopNavigation
        title={'Fitness'}
        accessoryLeft={<NavigationAction status="placeholder" />}
      />
      <FlatList
        data={data}
        contentContainerStyle={styles.content}
        renderItem={({item}) => {
          return (
            <Button
              status="primary"
              children={item.name}
              size="large"
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

export default FitnessIntro;

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
