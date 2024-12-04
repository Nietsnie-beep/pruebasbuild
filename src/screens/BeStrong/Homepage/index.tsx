import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleService, useStyleSheet, useTheme } from "@ui-kitten/components";

import { Text, HStack, Container, VStack } from "components";
import Header from "../element/Header";

const HomePage = React.memo(() => {
  const themes = useTheme();
  const { goBack } = useNavigation();

  const styles = useStyleSheet(themedStyles);

  return (
    <Container style={styles.container}>
      <Header
        accessoryLeft={{
          name: "arrow_left",
          colorIcon: "color-basic-100",
          backgroundColor: "color-light-100",
          size: 20,
          pack: "assets",
          onPress: goBack,
        }}
      />

      <VStack flexOne ph={24} itemsCenter justify="space-around">
        <Text category="h6">Popup Ads to active reward</Text>
      </VStack>
    </Container>
  );
});
export default HomePage;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
});
