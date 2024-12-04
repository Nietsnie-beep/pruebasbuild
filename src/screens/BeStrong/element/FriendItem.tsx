import * as React from 'react';
import {useLayout} from 'hooks';
import {ImageSourcePropType} from 'react-native';
import {
  StyleService,
  useStyleSheet,
  Avatar,
  Button,
} from '@ui-kitten/components';

import {Text, HStack, VStack} from 'components';
interface IFriendProps {
  id: number;
  avatar: ImageSourcePropType;
  name: string;
  mutualFriends: number;
}
export interface FriendProps {
  item: IFriendProps;
  onPress?(): void;
  level?: '1' | '2' | '3' | '4';
}
const FriendItem = ({item, onPress, level = '2'}: FriendProps) => {
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  return (
    <VStack style={[styles.container, {width: (width - 64) / 2}]} level={level}>
      <Avatar
        source={item.avatar}
        size="giant"
        /* @ts-ignore */
        style={styles.avatar}
      />
      <Text children={item.name} category="callout" marginBottom={8} center />
      <Text
        children={`${item.mutualFriends} quotes`}
        status="snow"
        category="subhead"
        marginBottom={16}
        center
      />
    </VStack>
  );
};

export default FriendItem;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 16,
    marginBottom: 16,
  },
  avatar: {
    marginTop: 24,
    marginBottom: 18,
  },
});
