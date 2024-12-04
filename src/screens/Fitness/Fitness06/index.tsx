import * as React from 'react';
import {Image} from 'react-native';
import {
  StyleService,
  useStyleSheet,
  TopNavigation,
} from '@ui-kitten/components';

import {Container, Content, Text, NavigationAction} from 'components';
import Images from 'assets/images';
import WorkoutItem from './WorkoutItem';

const Fitness06 = React.memo(() => {
  const styles = useStyleSheet(themedStyles);

  return (
    <Container style={styles.container}>
      <TopNavigation
        accessoryLeft={<NavigationAction status="primary" />}
        accessoryRight={
          <NavigationAction icon="circles_four" status="primary" />
        }
      />
      <Content contentContainerStyle={styles.content}>
        <Image source={Images.fitness.workout04} />
        <Text category="h4" marginTop={24} marginBottom={16}>
          12 Asseessment
        </Text>
        {DATA.map((item, index) => {
          return <WorkoutItem data={item} key={index} />;
        })}
      </Content>
    </Container>
  );
});

export default Fitness06;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  content: {
    paddingHorizontal: 16,
  },
});
const DATA = [
  {
    id: 0,
    title: 'Begin Assessment',
    times: 20,
    rep: 3,
    image: Images.fitness.workout05,
  },
  {
    id: 1,
    title: 'Begin Assessment',
    times: 20,
    rep: 3,
    image: Images.fitness.workout06,
  },
  {
    id: 2,
    title: 'Begin Assessment',
    times: 20,
    rep: 3,
    image: Images.fitness.workout07,
  },
  {
    id: 3,
    title: 'Begin Assessment',
    times: 20,
    rep: 3,
    image: Images.fitness.workout08,
  },
];
