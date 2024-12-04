import React from "react";
import { Image } from "react-native";
// ----------------------------- UI kitten -----------------------------------
import {
  TopNavigation,
  StyleService,
  useStyleSheet,
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

const PricePlan09 = React.memo(() => {
  const styles = useStyleSheet(themedStyles);

  const [activeIndex, setActiveIndex] = React.useState(0);
  const TabBar = () => {
    return (
      <HStack style={styles.tabBar} level="2">
        {["Monthly", "Yearly"].map((item, index) => {
          const isActive = index == activeIndex;
          return (
            <VStack
              onPress={() => setActiveIndex(index)}
              key={index}
              style={[styles.tab, isActive && styles.activeTab]}
            >
              <Text category="label" status={isActive ? "white" : "basic"}>
                {item}
              </Text>
            </VStack>
          );
        })}
      </HStack>
    );
  };
  const reward = [
    {
      title: "Remove All Ads",
      image: Images.priceplan.no_bell,
    },
    {
      title: "Remove All Ads",
      image: Images.priceplan.no_bell,
    },
    {
      title: "Unlimited generation",
      image: Images.priceplan.confetti,
    },
    {
      title: "Full Style",
      image: Images.priceplan.style,
    },
    {
      title: "Full Style",
      image: Images.priceplan.style,
    },
  ];

  return (
    <Container style={styles.container}>
      <TopNavigation
        appearance="control"
        //@ts-ignore
        accessoryLeft={<NavigationAction status="white" />}
      />
      <Content contentContainerStyle={styles.content}>
        <VStack gap={8} mb={28}>
          <Text category="h4" status="white" center>
            Pay one, Use Forever!
          </Text>
          <Text opacity={0.5} status="white" center>
            Play like pro members
          </Text>
        </VStack>
        <VStack style={styles.field} level="1" justify="flex-start">
          <HStack>
            <VStack gap={4}>
              <Text category="callout">PRO</Text>
              <Text category="h2">$99</Text>
            </VStack>
            <TabBar />
          </HStack>
          <Divider style={styles.divider} />
          <>
            {reward.map((item, index) => {
              return (
                <HStack
                  key={index}
                  padding={10}
                  justify="flex-start"
                  itemsCenter
                >
                  <VStack level="2" style={styles.layoutIcon}>
                    {/* @ts-ignore */}
                    <Image source={item.image} style={styles.icon} />
                  </VStack>
                  <Text category="callout" marginLeft={16}>
                    {item.title}
                  </Text>
                </HStack>
              );
            })}
          </>
          <Button
            children={"Continue"}
            accessoryRight={<Icon pack="assets" name="caret_right" />}
          />
        </VStack>
      </Content>
    </Container>
  );
});

export default PricePlan09;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: "text-primary-color",
    paddingBottom: 0,
  },
  content: {},
  field: {
    flex: 1,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 16,
    gap: 16,
    marginBottom: 24,
  },
  tabBar: {
    borderRadius: 99,
    padding: 2,
  },
  tab: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 99,
  },
  activeTab: {
    backgroundColor: "text-primary-color",
  },
  divider: {
    backgroundColor: "background-basic-color-3",
  },
  icon: {
    width: 24,
    height: 24,
  },
  layoutIcon: {
    width: 48,
    height: 48,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});
