import React from "react";
import { Container, Content, Text, VStack, HStack } from "components";
import {
  Button,
  Icon,
  StyleService,
  useStyleSheet,
  useTheme,
} from "@ui-kitten/components";
import Images from "assets/images";
import Carousel from "react-native-reanimated-carousel";
import { useLayout } from "hooks";
import CustomItem from "./CustomItem";
import Animated, { interpolate, useSharedValue } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import Pagination from "./Pagination";

const SignIn = () => {
  const { goBack } = useNavigation();
  const theme=useTheme()
  const styles = useStyleSheet(themedStyles);
  const { width, height } = useLayout();

  const progress = useSharedValue(0);
  const animationStyle = React.useCallback((value: number) => {
    "worklet";

    const zIndex = interpolate(value, [-1, 0, 1], [10, 20, 30]);
    const translateX = interpolate(value, [-2, 0, 1], [-width, 0, width]);

    return {
      transform: [{ translateX }],
      zIndex,
    };
  }, []);

  return (
    <Container style={styles.container}>
      <Content>
        <HStack itemsCenter justify="center" mb={24}>
        {SAMPLE.map((item, index) => {
          return (
            <Pagination
              key={index}
              index={index}
              backgroundColor={theme["text-basic-color"]}
              length={SAMPLE.length}
              animValue={progress}
            />
          );
        })}
        </HStack>
        <Carousel
          loop={true}
          autoPlay={true}
          style={{ width: width, height: height / 1.4 }}
          width={width}
          data={SAMPLE}
          onProgressChange={(_, e) => {
            progress.value = e;
          }}
          renderItem={({ item, index, animationValue }) => {
            return (
              <CustomItem
                key={index}
                index={index}
                animationValue={animationValue}
                data={item}
              />
            );
          }}
          customAnimation={animationStyle}
          scrollAnimationDuration={1200}
        />
      </Content>
      <VStack mh={32}>
        <Button
          children={"Continue with Apple"}
          status="control"
          accessoryLeft={<Icon pack="assets" name="apple" />}
          style={[styles.button]}
          size="medium"
          onPress={goBack}
        />
        <Button
          children={"Continue with Facebook"}
          status="primary"
          accessoryLeft={<Icon pack="assets" name="fb" />}
          style={styles.button}
          size="medium"
          onPress={goBack}
        />
        <Button
          children={"Continue with Google"}
          status="danger"
          accessoryLeft={<Icon pack="assets" name="gg" />}
          style={styles.button}
          size="medium"
          onPress={goBack}
        />
      </VStack>
    </Container>
  );
};

export default SignIn;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  text: {
    color: "text-placeholder-color",
  },
  button: {
    marginBottom: 16,
    borderRadius: 99,
  },
});

const SAMPLE = [
  {
    image: Images.be_strong.sign_in,
    title: "Imagination created your art",
    describe:
      "Independent research lab exploring new mediums of thought and expanding.",
  },
  {
    image: Images.be_strong.sign_in,
    title: "Imagination created your art",
    describe:
      "Independent research lab exploring new mediums of thought and expanding.",
  },
  {
    image: Images.be_strong.sign_in,
    title: "Imagination created your art",
    describe:
      "Independent research lab exploring new mediums of thought and expanding.",
  },
];
