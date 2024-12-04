import React from "react";
import { View, Image, ImageSourcePropType } from "react-native";
// ----------------------------- UI kitten -----------------------------------
import { StyleService, useStyleSheet, useTheme } from "@ui-kitten/components";
// ----------------------------- Components && Elements -----------------------
import Animated, {
  useAnimatedStyle,
  interpolateColor,
  interpolate,
} from "react-native-reanimated";
import { Text, VStack } from "components";

interface ItemProps {
  index: number;
  animationValue: Animated.SharedValue<number>;
  data: {
    image: ImageSourcePropType;
    title: string;
    describe: string;
  };
}

const CustomItem: React.FC<ItemProps> = ({ index, data, animationValue }) => {
  const styles = useStyleSheet(themedStyles);
  const theme = useTheme();
  const _color = theme["background-basic-color-2"];
  const maskStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      animationValue.value,
      [-1, 0, 1],
      [_color, "transparent", _color]
    );
    const opacity = interpolate(animationValue.value, [-1, 0, 1], [0, 1, 1]);
    return {
      backgroundColor,
      opacity,
    };
  }, [animationValue]);

  return (
    <View style={styles.container}>
      <VStack>
        <Image source={data.image} />
        <Animated.View
          pointerEvents="none"
          style={[
            {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 100,
            },
            maskStyle,
          ]}
        />
      </VStack>
      <VStack level="1" ph={32} mt={24}>
        <Text category="h4" center marginBottom={16} marginHorizontal={40}>
          {data.title}
        </Text>
        <Text category="body" center status="placeholder">
          {data.describe}
        </Text>
      </VStack>
    </View>
  );
};

export default CustomItem;

const themedStyles = StyleService.create({
  container: {},
  content: {},
});
