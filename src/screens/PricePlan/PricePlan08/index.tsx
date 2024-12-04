import React from "react";
import { Image, FlatList } from "react-native";
// ----------------------------- UI kitten -----------------------------------
import {
  TopNavigation,
  StyleService,
  useStyleSheet,
  useTheme,
  Button,
  Icon,
} from "@ui-kitten/components";
// ----------------------------- Navigation -----------------------------------
import { useNavigation } from "@react-navigation/native";
// ----------------------------- Hooks ---------------------------------------
import { useLayout } from "hooks";
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

const PricePlan08 = React.memo(() => {
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);
  const { goBack } = useNavigation();
  const { height, width, top, bottom } = useLayout();
  const [selected, setSelected] = React.useState(0);
  const [opt, setOtp] = React.useState(0);
  const options = ["Monthly", "Yealy (save 50%)"];
  const ref = React.useRef<FlatList<any>>(null);
  const reward = [
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
  const list = [reward, reward, reward];
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
              <Text category="h8" status={isActive ? "white" : "basic"}>
                {opt}
              </Text>
            </VStack>
          );
        })}
      </HStack>
    );
  };
  return (
    <Container style={styles.container}>
      <TopNavigation
        alignment="center"
        title="Price Plan"
        accessoryLeft={() => <NavigationAction status="primary" />}
      />
      <Content contentContainerStyle={styles.content}>
        <VStack gap={12} mt={8} mb={16}>
          <TabBar />
          {/* @ts-ignore */}
          <Image source={Images.priceplan.priceplan06} style={styles.image} />
          <HStack alignSelfCenter>
            <Text category="h2">Tramkam </Text>
            <Text category="h2" status="success">
              PRO
            </Text>
          </HStack>
          <HStack alignSelfCenter>
            <Text category="h3">$29 </Text>
            <Text category="body" marginTop={12} status="placeholder">
              / month
            </Text>
          </HStack>
        </VStack>
        <FlatList
          ref={ref}
          horizontal
          contentContainerStyle={styles.contentOpt}
          data={list}
          keyExtractor={keyExtractor}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            const isActive = index == opt;
            return (
              <VStack
                style={[styles.field, !isActive && styles.filedUnactive]}
                key={index}
                onPress={() => {
                  setOtp(index);
                  ref.current?.scrollToIndex({
                    index: index,
                    animated: true,
                    viewOffset: 0.5,
                    viewPosition: 0.5,
                  });
                }}
              >
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
                <Button
                  children="Continue"
                  accessoryRight={<Icon pack="assets" name="caret_right" />}
                  style={styles.button}
                />
              </VStack>
            );
          }}
        />
      </Content>
      <Text category="subhead" marginBottom={12} center status="platinum">
        Term of service
      </Text>
    </Container>
  );
});

export default PricePlan08;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  content: {},
  tabButton: {
    borderRadius: 99,
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  tabBar: {
    backgroundColor: "background-basic-color-2",
    borderRadius: 99,
    marginTop: 8,
    justifyContent: "flex-start",
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "background-basic-color-2",
  },
  image: {
    width: 56,
    height: 56,
    alignSelf: "center",
  },
  field: {
    borderWidth: 1,
    borderColor: "border-basic-color-1",
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    backgroundColor: "#FBF0EA",
    width: 307,
  },
  filedUnactive: {
    backgroundColor: "transparent",
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
  contentOpt: {
    paddingHorizontal: 34,
    gap: 16,
  },
  button: {
    marginTop: 16,
  },
});
