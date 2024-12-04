import React from "react";
import { View, Image, StyleSheet } from "react-native";
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

const PricePlan03 = React.memo(() => {
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);
  const { goBack } = useNavigation();
  const { height, width, top, bottom } = useLayout();

  const options = [
    { title: "1\nMonth", price: "$1.99" },
    { title: "6\nMonth", price: "$5.99", save: "20%" },
    { title: "12\nMonth", price: "$6.99", save: "40%" },
  ];
  const [selected, setSelected] = React.useState(1);
  return (
    <Container style={styles.container}>
      <TopNavigation accessoryLeft={() => <NavigationAction size="giant" icon='caret_left'/>} />
      <Content contentContainerStyle={styles.content}>
        <Image
          source={Images.priceplan.priceplan04}
          style={{ width: width, height: 300 * (height / 812) }}
        />
        <Text center marginBottom={32}>
          Assistant Director of Student Innovation & Undergraduate Research
        </Text>
        <HStack mh={24} pt={24} gap={8}>
          {options.map((item, index) => {
            const active = index === selected;
            return (
              <VStack
                key={index}
                style={[styles.option, active && styles.optionActive]}
                onPress={() => setSelected(index)}
              >
                {item.save && (
                  <VStack style={[styles.save, active && styles.activeSave]}>
                    <Text
                      category="c1"
                      center
                      status={active ? "white" : "placeholder"}
                    >
                      Save {item.save}
                    </Text>
                  </VStack>
                )}
                <Text category="h6" center>
                  {item.title}
                </Text>
                <Text center category="h7" status="primary">
                  {item.price}
                </Text>
              </VStack>
            );
          })}
        </HStack>
      </Content>
      <VStack mh={32}>
        <Button
          children={"Continue"}
          accessoryRight={<Icon pack="assets" name="caret_right" />}
        />
        <HStack mt={16} mh={10}>
          <Text status='primary' category="h8">Term of Service</Text>
          <Text status='primary' category="h8">Policy</Text>
        </HStack>
      </VStack>
    </Container>
  );
});

export default PricePlan03;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  content: {},
  option: {
    borderRadius: 16,
    borderColor: "color-basic-900",
    borderWidth: 2,
    padding: 24,
    gap: 16,
  },
  optionActive: {
    borderColor: "text-primary-color",
  },
  save: {
    position: "absolute",
    top: -24,
    left: 12,
    right: 12,
    zIndex: 100,
    backgroundColor: "color-basic-900",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    height: 24,
    justifyContent: "center",
  },
  activeSave: {
    backgroundColor: "text-primary-color",
  },
});
