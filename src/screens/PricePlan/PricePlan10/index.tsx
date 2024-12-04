import React from "react";
// ----------------------------- UI kitten -----------------------------------
import {
  TopNavigation,
  StyleService,
  useStyleSheet,
  useTheme,
  Avatar,
  Radio,
  Button,
  Icon,
} from "@ui-kitten/components";
// ----------------------------- Assets ---------------------------------------
import Images from "assets/images";
// ----------------------------- Components && Elements -----------------------

import { Container, Content, HStack, Text, VStack } from "components";
import Rate from "./Rate";
import { goBack } from "navigation/RootNavigation";
import { Image } from "react-native";

const PricePlan10 = React.memo(() => {
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);

  const [selected, setSelected] = React.useState(0);
  const REVIEWS = [
    {
      name: "Christopher Lee",
      avatar: Images.avatar.avatar04,
      rate: 4,
      des: "Best Mobile UI KIT",
    },
    {
      name: "Christine Stewart",
      avatar: Images.avatar.avatar05,
      rate: 4,
      des: "Best Mobile UI KIT",
    },
  ];
  const OPTIONS = [
    { title: "Monthly", des: "Cancel anytime", pirce: 5.99 },
    {
      title: "Yearly",
      des: "2 weeks free trial",
      pirce: 13.99,
      discount: "Save 30% - best seller",
    },
    {
      title: "Lifetime",
      des: "Pay once, use forever",
      pirce: 29.99,
      discount: "Save 50%",
    },
  ];

  return (
    <Container style={styles.container}>
      <TopNavigation
        accessoryLeft={() => (
          <Text
            marginLeft={8}
            style={{ color: theme["color-basic-700"] }}
            category="h6"
          >
            Not now
          </Text>
        )}
      />
      <Content contentContainerStyle={styles.content}>
        <Content horizontal contentContainerStyle={styles.contentContainer}>
          {REVIEWS.map((item, index) => {
            return (
              <VStack
                key={index}
                padding={16}
                level="2"
                border={16}
                style={styles.item}
              >
                <HStack gap={16}>
                  <Avatar source={item.avatar} size="large" />
                  <VStack gap={8}>
                    <Text category="h7">{item.name}</Text>
                    <Rate rate={item.rate} />
                    <Text category="subhead" status="placeholder">
                      {item.des}
                    </Text>
                  </VStack>
                </HStack>
              </VStack>
            );
          })}
        </Content>
        <HStack alignSelfCenter>
          <Text category="h2">Tramkam </Text>
          <Text category="h2" status="success">
            PRO
          </Text>
        </HStack>
        <Text center status="snow" marginTop={8} marginBottom={24}>
          Unlock to all feature
        </Text>
        <VStack gap={16}>
          {OPTIONS.map((item, index) => {
            const isActive = index === selected;
            return (
              <VStack
                key={index}
                onPress={() => setSelected(index)}
                style={styles.opt}
              >
                {item.discount ? (
                  <VStack style={styles.discount}>
                    <Text status="white" category="label">
                      {item.discount}
                    </Text>
                  </VStack>
                ) : null}
                <HStack>
                  <HStack gap={12}>
                    <Image source={isActive ? Images.priceplan.radio_check:Images.priceplan.radio} style={{tintColor:theme['text-primary-color']}}/>
                    <VStack gap={4}>
                      <Text category="h7">{item.title}</Text>
                      <Text category="subhead" status="snow">
                        {item.des}
                      </Text>
                    </VStack>
                  </HStack>
                  <Text category="h7" status="primary">
                    ${item.pirce}
                  </Text>
                </HStack>
              </VStack>
            );
          })}
        </VStack>
      </Content>
      <VStack ph={24} gap={12}>
        <Button
          children={"Try Free & Subcribe"}
          onPress={goBack}
          accessoryRight={<Icon pack="assets" name="caret_right" />}
        />
        <Text status="snow" center category="subhead">
          Term of Service
        </Text>
      </VStack>
    </Container>
  );
});

export default PricePlan10;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  content: {},
  contentContainer: {
    paddingHorizontal: 16,
    gap: 16,
    marginBottom: 60,
  },
  item: {
    width: 280,
  },
  opt: {
    borderWidth: 1,
    borderColor: "background-basic-color-3",
    paddingHorizontal: 16,
    paddingVertical: 24,
    marginHorizontal: 34,
    borderRadius: 16,
  },
  discount: {
    position: "absolute",
    right: 16,
    borderRadius: 8,
    backgroundColor: "text-primary-color",
    paddingHorizontal: 12,
    paddingVertical: 4,
    top: -12,
  },
});
