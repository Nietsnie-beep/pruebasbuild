import * as React from "react";
import { View } from "react-native";
import { useTheme, StyleService, useStyleSheet } from "@ui-kitten/components";
import useLayout from "hooks/useLayout";

import Slider from "@react-native-community/slider";

interface Props {
  value: number;
  maxValue: number;
  onSlidingComplete: (value: number | Array<number>) => void;
  onSlidingStart: (value: number | Array<number>) => void;
  onValueChange: (value: number | Array<number>) => void;
}

const CustomSlider = ({
  value,
  maxValue,
  onSlidingComplete,
  onSlidingStart,
  onValueChange,
}: Props) => {
  const { height, width, top, bottom } = useLayout();
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);
  return (
    <View style={styles.container}>
      <Slider
        value={0}
        step={1}
        minimumValue={0}
        maximumValue={100}
        thumbTintColor="#5099F4"
        minimumTrackTintColor="#5099F4"
        maximumTrackTintColor="#CBD2D9"
        style={{ width: width - 48 }}
        onSlidingStart={onSlidingStart}
        onValueChange={onValueChange}
        onSlidingComplete={onSlidingComplete}
      />
    </View>
  );
};

export default CustomSlider;

const themedStyles = StyleService.create({
  container: {
    alignItems: "center",
    marginTop: 24,
  },
  time: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  thumbStyle: {
    width: 12,
    height: 12,
  },
});
