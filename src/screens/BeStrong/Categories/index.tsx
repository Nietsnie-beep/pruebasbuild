import * as React from "react";
import { useLayout } from "hooks";
import {
  StyleService,
  useStyleSheet,
  useTheme,
  TopNavigation,
  ViewPager,
} from "@ui-kitten/components";

import { Text, HStack, Container, VStack, Content } from "components";
import Carousel from "react-native-reanimated-carousel";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { BottomTabBar, NavigationAction, Pagination } from "../element";
import TabBar from "./TabBar";
import QuotesItem from "./QuotesItem";

const Categories = React.memo(() => {
  const themes = useTheme();
  const { height, width, top, bottom } = useLayout();
  const styles = useStyleSheet(themedStyles);
  const progressValue = useSharedValue<number>(0);
  const [indexSelect, setIndexSelect] = React.useState<number>(0);

  const animationStyle = React.useCallback((value: number) => {
    "worklet";

    const zIndex = interpolate(value, [-1, 0, 1], [0, 5, 10]);
    const opacity = interpolate(value, [-1, 0, 1], [0, 1, 1]);
    const translateY = interpolate(value, [-1, 0, 1, 2], [180, 2, 0, 180]);
    return {
      transform: [{ translateY }],
      zIndex,
      // opacity,
    };
  }, []);
  return (
    <Container style={styles.container}>
      <TopNavigation
        style={styles.topNavigation}
        accessoryLeft={<NavigationAction icon="equals" />}
        accessoryRight={() => <NavigationAction icon={"crown"} />}
      />
      <Content contentContainerStyle={styles.content}>
        <Carousel
          data={SAMPLE}
          style={{
            width: width - 32,
            alignSelf: "center",
            height: 182 * (height / 812),
            alignItems: "center",
            justifyContent: "center",
          }}
          vertical
          width={width - 32}
          height={172 * (height / 812)}
          pagingEnabled
          snapEnabled
          onProgressChange={(_, absoluteProgress) =>
            (progressValue.value = absoluteProgress)
          }
          customAnimation={animationStyle}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 50,
          }}
          loop
          renderItem={({ item, index, animationValue }) => {
            const styled = useAnimatedStyle(() => {
              const margin = interpolate(
                animationValue.value,
                [-1, 0, 1, 2],
                [32, 16, 0, 16]
              );
              const scale = interpolate(
                animationValue.value,
                [-1, 0, 1, 2],
                [0.95, 0.95, 1, 1]
              );
              return {
                margin: margin,
                transform: [{ scale }],
              };
            });
            return (
              <Animated.View key={index} style={styled}>
                <VStack
                  style={{
                    backgroundColor: item.color,
                    padding: 24,
                    borderRadius: 16,
                  }}
                >
                  <Text category="callout" marginBottom={16} status="white">
                    {item.title}
                  </Text>
                  <Text status="grey" category="subhead">
                    - {item.author}
                  </Text>
                </VStack>
              </Animated.View>
            );
          }}
        />
        <HStack mt={4} justify="center" mb={32}>
          {SAMPLE.map((_, index) => {
            return (
              <Pagination
                index={index}
                animValue={progressValue}
                key={index}
                length={SAMPLE.length}
                backgroundColor={themes["text-primary-color"]}
              />
            );
          })}
        </HStack>
        <TabBar
          tabs={TABS}
          selectedTab={indexSelect}
          onSelect={setIndexSelect}
        />
        <ViewPager
          selectedIndex={indexSelect}
          onSelect={setIndexSelect}
          style={styles.viewPager}
          swipeEnabled={false}
        >
          <VStack style={styles.page}>
            <Content horizontal contentContainerStyle={styles.contentQuote}>
              {CONTENTS.map((item, index) => {
                return <QuotesItem key={index} item={item} />;
              })}
            </Content>
          </VStack>
          <VStack></VStack>
          <VStack></VStack>
        </ViewPager>
      </Content>
      <BottomTabBar />
    </Container>
  );
});
export default Categories;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  topNavigation: {
    paddingHorizontal: 24,
  },
  content: {
    paddingTop: 16,
  },
  viewPager: {
    flex: 1,
    paddingTop: 20,
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  contentQuote: {
    marginHorizontal: 16,
    paddingRight: 32,
  },
  page: {
    flex: 1,
  },
});

const CONTENTS = [
  {
    title:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. ",
    author: "Marilyn Monroe",
    color: "#FBF0EA",
  },
  {
    title:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. ",
    author: "Marilyn Monroe",
    color: "#E5CABF",
  },
  {
    title:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. ",
    author: "Marilyn Monroe",
    color: "#5784E8",
  },
];
const TABS = [
  {
    title: "Finance",
    icon: "coins",
  },
  {
    title: "Future Life",
    icon: "coffe",
  },
  {
    title: "Travel",
    icon: "sun",
  },
];
const SAMPLE = [
  {
    title:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author: "Albert Einstein",
    color: "#5784E8",
  },
  {
    title:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author: "Albert Einstein",
    color: "#E5CABF",
  },
  {
    title:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author: "Albert Einstein",
    color: "#00C48C",
  },
  {
    title:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author: "Albert Einstein",
    color: "#FFA26B",
  },
  {
    title:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author: "Albert Einstein",
    color: "#5784E8",
  },
  {
    title:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author: "Albert Einstein",
    color: "#FFA26B",
  },
];

const Quotes = [
  {
    title: "Love",
    amount: 128,
    status: false,
  },
  {
    title: "Bestrong",
    amount: 124,
    status: false,
  },
  {
    title: "Favorites",
    amount: 128,
    status: false,
  },
];
const colors = ["color-primary-100", "color-emerald-100"];
