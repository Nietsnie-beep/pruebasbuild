import React from "react";
import { View, Image, StyleSheet } from "react-native";
// ----------------------------- UI kitten -----------------------------------
import {
  TopNavigation,
  StyleService,
  useStyleSheet,
  useTheme,
  Select,
  Radio,
  Icon,
  Button,
} from "@ui-kitten/components";
// ----------------------------- Navigation -----------------------------------
import { NavigationProp, useNavigation } from "@react-navigation/native";
// ----------------------------- Hooks ---------------------------------------
import { useLayout } from "hooks";
// ----------------------------- Assets ---------------------------------------
import Images from "assets/images";
// ----------------------------- Components && Elements -----------------------

import {
  Checkbox,
  Container,
  Content,
  HStack,
  NavigationAction,
  Text,
  VStack,
} from "components";

const PricePlan01 = React.memo(() => {
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);
  const { goBack } = useNavigation();
  const { height, width, top, bottom } = useLayout();

  const options = [
    { title: "1 Month", price: 0.99 },
    {
      title: "3 Month",
      price: 1.99,
      discount: 2.99,
      describe: "Save 30% - best seller",
    },
    { title: "12 Month", price: 5.99, discount: 11.99, describe: "Save 50%" },
  ];
  const [selected, setSelected] = React.useState(0);

  return (
    <Container style={styles.container}>
      {/* @ts-ignore */}
      <TopNavigation
        style={styles.topNavigation}
        appearance="control"
        accessoryLeft={<Image source={Images.logo} />}
        accessoryRight={
          <NavigationAction
            icon="x"
            size='giant'
            backgroundColor={"#E5CABF"}
            status="dark"
          />
        }
      />
      <Content contentContainerStyle={styles.content} scrollEnabled={false}>
        <VStack>
          <VStack mh={24} itemsCenter mt={24} mb={32}>
            {/* @ts-ignore */}
            <Image source={Images.priceplan.priceplan01} style={styles.img} />
            <Text category="h2" center marginTop={16}>
              Go Premium and Get Ultimated
            </Text>
          </VStack>
          <VStack mh={32}>
            {options.map((opt, index) => {
              const isChecked = selected === index;
              return (
                <VStack
                  key={index}
                  onPress={() => setSelected(index)}
                  level="2"
                  style={[
                    styles.item,
                    isChecked && {
                      borderWidth: 2,
                      borderColor: "#5784E8",
                    },
                  ]}
                >
                  <HStack itemsCenter>
                    <HStack>
                      <VStack style={styles.checkLayout} mr={16} itemsCenter>
                        <Image
                          //@ts-ignore
                          style={styles.check}
                          source={
                            !isChecked
                              ? Images.priceplan.circle
                              : Images.priceplan.circle_checked
                          }
                        />
                      </VStack>
                      <Text category="callout">{opt.title}</Text>
                    </HStack>
                    <VStack>
                      <Text
                        right
                        category="h7"
                        status="primary"
                        lineHeight={20}
                      >
                        ${opt.price}
                      </Text>
                      {opt.discount && (
                        <Text
                          category="subhead"
                          style={{ textDecorationLine: "line-through" }}
                          status="snow"
                        >
                          ${opt.discount}
                        </Text>
                      )}
                    </VStack>
                  </HStack>
                  {opt.describe && (
                    <VStack style={styles.discount}>
                      <Text category="c1" status="white">
                        {opt.describe}
                      </Text>
                    </VStack>
                  )}
                </VStack>
              );
            })}
          </VStack>
        </VStack>
        <VStack mh={32} mb={bottom+4}>
          <Button children={"Trial 2 Weeks"} />
          <Text status="primary" center marginTop={20} category="h7">
            Learn more
          </Text>
        </VStack>
      </Content>
    </Container>
  );
});

export default PricePlan01;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: "#FBF0EA",
    paddingBottom: 0,
  },
  topNavigation: {
    paddingHorizontal: 24,
  },
  img: {
    width: 102,
    height: 72,
  },
  content: {
    justifyContent: "space-between",
    flexGrow: 1,
  },
  check: {
    width: 28,
    height: 28,
  },
  checkLayout: {},
  item: {
    marginBottom: 24,
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#E4E7EB",
  },
  discount: {
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "text-primary-color",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderTopRightRadius: 12,
  },
});
