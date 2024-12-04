import * as React from 'react';
import {FlatList} from 'react-native';
import {useLayout} from 'hooks';
import {
  StyleService,
  useStyleSheet,
  Icon,
  Input,
  Button,
} from '@ui-kitten/components';

import {Container, Text, NavigationAction, HStack, VStack} from 'components';
import keyExtractor from 'utils/keyExtractor';

const Menu07 = React.memo(() => {
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  return (
    <Container style={styles.container} useSafeArea={false}>
      <HStack style={styles.layout}>
        <VStack level="5" pt={top + 8} style={styles.content}>
          <Input
            placeholder="Type something..."
            accessoryLeft={<Icon pack="assets" name="search" />}
            style={styles.input}
            status="transparent"
          />
          <FlatList
            data={DATA}
            keyExtractor={keyExtractor}
            renderItem={({item, index}) => {
              return (
                <HStack justify="flex-start" pv={20}>
                  <Icon pack="assets" name={item.icon} style={styles.icon} />
                  <Text category="h6" status="white" marginLeft={16}>
                    {item.name}
                  </Text>
                </HStack>
              );
            }}
          />
          <Button children={'Register Now!'} status="white-primary" />
        </VStack>
        <VStack style={styles.shadow} level="5" />
        <NavigationAction
          icon="xcircle"
          status="primary"
          size="giant"
          marginTop={top + 8}
        />
      </HStack>
    </Container>
  );
});

export default Menu07;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    borderBottomRightRadius: 16,
    paddingBottom: 32,
    paddingHorizontal: 24,
  },
  layout: {
    flex: 1,
    marginBottom: 48,
  },
  shadow: {
    width: 12,
    opacity: 0.5,
    height: '96%',
    borderBottomRightRadius: 16,
  },
  icon: {
    tintColor: 'text-white-color',
    transform: [
      {
        scale: 1.4,
      },
    ],
  },
  input: {
    marginBottom: 80,
  },
});

const DATA = [
  {icon: 'onboarding', name: 'Onboarding'},
  {icon: 'auth', name: 'Authentication'},
  {icon: 'social', name: 'Social'},
  {icon: 'profile', name: 'Profiles'},
  {icon: 'food_delivery', name: 'Food Delivery'},
  {icon: 'finance', name: 'Finance'},
  {icon: 'commerce', name: 'E-Commerce'},
];
