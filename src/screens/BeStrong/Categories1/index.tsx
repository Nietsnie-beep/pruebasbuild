import * as React from "react";
import { ScrollView, TouchableOpacity, SafeAreaView } from "react-native";
import { useLayout } from "hooks";
import {
  StyleService,
  TopNavigation,
  useStyleSheet,
  useTheme,
} from "@ui-kitten/components";

import { Text, HStack, Container, VStack, Content } from "components";
import Carousel from "react-native-reanimated-carousel";
import Animated, {
  useSharedValue,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import {
  BottomTabBar,
  Header,
  Pagination,
  TopBookItem,
  BannerAds,
  QuotesItem,
  NavigationAction,
} from "../element";

const Categories1 = React.memo(() => {
  const themes = useTheme();
  const { height, width, top, bottom } = useLayout();
  const styles = useStyleSheet(themedStyles);
  const progressValue = useSharedValue<number>(0);

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
        accessoryRight={() => (
          <Text category="h8" status="primary">
            Unlock All
          </Text>
        )}
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
          height={180 * (height / 812)}
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
        <HStack justify="center">
          {data.map((_, index) => {
            return (
              <Pagination
                index={index}
                animValue={progressValue}
                key={index}
                length={data.length}
                backgroundColor={themes["color-primary-100"]}
              />
            );
          })}
        </HStack>
        <VStack mt={30} mb={16}>
          <HStack justify="space-around" gap={15} mh={16}>
            <QuotesItem title="General" amount={128} />
            <QuotesItem title="Favorites" amount={128} status={true} />
          </HStack>
        </VStack>
        <BannerAds />
        <VStack mv={16}>
          <Text category="h5" marginLeft={16} marginBottom={16}>
            Free Today
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <HStack gap={8} ml={16}>
              {Quotes.map((item, i) => {
                return (
                  <TouchableOpacity key={i}>
                    <QuotesItem
                      title={item.title}
                      amount={item.amount}
                      status={item.status}
                    />
                  </TouchableOpacity>
                );
              })}
            </HStack>
          </ScrollView>
        </VStack>
      </Content>
      <BottomTabBar />
    </Container>
  );
});
export default Categories1;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  topNavigation: {
    marginHorizontal: 24,
  },
  content: {
    paddingTop: 16,
    paddingBottom: 80,
    flexGrow: 1,
  },
});

const data = new Array(6).fill(null);

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
const colors = ["color-primary-100", "color-emerald-100"];
