import * as React from "react";
import { ImageBackground, SafeAreaView, StatusBar } from "react-native";
import { StyleService, useStyleSheet, useTheme } from "@ui-kitten/components";
import Images from "assets/images";
import { useNavigation } from "@react-navigation/native";
import { useLayout } from "hooks";
import { Text, Container, VStack, Content } from "components";
import { BannerAds, Header, MultiFunction } from "../element";

const Quotes_Details = React.memo(() => {
  const themes = useTheme();
  const { goBack } = useNavigation();
  const { height, width, top, bottom } = useLayout();
  const styles = useStyleSheet(themedStyles);

  return (
    <Container style={styles.container} useSafeArea={false}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={Images.be_strong.background}
        resizeMode="cover"
        style={{
          flex: 1,
        }}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <Header
            title="Napoleon"
            titleColor="color-basic-1100"
            accessoryLeft={{
              name: "equals",
            }}
            accessoryRight={{
              name: "crown_simple",
            }}
            style={styles.header}
          />
          <VStack flexOne ph={32}>
            <Content contentContainerStyle={styles.containText}>
              <VStack>
                <VStack>
                  <Text
                    category="h2"
                    status="control"
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    “ {"\n"}I'm selfish, impatient and a little insecure. I make
                    mistakes, I am out of control and at times hard to handle.
                  </Text>

                  <Text category="body" marginTop={32} status="control">
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
        </SafeAreaView>
      </ImageBackground>
    </Container>
  );
});

export default Quotes_Details;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  header: {
    marginBottom: 16,
    marginHorizontal: 24,
  },
  containText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
