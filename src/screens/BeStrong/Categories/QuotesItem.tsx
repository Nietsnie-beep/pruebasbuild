import React from "react";
import { View, StyleSheet } from "react-native";
import { HStack, Text, VStack } from "components";
import { useLayout } from "hooks";
import { Icon, StyleService, useStyleSheet } from "@ui-kitten/components";

interface QuotesItemProps {
  item: {
    title: string;
    author: string;
    color: string;
  };
}

const QuotesItem: React.FC<QuotesItemProps> = ({ item }) => {
  const styles = useStyleSheet(themeStyles);
  const { width } = useLayout();
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: item.color, width: width - 32 },
      ]}
    >
      <VStack mr={12} mb={32}>
        <Text category="h3">{`“`}</Text>
        <Text category="h6">{item.title}</Text>
        <Text category="body" marginTop={24}>
          ― {item.author}
        </Text>
      </VStack>
      <HStack justify="flex-start">
        <Icon pack="assets" name={"share"} style={styles.icon} />
        <Icon pack="assets" name={"arrow_down"} style={styles.icon} />
        <Icon pack="assets" name={"copy"} style={styles.icon} />
      </HStack>
    </View>
  );
};

export default QuotesItem;

const themeStyles = StyleService.create({
  container: {
    padding: 24,
    borderRadius: 16,
    marginRight: 8,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: "text-primary-color",
    marginRight: 24,
  },
});
