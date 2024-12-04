import * as React from "react";
import { View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayout } from "hooks";
import {
  Layout,
  StyleService,
  useStyleSheet,
  Button,
} from "@ui-kitten/components";

import { Container, Content, VStack, HStack } from "components";
import Images from "assets/images";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import { useSharedValue } from "react-native-reanimated";
import TextContent from "./TextContent";
import Pagination from "../elements/Pagination";
import RoundedButton from "components/RoundedButton";

const Onboarding03 = React.memo(() => {
  const { goBack } = useNavigation();
  const { width, top, height } = useLayout();
  const styles = useStyleSheet(themedStyles);

  const [activeIndex, setActiveIndex] = React.useState(0);
  const refCarousel = React.useRef<ICarouselInstance>(null);
  const progressValue = useSharedValue<number>(0);
  const size_image = 240 * (width / 375);
  const colors = ["#5784E8", "#5784E8", "#5784E8", "#5784E8"];
  const onNext = () => {
    refCarousel.current?.next();
  };
  return (
    <Container style={styles.container}>
      <Content contentContainerStyle={styles.content}>
        <Layout
          style={[
            styles.layout,
            {
              paddingTop: top + 8,
            },
          ]}
        >
          <Image source={Images.logo} />
          <Carousel
            data={data}
            style={styles.carousel}
            width={width - 48}
            windowSize={width - 48}
            height={size_image + 40}
            mode="vertical-stack"
            modeConfig={{
              snapDirection: "left",
              stackInterval: 12,
            }}
            loop={false}
            onSnapToItem={(index) => {
              setActiveIndex(index);
              console.log(index);
            }}
            onProgressChange={(_, absoluteProgress) => {
              progressValue.value = absoluteProgress;
            }}
            customConfig={() => ({ type: "positive", viewCount: 3 })}
            ref={refCarousel}
            renderItem={({ item }) => {
              return (
                <Image
                  source={item.image}
                  style={{
                    width: size_image,
                    height: size_image,
                    alignSelf: "center",
                  }}
                />
              );
            }}
          />
          <VStack
            style={{
              bottom: 0,
              top: size_image + 80,
              width: width - 80,
              position: "absolute",
              height: height - size_image,
            }}
          >
            {data.map((item, i) => {
              return (
                <View key={i} style={{ position: "absolute" }}>
                  <TextContent
                    title={item.title}
                    describe={item.describe}
                    animValue={progressValue}
                    index={i}
                  />
                </View>
              );
            })}
          </VStack>
        </Layout>
      </Content>
      <HStack itemsCenter mh={40} style={{ flex: 0.2 }}>
        {activeIndex != 3 ? (
          <>
            <HStack justify="center">
              {colors.map((backgroundColor, index) => {
                return (
                  <Pagination
                    backgroundColor={backgroundColor}
                    animValue={progressValue}
                    index={index}
                    key={index}
                    widthActiveIndicator={40}
                    length={colors.length}
                  />
                );
              })}
            </HStack>
            <RoundedButton
              status="basic"
              icon={"caret_right"}
              onPress={onNext}
            />
          </>
        ) : (
          <Button
            children={"Get Start"}
            onPress={goBack}
            style={styles.buttonStart}
          />
        )}
      </HStack>
    </Container>
  );
});

export default Onboarding03;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  content: {
    flexGrow: 1,
  },
  layout: {
    backgroundColor: "#5784E820",
    marginHorizontal: 24,
    borderBottomLeftRadius: 99,
    borderBottomRightRadius: 99,
    alignItems: "center",
  },
  carousel: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonStart: {
    flex: 1,
    marginBottom: 12,
  },
});
const data = [
  {
    image: Images.onboarding.onboarding01,
    title: "Create a gift guide for food lovers",
    describe:
      "Establish your own food awards and share your favourites with your audience",
  },
  {
    image: Images.onboarding.onboarding02,
    title: "Dreams create strength people",
    describe:
      "Independent research lab exploring new mediums of thought and expanding the imaginative powers of the human species",
  },
  {
    image: Images.onboarding.onboarding03,
    title: "Create a gift guide for food lovers",
    describe:
      "Establish your own food awards and share your favourites with your audience",
  },
  {
    image: Images.onboarding.onboarding04,
    title: "That Every Business Must Employ",
    describe:
      "Establish your own food awards and share your favourites with your",
  },
];
