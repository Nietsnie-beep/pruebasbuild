import * as React from 'react';
import {FlatList} from 'react-native';
import {
  StyleService,
  useStyleSheet,
  TopNavigation,
  Avatar,
  Icon,
} from '@ui-kitten/components';

import {Container, Text, NavigationAction, HStack} from 'components';
import Images from 'assets/images';
import keyExtractor from 'utils/keyExtractor';

const Menu04 = React.memo(() => {
  const styles = useStyleSheet(themedStyles);

  return (
    <Container style={styles.container}>
      <TopNavigation
        style={styles.topNavigation}
        accessoryLeft={
          <NavigationAction icon="arrow_circle_right" status="primary" />
        }
        accessoryRight={<Avatar source={Images.avatar.avatar10} size="small" />}
      />
      <FlatList
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.contentContainer}
        data={DATA}
        renderItem={({item, index}) => {
          return (
            <HStack style={[styles.button, {backgroundColor: item.color}]}>
              <Icon pack="assets" name={item.icon} />
              <Text category="h6" marginLeft={12} status="white">
                {item.name}
              </Text>
            </HStack>
          );
        }}
      />
    </Container>
  );
});

export default Menu04;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  topNavigation: {
    paddingRight: 16,
  },
  button: {
    paddingTop: 30,
    paddingBottom: 24,
    marginHorizontal: 8,
    borderRadius: 24,
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    paddingTop: 40,
  },
});
const DATA = [
  {icon: 'onboarding', name: 'Onboarding', color: '#205090'},
  {icon: 'auth', name: 'Authentication', color: '#00C48C'},
  {icon: 'social', name: 'Social', color: '#0084F4'},
  {icon: 'profile', name: 'Profiles', color: '#FFCF5C'},
  {icon: 'food_delivery', name: 'Food Delivery', color: '#FF647C'},
  {icon: 'finance', name: 'Finance', color: '#FFA26B'},
  {icon: 'commerce', name: 'E-Commerce', color: '#1F2933'},
  {icon: 'commerce', name: 'Reading', color: '#00CD50'},
];
