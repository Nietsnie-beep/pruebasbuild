import * as React from 'react';
import {
  View,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  Layout,
  StyleService,
  useStyleSheet,
  useTheme,
  TopNavigation,
  Icon,
  Avatar,
  Button,
} from '@ui-kitten/components';

import useLayout from 'hooks/useLayout';
import Text from 'components/Text';
import Container from 'components/Container';
import NavigationAction from 'components/NavigationAction';
import Content from 'components/Content';
import keyExtractor from 'utils/keyExtractor';
import ButtonNav from './ButtonNav';
import Images from 'assets/images';
import {VStack} from 'components';

const Menu09 = React.memo(() => {
  const theme = useTheme();
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const ListHeaderComponent = () => {
    return (
      <Layout
        style={[styles.header, {backgroundColor: theme['text-basic-color']}]}>
        <View style={styles.topHeader}>
          <View style={styles.information}>
            <Avatar
              source={Images.avatar.avatar10}
              // @ts-ignore
              style={styles.avatar}
            />
            <VStack>
              <Text category="h6" status="white">
                Myrtle Burns
              </Text>
              <Text
                category="subhead"
                status="white"
                opacity={0.6}
                marginBottom={4}>
                Balance: $12,680.99
              </Text>
            </VStack>
          </View>
          <Icon pack="assets" name="arrow_circle_right" style={styles.chevron} />
        </View>
        <Button
          children={'Become Gold Member'}
          size="medium"
          style={styles.buttonGold}
          accessoryRight={() => <Icon pack="assets" name="caret_right" />}
        />
      </Layout>
    );
  };
  return (
    <Container style={styles.container}>
      <TopNavigation
        style={styles.topNavigation}
        accessoryRight={<NavigationAction size="giant" icon="xcircle" />}
      />
      <FlatList
        data={DATA}
        ListHeaderComponent={ListHeaderComponent}
        contentContainerStyle={styles.content}
        keyExtractor={keyExtractor}
        renderItem={({item}) => {
          return <ButtonNav button={item} onPress={() => {}} />;
        }}
      />
    </Container>
  );
});

export default Menu09;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  topNavigation: {
    paddingRight: 24,
  },
  content: {
    paddingHorizontal: 16,
  },
  header: {
    marginBottom: 32,
    borderRadius: 16,
    padding: 16,
  },
  information: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    marginRight: 12,
    width: 64,
    height: 64,
  },
  chevron: {
    tintColor: 'text-white-color',
  },
  buttonGold: {
    marginTop: 8,
  },
});
const DATA = [
  {
    icon: 'onboarding',
    name: 'Onboarding',
    notification: 0,
    backgroundColor: '#0084F4',
  },
  {
    icon: 'auth',
    name: 'Authentication',
    notification: 0,
    backgroundColor: '#00C48C',
  },
  {
    icon: 'social',
    name: 'Social',
    notification: 9,
    backgroundColor: '#FFA26B',
  },
  {
    icon: 'profile',
    name: 'Profiles',
    notification: 0,
    backgroundColor: '#FF647C',
  },
  {
    icon: 'food_delivery',
    name: 'Food Delivery',
    notification: 0,
    backgroundColor: '#FFCF5C',
  },
  {
    icon: 'finance',
    name: 'Finance',
    notification: 0,
    backgroundColor: '#4B66EA',
  },
];
