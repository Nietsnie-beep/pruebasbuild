import React from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { useTheme, Icon, TopNavigationAction } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
interface NavigationActionProps {
  icon?: string;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  marginVertical?: number;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  status?: "basic" | "purple";
}

const NavigationAction = ({
  icon,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  marginVertical,
  onPress,
  style,
  status = "basic",
}: NavigationActionProps) => {
  const themes = useTheme();
  const { goBack } = useNavigation();
  const _onPress = React.useCallback(() => {
    if (onPress) {
      onPress && onPress();
    } else {
      goBack();
    }
  }, [onPress, goBack]);

  const getStatus = React.useCallback(() => {
    switch (status) {
      case "basic":
        return themes["text-basic-color"];
      case "purple":
        return "#8247E5";
      default:
        return themes["text-basic-color"];
    }
  }, [status]);
  return (
    <TouchableOpacity
      onPress={_onPress}
      activeOpacity={0.7}
      style={[
        styles.container,
        {
          marginBottom: marginBottom,
          marginTop: marginTop,
          marginLeft: marginLeft,
          marginRight: marginRight,
          marginVertical: marginVertical,
        },
        style,
      ]}
    >
      <Icon
        pack="assets"
        name={icon || "arrow_left"}
        style={[
          {
            height: 20,
            width: 20,
            tintColor: getStatus(),
          },
        ]}
      />
    </TouchableOpacity>
  );
};

export default NavigationAction;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 99,
    width: 48,
    height: 48,
    backgroundColor: "#FBF0EA",
  },
});
