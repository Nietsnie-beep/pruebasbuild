import * as React from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayout } from "hooks";
import {
  Button,
  StyleService,
  useStyleSheet,
  useTheme,
} from "@ui-kitten/components";

import { Container, Content, Text, VStack, HStack } from "components";
import Images from "assets/images";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import Pagination from "../elements/Pagination";

const Onboarding10 = React.memo(() => {
  const theme = useTheme();
  const { goBack } = useNavigation();
  const { height, width, top, bottom } = useLayout();
  const styles = useStyleSheet(themedStyles);

  const refCarousel = React.useRef<ICarouselInstance>(null);
  const progressValue = useSharedValue<number>(0);
  const size_image = 240 * (width / 375);
  const config = {
    pagingEnabled: true,
    snapEnabled: true,
    width: size_image + 32,
    height: size_image,
    windowSize: width,
    loop: false,
  };

  const RenderItem = ({ item, index }: { item: any; index: number }) => {
    const styled = useAnimatedStyle(() => {
      let inputRange = [index - 1, index, index + 1];
      let outputRange = [0.8, 1, 0.8];
      const scale = interpolate(progressValue.value, inputRange, outputRange);
      return {
        marginLeft: 32,
        transform: [
          {
            scale: scale,
          },
        ],
      };
    });
    return (
      <Animated.View style={styled}>
        <Image
          source={item.image}
          style={{ width: size_image, height: size_image }}
        />
      </Animated.View>
    );
  };

  const RenderText = ({
    title,
    describe,
    index,
  }: {
    title: string;
    describe: string;
    index: number;
  }) => {
    const styled = useAnimatedStyle(() => {
      let inputRange = [index - 1, index, index + 1];
      let outputRange = [0, 1, 0];
      const opacity = interpolate(progressValue.value, inputRange, outputRange);
      return {
        marginLeft: 32,
        opacity: opacity,
        position: "absolute",
        marginHorizontal: 32,
      };
    });
    return (
      <Animated.View style={styled}>
        <Text category="h2">{title}</Text>
      </Animated.View>
    );
  };

  return (
    <Container style={styles.container}>
      <Image
        source={Images.logo}
        //@ts-ignore
        style={styles.logo}
      />
      <Content contentContainerStyle={styles.content}>
        <Carousel
          {...config}
          modeConfig={{
            parallaxScrollingScale: 0.8,
          }}
          data={data}
          style={{ width: "100%" }}
          onProgressChange={(_, absoluteProgress) => {
            progressValue.value = absoluteProgress;
          }}
          ref={refCarousel}
          renderItem={({ item, index }) => {
            return <RenderItem item={item} index={index} />;
          }}
        />
        <HStack justify="center" mv={32}>
          {data.map((item, index) => {
            return (
              <Pagination
                key={index}
                index={index}
                backgroundColor={theme["color-primary-100"]}
                length={data.length}
                animValue={progressValue}
              />
            );
          })}
        </HStack>
        <VStack>
          {data.map((item, i) => {
            return (
              <RenderText
                title={item.title}
                describe={item.title}
                key={i}
                index={i}
              />
            );
          })}
        </VStack>
      </Content>
      <VStack mh={32}>
        <Button children={"Get Starter"} onPress={goBack} />
        <Text
          center
          category="h7"
          status="primary"
          marginVertical={20}
          onPress={goBack}
        >
          Skip
        </Text>
      </VStack>
    </Container>
  );
});

export default Onboarding10;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 48,
    height: 48,
    marginLeft: 24,
    marginBottom: 20,
  },
  content: {
    flexGrow: 1,
  },
});

const data = [
  {
    image: Images.onboarding.onboarding04,
    title: "How to create awesome content for the finance sector.",
  },
  {
    image: Images.onboarding.onboarding05,
    title: "Souper Sunday for soup recipes",
  },
  {
    image: Images.onboarding.onboarding01,
    title: "Dreams create strength people",
  },
  {
    image: Images.onboarding.onboarding02,
    title: "That Every Business Must Employ",
  },
  {
    image: Images.onboarding.onboarding03,
    title: "Souper Sunday for soup recipes",
  },
  {
    image: Images.onboarding.onboarding01,
    title: "That Every Business Must Employ",
  },
];
