import React from "react";
import { Container, Text, VStack, NavigationAction, Content } from "components";
import {
  Avatar,
  Icon,
  StyleService,
  TopNavigation,
  useStyleSheet,
} from "@ui-kitten/components";
import { Dimensions } from "react-native";
import Images from "assets/images";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const Menu = () => {
  const styles = useStyleSheet(themedStyles);
  return (
    <Container style={styles.container}>
      <TopNavigation
        accessoryRight={
          <NavigationAction icon="arrow_right" size="giant" status="basic" />
        }
      />
      <Content contentContainerStyle={styles.content}>
        <VStack ph={24}>
          <Avatar source={Images.be_strong.toy_face} size="large" />
          <Text category="h2" status="basic" marginVertical={24}>
            Share app
          </Text>
          <Text category="h2" status="basic" marginBottom={24}>
            Rate app
          </Text>
          <Text category="h2" status="basic" marginBottom={24}>
            About us
          </Text>
          <Text category="h2" status="basic" marginBottom={24}>
            Pravicy Policy
          </Text>
          <Text category="h2" status="basic" marginBottom={24}>
            Term & Condititions
          </Text>
        </VStack>
        <VStack>
          <Text category="h2" status="basic" marginLeft={24} marginBottom={16}>
            Categories
          </Text>
          <Content horizontal contentContainerStyle={styles.contentSelect}>
            {data.map((_, i) => {
              return (
                <VStack
                  key={i}
                  style={[
                    styles.button,
                    {
                      backgroundColor: _.backgroundColor,
                      width: 138 * (width / 375),
                      height: 152 * (height / 812),
                    },
                  ]}
                >
                  <Icon pack="assets" name={_.icon} style={styles.icon} />
                  <Text category="callout" status="control">
                    {_.title}
                  </Text>
                </VStack>
              );
            })}
          </Content>
        </VStack>
      </Content>
    </Container>
  );
};

export default Menu;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 48,
    height: 48,
  },
  content: {
    paddingBottom: 20,
    justifyContent: "space-between",
    flexGrow: 1,
  },
  button: {
    position: "relative",
    width: 0.39 * width,
    height: 0.19 * height,
    borderRadius: 8,
    marginRight: 4,
    padding: 20,
  },
  contentSelect: {
    paddingHorizontal: 24,
  },
  icon: {
    width: 32,
    height: 32,
  },
});

const data = [
  { title: "General", icon: "cursor", backgroundColor: "#0084F4" },
  { title: "Favorites", icon: "id_card", backgroundColor: "#00C48C" },
  { title: "Love", icon: "deal", backgroundColor: "#FFA26B" },
];
