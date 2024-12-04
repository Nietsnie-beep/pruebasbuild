import * as React from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayout } from "hooks";
import {
  StyleService,
  useStyleSheet,
  Icon,
  Button,
  useTheme,
  Layout,
} from "@ui-kitten/components";
import { Text, HStack, Container, VStack, Content } from "components";
import Images from "assets/images";
import Header from "../element/Header";

const UpgradePremium = React.memo(() => {
  const themes = useTheme();
  const { goBack } = useNavigation();
  const { height, width, top, bottom } = useLayout();
  const styles = useStyleSheet(themedStyles);

  return (
    <Container style={styles.container}>
      <Header
        title="Premium"
        accessoryLeft={{
          name: "arrow_left",
          backgroundColor: "color-basic-1100",
        }}
        style={{ marginHorizontal: 20 }}
      />
      <Content>
        <Image
          source={Images.be_strong.upgrade_Premium}
          resizeMode="cover"
          style={{ width: "100%" }}
        />
        <VStack itemsCenter>
          <Text category="h2" style={{ marginHorizontal: 40 }}>
            So{" "}
            {
              <Text
                category="h2"
                style={{ color: themes["color-success-100"] }}
              >
                buy me a coffee
              </Text>
            }
            . for Premium
          </Text>
          <VStack mv={30} justify="space-around">
            {SAMPLE.map((item, i) => {
              return (
                <Layout
                  key={i}
                  style={{
                    flexDirection: "row",
                    height: 90,
                    marginBottom: 24,
                  }}
                >
                  <Icon
                    name={item.icon}
                    pack="assets"
                    style={{ marginHorizontal: 15, marginVertical: 10 }}
                  />

                  <Layout
                    style={{
                      width: 247,
                      height: 90,
                      paddingBottom: 24,
                      borderBottomWidth: 1,
                      borderColor: themes["color-basic-1000"],
                    }}
                  >
                    <Text
                      category="h6"
                      style={{ color: themes["color-basic-100"] }}
                    >
                      {item.label}
                    </Text>
                    <Text
                      category="subhead"
                      style={{ marginTop: 8, color: themes["color-basic-300"] }}
                    >
                      {item.body}
                    </Text>
                  </Layout>
                </Layout>
              );
            })}
          </VStack>
        </VStack>
      </Content>
      <Button
        children={"Buy now - $0.99/year"}
        status="primary"
        style={styles.button}
      />
    </Container>
  );
});
export default UpgradePremium;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: "#106AF3",
    marginHorizontal: 24,
  },
});

const SAMPLE = [
  {
    label: "Remove Ads",
    body: "Remove all ads that appear on the app",
    icon: "umbrella",
  },
  {
    label: "Unlimited Wallpaper",
    body: "Unlock all wallpaper and fonts",
    icon: "rocket",
  },
  {
    label: "All Quotes",
    body: "Unlock all quotes",
    icon: "person",
  },
];
