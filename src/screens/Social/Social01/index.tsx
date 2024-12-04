import * as React from 'react';
import {Image, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  Icon,
  Avatar,
} from '@ui-kitten/components';

import {Container, IDivider, HStack} from 'components';
import Images from 'assets/images';
import NewFeedItem, {NewFeedItemProps} from '../elements/NewFeedItem';
import {Status_Types_Enum} from 'constants/Type';
import keyExtractor from 'utils/keyExtractor';
import NewFeedList from '../elements/NewFeedList';

const Social01 = React.memo(() => {
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const renderItem = React.useCallback(({item}: {item: NewFeedItemProps}) => {
    return <NewFeedItem data={item} />;
  }, []);
  return (
    <Container style={styles.container} useSafeArea={false}>
      <Layout level="6" style={[styles.top, {paddingTop: top}]}>
        <HStack mh={16} itemsCenter>
          <Image source={Images.logo} />
          <TouchableOpacity onPress={goBack}>
            <Icon pack="assets" name="circles_four" />
          </TouchableOpacity>
        </HStack>
        <NewFeedList
          data={data}
          accessoryLeft={
            <TouchableOpacity style={styles.user}>
              <Avatar source={Images.avatar.avatar} size="giant" />
              <Icon pack="assets" name="add_new" style={styles.add} />
            </TouchableOpacity>
          }
        />
      </Layout>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingTop: 24, paddingBottom: bottom + 60}}
        data={DATA_OWNER}
        scrollEventThrottle={16}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <IDivider marginBottom={16} />}
      />
    </Container>
  );
});

export default Social01;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  top: {
    paddingBottom: 24,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  user: {},
  add: {
    position: 'absolute',
    zIndex: 100,
    bottom: 0,
    right: 0,
  },
});
export const DATA_OWNER: NewFeedItemProps[] = [
  {
    title:
      'Non-fungible tokens (NFTs) seem to have exploded out of the ether this year.',
    user: {
      id: '1',
      name: 'Christine Stewart',
      avatar: Images.avatar.avatar,
      status: Status_Types_Enum.Online,
      sub_title: 'NFT',
    },
    id: '0',
    images: [
      Images.rectangle.rectangle_01,
      Images.rectangle.rectangle_02,
      Images.rectangle.rectangle_03,
    ],
    like_number: 124,
    comment_number: 24,
    commented: false,
    liked: false,
    bookmark: false,
    create_at: '2022-12-05T07:41:01.968Z',
  },
  {
    title:
      'Non-fungible tokens (NFTs) seem to have exploded out of the ether this year.',
    user: {
      id: '2',
      name: 'Christine Stewart',
      avatar: Images.avatar.avatar01,
      status: Status_Types_Enum.Offline,
      sub_title: 'NFT',
    },
    id: '1',
    images: [
      Images.rectangle.rectangle_03,
      Images.rectangle.rectangle_04,
      Images.rectangle.rectangle_05,
    ],
    like_number: 124,
    comment_number: 24,
    commented: false,
    liked: false,
    bookmark: false,
    create_at: '2022-12-05T07:41:01.968Z',
  },
];
const data = [
  Images.avatar.avatar01,
  Images.avatar.avatar02,
  Images.avatar.avatar03,
  Images.avatar.avatar04,
];
