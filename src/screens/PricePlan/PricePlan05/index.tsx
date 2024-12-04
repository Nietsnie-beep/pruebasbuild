import React from "react";
import { Image } from "react-native";
// ----------------------------- UI kitten -----------------------------------
import {
  TopNavigation,
  StyleService,
  useStyleSheet,
  Button,
  Icon,
} from "@ui-kitten/components";
// ----------------------------- Assets ---------------------------------------
import Images from "assets/images";
// ----------------------------- Components && Elements -----------------------
import { Container,
  Content,
  HStack,
  NavigationAction,
  Text,
  VStack,
} from "components";

const PricePlan05 = React.memo(() => {
  const styles = useStyleSheet(themedStyles);
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
  ];
  const options = [
    { price: "$0.99/month" },
    { des: "$0.88/month", price: "$8.99/year", save: "Save 30%" },
  ];

  const [selected, setSelected] = React.useState(1);
  return (
    <Container style={styles.container}>
      <TopNavigation
          //@ts-ignore
        title={()=><Image source={Images.priceplan.priceplan06} style={styles.image} />}
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
        <HStack alignSelfCenter mb={16}>
          <Text category="h2">Unlock to </Text>
          <Text category="h2" status="success">
            PRO
          </Text>
        </HStack>
        <Text category="body" center marginBottom={20}>
          Assistant Director of Student Innovation & Undergraduate Research
        </Text>
        <VStack style={styles.field}>
          {reward.map((item, index) => {
            return (
              <HStack key={index} padding={10} justify="flex-start" itemsCenter>
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
        </VStack>
        <VStack mh={34}>
          {options.map((item, index) => {
            const active = index === selected;
            return (
              <HStack
                key={index}
                mb={16}
                onPress={()=>setSelected(index)}
                style={[styles.item, active && styles.activeItem]}
              >
                <HStack>
                  <Image
                    source={
                      active
                        ? Images.priceplan.radio_check
                        : Images.priceplan.radio
                    }
                  />
                  <VStack ml={16}>
                    <Text category="callout" marginBottom={4}>
                      {item.price}
                    </Text>
                    {item.des && (
                      <Text category="subhead" status="snow">
                        {item.price}
                      </Text>
                    )}
                  </VStack>
                </HStack>
                {item.save && (
                  <VStack style={styles.save}>
                    <Text category="label" status="white">
                      {item.save}
                    </Text>
                  </VStack>
                )}
              </HStack>
            );
          })}
        </VStack>
      </Content>
      <VStack mb={4} mh={34}>
        <Button
          children="Continue"
          accessoryRight={<Icon pack="assets" name="caret_right" />}
        />
        <Text center status="primary" category="h8" marginTop={16}>
          Restore Purchase
        </Text>
      </VStack>
    </Container>
  );
});

export default PricePlan05;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  content: {
    paddingTop: 16,
  },
  image: {
    marginTop: 24,
  },
  field: {
    borderWidth: 1,
    borderColor: "border-basic-color-1",
    borderRadius: 16,
    padding: 8,
    marginHorizontal: 34,
    marginBottom: 24,
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
  item: {
    borderRadius: 16,
    backgroundColor: "background-basic-color-2",
    padding: 16,
  },
  activeItem: {
    borderWidth: 2,
    borderColor: "text-success-color",
  },
  save: {
    backgroundColor: "text-success-color",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
});
