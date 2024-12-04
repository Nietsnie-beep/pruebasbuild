import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Divider, StyleService, useStyleSheet } from "@ui-kitten/components";
import Images from "assets/images";
import { HStack, Text, VStack } from "components";

interface ItemProps {
  index: number;
  activeIndex: number;
  item: {
    title: string;
    image?: ImageSourcePropType;
    price: string;
    options: string[];
  };
  onPress(): void;
}

const Item: React.FC<ItemProps> = ({ onPress, index, item, activeIndex }) => {
  const styles = useStyleSheet(styleThemed);

  const isActive = index === activeIndex;
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={[styles.item, isActive && styles.activeItem]}
      key={index}
    >
      <VStack>
        {item.image ? (
          <Image source={Images.priceplan.priceplan06} />
        ) : (
          <Text
            uppercase
            status={isActive ? "white" : "basic"}
            category="callout"
          >
            {item.title}
          </Text>
        )}
        <HStack justify="flex-start" gap={8}>
          <Text category="h2" status={isActive ? "white" : "basic"}>
            {item.price}
          </Text>
          <Text
            category="h7"
            marginTop={12}
            status={isActive ? "white" : "basic"}
          >
            per month
          </Text>
        </HStack>
        <Divider style={styles.divider} />
        <VStack gap={16}>
          {item.options.map((_item, _index) => {
            return (
              <HStack justify="flex-start" gap={8} key={_index} padding={10}>
                {/* @ts-ignore */}
                <Image
                  source={Images.priceplan.tick}
                  style={[
                    //@ts-ignore
                    styles.icon,
                    isActive && {
                      tintColor: "#FFF",
                    },
                  ]}
                />
                <Text
                  key={index}
                  status={isActive ? "white" : "basic"}
                  category="callout"
                  marginLeft={8}
                >
                  {_item}
                </Text>
              </HStack>
            );
          })}
        </VStack>
      </VStack>
    </TouchableOpacity>
  );
};

export default Item;

const styleThemed = StyleService.create({
  item: {
    width: 260,
    padding: 24,
    borderWidth: 1,
    borderColor: "background-basic-color-3",
    backgroundColor: "background-basic-color-1",
    borderRadius: 16,
    alignSelf: "flex-end",
  },
  activeItem: {
    backgroundColor: "text-primary-color",
    borderWidth: 4,
    borderColor: "text-primary-color",
  },
  divider: {
    marginVertical: 16,
    backgroundColor: "#E4E7EB",
  },
  icon: {
    width: 24,
    height: 24,
  },
});
