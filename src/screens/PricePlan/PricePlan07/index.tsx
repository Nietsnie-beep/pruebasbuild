import React from "react";
import { Image, FlatList, ImageSourcePropType } from "react-native";
// ----------------------------- UI kitten -----------------------------------
import {
  TopNavigation,
  StyleService,
  useStyleSheet,
  useTheme,
  Divider,
} from "@ui-kitten/components";
// ----------------------------- Navigation -----------------------------------
import { useNavigation } from "@react-navigation/native";
// ----------------------------- Hooks ---------------------------------------
import { useLayout } from "hooks";
// ----------------------------- Assets ---------------------------------------
import Images from "assets/images";
// ----------------------------- Components && Elements -----------------------
import {
  Container,
  Content,
  Text,
  NavigationAction,
  VStack,
  HStack,
} from "components";
import { useSharedValue, withTiming } from "react-native-reanimated";
import keyExtractor from "utils/keyExtractor";
import Item from "./Item";
import { waitUtil } from "utils/waitUtil";
import PaginationItem from "./Pagination";

const PricePlan07 = React.memo(() => {
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);
  const { goBack } = useNavigation();
  const { height, width, top, bottom } = useLayout();

  const [selectOption, setOption] = React.useState(0);

  const ref = React.useRef<
    FlatList<{
      title: string;
      image?: ImageSourcePropType;
      price: string;
      options: string[];
    }>
  >(null);
  const progress = useSharedValue(0);

  const data = [
    {
      title: "Base",
      image: Images.priceplan.priceplan06,
      price: "$29",
      options: [
        "1000 Credits",
        "Ultimated generation",
        "Full Style",
        "Remove Ads",
      ],
    },
    {
      title: "Base",
      price: "$29",
      options: [
        "1000 Credits",
        "Ultimated generation",
        "Full Style",
        "Remove Ads",
      ],
    },
    {
      title: "Base",
      price: "$29",
      options: [
        "1000 Credits",
        "Ultimated generation",
        "Full Style",
        "Remove Ads",
      ],
    },
    {
      title: "Base",
      price: "$29",
      options: [
        "1000 Credits",
        "Ultimated generation",
        "Full Style",
        "Remove Ads",
      ],
    },
  ];
  React.useEffect(() => {
    waitUtil(250).then(() => {
      ref.current?.scrollToIndex({
        index: selectOption,
        animated: true,
        viewOffset: 0.5,
        viewPosition: 0.25,
      });
      progress.value = withTiming(selectOption);
    });
  });

  const renderPagination = React.useCallback(() => {
    return (
      <>
        {data.map((item, index) => {
          return (
            <PaginationItem
              backgroundColor={theme["text-primary-color"]}
              animValue={progress}
              index={index}
              key={index}
              length={data.length}
            />
          );
        })}
      </>
    );
  }, [data, progress, theme]);
  return (
    <Container style={styles.container}>
      <TopNavigation
        style={styles.topNavigation}
        appearance="control"
        accessoryLeft={() => <Image source={Images.priceplan.logo_white} />}
        accessoryRight={() => (
          <NavigationAction
            marginLeft={16}
            size="giant"
            icon="x"
            backgroundColor={"#FBF0EA"}
            status="dark"
          />
        )}
      />
      <Content contentContainerStyle={styles.content}>
        <VStack mh={32} justify="flex-start" gap={16} mb={40}>
          <Text category="h2">Be Happy{"\n"}Choose your plan</Text>
          <Text>Assistant Director of Student</Text>
        </VStack>
        <FlatList
          horizontal
          contentContainerStyle={styles.contentOpt}
          data={data}
          ref={ref}
          keyExtractor={keyExtractor}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <Item
                item={item}
                index={index}
                activeIndex={selectOption}
                onPress={() => {
                  setOption(index);
                }}
              />
            );
          }}
        />
      </Content>
      <HStack mh={32}>{renderPagination()}</HStack>
    </Container>
  );
});

export default PricePlan07;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: "#E5CABF",
  },
  topNavigation: {
    paddingLeft: 24,
    paddingRight: 8,
  },
  content: {
    marginTop: 16,
  },
  contentOpt: {
    paddingHorizontal: 32,
    gap: 16,
  },
});
