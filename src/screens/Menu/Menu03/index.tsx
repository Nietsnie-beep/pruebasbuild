import * as React from 'react';
import {ImageBackground, FlatList} from 'react-native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  TopNavigation,
  Avatar,
} from '@ui-kitten/components';

import {Container, Text, NavigationAction, HStack, VStack} from 'components';
import Images from 'assets/images';
import keyExtractor from 'utils/keyExtractor';

const Menu03 = React.memo(() => {
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const [activeButton, setActiveButton] = React.useState(0);
  return (
    <Container style={styles.container} useSafeArea={false}>
      <ImageBackground
        style={styles.background}
        source={Images.onboarding.onboarding02}>
        <TopNavigation
          appearance="control"
          style={[styles.topNavigation, {paddingTop: top + 8}]}
          accessoryLeft={
            <HStack itemsCenter>
              <NavigationAction status="black" icon="xcircle" size="giant" />
              <Avatar source={Images.avatar.avatar02} size="medium" />
            </HStack>
          }
        />
        <FlatList
          data={DATA}
          keyExtractor={keyExtractor}
          contentContainerStyle={styles.content}
          renderItem={({item, index}) => {
            const isActive = index === activeButton;
            return (
              <HStack
                itemsCenter
                mb={24}
                onPress={() => {
                  setActiveButton(index);
                }}>
                <HStack justify="flex-start" itemsCenter>
                  <Layout
                    level="5"
                    style={[styles.dot, {opacity: isActive ? 1 : 0}]}
                  />
                  <Text
                    category="h4"
                    uppercase
                    status={isActive ? 'primary' : 'basic'}>
                    {item.title}
                  </Text>
                </HStack>
                {item.noti && (
                  <VStack style={styles.layoutNoti} level="5" itemsCenter>
                    <Text category="h8" status="white">
                      {item.noti}
                    </Text>
                  </VStack>
                )}
              </HStack>
            );
          }}
        />
      </ImageBackground>
    </Container>
  );
});

export default Menu03;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: `#FFFFFF99`,
  },
  background: {
    width: '100%',
    height: '100%',
    opacity: 0.8,
  },
  topNavigation: {
    backgroundColor: `#FFFFFF99`,
  },
  content: {
    backgroundColor: `#FFFFFF99`,
    flexGrow: 1,
    paddingTop: 40,
  },
  layoutNoti: {
    width: 32,
    height: 24,
    borderRadius: 99,
    marginRight: 32,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 99,
    marginLeft: 24,
    marginRight: 32,
  },
});
const DATA = [
  {title: 'Onboarding', noti: 9},
  {title: 'Authencation'},
  {title: 'Socical Media'},
  {title: 'Profile'},
  {title: 'Food Delivery'},
  {title: 'Finance'},
  {title: 'E-Commerce'},
  {title: 'Reading'},
  {title: 'Education'},
  {title: 'Fitness'},
];
const Social = [
  // Icons.instagram,
  // Icons.facebook_circle,
  // Icons.twitter,
  // Icons.pinterest,
  // Icons.behance,
];
