import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleService,
  useStyleSheet,
  Input,
  Icon,
  useTheme,
} from "@ui-kitten/components";
import { useLayout } from "hooks";
import { Text, HStack, Container, VStack } from "components";
import { FlatList, TouchableOpacity } from "react-native";
import keyExtractor from "utils/keyExtractor";
import Images from "assets/images";
import FriendItem, { FriendProps } from "../element/FriendItem";
import { BottomTabBar, Header } from "../element";

interface IButtonSocicalProps {
  title: string;
  people: number;
  onPress?: () => void;
}

const Author = React.memo(() => {
  const themes = useTheme();
  const { height, width, top, bottom } = useLayout();
  const { goBack } = useNavigation();

  const styles = useStyleSheet(themedStyles);

  const renderFriendItem = React.useCallback(
    ({ item, onPress, level }: FriendProps) => {
      return <FriendItem item={item} level={level} onPress={onPress} />;
    },
    []
  );

  return (
    <Container style={styles.container}>
      <Header
        title="Author"
        accessoryLeft={{
          name: "equals",
        }}
        style={{ marginBottom: 16 }}
      />
      <FlatList
        ListHeaderComponent={() => (
          <Input
            accessoryLeft={(props) => (
              <Icon
                {...props}
                pack="assets"
                name="search16"
                style={styles.icon}
              />
            )}
            placeholder="Search author"
            style={styles.input}
            size="small"
          />
        )}
        contentContainerStyle={[
          styles.flatListFriend,
          { paddingBottom: bottom + 60 },
        ]}
        scrollEventThrottle={16}
        data={DATA_Friend}
        keyExtractor={keyExtractor}
        renderItem={renderFriendItem}
        numColumns={2}
      />
      <BottomTabBar />
    </Container>
  );
});
export default Author;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },

  input: {
    borderRadius: 99,
    marginBottom: 24,
  },
  icon: {
    marginLeft: 12,
  },
  flatListFriend: {
    paddingLeft: 16,
  },
});

const DATA_Friend = [
  {
    id: 0,
    name: "Christine Stewart",
    mutualFriends: 13,
    avatar: Images.avatar.avatar01,
  },
  {
    id: 1,
    name: "Christine Stewart",
    mutualFriends: 13,
    avatar: Images.avatar.avatar02,
  },
  {
    id: 2,
    name: "Christine Stewart",
    mutualFriends: 13,
    avatar: Images.avatar.avatar03,
  },
  {
    id: 3,
    name: "Christine Stewart",
    mutualFriends: 13,
    avatar: Images.avatar.avatar04,
  },
  {
    id: 4,
    name: "Christine Stewart",
    mutualFriends: 13,
    avatar: Images.avatar.avatar01,
  },
  {
    id: 5,
    name: "Christine Stewart",
    mutualFriends: 13,
    avatar: Images.avatar.avatar02,
  },
];
