import React from "react";
import { Image } from "react-native";
// ----------------------------- UI kitten -----------------------------------
import {
  TopNavigation,
  StyleService,
  useStyleSheet,
  useTheme,
  Button,
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

const PricePlan02 = React.memo(() => {
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);
  const options = ["Monthly", "Yealy (save 50%)"];

  const [selected, setSelected] = React.useState(0);

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
              <Text status={isActive ? "white" : "basic"} category='label'>{opt}</Text>
            </VStack>
          );
        })}
      </HStack>
    );
  };
  const data = [
    { title: "1000 Credits" },
    { title: "Unlimited generation" },
    { title: "Full Style" },
    { title: "Remove Ads" },
  ];

  return (
    <Container style={styles.container}>
      <TopNavigation
        appearance="control"
        //@ts-ignore
        accessoryLeft={
          <NavigationAction
            marginLeft={16}
            size="giant"
            icon="x"
            backgroundColor={"#FBF0EA"}
            status="dark"
          />
        }
      />
      {/* @ts-ignore */}
      <Image source={Images.priceplan.priceplan03} style={styles.background} />
      <Content contentContainerStyle={styles.content}>
        <VStack itemsCenter>
          <Image source={Images.priceplan.priceplan02} />
          <Text category="h1" marginTop={16}>
            Tramkam PRO
          </Text>
          <TabBar />
        </VStack>
        <VStack mh={32} style={styles.data}>
          {data.map((item, index) => {
            return (
              <HStack key={index} justify="flex-start" itemsCenter padding={14}>
                <Image source={Images.priceplan.tick} style={styles.icon} />
                <Text key={index} category="callout" marginLeft={8}>
                  {item.title}
                </Text>
              </HStack>
            );
          })}
        </VStack>
        <Button children={"Buy now $2.99"} style={styles.button} />
      </Content>
    </Container>
  );
});

export default PricePlan02;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    width: "100%",
    zIndex: -100,
  },
  icon: {
    width: 24,
    height: 24,
  },
  tabButton: {
    borderRadius: 99,
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  tabBar: {
    backgroundColor: "background-basic-color-2",
    borderRadius: 99,
    marginTop: 16,
    marginBottom: 24,
    padding: 2,
  },
  data: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: "background-basic-color-3",
    padding: 16,
    marginBottom: 26,
  },
  button: {
    marginHorizontal: 32,
    marginBottom: 8,
  },
});
