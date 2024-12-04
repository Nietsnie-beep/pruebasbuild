import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Layout,
  StyleService,
  useStyleSheet,
  useTheme,
} from "@ui-kitten/components";
import { Text, Container, VStack, Content, HStack } from "components";
import { BannerAds, Header, MultiFunction } from "../element";

const QuotesDetails = React.memo(() => {
  const themes = useTheme();
  const styles = useStyleSheet(themedStyles);

  return (
    <Container
      style={[styles.container, { backgroundColor: themes["color-light-100"] }]}
    >
      <Header
        title="Be strong"
        accessoryLeft={{
          name: "arrow_left",
        }}
        accessoryRight={{
          name: "crown_simple",
        }}
        style={{ marginBottom: 16, marginHorizontal: 24 }}
      />

      <VStack flexOne ph={32}>
        <Content contentContainerStyle={styles.containText}>
          <VStack>
            <VStack>
              <Text
                category="h2"
                style={styles.justify_align}
              >
                “ {"\n"}I'm selfish, impatient and a little insecure. I make
                mistakes, I am out of control and at times hard to handle.
              </Text>

              <Text category="body" marginTop={32}>
                ― Marilyn Monroe
              </Text>
            </VStack>
          </VStack>
        </Content>
        <VStack>
          <BannerAds />
          <MultiFunction />
        </VStack>
      </VStack>
    </Container>
  );
});
export default QuotesDetails;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  containText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },justify_align:
  {
    justifyContent: "center",
    alignItems: "center",
  }
});
