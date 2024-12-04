import React from "react";
import { Image, FlatList } from "react-native";
// ----------------------------- UI kitten -----------------------------------
import {
  TopNavigation,
  StyleService,
  useStyleSheet,
  useTheme,
  Divider,
  Button,
  Icon,
} from "@ui-kitten/components";
// ----------------------------- Assets ---------------------------------------
import Images from "assets/images";
// ----------------------------- Components && Elements -----------------------

import {
  Container,
  Content,
  HStack,
  NavigationAction,
  Text,
  VStack,
} from "components";
import keyExtractor from "utils/keyExtractor";

const PricePlan06 = React.memo(() => {
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);

  const [selectOption, setOption] = React.useState(0);
  const ref =
    React.useRef<FlatList<{ title: string; price: string; options: string[] }>>(
      null
    );
  const [selected, setSelected] = React.useState(0);
  const options = ["Monthly", "Yealy (save 50%)"];

  const TabBar = () => {
    return (
      <HStack style={styles.tabBar}>
        {options.map((opt, index) => {
          const isActive = index === selected;
          return (
            <VStack
              style={[
                styles.tabButton,
                isActive && { backgroundColor: theme["text-primary-color"] },
              ]}
              key={index}
              onPress={() => {
                setSelected(index);
              }}
            >
              <Text category="label" status={isActive ? "white" : "basic"}>
                {opt}
              </Text>
            </VStack>
          );
        })}
      </HStack>
    );
  };
  const data = [
    {
      title: "Base",
      price: "$29",
      options: [
        "1000 Credits",
        "Ultimated generation",
        "Full Style",
        "Remove Ads",
      ],
    },
    {
      title: "Base",
      price: "$29",
      options: [
        "1000 Credits",
        "Ultimated generation",
        "Full Style",
        "Remove Ads",
      ],
    },
  ];
  return (
    <Container style={styles.container}>
      <TopNavigation
        appearance="control"
        //@ts-ignore
        accessoryRight={
          <NavigationAction
            marginLeft={16}
            size="giant"
            icon="x"
            backgroundColor={"#FBF0EA"}
            status="dark"
          />
        }
      />
      <Content contentContainerStyle={styles.content}>
        <VStack mh={32} justify="flex-start" gap={16}>
          <Text category="h2">Be Happy{"\n"}Choose your plan</Text>
          <Text>Assistant Director of Student</Text>
          <TabBar />
        </VStack>
        <FlatList
          horizontal
          contentContainerStyle={styles.contentOpt}
          data={data}
          ref={ref}
          keyExtractor={keyExtractor}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            const isActive = index === selectOption;
            return (
              <VStack
                onPress={() => {
                  setOption(index);
                  ref?.current?.scrollToIndex({ index: index });
                }}
                style={[styles.item, isActive && styles.activeItem]}
                key={index}
              >
                <VStack>
                  <Text uppercase category="callout" marginBottom={16}>{item.title}</Text>
                  <HStack justify="flex-start" gap={8}>
                    <Text category="h2">{item.price}</Text>
                    <Text category="h7" marginTop={12}>
                      per month
                    </Text>
                  </HStack>
                  <Divider style={styles.divider} />
                  <VStack gap={16}>
                    {item.options.map((_item, _index) => {
                      return (
                        <HStack
                          justify="flex-start"
                          gap={8}
                          key={_index}
                          padding={10}
                        >
                          <Image
                            source={Images.priceplan.tick}
                            //@ts-ignore
                            style={styles.icon}
                          />
                          <Text key={index} category="callout" marginLeft={8}>
                            {_item}
                          </Text>
                        </HStack>
                      );
                    })}
                  </VStack>
                </VStack>
              </VStack>
            );
          }}
        />
      </Content>
      <VStack mb={4} mh={34}>
        <Button
          children="Buy Now"
          accessoryRight={<Icon pack="assets" name="caret_right" />}
        />
      </VStack>
    </Container>
  );
});

export default PricePlan06;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: "#FBF0EA",
  },
  content: {},
  tabButton: {
    borderRadius: 99,
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  tabBar: {
    backgroundColor: "background-basic-color-1",
    borderRadius: 99,
    marginTop: 16,
    marginBottom: 34,
    marginRight: 80,
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    borderWidth: 2,
    borderColor: "background-basic-color-1",
  },
  item: {
    width: 260,
    padding: 24,
    borderWidth: 1,
    borderColor: "background-basic-color-3",
    borderRadius: 16,
  },
  activeItem: {
    backgroundColor: "background-basic-color-1",
    borderWidth: 4,
    borderColor: "text-primary-color",
  },
  contentOpt: {
    paddingHorizontal: 32,
    gap: 16,
  },
  divider: {
    marginVertical: 16,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
