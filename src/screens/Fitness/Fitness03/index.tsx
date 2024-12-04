import * as React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  TopNavigation,
  Icon,
} from '@ui-kitten/components';

import {Container, Content, Text, NavigationAction} from 'components';
import Images from 'assets/images';

const Fitness03 = React.memo(() => {
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  return (
    <Container style={styles.container} useSafeArea={false}>
      <Layout level="2" style={[styles.header, {paddingTop: top + 8}]}>
        <TopNavigation
          appearance="control"
          accessoryLeft={<NavigationAction status="primary" />}
          accessoryRight={<NavigationAction icon="calendar" status="primary" />}
        />
        <Text category="h3" marginLeft={12} marginBottom={8}>
          WorkoutPlans
        </Text>
      </Layout>
      <Content>
        <Text
          children="Run with friends"
          category="h5"
          marginLeft={24}
          marginTop={24}
          marginBottom={16}
        />
        <Content horizontal contentContainerStyle={styles.contentRun}>
          {DATA.map((item, index) => {
            return (
              <TouchableOpacity activeOpacity={0.7} key={index}>
                <Layout style={[styles.item, {width: width - 155}]} level="2">
                  <Icon pack="assets" name="heart" style={styles.heart} />
                  <Image
                    source={item.image}
                    /* @ts-ignore */
                    style={styles.image}
                  />
                  <Text
                    children={item.title}
                    category="h6"
                    marginLeft={24}
                    marginBottom={4}
                    marginTop={24}
                  />
                  <Text
                    children={item.duration}
                    category="subhead"
                    marginLeft={24}
                    marginBottom={24}
                  />
                </Layout>
              </TouchableOpacity>
            );
          })}
        </Content>
        <Text
          children="Collections"
          category="h5"
          marginLeft={24}
          marginTop={24}
          marginBottom={16}
        />
        <Content horizontal contentContainerStyle={styles.contentCollection}>
          {DATA_COLLECTION.map((item, _) => {
            return (
              <TouchableOpacity key={_}>
                <Layout
                  level={'9'}
                  style={[styles.itemCollect, {width: width - 95}]}>
                  <Image
                    source={item.image}
                    /* @ts-ignore */
                    style={styles.image}
                  />
                  <Text children={item.title} marginLeft={24} category="h6" />
                  <Text
                    children={item.des}
                    marginBottom={16}
                    marginTop={4}
                    marginLeft={24}
                    category="subhead"
                  />
                </Layout>
              </TouchableOpacity>
            );
          })}
        </Content>
      </Content>
    </Container>
  );
});

export default Fitness03;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  header: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    paddingHorizontal: 4,
  },
  contentRun: {
    paddingHorizontal: 24,
  },
  heart: {
    position: 'absolute',
    top: 16,
    right: 16,
    tintColor: 'text-primary-color',
  },
  item: {
    marginRight: 16,
    borderRadius: 16,
  },
  image: {
    marginTop: 24,
    alignSelf: 'center',
  },
  contentCollection: {
    paddingHorizontal: 24,
  },
  itemCollect: {
    marginRight: 16,
    borderRadius: 16,
  },
});
const DATA = [
  {
    image: Images.fitness.workout01,
    title: 'Running Outdoor',
    duration: '27 mins',
  },
  {
    image: Images.fitness.workout03,
    title: 'Running Outdoor',
    duration: '27 mins',
  },
];
const DATA_COLLECTION = [
  {
    id: 0,
    title: 'Running Outdoor',
    des: '12 Workouts - All Level',
    image: Images.fitness.workout02,
    levelLayout: '5',
  },
  {
    id: 0,
    title: 'Running Outdoor',
    des: '12 Workouts - All Level',
    image: Images.fitness.workout02,
    levelLayout: '4',
  },
];
