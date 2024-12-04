import * as React from 'react';
import {Image, FlatList} from 'react-native';
import {
  StyleService,
  useStyleSheet,
  useTheme,
  TopNavigation,
} from '@ui-kitten/components';

import {Container, Text, NavigationAction, VStack, HStack} from 'components';
import Images from 'assets/images';
import keyExtractor from 'utils/keyExtractor';

const Menu01 = React.memo(() => {
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);

  const [activeButton, setActiveButton] = React.useState(0);

  return (
    <Container style={styles.container} level="5">
      <TopNavigation
        style={styles.topNavigation}
        appearance="control"
        accessoryLeft={
          <Image
            source={Images.logo}
            style={{tintColor: theme['text-white-color']}}
          />
        }
        accessoryRight={
          <NavigationAction icon="arrow_circle_right" size="giant" />
        }
      />
      <HStack style={styles.contentContainer} justify="flex-start">
        <VStack pt={32} pl={24} level="1" style={styles.content}>
          <FlatList
            data={DATA}
            keyExtractor={keyExtractor}
            renderItem={({item, index}) => {
              const isActive = index === activeButton;
              return (
                <VStack
                  mb={32}
                  onPress={() => {
                    setActiveButton(index);
                  }}>
                  <Text
                    status={isActive ? 'basic' : 'platinum'}
                    opacity={isActive ? 1 : 0.7}
                    category="h7">
                    {item.title}
                  </Text>
                </VStack>
              );
            }}
          />
        </VStack>
        <VStack style={[styles.fade, {opacity: 0.2, marginBottom: -10}]} />
        <VStack style={[styles.fade, {opacity: 0.1, marginBottom: -20}]} />
      </HStack>
    </Container>
  );
});

export default Menu01;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  topNavigation: {
    paddingLeft: 24,
  },
  contentContainer: {
    alignItems: 'flex-end',
    height: '100%',
    marginTop: 48,
  },
  content: {
    paddingBottom: 24,
    width: '75%',
    borderTopRightRadius: 16,
  },
  fade: {
    backgroundColor: 'background-basic-color-1',
    // backgroundColor: 'red',
    width: 24,
    height: '100%',
    marginLeft: -12,
    borderTopRightRadius: 16,
  },
});
const DATA = [
  {title: '01.Onboarding'},
  {title: '02.Authencation'},
  {title: '03.Socical Media'},
  {title: '04.Profile'},
  {title: '05.Food Delivery'},
  {title: '06.Finance'},
  {title: '07.E-Commerce'},
  {title: '08.Reading'},
  {title: '09.Education'},
  {title: '10.Fitness'},
];
