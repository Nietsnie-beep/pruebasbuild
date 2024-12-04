import React from "react";
import { View, TouchableOpacity, ViewStyle, StyleProp } from "react-native";
import { StyleService, useStyleSheet, Icon } from "@ui-kitten/components";
import useLayout from "hooks/useLayout";

interface Props {
  rate: number;
  style?: StyleProp<ViewStyle>;
}
const Rate = ({ rate, style }: Props) => {
  const { width } = useLayout();

  const [maxRating, setMaxRating] = React.useState([1, 2, 3, 4, 5]);
  const styles = useStyleSheet(themedStyles);
  return (
    <View style={[styles.container, { width: width - 80 }, style]}>
      {maxRating.map((item, _) => {
        return (
          <TouchableOpacity key={_} style={[styles.button]} activeOpacity={0.7}>
            {item < rate + 1 ? (
              <Icon pack="assets" name="star" style={[styles.star, {}]} />
            ) : (
              <Icon pack="assets" name="rate" style={[styles.star, {}]} />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Rate;

const themedStyles = StyleService.create({
  container: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "flex-start",
    gap: 8,
  },
  star: {
    height: 16,
    width: 16,
  },
  button: {
    backgroundColor: "transparent",
  },
});
