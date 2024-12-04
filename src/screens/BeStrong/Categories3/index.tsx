import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleService, useStyleSheet, useTheme } from "@ui-kitten/components";
import { FlatList, SafeAreaView, Platform } from "react-native";
import { Text, Container, VStack, Content } from "components";
import keyExtractor from "utils/keyExtractor";
import useLayout from "hooks/useLayout";
import { ThemeItem, Header, BannerAds } from "../element";

const Categories3 = React.memo(() => {
  const themes = useTheme();
  const { goBack } = useNavigation();
  const { height, width, top, bottom } = useLayout();
  const styles = useStyleSheet(themedStyles);

  const renderFriendItem = React.useCallback((item: any) => {
    return (
      <ThemeItem icon={item.item.icon} background={item.item.background} />
    );
  }, []);

  return (
    <Container
      style={styles.container}
      useSafeArea={false}
    >
      <SafeAreaView>
        <Header
          accessoryLeft={{
            name: "x",
            colorIcon: "#8247E5",
          }}
          accessoryRight={{
            text: "Unlock All",
          }}
          style={{ marginHorizontal: 24 }}
        />

        <Content>
          <VStack mt={24} mb={48}>
            <VStack>
              <Text category="h4" marginBottom={16} marginHorizontal={24}>
                Themes
              </Text>
              <FlatList
                contentContainerStyle={[styles.flatListFriend]}
                scrollEventThrottle={16}
                horizontal
                data={Data}
                keyExtractor={keyExtractor}
                renderItem={renderFriendItem}
                showsHorizontalScrollIndicator={false}
              />
            </VStack>
            <VStack>
              <Text
                category="h4"
                marginTop={24}
                marginBottom={16}
                marginHorizontal={24}
              >
                Free Today
              </Text>
              <FlatList
                contentContainerStyle={[styles.flatListFriend]}
                scrollEventThrottle={16}
                horizontal
                data={Data1}
                keyExtractor={keyExtractor}
                renderItem={renderFriendItem}
                showsHorizontalScrollIndicator={false}
              />
            </VStack>
            <BannerAds style={{ marginTop: 24 }} />
            <VStack>
              <Text
                category="h4"
                marginTop={24}
                marginBottom={16}
                marginHorizontal={24}
              >
                The love
              </Text>
              <FlatList
                contentContainerStyle={[styles.flatListFriend]}
                scrollEventThrottle={16}
                horizontal
                data={Data2}
                keyExtractor={keyExtractor}
                renderItem={renderFriendItem}
                showsHorizontalScrollIndicator={false}
              />
            </VStack>
          </VStack>
        </Content>
      </SafeAreaView>
    </Container>
  );
});
export default Categories3;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  flatListFriend: {
    paddingHorizontal: 16,
  },
});

const Data = [
  {
    icon: "lock",
    background: "img_bg1",
  },
  {
    icon: "check_purple",
    background: "img_bg2",
  },
  {
    icon: "lock",
    background: "rectangle20",
  },
  {
    icon: "lock",
    background: "rectangle21",
  },
];
const Data1 = [
  {
    icon: "lock",
    background: "rectangle22",
  },
  {
    icon: "check_purple",
    background: "rectangle23",
  },
  {
    icon: "lock",
    background: "img_bg3",
  },
  {
    icon: "lock",
    background: "img_bg4",
  },
];
const Data2 = [
  {
    icon: "lock",
    background: "rectangle24",
  },
  {
    icon: "check_purple",
    background: "rectangle25",
  },
  {
    icon: "lock",
    background: "rectangle26",
  },
  {
    icon: "lock",
    background: "rectangle27",
  },
];
