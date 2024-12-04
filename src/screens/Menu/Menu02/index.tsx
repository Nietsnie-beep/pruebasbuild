import * as React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {
  StyleService,
  useStyleSheet,
  TopNavigation,
  Avatar,
  Divider,
} from '@ui-kitten/components';

import Container from 'components/Container';
import NavigationAction from 'components/NavigationAction';
import Images from 'assets/images';
import keyExtractor from 'utils/keyExtractor';
import ButtonDrop from './ButtonDrop';
import {VStack} from 'components';

const Menu02 = React.memo(() => {
  const styles = useStyleSheet(themedStyles);

  const [activeIndex, setActiveIndex] = React.useState(0);

  const ref = React.useRef<FlatList>(null);
  return (
    <Container style={styles.container}>
      <TopNavigation
        style={styles.topNavigation}
        accessoryRight={<NavigationAction status='primary' icon='arrow_circle_right'/>}
        accessoryLeft={<Avatar source={Images.logo} />}
      />
      <VStack style={[styles.fade,{opacity:0.2}]} level="5" mh={60} mt={12}/>
      <VStack style={[styles.fade,{opacity:0.4}]} level="5" mh={40}/>
      <VStack level="5" mh={8} border={16} style={styles.layout}>
        <FlatList
          contentContainerStyle={styles.content}
          data={DATA}
          ref={ref}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setActiveIndex(index);
                }}>
                <ButtonDrop
                  title={item.title}
                  data={item.data}
                  style={{marginTop: index > 0 ? 24 : 0}}
                />
              </TouchableOpacity>
            );
          }}
          keyExtractor={keyExtractor}
          ItemSeparatorComponent={() => <Divider style={styles.divider} />}
        />
      </VStack>
    </Container>
  );
});

export default Menu02;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  topNavigation: {
    marginLeft: 16,
  },
  layout: {
    height: '100%',
  },
  content: {
    borderRadius: 16,
    flexGrow: 1,
    padding: 24,
  },
  divider: {
    backgroundColor: 'background-basic-color-5',
    opacity: 0.2,
    marginTop: 24,
  },
  fade: {
    height: 8,
    borderTopLeftRadius:16,
    borderTopRightRadius:16,
  },
});
const DATA = [
  {
    title: 'Onboarding',
    data: [{name: 'Onboarding 01'}, {name: 'Onboarding 02'}],
  },
  {
    title: 'Authencation',
    data: [{name: 'Sign In'}, {name: 'Sign Up'}, {name: 'Forgot Password'}],
  },
  {
    title: 'Socical Media',
    data: [{name: 'New Feed'}, {name: 'Post'}, {name: 'Messager'}],
  },
  {
    title: 'Profile',
    data: [
      {name: 'Profile 01'},
      {name: 'Profile 02'},
      {name: 'Profile 03'},
      {name: 'Profile 04'},
    ],
  },
  {
    title: 'Food Delivery',
    data: [
      {name: 'Food & Drink'},
      {name: 'Food Details'},
      {name: 'Restaurant'},
      {name: 'My Order'},
    ],
  },
  {
    title: 'Finance',
    data: [
      {name: 'Month Chart'},
      {name: 'List Transaction'},
      {name: 'Add Transaction'},
      {name: 'Categories Transaction'},
    ],
  },
  {
    title: 'E-Commerce',
    data: [
      {name: 'Categories'},
      {name: 'Grid Product'},
      {name: 'List Product'},
      {name: 'Shop - Reviews'},
    ],
  },
  {
    title: 'Reading',
    data: [{name: 'Audio Book'}, {name: 'Reading'}, {name: 'List Books'}],
  },
  {
    title: 'Education',
    data: [
      {name: 'My Course'},
      {name: 'Course Details'},
      {name: 'Payment'},
      {name: 'Course Statisic'},
    ],
  },
  {
    title: 'Fitness',
    data: [
      {name: 'Workout List'},
      {name: 'Set Plan'},
      {name: 'Activity'},
      {name: 'Running'},
    ],
  },
];
