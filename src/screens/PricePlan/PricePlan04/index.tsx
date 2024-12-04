import React from "react";
import { View, Image, StyleSheet } from "react-native";
// ----------------------------- UI kitten -----------------------------------
import {
  TopNavigation,
  StyleService,
  useStyleSheet,
  useTheme,
  Radio,
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
  Container,
  Content,
  HStack,
  NavigationAction,
  Text,
  VStack,
} from "components";

const PricePlan04 = React.memo(() => {
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);
  const { goBack } = useNavigation();
  const { height, width, top, bottom } = useLayout();

  const opt = [
    { title: "1000 Token", price: "$0.99" },
    {
      title: "3000 Token",
      price: "$2.99",
      save: "Save 30% - best seller",
      des: "+300 token",
    },
    {
      title: "6000 Token",
      price: "$5.99",
      save: "Save 50%",
      des: "+1000 token",
    },
  ];
  const [selected, setSelected] = React.useState(0);
  return (
    <Container style={styles.container}>
      <TopNavigation
        appearance="control"
        style={[styles.topNav]}
        accessoryLeft={() => (
          <NavigationAction
            status="primary"
            backgroundColor={"#FFFFFF"}
            size="giant"
          />
        )}
      />
      <Image
        source={Images.priceplan.priceplan05}
        style={{ width: width, height: width, ...styles.image }}
      />
      <Content
        contentContainerStyle={[styles.content, { marginTop: width - 160 }]}
        scrollEnabled={false}
      >
        <VStack style={styles.field}>
          {opt.map((item, index) => {
            const active = index === selected;
            return (
              <HStack
                key={index}
                onPress={() => setSelected(index)}
                style={[styles.item, active && styles.activeItem]}
              >
                {item.save && (
                  <VStack style={styles.save}>
                    <Text category="label" status="white">
                      {item.save}
                    </Text>
                  </VStack>
                )}
                <HStack>
                  <Image
                    source={
                      active
                        ? Images.priceplan.radio_check
                        : Images.priceplan.radio
                    }
                    style={{tintColor:theme['text-primary-color']}}
                  />
                  <VStack ml={12}>
                    <Text category="h7">{item.title}</Text>
                    <Text category="subhead" marginTop={4} status="snow">
                      {item.des}
                    </Text>
                  </VStack>
                </HStack>
                <Text status="primary" category="h7">
                  {item.price}
                </Text>
              </HStack>
            );
          })}
          <Button children={"Continue +300 token"} style={styles.button} />
        </VStack>
      </Content>
    </Container>
  );
});

export default PricePlan04;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  content: {
    flexGrow: 1,
  },
  image: {
    position: "absolute",
    zIndex: -1000,
  },
  field: {
    backgroundColor: "#FBF0EA",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    flex: 1,
    zIndex: 150,
    padding: 34,
    justifyContent: "flex-start",
    gap: 24,
  },
  item: {
    borderWidth: 1,
    borderColor: "border-basic-color-1",
    backgroundColor: "background-basic-color-1",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  activeItem: {
    borderWidth: 2,
    borderColor: "text-primary-color",
  },
  topNav: {},
  button: {
    marginTop: 24,
  },
  save: {
    position: "absolute",
    top: -12,
    right: 16,
    backgroundColor: "text-primary-color",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
  },
});
