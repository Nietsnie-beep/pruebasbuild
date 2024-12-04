import * as React from "react";
import { Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayout } from "hooks";
import {
  StyleService,
  useStyleSheet,
  TopNavigation,
  Button,
  Icon,
} from "@ui-kitten/components";

import { Container, Content, HStack, Text, VStack } from "components";
import Images from "assets/images";
import Pagination from "../elements/Pagination";
import { useSharedValue } from "react-native-reanimated";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import TextContent from "./TextContent";

const Onboarding07 = React.memo(() => {
  const { goBack } = useNavigation();
  const { height, width, top, bottom } = useLayout();
  const styles = useStyleSheet(themedStyles);

  const width_image = 295 * (width / 375);
  const height_image = 360 * (width / 375);
  const refCarousel = React.useRef<ICarouselInstance>(null);
  const progressValue = useSharedValue<number>(0);

  const config = {
    pagingEnabled: true,
    snapEnabled: true,
    width: width_image + 16,
    height: height_image,
    windowSize: width,
    loop: false,
  };
  return (
    <Container style={styles.container}>
      <TopNavigation
        accessoryLeft={
          <Image
            source={Images.logo}
            // @ts-ignore
            style={styles.logo}
          />
        }
      />
      <Content>
        <Carousel
          {...config}
          data={data}
          style={{ width: "100%", zIndex: -10 }}
          onProgressChange={(_, absoluteProgress) => {
            progressValue.value = absoluteProgress;
          }}
          ref={refCarousel}
          height={height}
          renderItem={({ item, index }) => {
            return (
              <VStack itemsCenter ml={16}>
                <Image
                  source={item.image}
                  style={{ width: width_image, height: height_image }}
                  borderRadius={24}
                />
                <TextContent
                  index={index}
                  title={item.title}
                  describe={item.describe}
                  animValue={progressValue}
                />
              </VStack>
            );
          }}
        />
        <View
          style={{
            position: "absolute",
            top: height_image + 40,
            zIndex: 100,
            left: 0,
            right: 0,
          }}
        >
          {data.map((item, i) => {
            return <VStack key={i} style={styles.textContent}></VStack>;
          })}
        </View>
      </Content>
      <HStack mh={32} itemsCenter>
        <HStack>
          {data.map((item, i) => {
            return (
              <Pagination
                key={i}
                index={i}
                backgroundColor={"#5784E8"}
                length={data.length}
                animValue={progressValue}
                widthActiveIndicator={6}
                sizeIndicator={6}
                heightActiveIndicator={6}
              />
            );
          })}
        </HStack>
        <Button
          children={"Get Starter"}
          style={styles.button}
          onPress={goBack}
          accessoryRight={<Icon pack="assets" name="caret_right" />}
        />
      </HStack>
    </Container>
  );
});

export default Onboarding07;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 32,
    height: 32,
    marginLeft: 16,
  },
  textContent: {
    position: "absolute",
    left: 32,
    right: 16,
    top: 40,
  },
  button: {
    marginBottom: 8,
  },
});
const data = [
  {
    image: Images.onboarding.onboarding10,
    title: "That Every Business Must Employ",
    describe:
      "Open an app geared toward stock trading, and you’ll probably discover a dictionary of investing terms that rivals Investopedia. ",
  },
  {
    image: Images.onboarding.onboarding11,
    title: "Souper Sunday for soup recipes",
    describe:
      "Establish your own food awards and share your favourites with your audience",
  },
  {
    image: Images.onboarding.onboarding12,
    title: "Dreams create strength people",
    describe:
      "Independent research lab exploring new mediums of thought and expanding the imaginative powers of the human species",
  },
  {
    image: Images.onboarding.onboarding10,
    title: "That Every Business Must Employ",
    describe:
      "Establish your own food awards and share your favourites with your",
  },
  {
    image: Images.onboarding.onboarding12,
    title: "Souper Sunday for soup recipes",
    describe:
      "Establish your own food awards and share your favourites with your audience",
  },
  {
    image: Images.onboarding.onboarding11,
    title: "That Every Business Must Employ",
    describe:
      "Establish your own food awards and share your favourites with your",
  },
];
