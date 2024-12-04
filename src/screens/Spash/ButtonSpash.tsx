import * as React from "react";
import { View, TouchableOpacity, ViewStyle, StyleProp } from "react-native";
import { Layout, StyleService, useStyleSheet } from "@ui-kitten/components";

import Text from "components/Text";
import { HStack } from "components";

export interface IDropSpashProps {
  name: string;
  navigate(): void;
}

export interface ButtonSpashProps {
  title: string;
  data?: IDropSpashProps[];
  style?: StyleProp<ViewStyle>;
  open?: boolean;
  onPress?(): void;
}

const ButtonSpash = React.memo(
  ({ data, title, style, open, onPress }: ButtonSpashProps) => {
    const styles = useStyleSheet(themedStyles);

    return (
      <View style={[styles.container, style]}>
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.7}
          style={[styles.buttonLarge]}
        >
          <HStack itemsCenter justify="flex-start">
            <View
              style={[
                styles.indicator,
                !open && { backgroundColor: "transparent" },
              ]}
            />
            <Text
              category="h4"
              status={open ? "primary" : "basic"}
              marginLeft={12}
            >
              {title}
            </Text>
          </HStack>
        </TouchableOpacity>
        {open && data && (
          <Layout style={styles.layout} level="2">
            {data.map((item, i) => {
              return (
                <TouchableOpacity
                  onPress={item.navigate}
                  key={i}
                  style={[
                    styles.button,
                    i < data.length - 1 && { marginBottom: 16 },
                  ]}
                >
                  <Text category="h6" status="basic">
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </Layout>
        )}
      </View>
    );
  }
);

export default ButtonSpash;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    marginBottom: 12,
  },
  layout: {
    padding: 16,
    borderRadius: 8,
    marginTop: 12,
    marginLeft: 32,
    marginRight: 32,
  },
  icon: {
    tintColor: "text-white-color",
  },
  iconButton: {
    tintColor: "text-white-color",
    width: 24,
    height: 24,
  },
  buttonLarge: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 12,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tranform: {
    transform: [{ rotate: "90deg" }],
  },
  indicator: {
    width: 24,
    height: 4,
    borderRadius: 99,
    backgroundColor: "background-basic-color-5",
  },
});
