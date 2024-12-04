import * as React from 'react';
import {View, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  StyleService,
  useStyleSheet,
  TopNavigation,
  Icon,
} from '@ui-kitten/components';

import {Container, Text, NavigationAction, HStack} from 'components';
import Images from 'assets/images';
import FriendItem, {FriendProps} from './FriendItem';
import keyExtractor from 'utils/keyExtractor';

interface IButtonSocicalProps {
  title: string;
  people: number;
  onPress?: () => void;
}

const Social06 = React.memo(() => {
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);
  const ButtonSocial = ({title, people, onPress}: IButtonSocicalProps) => {
    return (
      <HStack
        mr={16}
        border={16}
        level="2"
        onPress={onPress}
        mb={16}
        padding={16}
        itemsCenter>
        <View>
          <Text category="h6" marginBottom={6}>
            {title}
          </Text>
          <Text category="subhead" status="platinum">
            {people} people
          </Text>
        </View>
        <Icon pack="assets" name="arrow_right" style={styles.arrow} />
      </HStack>
    );
  };
  const renderFriendItem = React.useCallback(
    ({item, onPress, level}: FriendProps) => {
      return <FriendItem item={item} level={level} onPress={onPress} />;
    },
    [],
  );
  const renderHeader = () => (
    <>
      <ButtonSocial title="Send Request" people={12} onPress={goBack} />
      <ButtonSocial title="Invitation" people={12} onPress={goBack} />
      <Text category="h4" marginTop={8} marginBottom={16}>
        Maybe you know
      </Text>
    </>
  );
  return (
    <Container style={styles.container}>
      <TopNavigation
        accessoryLeft={
          <NavigationAction
            icon="arrow_left"
            status="light-salmon"
            backgroundColor={'transparent'}
          />
        }
        accessoryRight={
          <NavigationAction
            icon="bell_ring"
            status="light-salmon"
            backgroundColor={'transparent'}
          />
        }
      />
      <Text category="h3" marginBottom={16} marginLeft={24}>
        Finds Friends
      </Text>
      <FlatList
        contentContainerStyle={[
          styles.flatListFriend,
          {paddingBottom: bottom + 60},
        ]}
        ListHeaderComponent={renderHeader}
        scrollEventThrottle={16}
        data={DATA_Friend}
        keyExtractor={keyExtractor}
        renderItem={renderFriendItem}
        numColumns={2}
      />
    </Container>
  );
});

export default Social06;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  content: {
    paddingHorizontal: 16,
  },
  arrow: {
    tintColor: 'text-primary-color',
    width: 24,
    height: 24,
  },
  flatListFriend: {
    paddingLeft: 16,
  },
});
const DATA_Friend = [
  {
    id: 0,
    name: 'Christine Stewart',
    mutualFriends: 13,
    avatar: Images.avatar.avatar01,
  },
  {
    id: 1,
    name: 'Christine Stewart',
    mutualFriends: 13,
    avatar: Images.avatar.avatar02,
  },
  {
    id: 2,
    name: 'Christine Stewart',
    mutualFriends: 13,
    avatar: Images.avatar.avatar03,
  },
  {
    id: 3,
    name: 'Christine Stewart',
    mutualFriends: 13,
    avatar: Images.avatar.avatar04,
  },
];
