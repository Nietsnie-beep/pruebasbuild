import React from 'react';
import {View, TouchableOpacity, ImageSourcePropType} from 'react-native';
import {
  StyleService,
  useStyleSheet,
  Layout,
  Icon,
  Avatar,
} from '@ui-kitten/components';
import Text from 'components/Text';

interface Props {
  onPress?(): void;
  data: ImageSourcePropType[];
  pressAddFriend?(): void;
}

const BottomAddFriend = ({onPress, data, pressAddFriend}: Props) => {
  const styles = useStyleSheet(themedStyles);
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <Layout level="1" style={styles.layout}>
        <View style={styles.topLayout}>
          <Text children="Run with friends" category="h6" />
          <TouchableOpacity activeOpacity={0.7}>
            <Icon pack="assets" name="arrow_circle_right" style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.friendView}>
          {data.map((item, index) => {
            return (
              <Avatar
                size="large"
                key={index}
                source={item}
                /* @ts-ignore */
                style={styles.avatar}
              />
            );
          })}
          <TouchableOpacity onPress={pressAddFriend} activeOpacity={0.7}>
            <Icon
              pack="assets"
              name="plus_circle"
              style={styles.iconAddFriend}
            />
          </TouchableOpacity>
        </View>
      </Layout>
    </TouchableOpacity>
  );
};

export default BottomAddFriend;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  topLayout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  layout: {
    marginTop: 32,
    borderRadius: 16,
    padding: 24,
    borderWidth: 0.6,
    borderColor: 'background-basic-color-3',
  },
  icon: {
    tintColor: 'text-primary-color',
  },
  friendView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  avatar: {
    marginRight: 4,
  },
  iconAddFriend: {
    tintColor: 'text-basic-color',
    width: 56,
    height: 56,
    marginLeft: 4,
  },
});
