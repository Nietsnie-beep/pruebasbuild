import { useNavigation } from "@react-navigation/native";
import { Icon, useTheme, Text, TopNavigation } from "@ui-kitten/components";
import React from "react";
import { TouchableOpacity, View, ViewProps, ViewStyle } from "react-native";

interface IIconProps {
  text?: string;
  name?:
    | "arrow_left"
    | "arrow_right"
    | "equals"
    | "x"
    | "crown_simple"
    | string
    | undefined;
  pack?: "assets" | string;
  size?: number;
  backgroundColor?: string;
  colorIcon?: string;
  onPress?: () => void;
}

interface IHeaderProps {
  title?: string;
  titleColor?: string;
  accessoryLeft?: IIconProps;
  accessoryRight?: IIconProps;
  style?: ViewStyle;
}

const Header = ({
  title,
  titleColor,
  accessoryLeft,
  accessoryRight,
  style,
}: IHeaderProps) => {
  const theme = useTheme();
  const { goBack } = useNavigation();

  return (
    <View
      style={[
        {
          marginHorizontal: 16,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        },
        { ...style },
      ]}
    >
      <View style={{ flex: 1 }}>
        {accessoryLeft?.name && (
          <TouchableOpacity
            onPress={goBack || accessoryLeft?.onPress}
            style={{
              width: 48,
              height: 48,
              alignSelf: "flex-start",
              borderRadius: 30,
              backgroundColor:
                theme[accessoryLeft?.backgroundColor || "color-light-100"],
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {accessoryLeft?.name && (
              <Icon
                name={accessoryLeft?.name}
                pack={accessoryLeft?.pack || "assets"}
                style={{
                  width: accessoryLeft?.size || 20,
                  height: accessoryLeft?.size || 20,
                  tintColor:
                    theme[accessoryLeft?.colorIcon || "color-basic-100"],
                }}
              />
            )}
          </TouchableOpacity>
        )}
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text
          children={title}
          category="h6"
          style={{ color: theme[titleColor || "color-basic-100"] }}
        />
      </View>
      <View style={{ flex: 1, alignItems: "flex-end" }}>
        {(accessoryRight?.name && (
          <TouchableOpacity
            onPress={goBack || accessoryRight?.onPress}
            style={{
              width: 48,
              height: 48,
              alignSelf: "flex-end",
              borderRadius: 30,
              backgroundColor:
                theme[accessoryRight?.backgroundColor || "color-light-100"],
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {accessoryRight?.name && (
              <Icon
                name={accessoryRight?.name}
                pack={accessoryRight?.pack || "assets"}
                style={{
                  width: accessoryRight?.size || 20,
                  height: accessoryRight?.size || 20,
                  tintColor:
                    theme[accessoryRight?.colorIcon || "color-basic-100"],
                }}
              />
            )}
          </TouchableOpacity>
        )) ||
          (accessoryRight?.text && (
            <TouchableOpacity onPress={goBack || accessoryRight?.onPress}>
              <Text category="h7" status="primary">
                {accessoryRight?.text}
              </Text>
            </TouchableOpacity>
          ))}
      </View>
    </View>
  );
};

export default Header;
